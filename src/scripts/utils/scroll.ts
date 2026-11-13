/** Run `callback` at most once per frame while the page scrolls (and once straight away). */
export function onScrollFrame(callback: (scrollY: number) => void): void {
  let ticking = false;
  const run = () => {
    callback(window.scrollY);
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    },
    { passive: true },
  );
  run();
}
