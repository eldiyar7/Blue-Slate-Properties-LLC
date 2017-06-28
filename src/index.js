import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import routes from './routes';
import store from './store';

import createHistory from 'history/createBrowserHistory'
const history = createHistory();


ReactDOM.render(
    <Provider store={store}>
        <Router
            history={history}
            children={routes}>
        </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();

store.subscribe(() => {
    console.log('Store changed', store.getState());
});
