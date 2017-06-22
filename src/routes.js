import React from 'react';
import {Route} from 'react-router-dom';

import App from './containers/App/index';
import Home from './components/Home/index';

export default (
  <App>
      <Route exact path='/' component={Home} />
  </App>
);
