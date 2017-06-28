import {combineReducers} from 'redux';

import contact from './containers/Contact/reducer';
import registered from './containers/Register/reducer';

export default combineReducers({
    contact,
    registered
});