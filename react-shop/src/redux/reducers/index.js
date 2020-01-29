import { combineReducers } from 'redux';
import basket from './basket';
import items from './items';
import auth from './auth';
import alerts from './alerts';

export default combineReducers({
    basket,
    items,
    auth,
    alerts
});