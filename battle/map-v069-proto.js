/* v0.69 地图：默认「终结之谷」（原创像素，代码绘制）；?map=v069 为「演习场·断崖林地」原型，?map=classic 为旧地图。
 * 内容：高台断崖（不可通行，带崖壁/阴影）、树林与巨石（不可通行）、可破坏物（木箱/木桶/训练木桩/石灯笼）、
 * 敌人绕行（32px 流场）、刷怪避开障碍、首领结界内隐藏障碍。 */
(function(){
'use strict';
/* v0.69.0 起「终结之谷」为默认战斗地图；?map=classic 回到旧木叶地图，?map=v069 为断崖林地原型（均不在界面中展示） */
const MQ=(location.search.match(/[?&]map=(\w+)/)||[])[1];
const MODE=MQ==='classic'?null:MQ==='v069'?'v069':'valley';
const ON=!!MODE;
window.MapV069={enabled:ON,mode:MODE};
if(!ON||typeof KonohaWorld!=='function')return;
document.body.dataset.map=MODE;
const C=32,N=192;/* 6144 / 32 */
const P={g0:'#657b41',g1:'#5f753b',g2:'#73894a',g3:'#4f6633',top0:'#7d9450',top1:'#8ea65c',top2:'#6c8344',rim:'#a9bd6e',
 s0:'#b48c5a',s1:'#9a7448',s2:'#7c5a39',s3:'#5b4129',s4:'#cfa871',ol:'#2a2a1e',sh:'rgba(18,24,12,.38)',
 leaf0:'#3f6b34',leaf1:'#4f7f3c',leaf2:'#66984a',leaf3:'#2d4f28',bark:'#6b4a2e',bark2:'#4a3220',
 rock0:'#8d8a7c',rock1:'#a8a493',rock2:'#6d6a5e',rock3:'#4d4b42',
 wood0:'#b07a42',wood1:'#8c5c2f',wood2:'#5e3c1e',band:'#3d3d3d',rope:'#d9c9a0',stone0:'#9a978a',stone1:'#7b7970',glow:'#ffd27a'};

/* ---------- 像素画工具：在小画布上按“美术像素”绘制，再 2× 放大 ---------- */
function art(w,h,fn){const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d');const px=(x,y,col,ww=1,hh=1)=>{g.fillStyle=col;g.fillRect(x,y,ww,hh)};fn(px,g);return c;}
let seedN=1;const rnd=()=>{seedN=(seedN*16807)%2147483647;return seedN/2147483647;};
function grassTile(v){seedN=11+v*97;return art(16,16,px=>{px(0,0,P.g0,16,16);for(let i=0;i<14;i++)px(rnd()*16|0,rnd()*16|0,P.g1);for(let i=0;i<5;i++){const x=rnd()*15|0,y=rnd()*14|0;px(x,y,P.g2);px(x+1,y+1,P.g2)}if(v===2){for(let i=0;i<3;i++){const x=2+rnd()*12|0,y=2+rnd()*12|0;px(x,y,'#d9c27a');px(x+1,y,'#f0e2b0')}}if(v===3){for(let i=0;i<6;i++)px(rnd()*16|0,rnd()*16|0,P.g3)}});}
function topTile(v){seedN=301+v*13;return art(16,16,px=>{px(0,0,P.top0,16,16);for(let i=0;i<16;i++)px(rnd()*16|0,rnd()*16|0,P.top2);for(let i=0;i<5;i++){const x=rnd()*15|0,y=rnd()*15|0;px(x,y,P.top1);px(x+1,y,P.top1);px(x,y+1,P.top2)}if(v===3){px(5,6,P.rock2,3,2);px(5,6,P.rock1,2,1)}if(v===2){px(10,4,'#d9c27a');px(3,11,'#d9c27a')}});}
/* 崖壁：上 3px 顶面草、下 13px 砂岩分层 */
function faceTile(v){seedN=501+v*7;return art(16,16,px=>{px(0,0,P.top0,16,3);px(0,3,P.s4,16,1);px(0,4,P.s0,16,12);for(const y of [7,11])for(let x=0;x<16;x++)if(rnd()>.18)px(x,y,P.s1);for(let i=0;i<8;i++){const x=rnd()*15|0,y=5+rnd()*9|0;px(x,y,P.s2)}for(let x=0;x<16;x++){px(x,14,P.s2);px(x,15,P.s3)}for(let i=0;i<3;i++){const x=rnd()*14|0;px(x,4,P.s1,1,3)}});}
/* 崖壁下段：整格砂岩分层 + 底部阴影线 */
function faceLow(v){seedN=701+v*5;return art(16,16,px=>{px(0,0,P.s0,16,16);for(const y of [3,8,12])for(let x=0;x<16;x++)if(rnd()>.15)px(x,y,P.s1);for(let i=0;i<10;i++){const x=rnd()*15|0,y=rnd()*13|0;px(x,y,P.s2);if(rnd()>.6)px(x,y+1,P.s2)}for(let i=0;i<4;i++){const x=rnd()*15|0;px(x,0,P.s4,2,1)}px(0,13,P.s2,16,1);px(0,14,P.s3,16,2);for(let i=0;i<3;i++){const x=rnd()*14|0;px(x,9,P.s3,1,4)}});}
const tiles={};
function buildTiles(){for(let v=0;v<4;v++){tiles['g'+v]=grassTile(v);tiles['t'+v]=topTile(v);tiles['f'+v]=faceTile(v);tiles['F'+v]=faceLow(v);}
 tiles.tree=art(28,34,(px)=>{/* 树干 */px(12,22,P.bark2,4,11);px(13,22,P.bark,2,10);px(10,32,P.bark2,8,2);
  const blob=(cx,cy,r,col)=>{for(let y=-r;y<=r;y++)for(let x=-r;x<=r;x++)if(x*x+y*y<=r*r+r*.6)px(cx+x,cy+y,col)};
  blob(14,13,11,P.ol);blob(14,13,10,P.leaf3);blob(13,12,9,P.leaf0);blob(11,10,6,P.leaf1);blob(9,8,3,P.leaf2);blob(18,15,4,P.leaf1);px(8,6,P.leaf2,2,1);});
 tiles.rock=art(18,14,px=>{const rows=[[5,12],[3,14],[2,15],[1,16],[1,17],[0,17],[0,17],[0,17],[1,16],[1,16],[2,15],[3,14],[4,13]];rows.forEach(([a,b],y)=>{px(a,y,P.ol,b-a+1,1);if(b-a>2)px(a+1,y,P.rock0,b-a-1,1)});px(4,2,P.rock1,6,2);px(3,4,P.rock1,3,2);px(10,8,P.rock2,6,3);px(2,10,P.rock3,13,1);px(7,5,P.rock2,1,3);});
 tiles.crate=art(14,14,px=>{px(0,0,P.ol,14,14);px(1,1,P.wood0,12,12);px(1,1,P.wood1,12,1);px(1,12,P.wood2,12,1);px(1,6,P.wood1,12,2);for(let i=0;i<10;i++){px(2+i,2+i,P.wood2);}px(1,1,P.wood2,1,12);px(12,1,P.wood2,1,12);px(3,3,'#c99257',3,1);});
 tiles.barrel=art(12,15,px=>{px(1,0,P.ol,10,15);px(0,2,P.ol,12,11);px(2,1,P.wood0,8,13);px(1,3,P.wood0,10,9);px(1,3,P.band,10,1);px(1,11,P.band,10,1);px(4,1,'#c99257',1,13);px(8,2,P.wood1,2,11);px(3,0,P.wood2,6,1);});
 tiles.stake=art(12,20,px=>{px(3,0,P.ol,6,20);px(4,1,'#b09560',4,19);px(4,1,'#cdb27a',1,18);px(7,1,'#8a7146',1,19);px(0,6,P.ol,12,4);px(1,7,'#b09560',10,2);px(3,12,P.rope,6,2);px(3,13,'#a8996f',6,1);px(2,18,P.wood2,8,2);});
 tiles.lantern=art(14,22,px=>{px(1,0,P.ol,12,3);px(2,0,P.stone0,10,2);px(3,3,P.ol,8,7);px(4,4,P.stone1,6,5);px(5,5,P.glow,4,3);px(6,6,'#fff1c0',2,1);px(0,10,P.ol,14,3);px(1,10,P.stone0,12,2);px(5,13,P.ol,4,6);px(5,13,P.stone1,3,6);px(2,19,P.ol,10,3);px(3,19,P.stone0,8,2);});
}

/* ---------- 布局生成：高台（圆角块，彼此间距≥4格=128px）、树丛、巨石、可破坏物 ---------- */
const proto=KonohaWorld.prototype;
const HARD=v=>v===1||v===3||v===4||v===5||v===6;/* 1 高台 3 巨石 4 峡谷崖壁 5 石像 6 瀑布 */
const baseBlocked=proto.blocked;
proto.prepare=function(){
 if(MODE==='valley')return this.prepareValley();
 const g=this.solid=new Uint8Array(N*N);/* 0 空 1 高台 2 树 3 巨石 */
 const H=(x,y,n)=>this.hash(x,y,n);
 const sx=Math.floor(this.start.x/C),sy=Math.floor(this.start.y/C);
 const clearAt=(x,y)=>Math.hypot(x-sx,y-sy)<13||(this.riverAt&&this.riverAt(x*C+16,y*C+16))||(this.roadAt&&this.roadAt(x*C+16,y*C+16));
 const plateaus=[];
 for(let gy=1;gy<N/16;gy++)for(let gx=1;gx<N/16;gx++){
  if(H(gx,gy,101)<.4)continue;
  const big=H(gx,gy,109)>.8,w=(big?9:5)+(H(gx,gy,102)*(big?4:5)|0),h=(big?6:4)+(H(gx,gy,103)*3|0),x0=gx*16+(H(gx,gy,104)*(15-w)|0),y0=gy*16+(H(gx,gy,105)*(14-h)|0);
  const rect={x0,y0,x1:x0+w,y1:y0+h};
  if(plateaus.some(r=>rect.x0<r.x1+4&&rect.x1+4>r.x0&&rect.y0<r.y1+4&&rect.y1+4>r.y0))continue;
  let ok=true;for(let y=y0;y<y0+h&&ok;y++)for(let x=x0;x<x0+w;x++)if(clearAt(x,y)){ok=false;break}
  if(!ok)continue;plateaus.push(rect);
  for(let y=y0;y<y0+h;y++)for(let x=x0;x<x0+w;x++){
   const corner=(x===x0||x===x0+w-1)&&(y===y0||y===y0+h-1);if(corner&&H(x,y,106)>.35)continue;g[y*N+x]=1;}
  /* 不规则边：随机凸出 1 格 */
  for(let x=x0+1;x<x0+w-1;x++){if(H(x,y0,107)>.7&&y0>1)g[(y0-1)*N+x]=1;if(H(x,y0+h,108)>.75)g[(y0+h)*N+x]=1;}
 }
 this.plateaus=plateaus;
 const free=(x,y,pad=1)=>{for(let j=-pad;j<=pad;j++)for(let i=-pad;i<=pad;i++){const xx=x+i,yy=y+j;if(xx<1||yy<1||xx>=N-1||yy>=N-1||g[yy*N+xx])return false}return !clearAt(x,y)};
 /* 树丛：每 9 格一个候选中心，周围 3~6 棵，树与树至少隔 2 格 */
 this.objects=[];this.grid=new Map();
 for(let gy=1;gy<N/9;gy++)for(let gx=1;gx<N/9;gx++){
  if(H(gx,gy,111)<.5)continue;const cx=gx*9+(H(gx,gy,112)*6|0),cy=gy*9+(H(gx,gy,113)*6|0),n=3+(H(gx,gy,114)*4|0);
  for(let i=0;i<n;i++){const a=H(gx*7+i,gy,115)*Math.PI*2,d=1+H(gx,gy*7+i,116)*3.2,x=Math.round(cx+Math.cos(a)*d),y=Math.round(cy+Math.sin(a)*d*.8);
   if(!free(x,y,1))continue;g[y*N+x]=2;this.addObject({kind:'v69tree',x:x*C+16,y:y*C+26});}
 }
 for(let gy=2;gy<N/7;gy++)for(let gx=2;gx<N/7;gx++){if(H(gx,gy,121)<.8)continue;const x=gx*7+(H(gx,gy,122)*5|0),y=gy*7+(H(gx,gy,123)*5|0);if(!free(x,y,1))continue;g[y*N+x]=3;this.addObject({kind:'v69rock',x:x*C+16,y:y*C+22});}
 /* 可破坏物：高台脚下与路边成组（2~4 个），开局区域给 4 个示范 */
 const props=this.props=[];let uid=0;
 const addProp=(x,y,kind)=>{const def=PROPS[kind];const o={kind:'v69prop',type:kind,id:'p'+(++uid),x,y,hp:def.hp,maxHp:def.hp,r:def.r,hit:0,home:{x,y},broken:0};props.push(o);this.addObject(o);};
 const kinds=['crate','crate','barrel','stake','lantern'];
 for(let gy=1;gy<N/6;gy++)for(let gx=1;gx<N/6;gx++){
  if(H(gx,gy,131)<.62)continue;const cx=gx*6+(H(gx,gy,132)*4|0),cy=gy*6+(H(gx,gy,133)*4|0);if(!free(cx,cy,1))continue;
  const kind=kinds[H(gx,gy,134)*kinds.length|0],n=kind==='lantern'?1:2+(H(gx,gy,135)*3|0);
  for(let i=0;i<n;i++){const x=cx*C+16+(i%2)*26-(i>1?13:0),y=cy*C+16+((i/2)|0)*24;if(baseBlocked.call(this,x,y,14))continue;addProp(x,y,kind);}
 }
 const s0=this.start;[[-120,-70,'crate'],[-96,-70,'crate'],[130,60,'barrel'],[150,-120,'stake'],[-150,120,'lantern']].forEach(([dx,dy,k])=>addProp(s0.x+dx,s0.y+dy,k));
 this.landmarks=[{...this.start,name:'演习场中心',short:'中心'},...plateaus.filter((_,i)=>i%9===4).slice(0,4).map((r,i)=>({x:(r.x0+r.x1)/2*C,y:(r.y1+1)*C,name:['东崖','北台','西岩','南坡'][i]+'高台',short:['东崖','北台','西岩','南坡'][i]}))];
};
const PROPS={crate:{hp:40,r:10,name:'木箱'},barrel:{hp:25,r:9,name:'木桶'},stake:{hp:80,r:8,name:'训练木桩'},lantern:{hp:120,r:10,name:'石灯笼'}};
window.MapV069.PROPS=PROPS;

/* 碰撞：边界 + 高台/巨石（格子矩形）+ 树干（圆 r=10）+ 未破坏的可破坏物（圆） */
proto.blocked=function(x,y,r=11){
 if(baseBlocked.call(this,x,y,r))return true;
 const g=this.solid;if(!g)return false;
 const x0=Math.floor((x-r)/C),x1=Math.floor((x+r)/C),y0=Math.floor((y-r)/C),y1=Math.floor((y+r)/C);
 for(let cy=y0;cy<=y1;cy++)for(let cx=x0;cx<=x1;cx++){
  if(cx<0||cy<0||cx>=N||cy>=N)continue;const v=g[cy*N+cx];if(!v)continue;
  if(v===2){if(Math.hypot(x-(cx*C+16),y-(cy*C+26))<r+9)return true;continue;}
  const nx=Math.max(cx*C,Math.min(x,cx*C+C)),ny=Math.max(cy*C,Math.min(y,cy*C+C)),k=v===3?4:0;/* 4/5/6 同高台 */
  if(Math.hypot(x-nx,y-ny)<r-k)return true;
 }
 if(this.props)for(const o of this.near(x,y,r+16))if(o.kind==='v69prop'&&o.hp>0&&Math.hypot(x-o.x,y-o.y)<r+o.r)return true;
 return false;
};

/* 地面区块：草地 + 高台顶面/崖壁/阴影（静态，缓存） */
const baseChunk=proto.groundChunk;
proto.groundChunk=function(cx,cy,images){
 if(!tiles.g0)buildTiles();
 if(MODE==='valley')return valleyChunk.call(this,cx,cy,images);
 const key=cx+','+cy;if(this.cache.has(key)){const c=this.cache.get(key);this.cache.delete(key);this.cache.set(key,c);return c}
 const c=baseChunk.call(this,cx,cy,images);/* 先用原地面（道路/河/桥），再覆盖草地与高台 */
 const g=c.getContext('2d');g.imageSmoothingEnabled=false;const S=this.solid,at=(x,y)=>x<0||y<0||x>=N||y>=N?0:S[y*N+x];
 for(let y=0;y<16;y++)for(let x=0;x<16;x++){
  const gx=cx*16+x,gy=cy*16+y,wx=gx*C,wy=gy*C,t=this.terrainAt(wx,wy),v=at(gx,gy);
  if(v!==1&&(t===0||t===6)){const h=this.hash(gx,gy,141);g.drawImage(tiles['g'+(h>.93?2:h>.8?3:h>.4?1:0)],x*C,y*C,C,C);}
  if(v===1){const south=at(gx,gy+1)===1,south2=at(gx,gy+2)===1,hv=this.hash(gx,gy,142)*4|0;g.drawImage(tiles[(!south?'F':!south2?'f':'t')+hv],x*C,y*C,C,C);
   if(at(gx,gy-1)!==1){g.fillStyle=P.rim;g.fillRect(x*C,y*C,C,2);g.fillStyle=P.ol;g.fillRect(x*C,y*C-2,C,2);}
   if(at(gx-1,gy)!==1){g.fillStyle=P.ol;g.fillRect(x*C,y*C,2,C);g.fillStyle='rgba(255,255,255,.12)';g.fillRect(x*C+2,y*C,2,C);}
   if(at(gx+1,gy)!==1){g.fillStyle=P.ol;g.fillRect(x*C+C-2,y*C,2,C);g.fillStyle='rgba(0,0,0,.18)';g.fillRect(x*C+C-6,y*C,4,C);}
   if(!south||!south2){if(at(gx-1,gy)!==1){g.fillStyle='rgba(0,0,0,.22)';g.fillRect(x*C+2,y*C,4,C);}if(at(gx+1,gy)!==1){g.fillStyle='rgba(0,0,0,.3)';g.fillRect(x*C+C-8,y*C,6,C);}}
   if(!south){g.fillStyle=P.ol;g.fillRect(x*C,y*C+C-2,C,2);}
  }else if(at(gx,gy-1)===1){g.fillStyle=P.sh;g.fillRect(x*C,y*C,C,10);g.fillStyle='rgba(18,24,12,.18)';g.fillRect(x*C,y*C+10,C,6);}
  else if(at(gx-1,gy)===1&&at(gx-1,gy-1)!==1){g.fillStyle='rgba(18,24,12,.16)';g.fillRect(x*C,y*C,6,C);}
  if(v===2||v===3){g.fillStyle='rgba(18,24,12,.28)';g.beginPath();g.ellipse(x*C+17,y*C+27,v===2?15:13,5,0,0,Math.PI*2);g.fill();}
 }
 return c;
};

/* 物体绘制（与角色按 y 排序；树在角色身后时半透明） */
const baseNear=proto.near;
proto.near=function(x,y,radius=100){const res=baseNear.call(this,x,y,radius);const TG=this.tuftGrid;if(TG&&radius>=300){for(let cy=Math.floor((y-radius)/256);cy<=Math.floor((y+radius)/256);cy++)for(let cx=Math.floor((x-radius)/256);cx<=Math.floor((x+radius)/256);cx++){const l=TG.get(cx+','+cy);if(l)for(const o of l)if(Math.abs(o.x-x)<radius+45&&Math.abs(o.y-y)<radius+90)res.push(o);}}return res;};
const baseDraw=proto.drawObject;
proto.drawObject=function(ctx,images,o,p){
 if(!tiles.g0)buildTiles();
 if(typeof s!=='undefined'&&s?.arena){const a=s.arena;if(o.x>a.x-20&&o.x<a.x+a.w+20&&o.y>a.y-20&&o.y<a.y+a.h+40)return;}
 const d=(t,ox,oy)=>ctx.drawImage(t,Math.round(o.x-ox),Math.round(o.y-oy),t.width*2,t.height*2);
 if(o.kind==='v69tree'){ctx.save();if(p&&p.y<o.y-8&&Math.abs(p.x-o.x)<34&&o.y-p.y<70)ctx.globalAlpha=.5;d(tiles.tree,28,66);ctx.restore();return;}
 if(o.kind==='v69grass'){drawTuft(ctx,o);return;}
 if(o.kind==='v69rock'){d(tiles.rock,18,24);return;}
 if(o.kind==='v69statue'){drawStatue(ctx,o);return;}
 if(o.kind==='v69fall'){drawFall(ctx,o);return;}
 if(o.kind==='v69prop'){if(o.hp<=0)return;const t=tiles[o.type];ctx.save();ctx.fillStyle='rgba(18,24,12,.3)';ctx.beginPath();ctx.ellipse(o.x,o.y+2,o.r+3,4,0,0,Math.PI*2);ctx.fill();
  if(o.hit>0){ctx.translate(Math.sin(o.hit*60)*2,0);}d(t,t.width,t.height*2-4);
  if(o.hp<o.maxHp){ctx.fillStyle='#0b1122cc';ctx.fillRect(o.x-11,o.y-t.height*2-4,22,3);ctx.fillStyle='#d9b46a';ctx.fillRect(o.x-11,o.y-t.height*2-4,22*o.hp/o.maxHp,3);}
  ctx.restore();return;}
 return baseDraw.call(this,ctx,images,o,p);
};

/* 小地图 / 全图：画出高台与树丛 */
const baseMap=proto.drawMap;
proto.drawMap=function(ctx,width,height,p,chests,arena=null,local=false){
 if(MODE==='valley'){ctx.save();ctx.fillStyle='#4c5a3c';ctx.fillRect(0,0,width,height);ctx.restore();}else baseMap.call(this,ctx,width,height,p,[],arena,local);
 const range=local?1100:this.width,left=local?p.x-range/2:0,top=local?p.y-range/2:0,sc=width/range;
 ctx.save();if(MODE==='valley'&&this.water){for(let y=0;y<N;y++)for(let x=0;x<N;x++){if(!this.water[y*N+x])continue;const X=(x*C-left)*sc,Y=(y*C-top)*sc;if(X<-4||Y<-4||X>width||Y>height)continue;ctx.fillStyle='#4f8fa0';ctx.fillRect(X,Y,Math.max(1,C*sc),Math.max(1,C*sc));}}
 for(let y=0;y<N;y++)for(let x=0;x<N;x++){const v=this.solid[y*N+x];if(!v)continue;const X=(x*C-left)*sc,Y=(y*C-top)*sc;if(X<-4||Y<-4||X>width||Y>height)continue;ctx.fillStyle=v===1?(MODE==='valley'?'#7d8278':'#a88a5c'):v===2?'#2f5a2b':v===4?'#5e6459':v===5?'#c9c3a8':v===6?'#cfe8ee':'#7d7a6e';ctx.fillRect(X,Y,Math.max(1,C*sc),Math.max(1,C*sc));}
 for(const c of chests)if(!c.opened){ctx.fillStyle='#e5b95e';ctx.fillRect((c.x-left)*sc-1,(c.y-top)*sc-1,local?3:2,local?3:2)}
 ctx.fillStyle='#fff3c7';ctx.fillRect((p.x-left)*sc-3,(p.y-top)*sc-3,6,6);ctx.restore();
};

/* 就近空地：先按格子环形找最近的非障碍格，再用 freePoint 微调（崖壁很厚时 freePoint 的 216px 搜索不够） */
proto.v69free=function(x,y,r=12){const S=this.solid,gx=Math.floor(x/C),gy=Math.floor(y/C);
 for(let d=0;d<64;d++)for(let j=-d;j<=d;j++)for(let i=-d;i<=d;i++){if(Math.max(Math.abs(i),Math.abs(j))!==d)continue;const cx=gx+i,cy=gy+j;if(cx<1||cy<1||cx>=N-1||cy>=N-1||S[cy*N+cx])continue;const px=cx*C+16,py=cy*C+16;if(!this.blocked(px,py,r))return{x:px,y:py};}
 return this.freePoint(x,y,r);};
/* 敌人绕行：以玩家为目标的 32px 流场（半径 40 格，0.35s 或玩家换格时重算） */
proto.v69flow=function(p,dt){
 this.fWait=(this.fWait||0)-dt;const gx=Math.floor(p.x/C),gy=Math.floor(p.y/C),key=gy*N+gx;
 if(this.flowF&&key===this.fKey&&this.fWait>0)return;this.fWait=.35;this.fKey=key;
 const F=this.flowF||(this.flowF=new Int16Array(N*N));F.fill(-1);const S=this.solid,Q=this.fQ||(this.fQ=new Int32Array(N*N));
 let h=0,t=0;if(gx<0||gy<0||gx>=N||gy>=N)return;Q[t++]=key;F[key]=0;
 while(h<t){const k=Q[h++],x=k%N,y=(k/N)|0;for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+dx,ny=y+dy;if(nx<1||ny<1||nx>=N-1||ny>=N-1||Math.abs(nx-gx)>40||Math.abs(ny-gy)>40)continue;const nk=ny*N+nx;if(F[nk]>=0||HARD(S[nk]))continue;F[nk]=F[k]+1;Q[t++]=nk;}}
};
const basePursue=proto.pursue;
proto.pursue=function(e,p,dt){
 const F=this.flowF;if(!F||p!==(typeof s!=='undefined'&&s?.p))return basePursue.call(this,e,p,dt);
 const ex=Math.floor(e.x/C),ey=Math.floor(e.y/C),k=ey*N+ex,d0=F[k];
 const dist=Math.hypot(p.x-e.x,p.y-e.y);
 if(d0<0||d0<=1||dist<48)return basePursue.call(this,e,p,dt);
 /* 视线畅通时直线追击，否则沿流场下坡 */
 let clear=true;for(let i=1;i<6;i++){const qx=e.x+(p.x-e.x)*i/6,qy=e.y+(p.y-e.y)*i/6,v=this.solid[Math.floor(qy/C)*N+Math.floor(qx/C)];if(HARD(v)){clear=false;break}}
 if(clear)return basePursue.call(this,e,p,dt);
 let best=null,bv=d0;for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const nk=(ey+dy)*N+ex+dx,v=F[nk];if(v<0||v>=bv)continue;if(dx&&dy&&(F[ey*N+ex+dx]<0||F[(ey+dy)*N+ex]<0))continue;bv=v;best=[dx,dy];}
 if(!best)return basePursue.call(this,e,p,dt);
 const tx=(ex+best[0])*C+16,ty=(ey+best[1])*C+16;basePursue.call(this,e,{x:tx,y:ty},dt);
};

/* ================= 终结之谷（?map=valley）：原创峡谷、瀑布、河流、两尊原创石像 ================= */
const V={st0:'#8f948a',st1:'#a9aea2',st2:'#757a70',st3:'#5c6158',st4:'#43473f',moss:'#5f7a45',moss2:'#7b955a',
 fl0:'#7b7766',fl1:'#6c685a',fl2:'#8c8875',fl3:'#5d5a4e',w0:'#3f7f92',w1:'#4f93a5',w2:'#7fbfcc',w3:'#d9f1f4',wd:'#2f6476',
 stat0:'#b9b39b',stat1:'#d2cdb6',stat2:'#958f78',stat3:'#6f6a57',stat4:'#3e3b31'};
function vt(name,fn){if(!tiles[name])tiles[name]=fn();return tiles[name];}
function stoneTop(v){seedN=901+v*11;return art(16,16,px=>{if(v<3){px(0,0,P.g1,16,16);for(let i=0;i<16;i++)px(rnd()*16|0,rnd()*16|0,rnd()>.5?P.g0:P.g3);for(let i=0;i<4;i++){const x=rnd()*15|0,y=rnd()*15|0;px(x,y,P.g2);px(x+1,y,P.g2)}if(v===2){px(4,5,V.st0,4,3);px(4,5,V.st1,3,1);px(10,10,V.st2,3,2)}}else{px(0,0,V.st2,16,16);for(let i=0;i<20;i++)px(rnd()*16|0,rnd()*16|0,rnd()>.5?V.st0:V.st3);for(let i=0;i<8;i++){const x=rnd()*15|0,y=rnd()*15|0;px(x,y,V.moss);px(x+1,y,V.moss2)}}});}
function stoneFace(kind,v){seedN=1001+v*17+kind*3;return art(16,16,px=>{
 px(0,0,V.st0,16,16);
 if(kind===3){px(0,0,V.moss,16,2);px(0,2,V.st1,16,1);}
 for(const y of (kind===1?[4,9,13]:[2,7,12]))for(let x=0;x<16;x++)if(rnd()>.12)px(x,y,V.st2);
 for(let i=0;i<9;i++){const x=rnd()*15|0,y=rnd()*14|0;px(x,y,V.st3);px(x,y+1,rnd()>.5?V.st3:V.st2)}
 for(let i=0;i<4;i++){const x=rnd()*15|0,y=rnd()*14|0;px(x,y,V.st1,2,1)}
 for(let i=0;i<2;i++){const x=rnd()*14|0;px(x,3,V.st4,1,5+(rnd()*5|0))}
 if(kind===1){px(0,13,V.st3,16,1);px(0,14,V.st4,16,2);}
 if(rnd()>.6){const x=rnd()*12|0;px(x,rnd()*10|0,V.moss,3,1);}
});}
function floorTile(v){seedN=1101+v*13;return art(16,16,px=>{px(0,0,V.fl0,16,16);for(let i=0;i<18;i++)px(rnd()*16|0,rnd()*16|0,rnd()>.5?V.fl1:V.fl2);for(let i=0;i<3;i++){const x=rnd()*14|0,y=rnd()*14|0;px(x,y,V.fl3,2,1)}if(v>=2){for(let i=0;i<(v===3?7:3);i++){const x=rnd()*15|0,y=rnd()*15|0;px(x,y,P.g0);px(x+1,y,P.g2);px(x,y+1,P.g1)}}});}
function floorVar(kind,v){seedN=1301+kind*31+v*7;return art(16,16,px=>{
 if(kind===0){/* 草地块 */px(0,0,P.g1,16,16);for(let i=0;i<22;i++)px(rnd()*16|0,rnd()*16|0,rnd()>.5?P.g0:P.g3);for(let i=0;i<5;i++){const x=rnd()*15|0,y=rnd()*14|0;px(x,y,P.g2);px(x,y+1,P.g0)}if(v===1){px(3,4,'#d9c27a');px(11,10,'#efe1b3')}}
 else if(kind===1){/* 青苔岩 */px(0,0,V.fl1,16,16);for(let i=0;i<14;i++)px(rnd()*16|0,rnd()*16|0,V.fl3);for(let i=0;i<9;i++){const x=rnd()*14|0,y=rnd()*15|0;px(x,y,V.moss,2+(rnd()*2|0),1);if(rnd()>.5)px(x,y+1,V.moss2)}}
 else if(kind===2){/* 卵石 */px(0,0,V.fl0,16,16);for(let i=0;i<10;i++)px(rnd()*16|0,rnd()*16|0,V.fl1);for(let i=0;i<6;i++){const x=1+rnd()*13|0,y=1+rnd()*13|0;px(x,y,V.st3,3,2);px(x,y,V.st1,2,1);}}
 else if(kind===3){/* 河边沙地 */px(0,0,'#9a8f74',16,16);for(let i=0;i<24;i++)px(rnd()*16|0,rnd()*16|0,rnd()>.5?'#a89c7f':V.fl0);for(let i=0;i<2;i++){const x=rnd()*14|0,y=rnd()*14|0;px(x,y,V.st2,2,1)}}
 else if(kind===4){/* 湿岩（紧贴水边） */px(0,0,'#5d5e54',16,16);for(let i=0;i<16;i++)px(rnd()*16|0,rnd()*16|0,rnd()>.5?'#4d4f47':'#6e7064');for(let i=0;i<3;i++){const x=rnd()*14|0,y=rnd()*15|0;px(x,y,'#8fb0b3',2,1)}}
 else{/* 裂纹岩 */px(0,0,V.fl0,16,16);for(let i=0;i<16;i++)px(rnd()*16|0,rnd()*16|0,rnd()>.5?V.fl1:V.fl2);let x=rnd()*6|0+2,y=0;while(y<16){px(x,y,V.fl3);if(rnd()>.6)px(x+1,y,V.st3);x+=rnd()>.5?1:(rnd()>.5?-1:0);y++;}}
});}
function waterTile(v){seedN=1201+v*7;return art(16,16,px=>{px(0,0,V.w0,16,16);for(let i=0;i<6;i++){const x=rnd()*12|0,y=rnd()*15|0;px(x,y,V.w1,3+(rnd()*3|0),1)}for(let i=0;i<2;i++){const x=rnd()*13|0,y=rnd()*15|0;px(x,y,V.w2,2,1)}});}
/* ---- v3 地面：逐像素噪声 + Bayer 抖动（无方块边） & 有高度的草丛 ---- */
function vh(x,y,sd){let h=(Math.imul(x|0,374761393)+Math.imul(y|0,668265263)+Math.imul(sd,1442695041))|0;h=Math.imul(h^(h>>>13),1274126177);return ((h^(h>>>16))>>>0)/4294967296;}
function vn(x,y,sd){const xi=Math.floor(x),yi=Math.floor(y),fx=x-xi,fy=y-yi,u=fx*fx*(3-2*fx),v=fy*fy*(3-2*fy),a=vh(xi,yi,sd),b=vh(xi+1,yi,sd),c=vh(xi,yi+1,sd),d=vh(xi+1,yi+1,sd);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;}
const BAY=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(v=>(v+.5)/16-.5);
/* ax/ay 为“美术像素”（=2 世界像素）坐标 */
function grassF(ax,ay){return vn(ax/90,ay/90,11)*.6+vn(ax/30,ay/30,12)*.3+vn(ax/8,ay/8,13)*.1;}
const hx=c=>[parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)];
const GC={fl0:hx(V.fl0),fl1:hx(V.fl1),fl2:hx(V.fl2),fl3:hx(V.fl3),flL:[150,146,126],dk:[82,80,70],
 so0:[86,106,58],so1:[101,123,65],so2:[74,92,50],so3:[118,140,76],so4:[63,80,44],
 mo0:hx(V.moss),mo1:hx(V.moss2),sa0:[154,143,116],sa1:[167,155,126],sa2:[137,127,104],
 we0:[93,94,84],we1:[110,112,100],we2:[77,79,71],weG:[143,176,179],
 pb0:hx(V.st1),pb1:hx(V.st0),pb2:hx(V.st2),pb3:hx(V.st3),
 tg0:hx(P.g1),tg1:hx(P.g2),tg2:hx(P.g3),tg3:hx(P.g0),ts0:hx(V.st2),ts1:hx(V.st0),ts2:hx(V.st3)};
