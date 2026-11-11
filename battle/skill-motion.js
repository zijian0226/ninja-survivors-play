/* One spatial source of truth for rendering and collision. Coordinates are world screen-plane pixels. */
window.SkillMotion={
 debug:false,
 data(key,slot){return window.SKILL_MOTION_DATA?.[key+':'+slot]||null;},
 clip(key,slot){return this.data(key,slot)?.clip||SKILL_ART_DATA[key]?.skills[slot];},
 scale(q){return (q.clip.renderScale||1)*(q.level>=2?1.25:1)*(q.slot==='ultimate'&&q.level>=3?1.15:1);},
 init(q){
  q.motion=this.data(q.unit.key,q.slot);q.released=false;q.releaseAt=q.motion?.mode==='summon'?0:q.duration*(q.clip.damageWindow?.[0]??.15);q.castBodyUntil=q.clip.caster?.duration||.34;
  if(q.age>=0)q.actor.lastBodyCast=q;
  this.sync(q);
 },
 refund(q){const a=q.actor,k=q.slot==='primary'?'jutsu':q.slot==='secondary'?'secondary':'ultimateCd';if(a===s.p){const id=q.slot==='primary'?'jutsuAtk':q.slot==='secondary'?'cloneAtk':'ultimateCd';s[id]=Math.min(s[id]??.15,.15);}else a[k]=Math.min(a[k]??.15,.15);},
 target(q){const a=q.actor,k=q.kit,r=k.range||400,e=q.target;return e?.hp>0&&dist(e,a)<=r?e:Growth.nearestEnemy(a,r);},
 release(q){
  const e=this.target(q);if(!e){q.cancelled=true;q.age=q.duration;this.refund(q);return false;}
  q.target=e;q.facing=e.x>=q.actor.x?1:-1;if(!q.actor.moving)q.actor.facing=q.facing;
  q.released=true;q.actor.lastBodyCast=q;
  const mode=q.motion?.mode||'ground';q.releasePos={x:e.x,y:e.y};
  if(mode==='planted')q.releasePos={x:q.actor.x+q.facing*36,y:q.actor.y-24};
  if(mode==='summon')q.releasePos={x:q.actor.x,y:q.actor.y};
  if(mode==='projectile'){
   q.flightFrom={x:q.actor.x+q.facing*18,y:q.actor.y-24};q.flightTo={x:e.x,y:e.y-24};q.flightTime=Math.max(.12,Math.min(.65,Math.hypot(q.flightTo.x-q.flightFrom.x,q.flightTo.y-q.flightFrom.y)/350));
  }
  return true;
 },
 sync(q){
  const m=q.motion;if(!m)return;const mode=m.mode,scale=this.scale(q),c=q.clip,frame=SkillArt.frame(q),rect=m.rects[frame];q.motionFrame=frame;
  const ref=m.reference,refX=((ref[0]+ref[2])/2-c.anchor[0])*scale,refY=((ref[1]+ref[3])/2-c.anchor[1])*scale;
  let x=q.actor.x,y=q.actor.y;
  if(mode==='ground'||mode==='planted'||mode==='summon'){
   const p=q.released?q.releasePos:{x:q.target?.x??q.actor.x,y:q.target?.y??q.actor.y};x=p.x;y=p.y;
   if(mode==='ground'&&m.separatedCaster){x-=q.facing*refX;y-=24+refY;}
   if(mode==='planted'&&!q.released){x=q.actor.x+q.facing*36;y=q.actor.y-24;}
  }else if(mode==='projectile'){
   const t=q.released?clamp((q.age-q.releaseAt)/q.flightTime,0,1):0;
   const from=q.flightFrom||{x:q.actor.x+q.facing*18,y:q.actor.y-24},to=q.flightTo||from;
   const point=q.impactPoint||{x:from.x+(to.x-from.x)*t,y:from.y+(to.y-from.y)*t};q.projectilePoint=point;q.inFlight=q.released&&!q.impactPoint&&t<1;
   const cx=rect?(rect[0]+rect[2])/2:c.anchor[0],cy=rect?(rect[1]+rect[3])/2:c.anchor[1];x=point.x-q.facing*(cx-c.anchor[0])*scale-(c.offset?.[0]||0);y=point.y-(cy-c.anchor[1])*scale-(c.offset?.[1]||0);
  }
  if(mode==='melee'||mode==='aura'){x=q.actor.x+(mode==='melee'?q.facing*Math.min(40,(q.kit.range||64)*.65):0)-q.facing*refX-(c.offset?.[0]||0);y=q.actor.y-24-refY-(c.offset?.[1]||0);}
  q.x=x;q.y=y;
  q.geometry=rect?this.geometry(c,rect,x,y,q.facing,scale,q.radius):null;
  if(q.unit.key==='lee'&&q.slot==='ultimate'&&c.impact&&q.age/q.duration>.62){
   const ic=c.impact,i=Math.min(ic.frames-1,Math.floor((q.age/q.duration-.62)/.38*ic.frames));q.landingPoint??={x:q.geometry?.x??x,y:(q.geometry?.y??y)+24};q.geometry=m.impactRects?.[i]?this.geometry(ic,m.impactRects[i],q.landingPoint.x,q.landingPoint.y,1,1,q.radius):null;
  }
  if(q.geometry){q.damageX=q.geometry.x;q.damageY=q.geometry.y+24;}
 },
 geometry(c,r,x,y,facing,scale,maxRadius=Infinity){return {x:x+(c.offset?.[0]||0)+facing*((r[0]+r[2])/2-c.anchor[0])*scale,y:y+(c.offset?.[1]||0)+((r[1]+r[3])/2-c.anchor[1])*scale,rx:Math.min(maxRadius,Math.max(2,(r[2]-r[0])*scale/2)),ry:Math.min(maxRadius,Math.max(2,(r[3]-r[1])*scale/2))};},
 ellipse(g,e){return !!g&&((e.x-g.x)/(g.rx+(e.r||12)))**2+((e.y-24-g.y)/(g.ry+(e.r||12)))**2<=1;},
 hits(q,e){return this.ellipse(q.geometry,e);},
 update(q,dt){
  if(!q.motion)return true;if(q.age<0)return false;
  if(!q.released&&q.age>=q.releaseAt&&!this.release(q))return false;
  const previous=q.projectilePoint?{...q.projectilePoint}:null;this.sync(q);
  if(q.released&&q.motion.mode==='projectile'&&!q.impactPoint&&q.geometry){
   const g=q.geometry,p=previous||q.flightFrom;
   // A swept trajectory prevents fast projectiles tunnelling between frames; drawing uses this same segment.
   for(const e of skillTargets())if(e.hp>0&&segmentDistance({x:e.x,y:e.y-24},p,q.projectilePoint)<Math.min(g.rx,g.ry)+(e.r||12)){
    q.impactPoint={...q.projectilePoint};q.inFlight=false;q.nextPulse=Math.min(q.nextPulse,q.age);this.sync(q);break;
   }
   q.previousProjectile=p;
  }
  return q.released&&q.age<q.damageEnd&&!!q.geometry;
 },
 drawDebug(q){if(!this.debug||!q.geometry||!q.released||q.age>=q.damageEnd)return;const g=q.geometry;ctx.save();ctx.strokeStyle='#a6f1c8';ctx.lineWidth=1;ctx.setLineDash([3,3]);ctx.beginPath();ctx.ellipse(g.x,g.y,g.rx,g.ry,0,0,Math.PI*2);ctx.stroke();ctx.restore();},
 drawTrail(q){if(!q.previousProjectile||!q.inFlight||!q.projectilePoint)return;ctx.save();ctx.globalAlpha=.3;ctx.strokeStyle='#cbe9dc';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(q.previousProjectile.x,q.previousProjectile.y);ctx.lineTo(q.projectilePoint.x,q.projectilePoint.y);ctx.stroke();ctx.restore();},
 healArea(q){const g=q.geometry;return g?{x:g.x,y:g.y,rx:76,ry:76}:null;},
 originalGeometry(q,c,frame,size,x,y,anchorY=.62,facing=1){
  const im=SkillArt.cache.get(c.file);if(!im)return null;this.originalRects??=new Map();const key=c.file+':'+frame;
  if(!this.originalRects.has(key)){
   const cv=document.createElement('canvas');cv.width=c.cell[0];cv.height=c.cell[1];const cc=cv.getContext('2d',{willReadFrequently:true});cc.drawImage(im,frame*c.cell[0],0,...c.cell,0,0,...c.cell);const data=cc.getImageData(0,0,cv.width,cv.height).data;let x0=cv.width,y0=cv.height,x1=0,y1=0;
   for(let py=0;py<cv.height;py++)for(let px=0;px<cv.width;px++)if(data[(py*cv.width+px)*4+3]>35){x0=Math.min(x0,px);y0=Math.min(y0,py);x1=Math.max(x1,px+1);y1=Math.max(y1,py+1);}
   this.originalRects.set(key,x1>x0?[x0,y0,x1,y1]:null);
  }
  const r=this.originalRects.get(key);return r?this.geometry({anchor:[c.cell[0]/2,c.cell[1]*anchorY]},r,x,y,facing,size/c.cell[0],q.radius):null;
 }
};
