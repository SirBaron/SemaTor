'use strict';
const Catalogue = (() => {
 const labels={wide:'Widescreen',motion:'Smooth motion',sound:'Sound',cheats:'Cheats'};
 const normalize=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const number=(v,fallback)=>/^\d+$/.test(String(v))?Math.max(1,Math.min(1000000,Number(v))):fallback;
 function readState(search){const p=new URLSearchParams(search);return {q:(p.get('q')||'').slice(0,200),features:[...new Set((p.get('features')||'').split(',').filter(x=>labels[x]))],scope:p.get('scope')==='all'?'all':'enhanced',sort:['az','za','new','old'].includes(p.get('sort'))?p.get('sort'):'az',size:[12,24,48].includes(Number(p.get('size')))?Number(p.get('size')):12,page:number(p.get('page'),1),game:p.get('game')||''};}
 function query(games,state){
  const terms=normalize(state.q).split(/\s+/).filter(Boolean);
  const matches=games.filter(g=>{
   if(state.scope!=='all'&&!g.enhanced)return false;
   if(!state.features.every(f=>g.features.includes(f)))return false;
   const hay=normalize([g.title,g.year,g.publisher,...g.aliases,...g.features.map(f=>labels[f]),...g.editions.flatMap(e=>[e.name,...e.options.flatMap(o=>[o.name,o.help]),...e.cheats.flatMap(o=>[o.name,o.help])])].join(' '));
   return terms.every(t=>hay.includes(t));
  }).sort((a,b)=>{const title=a.title.localeCompare(b.title,undefined,{numeric:true,sensitivity:'base'});if(state.sort==='za')return -title;if(state.sort==='new'||state.sort==='old'){const ay=Number(a.year)||0,by=Number(b.year)||0;return (state.sort==='new'?by-ay:ay-by)||title;}return title;});
  const pages=Math.max(1,Math.ceil(matches.length/state.size)),page=Math.min(Math.max(1,state.page),pages),start=(page-1)*state.size;
  return {rows:matches.slice(start,start+state.size),total:matches.length,pages,page,start};
 }
 function params(s){const p=new URLSearchParams();if(s.q)p.set('q',s.q);if(s.features.length)p.set('features',s.features.join(','));if(s.scope==='all')p.set('scope','all');if(s.sort!=='az')p.set('sort',s.sort);if(s.size!==12)p.set('size',s.size);if(s.page>1)p.set('page',s.page);if(s.game)p.set('game',s.game);return p.toString();}
 return {labels,readState,query,params};
})();
if(typeof module!=='undefined'&&module.exports)module.exports=Catalogue;
if(typeof document!=='undefined')(() => {
 const games=JSON.parse(document.getElementById('catalogue-data').textContent);
 const $=id=>document.getElementById(id),el=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
 let state=Catalogue.readState(location.search),returnFocus=null,activeGame='';
 const dialog=$('game-detail'),results=$('catalogue-results'),features=[...document.querySelectorAll('[data-feature]')];
 function url(push=false){const p=Catalogue.params(state),next=location.pathname+(p?'?'+p:'');history[push?'pushState':'replaceState'](null,'',next);}
 function badge(f){return el('span',Catalogue.labels[f],'feature-pill '+f);}
 function sync(){
  $('catalogue-search').value=state.q;$('catalogue-scope').value=state.scope;$('catalogue-sort').value=state.sort;$('catalogue-size').value=String(state.size);
  for(const b of features){b.setAttribute('aria-pressed',String(state.features.includes(b.dataset.feature)));b.querySelector('span').textContent=games.filter(g=>(state.scope==='all'||g.enhanced)&&g.features.includes(b.dataset.feature)).length;}
 }
 function showDetail(id,focus=true){
  const g=games.find(g=>g.id===id);if(!g){state.game='';if(dialog.open)dialog.close();document.body.classList.remove('detail-open');return;}
  if(activeGame===id&&dialog.open)return;activeGame=id;
  const body=$('detail-body');body.replaceChildren();
  body.append(el('p',[g.year,g.publisher].filter(Boolean).join(' / '),'detail-meta'));
  const title=el('h2',g.title);title.id='detail-title';body.append(title);
  const badges=el('div',undefined,'detail-badges');for(const f of g.features)badges.append(badge(f));body.append(badges);
  body.append(el('p',g.editions.length+' shipped '+(g.editions.length===1?'profile':'profiles')+'. Options depend on the identified disk edition and may vary by game mode or level.','detail-note'));
  if(g.guide){const a=el('a','Read the game guide ↗','guide-link');a.href=g.guide;body.append(a);}
  function optionList(items){const ul=el('ul',undefined,'detail-options');for(const o of items){const li=el('li');li.append(el('strong',o.name));if(o.help)li.append(el('p',o.help));ul.append(li);}return ul;}
  for(const [i,edition] of g.editions.entries()){
   const section=el(g.editions.length>1?'details':'section',undefined,'edition-detail');
   if(g.editions.length>1){section.append(el('summary',edition.name));section.open=i===0;}else section.append(el('h3','Available options'));
   if(edition.options.length)section.append(optionList(edition.options));else section.append(el('p','No game-specific enhancements are listed for this edition. Shared SemaTor settings are still available.'));
   if(edition.cheats.length){const cheats=el('div',undefined,'detail-cheats');cheats.append(el('h3','Optional cheats'),optionList(edition.cheats));section.append(cheats);}
   body.append(section);
  }
  $('detail-status').textContent='';
  if(!dialog.open){returnFocus=document.activeElement;dialog.showModal();}document.body.classList.add('detail-open');dialog.scrollTop=0;if(focus)$('detail-close').focus();
 }
 function render(write=true){
  const r=Catalogue.query(games,state);state.page=r.page;sync();results.replaceChildren();
  for(const g of r.rows){
   const tr=el('tr'),name=el('td',undefined,'game-name');
   const button=el('button',g.title,'game-title');button.type='button';button.addEventListener('click',()=>openGame(g.id));
   name.append(button,el('span',[g.year,g.publisher,g.editions.length+' '+(g.editions.length===1?'profile':'profiles'),g.optionCount+' '+(g.optionCount===1?'option':'options')].filter(Boolean).join(' · '),'game-meta'));tr.append(name);
   for(const f of Object.keys(Catalogue.labels)){const cell=el('td',undefined,'feature-cell');if(g.features.includes(f)){cell.append(badge(f));}else{cell.classList.add('unavailable');cell.append(el('span','—','feature-absent'),el('span','No '+Catalogue.labels[f]+' option listed','sr-only'));}tr.append(cell);}
   const more=el('td',undefined,'game-action'),open=el('button','↗','open-game');open.type='button';open.setAttribute('aria-label','View '+g.title+' details');open.addEventListener('click',()=>openGame(g.id));more.append(open);tr.append(more);results.append(tr);
  }
  $('catalogue-count').textContent=r.total?`${r.start+1}–${r.start+r.rows.length} of ${r.total} games`:'0 games';
  $('catalogue-empty').hidden=!!r.total;document.querySelector('.game-table-wrap').hidden=!r.total;
  $('catalogue-reset').hidden=!state.q&&!state.features.length&&state.scope==='enhanced'&&state.sort==='az';
  $('page-prev').disabled=r.page<=1;$('page-next').disabled=r.page>=r.pages;
  const picker=$('catalogue-page');picker.replaceChildren();for(let i=1;i<=r.pages;i++){const o=el('option',String(i));o.value=String(i);picker.append(o);}picker.value=String(r.page);picker.disabled=!r.total;$('page-total').textContent='of '+r.pages;
  if(state.game)showDetail(state.game,false);else if(dialog.open){dialog.close();document.body.classList.remove('detail-open');}
  if(write)url();
 }
 function openGame(id){state.game=id;showDetail(id);url(true);}
 function closeDetail(){document.body.classList.remove('detail-open');state.game='';activeGame='';if(dialog.open)dialog.close();url();if(returnFocus&&returnFocus.isConnected)returnFocus.focus();}
 function changed(){state.page=1;state.game='';render();}
 function reset(){state={...Catalogue.readState(''),size:state.size};render();$('catalogue-search').focus();}
 function pageChanged(page){state.page=page;state.game='';render();document.querySelector('.result-bar').scrollIntoView({block:'start',behavior:'instant'});}
 $('catalogue-search').addEventListener('input',e=>{state.q=e.target.value.slice(0,200);changed();});
 for(const b of features)b.addEventListener('click',()=>{const f=b.dataset.feature;state.features=state.features.includes(f)?state.features.filter(x=>x!==f):[...state.features,f];changed();});
 $('catalogue-scope').addEventListener('change',e=>{state.scope=e.target.value;changed();});$('catalogue-sort').addEventListener('change',e=>{state.sort=e.target.value;changed();});$('catalogue-size').addEventListener('change',e=>{state.size=Number(e.target.value);changed();});
 $('catalogue-reset').addEventListener('click',reset);$('empty-reset').addEventListener('click',reset);
 $('page-prev').addEventListener('click',()=>pageChanged(state.page-1));$('page-next').addEventListener('click',()=>pageChanged(state.page+1));$('catalogue-page').addEventListener('change',e=>pageChanged(Number(e.target.value)));
 $('detail-close').addEventListener('click',closeDetail);dialog.addEventListener('cancel',e=>{e.preventDefault();closeDetail();});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDetail();}});
 $('detail-share').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);$('detail-status').textContent='Link copied';}catch{$('detail-status').textContent='Copy this page’s address to share this game.';}});
 window.addEventListener('popstate',()=>{state=Catalogue.readState(location.search);render(false);});
 document.addEventListener('keydown',e=>{if(e.key==='/'&&!dialog.open&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&!document.activeElement.isContentEditable){e.preventDefault();$('catalogue-search').focus();}});
 $('enhanced-total').textContent=games.filter(g=>g.enhanced).length+' enhanced games';render();
})();
