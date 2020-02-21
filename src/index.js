import React from 'react';
import ReactDOM from 'react-dom';
// local
import App from './App';

window.renderLibraries = (containerId, history) => {
  const container = document.getElementById(containerId);
  ReactDOM.render(<App history={history} />, container);
};

window.unmountLibraries = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};