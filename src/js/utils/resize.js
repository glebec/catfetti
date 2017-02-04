// Optimized resize using RAF
// https://developer.mozilla.org/en-US/docs/Web/Events/resize

import raf from 'raf';

const throttleEventAs = function (type, name, obj = window) {
  let running = false;
  const func = () => {
    if (running) return;
    running = true;
    raf(() => {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  obj.addEventListener(type, func);
};

throttleEventAs('resize', 'optimizedResize');

export default function addOptimizedResizeListener (func) {
  window.addEventListener('optimizedResize', func);
}
