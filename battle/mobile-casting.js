/* Continuous input for every current form; spatial behavior lives in SkillMotion. */
(function(){

 const keys=new Set(Object.keys(SKILL_KITS));
 const keyOf=a=>a&&s&&a===s.p?s.mainKey:a?.profile?.key;
 const enabled=a=>keys.has(keyOf(a));
 // A circular stick preserves direction even when the finger leaves its ring.
 function stick(p){
  const dx=p.x-p.sx,dy=p.y-p.sy,d=Math.hypot(dx,dy);
  const strength=Math.min(1,Math.max(0,(d-3)/27));
  return d?{x:dx/d*strength,y:dy/d*strength}:{x:0,y:0};
 }
 const blocks=SkillArt.blocksMovement,cast=SkillArt.cast,nativeTick=tick;
 SkillArt.blocksMovement=function(a){return enabled(a)?false:blocks.call(this,a);};
 SkillArt.cast=function(a,u,...args){
  const scoped=keys.has(u?.key),before=scoped?new Set(this.active):null,face=a?.facing;
  const result=cast.call(this,a,u,...args);
  if(!scoped||!result)return result;
  a.mobileCastFacing=a.facing;
  a.mobileCastAction=a.action;
  for(const q of this.active)if(!before.has(q)){
   q.mobileCasting=true;
  }
  // Aiming a jutsu must not turn the held movement input around.
  if(a.moving)a.facing=face;
  return result;
 };

 tick=function(dt){
  const p=pointer;
  if(!p||!enabled(s?.p))return nativeTick(dt);
  const x=p.x,y=p.y,v=stick(p);
  p.x=p.sx+v.x*30;p.y=p.sy+v.y*30;
  try{return nativeTick(dt);}finally{p.x=x;p.y=y;}
 };
 // Match the visible knob to the same circular input, in CSS pixels.
 function knob(){
  if(!pointer||!enabled(s?.p))return;
  const j=$('joystickBase'),v=stick(pointer);
  j.firstElementChild.style.transform=`translate(${v.x*24}px,${v.y*24}px)`;
 }
 shell.addEventListener('pointerdown',knob);
 shell.addEventListener('pointermove',knob);
 // Independent cast sprites retain their attack facing while walking backwards.
 const drawSprite=sprite;
 sprite=function(key,action,x,y,facing,...args){
  if(action==='cast'&&s){
   const a=key===s.form&&x===s.p.x&&y===s.p.y?s.p:s.allies.find(a=>a.sprite===key&&a.x===x&&a.y===y);
   if(a&&enabled(a)&&a.action===a.mobileCastAction&&a.mobileCastFacing)facing=a.mobileCastFacing;
  }
  return drawSprite(key,action,x,y,facing,...args);
 };
 window.MobileCasting={keys:[...keys],stick};
})();
