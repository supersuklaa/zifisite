import { h } from 'hyperapp';

import GitHub from './github-logo';

export default () => (
  <div>
    <h2>
      react<span>native</span><br />
      photo<span>browser</span>
      <GitHub a={'https://github.com/supersuklaa/react-native-photobrowser'} />
    </h2>
    Mainly a by-product of a React Native exercise.
    <h3>
      cool things
    </h3>
    <ul>
      <li>infinite scroll</li>
    </ul>
    <h3>
      toolkit
    </h3>
    <ul>
      <li>react native</li>
      <li>eslint</li>
    </ul>
  </div>
);