/* v4：低对比的柔和变体（与底色半混合） */
const mixc=(a,b,k=.5)=>a.map((v,i)=>Math.round(v+(b[i]-v)*k));
Object.assign(GC,{fl2s:mixc(GC.fl0,GC.fl2),fl1s:mixc(GC.fl0,GC.fl1),fl3s:mixc(GC.fl0,GC.fl3,.6),so1s:mixc(GC.so0,GC.so1),so2s:mixc(GC.so0,GC.so2),mo0s:mixc(GC.fl0,GC.mo0,.55),mo1s:mixc(GC.fl0,GC.mo1,.45),sa1s:mixc(GC.sa0,GC.sa1,.5),sa2s:mixc(GC.sa0,GC.sa2,.5),we1s:mixc(GC.we0,GC.we1,.5),we2s:mixc(GC.we0,GC.we2,.5),tg1s:mixc(GC.tg0,GC.tg1,.5),tg2s:mixc(GC.tg0,GC.tg2,.5)});
/* mask: 每格 0=不画 1=谷底 2=崖顶；返回 256×256 画布 */
function groundPix(w,cx,cy,mask){
 const cv=document.createElement('canvas');cv.width=cv.height=256;const g=cv.getContext('2d'),img=g.createImageData(256,256),D=img.data;
 /* 低频场按 4 像素网格预采样再双线性插值（省 ~60% 噪声调用） */
 const Q=65,F=7,L=new Float32Array(Q*Q*F);for(let j=0;j<Q;j++)for(let i=0;i<Q;i++){const ax=cx*256+i*4,ay=cy*256+j*4,o=(j*Q+i)*F;
  L[o]=vn(ax/90,ay/90,11)*.6+vn(ax/30,ay/30,12)*.3;L[o+1]=vn(ax/50,ay/50,14)*.7;L[o+2]=vn(ax/70,ay/70,16)*.7;L[o+3]=vn(ax/14,ay/14,31);L[o+4]=vn(ax/18,ay/18,41);L[o+5]=vn(ax/60,ay/60,42);L[o+6]=vn(ax/40,ay/40,51)*.7;}
 const lw=new Float32Array(F);const low=(lx,ly)=>{const gx=lx/4,gy=ly/4,i=gx|0,j=gy|0,u=gx-i,v=gy-j,o00=(j*Q+i)*F,o10=o00+F,o01=o00+Q*F,o11=o01+F;for(let k=0;k<F;k++){const a=L[o00+k],b=L[o10+k],c=L[o01+k],d=L[o11+k];lw[k]=a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;}};
 const Wt=w.water,WD=w.wetD,wd=(i,j)=>{if(i<0||j<0||i>=N||j>=N)return 4;const k=j*N+i;return Wt[k]?0:Math.min(4,WD?WD[k]:9);};
 for(let ly=0;ly<256;ly++){const ay=cy*256+ly,cyc=ly>>4;
  for(let lx=0;lx<256;lx++){const m=mask[cyc*16+(lx>>4)];if(!m)continue;low(lx,ly);const ax=cx*256+lx,t=vh(ax,ay,99)-.5,f=vn(ax/2.6,ay/2.6,21),r=vh(ax,ay,22);let col;
   if(m===2){const S=lw[6]+vn(ax/10,ay/10,52)*.3+t*.14;
    if(S<.3)col=f>.72?GC.ts1:f<.28||r<.04?GC.ts2:GC.ts0;else if(S<.34)col=f>.5?GC.mo1:GC.mo0;
    else col=f>.8?GC.tg1s:f<.18?GC.tg2s:r<.015?GC.tg3:GC.tg0;}
   else{const fx=ax/16-.5,fy=ay/16-.5,i0=Math.floor(fx),j0=Math.floor(fy),u=fx-i0,v=fy-j0;
    const a=wd(i0,j0),b=wd(i0+1,j0),c=wd(i0,j0+1),dd=wd(i0+1,j0+1),dist=a+(b-a)*u+(c-a)*v+(a-b-c+dd)*u*v+(vn(ax/5,ay/5,7)-.5)*1.1;
    let mat;if(dist<1.2+t*.3)mat=5;else if(dist<2.4+t*.4)mat=4;
    else if(lw[0]+vn(ax/8,ay/8,13)*.1+t*.07>.58)mat=2;
    else if(lw[1]+vn(ax/12,ay/12,15)*.3+t*.07>.74)mat=3;
    else mat=lw[2]+vn(ax/16,ay/16,17)*.3+t*.07<.28?1:0;
    if(mat===5)col=r<.006?GC.weG:f>.78?GC.we1s:f<.2?GC.we2s:GC.we0;
    else if(mat===4)col=r<.008?GC.sa2:f>.8?GC.sa1s:f<.18?GC.sa2s:GC.sa0;
    else if(mat===2)col=f>.8?GC.so1s:f<.18?GC.so2s:r<.012?GC.so1:GC.so0;
    else if(mat===3)col=f>.7?GC.mo1s:f<.25?GC.fl0:GC.mo0s;
    else if(mat===1)col=f>.8?GC.fl0:f<.18?GC.fl3s:GC.fl1s;
    else col=f>.82?GC.fl2s:f<.16?GC.fl1s:r<.006?GC.fl3s:r>.996?GC.flL:GC.fl0;
    if(mat!==2&&mat!==5){/* 成片卵石 */const pz=lw[3];if(pz>.78&&vh(ax>>1,ay>>1,33)<(pz-.78)*.5){const q=(ax&1)+(ay&1)*2;col=q===0?GC.pb0:q===1?GC.pb1:q===2?GC.pb2:GC.pb3;}}
    if(mat<=1){/* 细裂纹（脊线噪声） */if(Math.abs(lw[4]-.5)<.009&&lw[5]>.66)col=GC.fl3s;}}
   const o=(ly*256+lx)*4;D[o]=col[0];D[o+1]=col[1];D[o+2]=col[2];D[o+3]=255;}}
 g.putImageData(img,0,0);return cv;}
