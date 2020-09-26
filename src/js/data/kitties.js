import kittyUL from 'src/img/colorful/kitty-ul.png';
import kittyUM from 'src/img/colorful/kitty-um.png';
import kittyUR from 'src/img/colorful/kitty-ur.png';
import kittyLL from 'src/img/colorful/kitty-ll.png';
import kittyLM from 'src/img/colorful/kitty-lm.png';
import kittyLR from 'src/img/colorful/kitty-lr.png';
import kittyLLM from 'src/img/colorful/kitty-llm.png';

const kittyImages = [
  kittyUL, kittyUM, kittyUR,
  kittyLL, kittyLM, kittyLR,
  kittyLLM
].map(src => {
  const kitty = new Image();
  kitty.src = src;
  return kitty;
});

function randomKittyImage () {
  const idx = Math.floor(Math.random() * kittyImages.length);
  return kittyImages[idx];
}

export default randomKittyImage;
