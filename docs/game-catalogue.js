'use strict';
const search=document.querySelector('#catalogue-search');
const cards=[...document.querySelectorAll('.catalogue-card')];
const filters=[...document.querySelectorAll('[data-category]')];
let category='all';
function updateCatalogue(){
 const terms=search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
 let count=0;
 for(const card of cards){
  const match=(category==='all'||card.dataset.tags.split(' ').includes(category))&&terms.every(term=>card.dataset.search.includes(term));
  card.hidden=!match;if(match)count++;
  const more=card.querySelector('.more-options');if(more)more.open=terms.length>0&&match;
 }
 document.querySelector('#catalogue-count').textContent=count+' of '+cards.length+' games';
 document.querySelector('#catalogue-empty').hidden=count!==0;
}
search.addEventListener('input',updateCatalogue);
for(const button of filters)button.addEventListener('click',()=>{
 category=button.dataset.category;
 for(const item of filters)item.setAttribute('aria-pressed',String(item===button));
 updateCatalogue();
});
updateCatalogue();
