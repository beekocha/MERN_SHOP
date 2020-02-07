import { combineReducers } from 'redux';
import basket from './basket';
import auth from './auth';
import alerts from './alerts';

export default combineReducers({
    basket,
    auth,
    alerts
});