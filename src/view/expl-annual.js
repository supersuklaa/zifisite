import { h } from 'hyperapp';

import GitHub from './github-logo';

export default () => (
  <div>
    <h2>
      expl<span>annual</span>
      <GitHub a='https://github.com/supersuklaa/expl-annual' />
    </h2>
    Data visualization
    of <a target='_blank' href='https://github.com/majori/expl-bot'>expl-bot</a>'s
    usage.
    <h3>
      cool things
    </h3>
    <ul>
      <li>reactive</li>
      <li>data</li>
      <li>visualization</li>
    </ul>
    <h3>
      toolkit
    </h3>
    <ul>
      <li>d3.js</li>
      <li>hyperapp</li>
      <li>eslint</li>
      <li>parcel</li>
    </ul>
  </div>
);
