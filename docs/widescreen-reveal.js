'use strict';
(() => {
  const images = [...document.querySelectorAll('img[data-wide-reveal]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const replay = document.querySelector('[data-wide-replay]');
  const updateReplay = () => {
    if (!replay) return;
    replay.hidden = !('IntersectionObserver' in window);
    replay.disabled = reducedMotion.matches;
    replay.textContent = reducedMotion.matches ? 'Full image shown · reduced motion' : 'Replay 4:3 → widescreen';
  };
  updateReplay();
  if (!('IntersectionObserver' in window)) return;

  const pending = new Set();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const frame = entry.target;
      if (!entry.isIntersecting) {
        frame.classList.remove('is-revealed');
        pending.delete(frame);
        continue;
      }
      if (entry.intersectionRatio < 0.5 || pending.has(frame)) continue;
      pending.add(frame);
      // Keep the original 4:3 crop still briefly before the sides open.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (pending.has(frame)) frame.classList.add('is-revealed');
      }));
    }
  }, {threshold: [0, 0.5]});

  function prepare(image) {
    if (reducedMotion.matches || !image.naturalWidth || image.closest('.wide-reveal')) return;
    const frame = document.createElement('span');
    frame.className = 'wide-reveal';
    image.before(frame);
    frame.append(image);
    function measure() {
      const box = image.getBoundingClientRect();
      const sourceRatio = image.naturalWidth / image.naturalHeight;
      // Contained thumbnails can have letterboxing. Measure the picture, not its padding.
      const style = getComputedStyle(image);
      const contentWidth = box.width - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      const contentHeight = box.height - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
      const pictureHeight = style.objectFit === 'contain' ? Math.min(contentHeight, contentWidth / sourceRatio) : contentHeight;
      frame.style.setProperty('--wide-inset', Math.max(0, (box.width - pictureHeight * 4 / 3) / 2) + 'px');
    }
    measure();
    // Wait for the initial crop to paint before observing an already-visible hero.
    requestAnimationFrame(() => {
      if (reducedMotion.matches) { frame.classList.add('is-revealed'); return; }
      observer.observe(frame);
    });
    if ('ResizeObserver' in window) {
      const resize = new ResizeObserver(() => {
        measure();
      });
      resize.observe(image);
    }
  }

  for (const image of images) {
    if (image.complete) prepare(image);
    else image.addEventListener('load', () => prepare(image), {once:true});
  }
  if (replay) replay.addEventListener('click', () => {
    if (reducedMotion.matches) return;
    const frame = document.querySelector('#wide .wide-reveal');
    if (!frame) return;
    frame.classList.remove('is-revealed');
    void frame.offsetWidth;
    requestAnimationFrame(() => requestAnimationFrame(() => frame.classList.add('is-revealed')));
  });
  reducedMotion.addEventListener('change', event => {
    updateReplay();
    observer.disconnect();
    pending.clear();
    if (event.matches) {
      document.querySelectorAll('.wide-reveal').forEach(frame => frame.classList.add('is-revealed'));
    } else {
      images.forEach(prepare);
      document.querySelectorAll('.wide-reveal').forEach(frame => {
        frame.classList.remove('is-revealed');
        observer.observe(frame);
      });
    }
  });
})();
