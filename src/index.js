import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import routes from './routes';
import history from './history';


ReactDOM.render(
    <Router
        history={history}
        children={routes}>
    </Router>,
    document.getElementById('root'));

registerServiceWorker();
