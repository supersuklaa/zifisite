
import bg from '../images/GeminidAurora_Hansen1_960.jpg';
import bg2 from '../images/CaliforniaNebula_Falls_960.jpg';
import bg3 from '../images/OrionFalls_Wu_960.jpg';
import bg4 from '../images/AuroraCrater_ISS_1080.jpg';

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
