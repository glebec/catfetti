import kittyUL from 'src/img/kitty-ul.png';
import kittyUM from 'src/img/kitty-um.png';
import kittyUR from 'src/img/kitty-ur.png';
import kittyLL from 'src/img/kitty-ll.png';
import kittyLM from 'src/img/kitty-lm.png';
import kittyLR from 'src/img/kitty-lr.png';

const kittyImages = [
  kittyUL, kittyUM, kittyUR,
  kittyLL, kittyLM, kittyLR
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
