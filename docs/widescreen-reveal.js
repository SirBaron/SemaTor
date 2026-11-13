'use strict';
(() => {
  const images = [...document.querySelectorAll('img[data-wide-reveal]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const replay = document.querySelector('[data-wide-replay]');
  const updateReplay = () => {
    if (!replay) return;
    replay.hidden = !('IntersectionObserver' in window);
    replay.disabled = false;
    replay.textContent = reducedMotion.matches ? 'Play 4:3 → widescreen · automatic motion off' : 'Replay 4:3 → widescreen';
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

  function prepare(image, allowMotion = false) {
    if ((reducedMotion.matches && !allowMotion) || !image.naturalWidth || image.closest('.wide-reveal')) return;
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
      if (reducedMotion.matches) {
        if (!allowMotion) frame.classList.add('is-revealed');
        return;
      }
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
    const image = document.querySelector('#wide img[data-wide-reveal]');
    if (!image) return;
    prepare(image, true);
    const frame = image.closest('.wide-reveal');
    if (!frame) return;
    // An explicit click opts this picture into one animation; automatic motion stays off.
    frame.classList.toggle('is-manual', reducedMotion.matches);
    frame.classList.remove('is-revealed');
    void frame.offsetWidth;
    requestAnimationFrame(() => requestAnimationFrame(() => frame.classList.add('is-revealed')));
  });
  reducedMotion.addEventListener('change', event => {
    updateReplay();
    observer.disconnect();
    pending.clear();
    document.querySelectorAll('.wide-reveal').forEach(frame => frame.classList.remove('is-manual'));
    if (event.matches) {
      document.querySelectorAll('.wide-reveal').forEach(frame => frame.classList.add('is-revealed'));
    } else {
      images.forEach(image => prepare(image));
      document.querySelectorAll('.wide-reveal').forEach(frame => {
        frame.classList.remove('is-revealed');
        observer.observe(frame);
      });
    }
  });
})();
