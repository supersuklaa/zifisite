import { h } from 'hyperapp';

import GitHub from './github-logo';

export default () => (
  <div>
    <h2>
      lunz<span>bot</span>
      <GitHub a='https://github.com/supersuklaa/lunz-bot' />
    </h2>
    Telegram bot that searches lunches.
    <h3>
      cool things
    </h3>
    <ul>
      <li>finds food</li>
      <li>telegram's native buttons</li>
      <li>website scraping</li>
    </ul>
    <h3>
      toolkit
    </h3>
    <ul>
      <li>telegraf</li>
      <li>postgres</li>
      <li>request + cheerio</li>
    </ul>
  </div>
);