/* 草丛精灵：一簇独立草叶，高矮不一，3 档摆动帧 */
const TUFT_T=[['#4f6633','#657b41','#8ea65c'],['#5f753b','#73894a','#a9bd6e'],['#465c30','#5f7a45','#7b955a']];
function tuftArt(v,sw){seedN=1501+v*19;const big=v>=3,W=big?14:11,Hh=big?12:9;return art(W,Hh,px=>{
 const n=(big?7:5)+(rnd()*3|0),bl=[];for(let i=0;i<n;i++){const x0=2+rnd()*(W-4),hg=(big?4:3)+rnd()*(big?7:5),ln=(x0-W/2)/(W/2)*1.6+(rnd()-.5),tn=TUFT_T[rnd()*3|0];bl.push({x0,hg,ln,tn});}
 bl.sort((a,b)=>b.hg-a.hg);let mn=W,mx=0;for(const b of bl){mn=Math.min(mn,b.x0|0);mx=Math.max(mx,b.x0|0);}
 px(mn-1,Hh-1,'rgba(22,30,14,.45)',mx-mn+3,1);
 for(const b of bl){const H=Math.round(b.hg);for(let y=0;y<H;y++){const k=y/Math.max(1,H-1),xx=Math.round(b.x0+b.ln*k+sw*k*k*1.4),yy=Hh-2-y;
  px(xx,yy,y===0?'#33432a':y===H-1?b.tn[2]:k>.55?b.tn[1]:b.tn[0]);}}
});}
function drawTuft(ctx,o){const now=performance.now()/1000,sv=Math.sin(now*1.7+o.ph),f=sv>.4?1:sv<-.4?-1:0,k='vgt'+o.v+'_'+f,t=tiles[k]||(tiles[k]=tuftArt(o.v,f));
 ctx.drawImage(t,Math.round(o.x-t.width),Math.round(o.y-t.height*2+2),t.width*2,t.height*2);}
