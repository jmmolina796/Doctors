import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import baseStyles from './styles/';
import App from './components/App';

const element = (
  <App />
);

const render = () => {
  baseStyles();
  ReactDOM.render(element, document.getElementById('root'));
};

render();
registerServiceWorker();
