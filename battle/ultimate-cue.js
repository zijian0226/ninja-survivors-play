/* Non-blocking portrait cut-in. Positions are measured below the battle HUD. */
window.UltimateCue={
 current:null,queue:[],
 art(u){return 'assets/cue/'+u.art+'.webp';},
 preload(u){const img=new Image();img.src=this.art(u);},
 clear(){this.current=null;this.queue=[];document.getElementById('ultimateCue')?.remove();},
 show(actor,u,partners=[]){const item={unit:u,partners,name:SkillLab.ultimates[u.key]||'奥义',level:actor===s.p?s.level:actor.level||s.level,role:actor===s.p?'主控':'支援',remaining:1.6};if(!this.current){this.current=item;this.render();}else if(this.queue.length<16)this.queue.push(item);},
 render(){if(!this.current)return;document.getElementById('ultimateCue')?.remove();const c=this.current,el=document.createElement('aside');el.id='ultimateCue';el.className='ultimate-cue';el.setAttribute('role','status');el.setAttribute('aria-live','polite');el.dataset.caster=c.unit.key;const units=[c.unit,...c.partners];el.classList.toggle('linked',c.partners.length>0);el.innerHTML=`<div class="cue-portraits">${units.map(u=>`<div class="cue-person"><img data-cue-unit="${u.key}" src="${this.art(u)}" alt="${HubUI.esc(u.name)}立绘"></div>`).join('')}</div><div class="cue-copy"><strong>${HubUI.esc(c.name)}</strong></div>`;$('shell').appendChild(el);this.position();},
 position(){const el=document.getElementById('ultimateCue');if(!el)return;if(s.boss&&$('bossHud').hidden)updateHud();const shell=$('shell').getBoundingClientRect(),hud=document.querySelector('.hud').getBoundingClientRect(),top=Math.max(104,hud.bottom-shell.top+8);el.style.top=Math.round(top)+'px';el.style.height=Math.max(64,Math.min(90,shell.height-top-70))+'px';},
 update(real){const el=document.getElementById('ultimateCue');if(!this.current)return;if(el)el.hidden=state!=='play';if(state!=='play')return;this.current.remaining-=Math.min(.1,real);this.position();if(el)el.style.opacity=String(Math.min(1,this.current.remaining/.18));if(this.current.remaining<=0){this.current=this.queue.shift()||null;if(this.current)this.render();else el?.remove();}}
};
