import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './containers/App/index';
import Home from './components/Home/index';


export default (
    <App>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    </App>
);