function valleyChunk(cx,cy,images){
 const key=cx+','+cy;if(this.cache.has(key)){const c=this.cache.get(key);this.cache.delete(key);this.cache.set(key,c);return c}
 for(let v=0;v<4;v++){vt('vT'+v,()=>stoneTop(v));vt('vF1'+v,()=>stoneFace(1,v));vt('vF2'+v,()=>stoneFace(2,v));vt('vF3'+v,()=>stoneFace(3,v));vt('vG'+v,()=>floorTile(v));vt('vW'+v,()=>waterTile(v));for(let k=0;k<6;k++)vt('vX'+k+v,()=>floorVar(k,v));}
 const c=document.createElement('canvas');c.width=c.height=512;const g=c.getContext('2d');g.imageSmoothingEnabled=false;
 const S=this.solid,Wt=this.water,at=(x,y)=>x<0||y<0||x>=N||y>=N?4:S[y*N+x],hard=(x,y)=>HARD(at(x,y)),wet=(x,y)=>x>=0&&y>=0&&x<N&&y<N&&Wt[y*N+x];
 /* 先判每格类型：谷底/崖顶走逐像素地面 */
 const mask=new Uint8Array(256),tt=new Array(256);
 for(let y=0;y<16;y++)for(let x=0;x<16;x++){const gx=cx*16+x,gy=cy*16+y,v=at(gx,gy);
  if(HARD(v)&&v!==5){let k=0;while(k<6&&hard(gx,gy+k+1))k++;const tall=v===4||v===6?4:2;let t=k>=tall?'vT':k===0?'vF1':k===tall-1?'vF3':'vF2';
   if(t==='vT'&&v===4&&(!hard(gx-1,gy)||!hard(gx+1,gy)||!hard(gx-2,gy)||!hard(gx+2,gy)))t=(!hard(gx-1,gy)||!hard(gx+1,gy))?'vF2':'vF3';
   tt[y*16+x]=[t,k];if(t==='vT')mask[y*16+x]=2;}
  else if(!wet(gx,gy))mask[y*16+x]=1;}
 g.drawImage(groundPix(this,cx,cy,mask),0,0,512,512);
 /* 崖顶草丛（不可达，直接烘焙进区块） */
 for(let y=0;y<16;y++)for(let x=0;x<16;x++){if(mask[y*16+x]!==2||mask[(y+1)*16+x]!==2||y>=15)continue;const gx=cx*16+x,gy=cy*16+y;if(this.hash(gx,gy,155)>.4)continue;
  const ax=gx*16+8,ay=gy*16+8;if(vn(ax/40,ay/40,51)*.7+vn(ax/10,ay/10,52)*.3<.36)continue;const v=this.hash(gx,gy,156)*6|0,t=tiles['vgt'+v+'_0']||(tiles['vgt'+v+'_0']=tuftArt(v,0));
  g.drawImage(t,Math.round(x*C+4+this.hash(gx,gy,157)*20),Math.round(y*C+8+this.hash(gx,gy,158)*16-t.height*2),t.width*2,t.height*2);}
 for(let y=0;y<16;y++)for(let x=0;x<16;x++){
  const gx=cx*16+x,gy=cy*16+y,X=x*C,Y=y*C,v=at(gx,gy),h=this.hash(gx,gy,151)*4|0;
  if(HARD(v)&&v!==5){
   const [t,k]=tt[y*16+x];/* 崖壁 4 格高、岩台 2 格；崖顶已逐像素绘制 */
   if(t!=='vT')g.drawImage(tiles[t+h],X,Y,C,C);
   if(t==='vT'){if(!hard(gx,gy-1)){g.fillStyle=V.st1;g.fillRect(X,Y,C,2);}}
   /* 侧壁：峡谷一侧做 3/4 视角的竖向分层与阴影 */
   if(!hard(gx-1,gy)){g.fillStyle=V.st4;g.fillRect(X,Y,2,C);g.fillStyle='rgba(255,255,255,.10)';g.fillRect(X+2,Y,3,C);}
   if(!hard(gx+1,gy)){g.fillStyle=V.st4;g.fillRect(X+C-2,Y,2,C);g.fillStyle='rgba(0,0,0,.28)';g.fillRect(X+C-9,Y,7,C);}
   if(k===0){g.fillStyle=V.st4;g.fillRect(X,Y+C-2,C,2);}
   continue;}
  if(wet(gx,gy)){g.drawImage(tiles['vW'+h],X,Y,C,C);
   if(!wet(gx-1,gy)&&!hard(gx-1,gy)){g.fillStyle=V.w3;g.fillRect(X,Y,2,C);g.fillStyle=V.w2;g.fillRect(X+2,Y,2,C);}
   if(!wet(gx+1,gy)&&!hard(gx+1,gy)){g.fillStyle=V.w2;g.fillRect(X+C-4,Y,2,C);g.fillStyle=V.w3;g.fillRect(X+C-2,Y,2,C);}
   if(!wet(gx,gy-1)&&!hard(gx,gy-1)){g.fillStyle=V.w3;g.fillRect(X,Y,C,2);}
  }
  /* 崖脚阴影 */
  if(hard(gx,gy-1)){g.fillStyle='rgba(15,18,14,.42)';g.fillRect(X,Y,C,12);g.fillStyle='rgba(15,18,14,.2)';g.fillRect(X,Y+12,C,8);}
  if(hard(gx-1,gy)&&at(gx-1,gy)!==5){g.fillStyle='rgba(15,18,14,.22)';g.fillRect(X,Y,8,C);}
  const vv=at(gx,gy);if(vv===3){g.fillStyle='rgba(15,18,14,.28)';g.beginPath();g.ellipse(X+17,Y+27,13,5,0,0,Math.PI*2);g.fill();}
 }
 this.cache.set(key,c);if(this.cache.size>Math.max(this.cacheLimit||18,this.v3Limit||0))this.cache.delete(this.cache.keys().next().value);return c;
}
/* 河面动态：顺流而下的波纹条与边缘水花（每帧只画可见水格） */
const baseGround=proto.drawGround;
proto.drawGround=function(ctx,images,camera,arena=null){
 baseGround.call(this,ctx,images,camera,arena);
 if(MODE!=='valley'||!this.water||arena)return;
 /* 预热：每帧最多补一块视野外一圈的地面区块，避免走到新区块时集中卡顿 */
 {const ax=Math.floor(camera.x/512),ay=Math.floor(camera.y/512),bx=Math.floor((camera.x+ctx.canvas.width)/512),by=Math.floor((camera.y+ctx.canvas.height)/512);
  this.v3Limit=(bx-ax+3)*(by-ay+3)+2;
  outer:for(let cy=ay-1;cy<=by+1;cy++)for(let cx=ax-1;cx<=bx+1;cx++){if(cx<0||cy<0||cx>=12||cy>=12)continue;if(!this.cache.has(cx+','+cy)){this.groundChunk(cx,cy,images);break outer;}}}
 const now=performance.now()/1000,Wt=this.water,x0=Math.max(0,Math.floor(camera.x/C)),y0=Math.max(0,Math.floor(camera.y/C)),x1=Math.min(N-1,Math.ceil((camera.x+ctx.canvas.width)/C)),y1=Math.min(N-1,Math.ceil((camera.y+ctx.canvas.height)/C));
 ctx.save();
 for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++){if(!Wt[y*N+x])continue;const X=Math.round(x*C-camera.x),Y=Math.round(y*C-camera.y),h=this.hash(x,y,201),h2=this.hash(x,y,202);
  const sp=38+h*30,off=(now*sp+h2*64)%64-16;/* 两条随时间下移的高光 */
  ctx.fillStyle='rgba(127,191,204,.55)';ctx.fillRect(X+(h*24|0),Y+off,6,2);ctx.fillStyle='rgba(217,241,244,.45)';ctx.fillRect(X+(h2*26|0),Y+((off+30)%48)-8,3,2);
  if(!Wt[y*N+x-1]||!Wt[y*N+x+1]){const left=!Wt[y*N+x-1];const a=Math.sin(now*3+h*9);ctx.fillStyle='rgba(235,248,250,.7)';ctx.fillRect(X+(left?2:C-6),Y+((h2*20+now*20)%28),3+(a>0?2:0),2);}
 }
 ctx.restore();
};
/* 原创石像：兜帽长袍守护者（左）与斗笠行者（右），双手胸前结印；无任何既有角色特征 */
function statueArt(hat){seedN=hat?77:55;return art(80,154,px=>{
 const ol=V.stat4,L=V.stat1,M=V.stat0,D=V.stat2,DD=V.stat3;
 /* 按水平位置做明暗（左上光） */const shade=(x,cx,half)=>{const t=(x-cx)/Math.max(1,half);return t<-.55?L:t<.25?M:t<.7?D:DD;};
 const ell=(cx,cy,rx,ry,fn)=>{for(let y=-ry;y<=ry;y++)for(let x=-rx;x<=rx;x++){const q=(x*x)/(rx*rx)+(y*y)/(ry*ry);if(q<=1)fn(cx+x,cy+y,x,y,q)}};
 const ellO=(cx,cy,rx,ry)=>ell(cx,cy,rx+1,ry+1,(x,y)=>px(x,y,ol));
 /* 基座：圆角石台 */px(8,132,ol,64,20);px(6,134,ol,68,16);px(9,133,D,62,18);px(7,135,D,66,14);px(9,133,L,62,2);px(7,135,M,66,3);for(let i=0;i<4;i++)px(16+i*16,138,DD,1,11);px(7,147,DD,66,2);
 /* 长袍：钟形，带竖褶 */for(let y=70;y<133;y++){const t=(y-70)/62,half=Math.round(17+t*t*12+t*4);px(40-half-1,y,ol,half*2+2,1);for(let x=40-half;x<40+half;x++)px(x,y,shade(x,40,half));}
 for(const f of [-12,-4,6,14])for(let y=96;y<132;y++){const x=40+f+Math.round((y-96)*f/70);px(x,y,DD);if(f<0)px(x-1,y,L);}
 px(14,131,DD,52,1);/* 衣摆 */
 /* 宽袖：两道弧形在胸前相合 */for(const sgn of [-1,1])ell(40+sgn*12,82,14,10,(x,y,dx,dy,q)=>{if(q>.82)px(x,y,ol);else px(x,y,shade(x,40,26));});
 for(const sgn of [-1,1])for(let k=0;k<10;k++)px(40+sgn*(4+k),88+Math.round(k*.4),DD);
 /* 结印的双手 */ell(40,76,5,7,(x,y,dx,dy,q)=>px(x,y,q>.7?ol:(dx<0?L:M)));px(40,70,DD,1,12);
 /* 肩与衣领 */ell(40,66,22,7,(x,y,dx,dy,q)=>{if(y<66&&q>.8)px(x,y,ol);else if(y<70)px(x,y,shade(x,40,22));});
 for(let k=0;k<8;k++){px(36-k,62+k,DD);px(44+k,62+k,DD);}
 if(!hat){
  /* 兜帽：圆润的兜帽轮廓，帽檐投影罩住上半张脸 */
  ellO(40,46,17,19);ell(40,46,17,19,(x,y,dx,dy,q)=>px(x,y,shade(x,40,17)));
  ell(40,52,10,12,(x,y,dx,dy,q)=>px(x,y,q>.85?ol:DD));/* 帽内阴影 */
  ell(40,55,8,9,(x,y,dx,dy,q)=>px(x,y,q>.9?DD:(dx<-2?L:M)));/* 脸 */
  px(36,53,ol,3,1);px(42,53,ol,3,1);/* 闭目 */px(40,56,D,1,3);px(38,60,D,4,1);
  for(let k=0;k<12;k++)px(40-17+k,40+Math.round(k*.6),L);/* 兜帽高光 */
  px(40,28,ol,1,4);
 }else{
  /* 斗笠：宽圆锥，下沿弧形，帽下阴影 */
  ell(40,58,8,9,(x,y,dx,dy,q)=>px(x,y,q>.9?ol:(dx<-2?L:M)));/* 脸（先画） */
  px(36,59,ol,3,1);px(42,59,ol,3,1);px(40,61,D,1,2);px(38,64,D,4,1);
  for(let y=26;y<52;y++){const half=Math.round(2+(y-26)*1.25);px(40-half-1,y,ol,half*2+2,1);for(let x=40-half;x<40+half;x++)px(x,y,shade(x,40,half));if(y%5===0)px(40-half,y,DD,half*2,1);}
  ell(40,52,33,4,(x,y,dx,dy,q)=>px(x,y,q>.6?ol:(dy<0?D:DD)));/* 帽沿 */
  ell(40,56,10,2,(x,y)=>px(x,y,'rgba(40,38,30,.55)'));px(40,24,ol,1,3);
 }
 /* 青苔与裂纹 */for(let i=0;i<34;i++){const x=12+rnd()*56|0,y=44+rnd()*104|0;px(x,y,V.moss);if(rnd()>.5)px(x+1,y,V.moss2)}
 for(let i=0;i<3;i++){let x=22+rnd()*36|0,y=96+rnd()*30|0;for(let j=0;j<8;j++){px(x,y,ol);x+=rnd()>.5?1:-1;y++}}
});}
function drawStatue(ctx,o){const t=vt(o.hat?'vStatHat':'vStatHood',()=>statueArt(o.hat));const w=t.width*2,h=t.height*2;
 ctx.save();ctx.fillStyle='rgba(15,18,14,.35)';ctx.beginPath();ctx.ellipse(o.x+10,o.y-2,w*.48,16,0,0,Math.PI*2);ctx.fill();
 if(o.flip){ctx.translate(o.x,0);ctx.scale(-1,1);ctx.translate(-o.x,0);}
 ctx.drawImage(t,Math.round(o.x-w/2),Math.round(o.y-h+4),w,h);ctx.restore();}
