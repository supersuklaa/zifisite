import { h } from 'hyperapp';

import svg from '../../images/github.svg';

export default ({ a }) => {
  if (a) {
    return (
      <a href={a} target='_blank'>
        <img src={svg} class='gh-logo' />
      </a>
    );
  }

  return (<img src={svg} class='gh-logo' />);
};
