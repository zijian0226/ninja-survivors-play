/* Phone portrait framing uses the visible head, with separate layouts for grouped art. */
window.HomePortrait=(function(){
 const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function mount(stage,key){
  const cinematic=stage.dataset.layout==='cinematic57';
  const img=stage.querySelector('img'),art=NinjaArt.get(key),f=art.framing,points=new Map();
  let box,ready=false,view={z:1,x:.5,y:.5},baseline,custom=false,centerHead=true,restored=false;
  const saved=Save.data.homePortraits?.[key],frame=()=>document.getElementById('app').getBoundingClientRect();
  stage.dataset.composition=art.composition||'full';
  function baseScale(w,h){
   if(cinematic){const header=document.getElementById('topbar').getBoundingClientRect().bottom-frame().top;return Math.min(Math.max(h*.45,h*.875-header-10)/box.h,w*(art.composition==='beast'?.72:.66)/box.w);}
   const hb=f.headBox,headW=(hb[2]-hb[0])*img.naturalWidth,headH=(hb[3]-hb[1])*img.naturalHeight;
   if(f.presentation?.mode==='portrait'){const spec=f.presentation.home;return Math.min(w*spec.headWidthFraction/headH,h*spec.maxHeadViewportHeight/headH,w*(spec.maxHeadWidth||.44)/headW);}
   if(f.layout!=='portrait'||art.pixel){
    const hx=art.head[0]*img.naturalWidth-box.x;
    return Math.min(w*.94/box.w,h*.73/box.h,(w/2-16)/Math.max(hx,box.w-hx));
   }
   if(art.composition==='bust')return Math.min(Math.min(w*.37,h*.23)/headH,w*.5/headW,h*.75/box.h,w*1.25/box.w);
   return Math.min(Math.min(w*f.home.headHeight,h*.17)/headH,w*.44/headW,h*f.home.maxBodyHeight/box.h,w*f.home.maxBodyWidth/box.w);
  }
  function geometry(){const w=stage.clientWidth,h=stage.clientHeight;return {w,h,scale:baseScale(w,h)*view.z};}
  function restore(w,h){
   if(restored)return;restored=true;
   if(cinematic){if(saved?.layout===5&&saved.art===art.file&&saved.framing===f.revision&&['z','x','y'].every(k=>Number.isFinite(saved[k]))&&saved.custom){custom=true;view={z:saved.z,x:saved.x,y:saved.y};centerHead=false;}return;}
   if(!saved||!['z','x','y'].every(k=>Number.isFinite(saved[k]))||saved.art!==art.file)return;
   if(saved.layout===4&&saved.framing===f.revision){
    custom=!!saved.custom;if(custom){view={z:saved.z,x:saved.x,y:saved.y};centerHead=false;}return;
   }
   // v3 saved automatic layouts as well as gestures. Discard those old automatic crops.
   if(saved.layout===3){
    const oldScale=Math.min(h*1.15,w*2.15)*(art.composition==='bust'?.58:art.composition==='beast'?.65:1)/box.h*saved.z;
    const oldX=saved.x*w-box.w*oldScale/2,oldY=saved.y*h-box.h*oldScale/2;
    const legacy=f.legacyHead||art.head;
    const auto=Math.abs(saved.z-1)<.025&&Math.abs((oldX+(legacy[0]*img.naturalWidth-box.x)*oldScale)/w-.5)<.06&&Math.abs((oldY+(legacy[1]*img.naturalHeight-box.y)*oldScale)/h-.23)<.10;
    if(!auto){
     custom=true;view.z=clamp(saved.z,.5,1.7);const scale=baseScale(w,h)*view.z;
     const hx=art.head[0]*img.naturalWidth-box.x,hy=art.head[1]*img.naturalHeight-box.y;
     view.x=(oldX+hx*oldScale-hx*scale+box.w*scale/2)/w;
     view.y=(oldY+hy*oldScale-hy*scale+box.h*scale/2)/h;centerHead=false;
    }
   }
  }
  function visibleHeadBox(){
   const hb=f.headBox;if(!f.rotationDeg)return hb;
   const angle=f.rotationDeg*Math.PI/180,c=Math.cos(angle),sn=Math.sin(angle),w=img.naturalWidth,h=img.naturalHeight,cx=art.head[0]*w,cy=art.head[1]*h;
   const points=[[hb[0],hb[1]],[hb[2],hb[1]],[hb[0],hb[3]],[hb[2],hb[3]]].map(([x,y])=>[cx+c*(x*w-cx)-sn*(y*h-cy),cy+sn*(x*w-cx)+c*(y*h-cy)]);
   return [Math.min(...points.map(p=>p[0]))/w,Math.min(...points.map(p=>p[1]))/h,Math.max(...points.map(p=>p[0]))/w,Math.max(...points.map(p=>p[1]))/h];
  }
  function apply(){
   if(!ready||!stage.isConnected)return;
   const screen=frame();Object.assign(stage.style,{left:screen.left+'px',top:screen.top+'px',width:screen.width+'px',height:screen.height+'px'});
   const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;restore(w,h);
   const header=document.getElementById('topbar').getBoundingClientRect().bottom-screen.top,bs=baseScale(w,h),hb=visibleHeadBox();
   const hw=(hb[2]-hb[0])*img.naturalWidth,hh=(hb[3]-hb[1])*img.naturalHeight;
   view.z=clamp(view.z,.5,Math.min(1.7,(w-32)/(hw*bs),(h*.67-header-12)/(hh*bs)));
   const scale=bs*view.z,bw=box.w*scale,bh=box.h*scale;
   const hx=(art.head[0]*img.naturalWidth-box.x)*scale,hy=(art.head[1]*img.naturalHeight-box.y)*scale;
   if(centerHead){
    const targetY=f.layout==='portrait'||f.presentation?.mode==='portrait'?Math.max(h*(f.presentation?.home.headCenterY??(art.composition==='bust'?.30:.25)),header+14+hh*scale/2):Math.max(h*.28,header+14+hy);
    view.x=((cinematic?w*.32:w/2)-hx+bw/2)/w;view.y=cinematic?(h*.875-bh/2)/h:(targetY-hy+bh/2)/h;centerHead=false;
   }
   const left=(hb[0]*img.naturalWidth-box.x)*scale,right=(hb[2]*img.naturalWidth-box.x)*scale;
   const top=(hb[1]*img.naturalHeight-box.y)*scale,bottom=(hb[3]*img.naturalHeight-box.y)*scale;
   const bx=clamp(view.x*w-bw/2,16-left,w-16-right),by=clamp(view.y*h-bh/2,header+12-top,h*.67-bottom);
   view.x=(bx+bw/2)/w;view.y=(by+bh/2)/h;
   Object.assign(img.style,{width:img.naturalWidth*scale+'px',height:img.naturalHeight*scale+'px',transformOrigin:`${art.head[0]*100}% ${art.head[1]*100}%`,transform:`translate(${bx-box.x*scale}px,${by-box.y*scale}px) rotate(${f.rotationDeg||0}deg)`});
   stage.dataset.ready='true';stage.dataset.custom=String(custom);
  }
  function save(){if(!ready)return;Save.data.homePortraits||={};Save.data.homePortraits[key]={...view,layout:cinematic?5:4,framing:f.revision,custom,art:art.file};Save.save();}
  function anchor(){
   const p=[...points.values()],r=stage.getBoundingClientRect(),center=p.length>1?{x:(p[0].x+p[1].x)/2-r.left,y:(p[0].y+p[1].y)/2-r.top}:{x:p[0]?.x-r.left,y:p[0]?.y-r.top};
   baseline={...view,center,distance:p.length>1?Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y):0};
  }
  stage.addEventListener('pointerdown',e=>{if(!ready||e.button>0)return;e.preventDefault();points.set(e.pointerId,{x:e.clientX,y:e.clientY});stage.setPointerCapture(e.pointerId);anchor();});
  stage.addEventListener('pointermove',e=>{
   if(!points.has(e.pointerId))return;e.preventDefault();custom=true;points.set(e.pointerId,{x:e.clientX,y:e.clientY});
   const p=[...points.values()],r=stage.getBoundingClientRect(),cx=p.length>1?(p[0].x+p[1].x)/2-r.left:p[0].x-r.left,cy=p.length>1?(p[0].y+p[1].y)/2-r.top:p[0].y-r.top;
   const factor=baseline.distance>0?Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)/baseline.distance:1;view.z=clamp(baseline.z*factor,.5,1.7);const ratio=view.z/baseline.z;
   view.x=(cx+(baseline.x*r.width-baseline.center.x)*ratio)/r.width;view.y=(cy+(baseline.y*r.height-baseline.center.y)*ratio)/r.height;apply();
  });
  function end(e){if(!points.delete(e.pointerId))return;if(points.size)anchor();save();}
  for(const event of ['pointerup','pointercancel','lostpointercapture'])stage.addEventListener(event,end);
  stage.parentElement.querySelector('[data-portrait-reset]').onclick=()=>{view={z:1,x:.5,y:.5};custom=false;centerHead=true;apply();save();};
  function loaded(){if(!img.naturalWidth)return;const b=art.bounds;box={x:b[0],y:b[1],w:b[2]-b[0],h:b[3]-b[1]};ready=true;apply();}
  img.addEventListener('load',loaded);if(img.complete)loaded();
  const observer=new ResizeObserver(()=>{if(!custom)centerHead=true;apply();if(points.size)anchor();});observer.observe(document.getElementById('app'));
  return ()=>{save();observer.disconnect();};
 }
 return {mount};
})();
