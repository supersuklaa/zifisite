import { h } from 'hyperapp';

import GitHub from './github-logo';

export default () => (
  <div>
    <h2>
      hyper<span>sudoku</span>
      <GitHub a='https://github.com/supersuklaa/hyper-sudoku' />
    </h2>
    Very basic sudoku single page application.
    <h3>
      cool things
    </h3>
    <ul>
      <li>sudoku's are always cool</li>
      <li>css grid</li>
    </ul>
    <h3>
      toolkit
    </h3>
    <ul>
      <li>hyperapp</li>
      <li>eslint</li>
      <li>parcel</li>
    </ul>
  </div>
);
