// Keep looping previews optional, including when reduced motion is requested.
const backdropToggle = document.querySelector('#backdrop-motion');
const backdropImages = [...document.querySelectorAll('img[data-animation]')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let playing = false;
function setBackdropMotion(active) {
  playing = active && !reducedMotion.matches;
  for (const image of backdropImages) {
    if (!image.dataset.still) image.dataset.still = image.getAttribute('src');
    image.src = playing ? image.dataset.animation : image.dataset.still;
  }
  backdropToggle.setAttribute('aria-pressed', String(playing));
  backdropToggle.textContent = playing ? 'Pause backdrop previews' : 'Play backdrop previews';
  backdropToggle.disabled = reducedMotion.matches;
  if (reducedMotion.matches) backdropToggle.textContent = 'Still previews · reduced motion';
}
backdropToggle.addEventListener('click', () => setBackdropMotion(!playing));
reducedMotion.addEventListener('change', () => setBackdropMotion(false));
setBackdropMotion(false);
