import 'src/index.html';
import 'furtiveCSS';
import 'src/css/style.css';

import initialize from 'src/js/catfetti';

window.addEventListener('load', function init () {
  window.removeEventListener('load', init, false);
  initialize();
});

console.log('Meow!');