/* 瀑布：每 2 格一条，逐帧下落条纹 + 底部水花 */
function drawFall(ctx,o){const now=performance.now()/1000,top=o.top,bot=o.y,x=o.x-32;
 ctx.save();
 /* 崖顶唇口：水流越过岩沿 */ctx.fillStyle=V.st3;ctx.fillRect(x-2,top-14,68,8);ctx.fillStyle=V.st1;ctx.fillRect(x-2,top-14,68,2);
 ctx.fillStyle=V.w2;ctx.fillRect(x,top-8,64,8);ctx.fillStyle=V.w3;for(let i=0;i<8;i++){const sx=x+((i*9+now*40)%64);ctx.fillRect(sx,top-8,4,2);}
 /* 水幕 */const gr=ctx.createLinearGradient(0,top,0,bot);gr.addColorStop(0,V.w2);gr.addColorStop(.25,V.w1);gr.addColorStop(1,V.w0);ctx.fillStyle=gr;ctx.fillRect(x,top,64,bot-top);
 for(let i=0;i<11;i++){const sx=x+2+i*6+((i*7)%3),sp=170+(i*37)%90,len=22+(i*13)%26;for(let y=top-len+((now*sp+i*53)%(len*2));y<bot;y+=len*2){ctx.fillStyle=i%3?V.w2:V.w3;ctx.fillRect(sx,Math.max(top,y),2,Math.min(len,bot-Math.max(top,y)));}}
 if(o.first){ctx.fillStyle='rgba(20,30,30,.35)';ctx.fillRect(x,top,5,bot-top);}if(o.last){ctx.fillStyle='rgba(20,30,30,.35)';ctx.fillRect(x+59,top,5,bot-top);}
 /* 水花 */for(let i=0;i<7;i++){const a=now*3+i*1.7+o.x*.01,r=6+(Math.sin(a)+1)*5;ctx.fillStyle=i%2?V.w3:'rgba(217,241,244,.75)';ctx.beginPath();ctx.arc(x+6+i*9,bot-4+Math.sin(a*1.3)*3,r,0,Math.PI*2);ctx.fill();}
 ctx.fillStyle='rgba(217,241,244,.35)';for(let i=0;i<4;i++){const a=now*1.5+i*2+o.x*.02;ctx.beginPath();ctx.arc(x+10+i*15,bot+12+Math.sin(a)*4,4+Math.sin(a*2)*2,0,Math.PI*2);ctx.fill();}
 ctx.restore();}
