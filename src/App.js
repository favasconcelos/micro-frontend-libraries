import { createBrowserHistory } from 'history';
import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';

import Libraries from './containers/Libraries';

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => <Router history={history}><Libraries /></Router>;

App.propTypes = {
  history: PropTypes.any,
};

export default App;
