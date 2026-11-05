/* Home illustration gestures. Positions are relative to the clipped display area. */
window.HomePortrait = (function () {
 const boundsCache=new Map(),clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
 function artworkBounds(img){
  if(boundsCache.has(img.src))return boundsCache.get(img.src);
  const canvas=document.createElement('canvas'),ratio=Math.min(1,256/Math.max(img.naturalWidth,img.naturalHeight));
  canvas.width=Math.max(1,Math.round(img.naturalWidth*ratio));canvas.height=Math.max(1,Math.round(img.naturalHeight*ratio));
  const ctx=canvas.getContext('2d',{willReadFrequently:true});let box={x:0,y:0,w:img.naturalWidth,h:img.naturalHeight};
  try{
   ctx.drawImage(img,0,0,canvas.width,canvas.height);const data=ctx.getImageData(0,0,canvas.width,canvas.height).data;
   let l=canvas.width,t=canvas.height,r=-1,b=-1;
   for(let y=0;y<canvas.height;y++)for(let x=0;x<canvas.width;x++)if(data[(y*canvas.width+x)*4+3]>24){l=Math.min(l,x);r=Math.max(r,x);t=Math.min(t,y);b=Math.max(b,y);}
   if(r>=l)box={x:l/ratio,y:t/ratio,w:(r-l+1)/ratio,h:(b-t+1)/ratio};
  }catch(_){/* External portraits still work with their full image bounds. */}
  boundsCache.set(img.src,box);return box;
 }
 function mount(stage,key){
  const img=stage.querySelector('img'),points=new Map();let box,view,baseline,ready=false;
  const frame=()=>document.getElementById('app').getBoundingClientRect();
  const baseHeight=(w,h)=>Math.min(h*1.15,w*2.15);
  const defaultView=()=>{const r=frame();return {z:1,x:.5,y:.11+baseHeight(r.width,r.height)/r.height/2};};
  view=defaultView();
  const saved=Save.data.homePortraits?.[key],art=NinjaArt.get(key);let centerHead=true;
  if(saved&&['z','x','y'].every(k=>Number.isFinite(saved[k]))){
   if(saved.layout===3&&saved.art===art.file){view={z:saved.z,x:saved.x,y:saved.y};centerHead=false;}
   else if(saved.layout>=2){view={z:saved.z,x:.5,y:saved.y};}
   else if(Math.abs(saved.z-1)>1e-5||Math.abs(saved.y-.925)>1e-5){
    const r=frame();view={z:saved.z*1.6*r.height/baseHeight(r.width,r.height),x:.5,y:saved.y};
   }
  }
  function geometry(){const w=stage.clientWidth,h=stage.clientHeight;return {w,h,scale:baseHeight(w,h)*view.z/box.h};}
  function apply(){
   if(!ready||!stage.isConnected)return;
   const screen=document.getElementById('app').getBoundingClientRect();
   Object.assign(stage.style,{left:screen.left+'px',top:screen.top+'px',width:screen.width+'px',height:screen.height+'px'});
   view.z=clamp(view.z,.5,1.7);const {w,h,scale}=geometry();if(!w||!h)return;
   const bw=box.w*scale,bh=box.h*scale;
   // Small art stays inside; enlarged art retains limited headroom below the HUD.
   const hx=(art.head[0]*img.naturalWidth-box.x)*scale,hy=(art.head[1]*img.naturalHeight-box.y)*scale;
   if(centerHead){view.x=(w/2-hx+bw/2)/w;view.y=(h*.23-hy+bh/2)/h;centerHead=false;}
   const bx=clamp(view.x*w-bw/2,20-hx,w-20-hx);
   const header=document.getElementById('topbar').getBoundingClientRect();
   const by=clamp(view.y*h-bh/2,Math.min(h*.20,header.bottom-screen.top+12)-hy,h*.65-hy);
   view.x=(bx+bw/2)/w;view.y=(by+bh/2)/h;
   img.style.width=img.naturalWidth*scale+'px';img.style.height=img.naturalHeight*scale+'px';
   img.style.transform=`translate(${bx-box.x*scale}px,${by-box.y*scale}px)`;
   stage.dataset.ready='true';
  }
  function save(){if(!ready)return;Save.data.homePortraits||={};Save.data.homePortraits[key]={...view,layout:3,art:art.file};Save.save();}
  function anchor(){
   const p=[...points.values()],r=stage.getBoundingClientRect();
   const center=p.length>1?{x:(p[0].x+p[1].x)/2-r.left,y:(p[0].y+p[1].y)/2-r.top}:{x:p[0]?.x-r.left,y:p[0]?.y-r.top};
   baseline={...view,center,distance:p.length>1?Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y):0};
  }
  stage.addEventListener('pointerdown',e=>{
   if(!ready||e.button>0)return;e.preventDefault();points.set(e.pointerId,{x:e.clientX,y:e.clientY});stage.setPointerCapture(e.pointerId);anchor();
  });
  stage.addEventListener('pointermove',e=>{
   if(!points.has(e.pointerId))return;e.preventDefault();points.set(e.pointerId,{x:e.clientX,y:e.clientY});
   const p=[...points.values()],r=stage.getBoundingClientRect(),cx=p.length>1?(p[0].x+p[1].x)/2-r.left:p[0].x-r.left,cy=p.length>1?(p[0].y+p[1].y)/2-r.top:p[0].y-r.top;
   const factor=baseline.distance>0?Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)/baseline.distance:1;
   view.z=clamp(baseline.z*factor,.5,1.7);const actual=view.z/baseline.z;
   view.x=(cx+(baseline.x*r.width-baseline.center.x)*actual)/r.width;
   view.y=(cy+(baseline.y*r.height-baseline.center.y)*actual)/r.height;apply();
  });
  function end(e){if(!points.delete(e.pointerId))return;if(points.size)anchor();save();}
  for(const event of ['pointerup','pointercancel','lostpointercapture'])stage.addEventListener(event,end);
  stage.parentElement.querySelector('[data-portrait-reset]').onclick=()=>{view=defaultView();centerHead=true;apply();save();};
  function loaded(){if(!img.naturalWidth)return;const b=art.bounds;box={x:b[0],y:b[1],w:b[2]-b[0],h:b[3]-b[1]};ready=true;apply();}
  img.addEventListener('load',loaded);if(img.complete)loaded();
  const observer=new ResizeObserver(()=>{apply();if(points.size)anchor();});observer.observe(document.getElementById('app'));
  return ()=>{save();observer.disconnect();};
 }
 return {mount};
})();