proto.prepareValley=function(){
 const g=this.solid=new Uint8Array(N*N),Wt=this.water=new Uint8Array(N*N),H=(x,y,n)=>this.hash(x,y,n);
 const set=(x,y,v)=>{if(x>=0&&y>=0&&x<N&&y<N)g[y*N+x]=v};
 const mid=96,fallL=84,fallR=108,northY=26;/* 北面崖壁底在 y=26 格，瀑布宽 24 格 */
 /* 峡谷两侧崖壁：边缘用噪声做凹凸，局部凸出的岩嘴 */
 const edgeL=y=>50+Math.round(Math.sin(y/9)*3+Math.sin(y/23+1)*4+(H(1,y>>2,161)-.5)*3),edgeR=y=>142+Math.round(Math.sin(y/11+2)*3+Math.sin(y/27)*4+(H(2,y>>2,162)-.5)*3);
 for(let y=0;y<N;y++){const l=edgeL(y),r=edgeR(y);for(let x=0;x<N;x++)if(x<l||x>r||y<3||y>N-4)set(x,y,4);}
 /* 崖壁凸出的岩嘴（每 ~18 格一个，深 3~6 格） */
 for(let y=northY+10;y<N-10;y+=14+(H(5,y,167)*8|0)){const d=3+(H(6,y,168)*4|0),len=4+(H(7,y,169)*4|0),side=H(8,y,170)>.5;for(let j=0;j<len;j++){const yy=y+j,dd=Math.round(d*Math.sin(Math.PI*(j+.5)/len));if(side){const l=edgeL(yy);for(let x=l;x<l+dd;x++)set(x,yy,4);}else{const r=edgeR(yy);for(let x=r-dd+1;x<=r;x++)set(x,yy,4);}}}
 /* 北面大崖（瀑布所在），底边起伏 */
 for(let x=0;x<N;x++){const b=northY+Math.round(Math.sin(x/7)*1.5+(H(x>>1,3,163)-.5)*2);for(let y=0;y<b;y++)set(x,y,4);}
 /* 瀑布：崖面上的一条（不可通行） */
 for(let x=fallL;x<fallR;x++)for(let y=northY-5;y<northY+1;y++)set(x,y,6);
 /* 河道：瀑布下的深潭 + 向南蜿蜒的宽浅水（可走） */
 const riverX=y=>mid+Math.sin(y/17)*7*Math.min(1,(y-northY)/30)+Math.sin(y/41+1)*5*Math.min(1,(y-northY)/30),riverW=y=>7.5+Math.sin(y/13)*2;
 for(let y=northY;y<N-3;y++){const cx=riverX(y),w=riverW(y);for(let x=Math.floor(cx-w);x<=Math.ceil(cx+w);x++)if(x>=0&&x<N&&!g[y*N+x])Wt[y*N+x]=1;}
 /* 瀑布下的圆形深潭 */
 for(let y=northY;y<northY+16;y++)for(let x=mid-18;x<=mid+18;x++){const dx=(x-mid)/17.5,dy=(y-northY+1)/14;if(dx*dx+dy*dy<=1&&!g[y*N+x])Wt[y*N+x]=1;}
 /* 地面分区：草甸 / 碎石（只影响地面贴图） */
 const zone=this.zone=new Uint8Array(N*N);for(let y=0;y<N;y++)for(let x=0;x<N;x++){const n=H(x>>3,y>>3,165)*.6+H(x>>2,y>>2,166)*.4;zone[y*N+x]=n>.62?2:n<.26?1:(n>.52&&n<.56)?3:0;}
 /* 与水的距离（1 湿岩 2~3 沙地） */
 const wetD=this.wetD=new Uint8Array(N*N).fill(9);for(let y=1;y<N-1;y++)for(let x=1;x<N-1;x++){if(Wt[y*N+x])continue;let d=9;for(let j=-3;j<=3;j++)for(let i=-3;i<=3;i++){const xx=x+i,yy=y+j;if(xx<0||yy<0||xx>=N||yy>=N)continue;if(Wt[yy*N+xx]){const m=Math.max(Math.abs(i),Math.abs(j));if(m<d)d=m;}}wetD[y*N+x]=d;}
 /* 两尊原创石像（脚印 6×3 格，立在瀑布两侧崖脚） */
 this.objects=[];this.grid=new Map();
 const statues=[{gx:fallL-7,hat:false,flip:false},{gx:fallR+1,hat:true,flip:true}];
 for(const st of statues){for(let y=northY;y<northY+3;y++)for(let x=st.gx;x<st.gx+6;x++){set(x,y,5);Wt[y*N+x]=0;}this.addObject({kind:'v69statue',hat:st.hat,flip:st.flip,x:(st.gx+3)*C,y:(northY+3)*C});}
 for(let x=fallL;x<fallR;x+=2)this.addObject({kind:'v69fall',x:(x+1)*C,top:(northY-5)*C,y:(northY+1)*C+6,first:x===fallL,last:x+2>=fallR});
 /* 峡谷里的岩台与巨石：避开河道两侧 3 格与开局区 */
 this.start={x:(mid-24)*C,y:(northY+14)*C};
 const sx=this.start.x/C,sy=this.start.y/C;
 const nearRiver=(x,y)=>Math.abs(x-riverX(y))<riverW(y)+4;
 const clearAt=(x,y)=>Math.hypot(x-sx,y-sy)<10||nearRiver(x,y)||y<northY+6;
 const plateaus=[];
 for(let gy=2;gy<N/14;gy++)for(let gx=2;gx<N/14;gx++){
  if(H(gx,gy,171)<.35)continue;const w=3+(H(gx,gy,172)*4|0),h=3+(H(gx,gy,173)*2|0),x0=gx*14+(H(gx,gy,174)*(13-w)|0),y0=gy*14+(H(gx,gy,175)*(12-h)|0);
  const rect={x0,y0,x1:x0+w,y1:y0+h};if(plateaus.some(r=>rect.x0<r.x1+4&&rect.x1+4>r.x0&&rect.y0<r.y1+4&&rect.y1+4>r.y0))continue;
  let ok=true;for(let y=y0-1;y<=y0+h&&ok;y++)for(let x=x0-1;x<=x0+w;x++)if(clearAt(x,y)||g[y*N+x]){ok=false;break}if(!ok)continue;
  plateaus.push(rect);for(let y=y0;y<y0+h;y++)for(let x=x0;x<x0+w;x++){const corner=(x===x0||x===x0+w-1)&&(y===y0||y===y0+h-1);if(corner&&H(x,y,176)>.4)continue;g[y*N+x]=1;}
 }
 this.plateaus=plateaus;
 const free=(x,y,pad=1)=>{for(let j=-pad;j<=pad;j++)for(let i=-pad;i<=pad;i++){const xx=x+i,yy=y+j;if(xx<1||yy<1||xx>=N-1||yy>=N-1||g[yy*N+xx])return false}return !clearAt(x,y)};
 for(let gy=2;gy<N/6;gy++)for(let gx=2;gx<N/6;gx++){if(H(gx,gy,181)<.72)continue;const x=gx*6+(H(gx,gy,182)*5|0),y=gy*6+(H(gx,gy,183)*5|0);if(!free(x,y,1))continue;g[y*N+x]=3;this.addObject({kind:'v69rock',x:x*C+16,y:y*C+22});}
 /* 崖顶少量树（只做装饰，在不可达的崖顶上） */
 for(let gy=1;gy<N/5;gy++)for(let gx=0;gx<N/5;gx++){if(H(gx,gy,185)<.7)continue;const x=gx*5+(H(gx,gy,186)*4|0),y=gy*5+(H(gx,gy,187)*4|0);if(x<1||y<1||x>=N-1||y>=N-1)continue;let deep=true;for(let j=-1;j<=6;j++)for(let i=-2;i<=2;i++){const xx=x+i,yy=y+j;if(xx<0||yy<0||xx>=N||yy>=N||g[yy*N+xx]!==4)deep=false;}if(deep)this.addObject({kind:'v69tree',x:x*C+16,y:y*C+26});}
 /* 可破坏物 */
 const props=this.props=[];let uid=0;
 const addProp=(x,y,kind)=>{const def=PROPS[kind];const o={kind:'v69prop',type:kind,id:'p'+(++uid),x,y,hp:def.hp,maxHp:def.hp,r:def.r,hit:0,home:{x,y},broken:0};props.push(o);this.addObject(o);};
 const kinds=['crate','crate','barrel','lantern','stake'];
 for(let gy=2;gy<N/7;gy++)for(let gx=2;gx<N/7;gx++){if(H(gx,gy,191)<.6)continue;const cx=gx*7+(H(gx,gy,192)*4|0),cy=gy*7+(H(gx,gy,193)*4|0);if(!free(cx,cy,1))continue;
  const kind=kinds[H(gx,gy,194)*kinds.length|0],n=kind==='lantern'?1:2+(H(gx,gy,195)*2|0);
  for(let i=0;i<n;i++){const x=cx*C+16+(i%2)*26,y=cy*C+16+((i/2)|0)*24;if(this.blocked(x,y,14))continue;addProp(x,y,kind);}}
 const s0=this.start;[[-110,-60,'crate'],[-86,-60,'crate'],[120,70,'barrel'],[-140,110,'lantern']].forEach(([dx,dy,k])=>addProp(s0.x+dx,s0.y+dy,k));
 /* 石灯笼成对立在石像前 */
 for(const st of statues){addProp((st.gx+1)*C,(northY+5)*C,'lantern');addProp((st.gx+5)*C,(northY+5)*C,'lantern');}
 /* 草丛（有高度，按 y 与角色排序；单独网格，只在绘制时并入 near） */
 const TG=this.tuftGrid=new Map();let tc=0;const addT=(x,y,v)=>{const key=Math.floor(x/256)+','+Math.floor(y/256);let l=TG.get(key);if(!l)TG.set(key,l=[]);l.push({kind:'v69grass',x,y,v,ph:x*.011+y*.006});tc++;};
 for(let gy=northY+1;gy<N-3;gy++)for(let gx=1;gx<N-1;gx++){const k=gy*N+gx;if(g[k]||Wt[k]||wetD[k]<3)continue;
  const G=grassF(gx*16+8,gy*16+8),cl=vn(gx/6,gy/6,77),n=(G>.58&&cl>.575)?(G>.64&&cl>.66?2:1):(H(gx,gy,211)<.004?1:0);
  for(let i=0;i<n;i++){const x=gx*C+3+H(gx,gy,212+i)*26,y=gy*C+6+H(gx,gy,215+i)*24;if(n>1||G>.55){if(grassF(x/2,y/2)<.55)continue;}addT(x,y,(G>.62?3:0)+(H(gx,gy,218+i)*3|0));}}
 this.tuftCount=tc;
 this.landmarks=[{...this.start,name:'终结之谷',short:'谷口'},{x:mid*C,y:(northY+4)*C,name:'瀑布深潭',short:'瀑布'},{x:(fallL-4)*C,y:(northY+4)*C,name:'守护石像',short:'石像'}];
 this.district=()=>'终结之谷';
 this.roadAt=()=>false;this.riverAt=(x,y)=>!!Wt[Math.floor(y/C)*N+Math.floor(x/C)];this.bridgeAt=()=>false;
};

