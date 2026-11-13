'use strict';
(() => {
  const images = [...document.querySelectorAll('img[data-wide-reveal]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const pending = new Set();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting || entry.intersectionRatio < 0.35) continue;
      const frame = entry.target;
      observer.unobserve(frame);
      pending.delete(frame);
      // Keep the original 4:3 crop still briefly before the sides open.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        frame.classList.add('is-revealed');
      }));
    }
  }, {threshold: 0.35});

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
      pending.add(frame);
      observer.observe(frame);
    });
    if ('ResizeObserver' in window) {
      const resize = new ResizeObserver(() => {
        if (!frame.classList.contains('is-revealed')) measure();
        else resize.disconnect();
      });
      resize.observe(image);
    }
  }

  for (const image of images) {
    if (image.complete) prepare(image);
    else image.addEventListener('load', () => prepare(image), {once:true});
  }
  reducedMotion.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    pending.clear();
    document.querySelectorAll('.wide-reveal').forEach(frame => frame.classList.add('is-revealed'));
  });
})();
