import { combineReducers } from 'redux';
import basket from './basket';
import items from './items';

export default combineReducers({
    basket,
    items
});