/* ---------- 可破坏物：受范围技能/投射物伤害（不吸引自动瞄准），掉落，90s 后在屏外重生 ---------- */
function liveProps(){return (s?.world?.props||[]).filter(o=>o.hp>0&&Math.abs(o.x-s.p.x)<700&&Math.abs(o.y-s.p.y)<900);}
if(typeof skillTargets==='function'){const o=skillTargets;skillTargets=function(){const r=o.apply(this,arguments);return s?.arena?r:r.concat(liveProps());};}
if(typeof hit==='function'){const o=hit;hit=function(e,d){
 if(e&&e.kind==='v69prop'){if(e.hp<=0||state!=='play')return;e.hp-=d;e.hit=.15;effect(e.x,e.y-14,18,'break',.3);
  if(e.hp<=0){e.broken=s.t;const r=Math.random();
   if(e.type==='crate'){if(r<.2)dropPickup('food',e.x,e.y);else if(r<.3)dropPickup('magnet',e.x,e.y);else s.gems.push({x:e.x,y:e.y,value:4});}
   else if(e.type==='barrel'){if(r<.45)dropPickup('food',e.x,e.y);else s.gems.push({x:e.x,y:e.y,value:3});}
   else if(e.type==='stake'){s.gems.push({x:e.x-6,y:e.y,value:5});s.gems.push({x:e.x+6,y:e.y,value:5});}
   else{if(r<.4)dropPickup('magnet',e.x,e.y);else if(r<.7)dropPickup('food',e.x,e.y);else s.gems.push({x:e.x,y:e.y,value:10});}
   effect(e.x,e.y-12,30,'break',.5);}
  return;}
 return o.apply(this,arguments);};}
