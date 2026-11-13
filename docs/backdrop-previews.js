// Playback is always chosen by the visitor, never started by scrolling.
const previews = [...document.querySelectorAll('.live-grid video')];
for (const preview of previews) {
  preview.addEventListener('play', () => {
    for (const other of previews) if (other !== preview) other.pause();
  });
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (!entry.isIntersecting) entry.target.pause();
  });
  for (const preview of previews) observer.observe(preview);
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) for (const preview of previews) preview.pause();
});
