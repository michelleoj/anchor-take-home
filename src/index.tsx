import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Player from './components/player';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Player />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
