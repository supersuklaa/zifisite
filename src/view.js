import { h } from 'hyperapp';

import logo from '../images/logo.png';

import ZifiBlock from './zifisite';
import SudokuBlock from './hyper-sudoku';
import CalBlock from './hyper-cal';

export default ({ bg }, { setPalette, setBg }) => (
  <div id='master-of-puppets' onupdate={() => setPalette(bg)} oncreate={() => setBg(bg)}>
    <div id='satumaa-tango'>
      <img src={logo} class='logo' />
    </div>
    <div id='saturday-night'>
      <ZifiBlock />
      <CalBlock />
      <SudokuBlock />
    </div>
  </div>
);
