import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './containers/App/index';
import Home from './components/Home/index';
import Application from './components/Application/index';
import Property from './components/Property/index';

export default (
    <App>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/application' component={Application}/>
            <Route path="/property/:address" component={Property}/>
        </Switch>
    </App>
);
