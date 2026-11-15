/* v0.65 统一线条图标（24×24，currentColor 描边）与全站唯一的金币/勾玉图标。 */
window.UIIcons=(function(){
 const P={
  ninja:'<circle cx="12" cy="8" r="4"/><path d="M8 7.2h8"/><path d="M4.5 20.5c.6-4 3.6-6.5 7.5-6.5s6.9 2.5 7.5 6.5"/>',
  jutsu:'<path d="M7 4h11a2 2 0 0 1 2 2v1h-4"/><path d="M16 7v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1h10"/><path d="M7 4a2 2 0 0 0-2 2v11"/><path d="M9 10h4M9 13.5h4"/>',
  home:'<path d="M3.5 10.5 12 3.5l8.5 7"/><path d="M5.5 9v11.5h13V9"/><path d="M10 20.5v-5.5h4v5.5"/>',
  bag:'<path d="M5 8h14l-1 12.5H6z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  summon:'<path d="M12 3.5l2.3 5.2 5.7.6-4.3 3.8 1.2 5.6L12 15.8l-4.9 2.9 1.2-5.6L4 9.3l5.7-.6z"/>',
  upgrade:'<path d="M12 20V8"/><path d="m6.5 13.5 5.5-5.5 5.5 5.5"/><path d="M5 4h14"/>',
  mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="m4 7.5 8 5.5 8-5.5"/>',
  quest:'<rect x="5" y="4.5" width="14" height="16" rx="2"/><path d="M9 4.5V3h6v1.5"/><path d="M8.5 10h7M8.5 13.5h7M8.5 17h4"/>',
  gift:'<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5.5 12v8.5h13V12M12 8v12.5"/><path d="M12 8C11 5 9.5 3.8 8 4.4c-1.6.7-.6 3.6 4 3.6zm0 0c1-3 2.5-4.2 4-3.6 1.6.7.6 3.6-4 3.6z"/>',
  notice:'<path d="M4 10v4h3l7 4.5v-13L7 10z"/><path d="M17.5 9a4 4 0 0 1 0 6"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"/>',
  shop:'<path d="M4.5 9 6 4.5h12L19.5 9"/><path d="M4.5 9h15v1.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0z"/><path d="M5.5 13v7.5h13V13"/>',
  card:'<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M3.5 10h17M7 15h4"/>',
  diamond:'<path d="M7 4h10l3.5 5L12 20.5 3.5 9z"/><path d="M3.5 9h17M12 20.5 9 9l3-5 3 5z"/>',
  swap:'<path d="M16.5 3.5 20 7l-3.5 3.5"/><path d="M4 11V9.5A2.5 2.5 0 0 1 6.5 7H20"/><path d="M7.5 20.5 4 17l3.5-3.5"/><path d="M20 13v1.5a2.5 2.5 0 0 1-2.5 2.5H4"/>',
  reset:'<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/>',
  sword:'<path d="M14.5 17.5 4 7V4h3l10.5 10.5"/><path d="m12.5 19 6.5-6.5M16 16l4 4"/>',
  leaf:'<path d="M11 20c-4 0-6.5-3-6.5-7C4.5 7 10 4 19.5 4c0 9.5-3 16-8.5 16z"/><path d="M5 19.5c3.5-3.5 6.5-6.5 9.5-8.5"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  users:'<circle cx="9" cy="8.5" r="3.5"/><path d="M3 19.5c.5-3.5 2.8-5.5 6-5.5s5.5 2 6 5.5"/><path d="M15.5 5.2a3.5 3.5 0 0 1 0 6.6M17.5 14.3c2 .7 3.2 2.5 3.5 5.2"/>',
  chevronRight:'<path d="m9 5 7 7-7 7"/>',
  chevronLeft:'<path d="m15 5-7 7 7 7"/>',
  chevronDown:'<path d="m5 9 7 7 7-7"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5M12 7.8v.2"/>',
  expand:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  play:'<path d="M8 5.5v13l10.5-6.5z"/>',
  box:'<path d="M3.5 7.5 12 3.5l8.5 4v9L12 20.5l-8.5-4z"/><path d="M3.5 7.5 12 11.5l8.5-4M12 11.5v9"/>',
  trophy:'<path d="M8 4.5h8v5a4 4 0 0 1-8 0z"/><path d="M8 6.5H5a3 3 0 0 0 3 4M16 6.5h3a3 3 0 0 1-3 4M12 13.5V17M8.5 20h7M10 17h4v3h-4z"/>'
 };
 const CUR={
  coin:'<svg class="ui-cur ui-cur-coin" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="#F6C453" stroke="#D4A64A" stroke-width="1.6"/><circle cx="12" cy="12" r="6" fill="none" stroke="#E7B04A" stroke-width="1"/><rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1" fill="#FFF7ED" stroke="#B9862F" stroke-width="1.3"/></svg>',
  gouyu:'<svg class="ui-cur ui-cur-gouyu" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3A6 6 0 0 1 14 15C11 15.4 7.6 17.4 5 21C4 16.5 4.8 12 8 9A6 6 0 0 1 14 3Z" fill="#E5484D"/><circle cx="14" cy="9" r="2" fill="#FFF7ED"/></svg>'
 };
 function icon(name,cls=''){const p=P[name]||P.info;return `<svg class="ui-icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${p}</svg>`;}
 function currency(kind){return CUR[kind==='gouyu'||kind==='gem'||kind==='magatama'?'gouyu':'coin'];}
 return {icon,currency,names:Object.keys(P)};
})();
