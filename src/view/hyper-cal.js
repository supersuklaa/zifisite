import { h } from 'hyperapp';

import GitHub from './github-logo';

export default () => (
  <div>
    <h2>
      hyper<span>cal</span>
      <GitHub a={'https://github.com/supersuklaa/hyper-cal'} />
    </h2>
    Very basic calendar single page application.
    <h3>
      cool things
    </h3>
    <ul>
      <li>1st experiment with hyperapp</li>
      <li>spa stuff:
        <ul>
          <li>service workers</li>
          <li>local storage</li>
          <li>treat page as an app</li>
        </ul>
      </li>
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
