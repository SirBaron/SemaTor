'use strict';
for (const key of document.querySelectorAll('[data-control]')) {
 const select = () => {
  for (const button of document.querySelectorAll('[data-control]')) button.setAttribute('aria-pressed', String(button.dataset.control === key.dataset.control));
  for (const row of document.querySelectorAll('[data-row]')) row.classList.toggle('active', row.dataset.row === key.dataset.control);
  document.querySelector('.readout').textContent = key.dataset.action;
 };
 key.addEventListener('click', select);
 key.addEventListener('focus', select);
 key.addEventListener('pointerenter', select);
}
const search = document.querySelector('#game-search');
if (search) search.addEventListener('input', () => {
 const query = search.value.trim().toLowerCase(); let count = 0;
 for (const card of document.querySelectorAll('.game-card')) {
  card.hidden = !card.textContent.toLowerCase().includes(query);
  if (!card.hidden) count++;
 }
 document.querySelector('#search-status').textContent = count ? `${count} game guide${count === 1 ? '' : 's'}` : 'No matching games. Try another title or genre.';
});
