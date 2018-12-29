import { h } from 'hyperapp';

import logo from '../../images/logo.png';

import ZifiBlock from './zifisite';
import SudokuBlock from './hyper-sudoku';
import CalBlock from './hyper-cal';
import LunzBlock from './lunz-bot';
import PhotoBlock from './rn-photobrowser';
import ExplBlock from './expl-annual';

export default ({ bg }, { setPalette }) => (
  <div id='master-of-puppets' oncreate={() => setPalette(bg)}>
    <div id='satumaa-tango'>
      <img src={logo} class='logo' />
    </div>
    <div id='saturday-night'>
      <ZifiBlock />
      <hr/>
      <CalBlock />
      <hr/>
      <ExplBlock />
      <hr/>
      <SudokuBlock />
      <hr/>
      <LunzBlock />
      <hr/>
      <PhotoBlock />
    </div>
  </div>
);
