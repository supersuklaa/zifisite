
import bg from '../images/bgs/balint-wittinger-1221390-unsplash.jpg';
import bg2 from '../images/bgs/jack-cain-326608-unsplash.jpg';
import bg3 from '../images/bgs/junfeng-gao-1162041-unsplash.jpg';
import bg4 from '../images/bgs/victor-hughes-1189867-unsplash.jpg';

const bgs = [
  bg,
  bg2,
  bg3,
  bg4,
].sort(() => 0.5 - Math.random());

export default {
  bgs,
  bg: bgs[0],
  bgColor: '#000',
  aColor: '#aaa',
};