/* 刷怪位置在障碍里时就近挪出；更新流场；可破坏物重生 */
if(typeof tick==='function'){const o=tick;let acc=0;tick=function(dt){o.apply(this,arguments);if(state!=='play'||!s?.world?.solid)return;const w=s.world;
 if(!s.arena){w.v69flow(s.p,dt);/* 首领结界结束后若人物/队友停在崖壁或障碍里，就近挪出，避免卡死 */for(const u of [s.p,...(s.allies||[])])if(u&&w.blocked(u.x,u.y,12)){const q=w.v69free(u.x,u.y,12);u.x=q.x;u.y=q.y;}}
 for(const e of s.enemies)if(!e._v69){e._v69=1;if(w.blocked(e.x,e.y,e.r||12)){const q=w.v69free(e.x,e.y,e.r||12);e.x=q.x;e.y=q.y;}}
 for(const pr of w.props)if(pr.hit>0)pr.hit-=dt;
 acc+=dt;if(acc>2){acc=0;for(const pr of w.props)if(pr.hp<=0&&s.t-pr.broken>90&&(Math.abs(pr.x-s.p.x)>W*.7||Math.abs(pr.y-s.p.y)>H*.7)&&!w.blocked(pr.x,pr.y,6)){pr.hp=pr.maxHp;}}
};}

/* 全图概览（预览用）：把整张 6144² 地图按比例画到一张画布 */
window.MapV069.overview=function(size=1536){const w=s.world,sc=size/w.width,c=document.createElement('canvas');c.width=c.height=size;const g=c.getContext('2d');g.imageSmoothingEnabled=false;
 for(let cy=0;cy<12;cy++)for(let cx=0;cx<12;cx++)g.drawImage(w.groundChunk(cx,cy,images),cx*512*sc,cy*512*sc,512*sc,512*sc);
 g.save();g.scale(sc,sc);for(const o of [...w.objects].sort((a,b)=>a.y-b.y))w.drawObject(g,images,o,null);g.restore();
 g.fillStyle='#fff3c7';g.font='bold 18px sans-serif';for(const l of w.landmarks){g.fillText('◆'+l.short,l.x*sc-10,l.y*sc);}
 return c.toDataURL('image/png');};
window.MapV069.stats=function(){const w=s.world,S=w.solid;let a=[0,0,0,0];for(const v of S)a[v]++;return{plateauCells:a[1],trees:a[2],rocks:a[3],props:w.props.length,plateaus:w.plateaus.length,tufts:w.tuftCount||0,blockedPct:+((a[1]+a[2]+a[3])/S.length*100).toFixed(1)};};
})();
