import meowSrc1 from 'src/audio/m1.m4a';
import meowSrc2 from 'src/audio/m2.m4a';
import meowSrc3 from 'src/audio/m3.m4a';
import meowSrc4 from 'src/audio/m4.m4a';

const meow = src => {
  const audio = document.createElement('audio');
  audio.src = src;
  return audio;
};

const meows = [
  meowSrc1, meowSrc2,
  meowSrc3, meowSrc4
].map(meow);

const randomMeow = () => meows[Math.floor(Math.random() * meows.length)];

export default randomMeow;
