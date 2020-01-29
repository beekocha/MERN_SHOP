import { 
    ADD_ITEM,
    DELETE_ITEM,
    DELETE_ALL,
    BUY_ALL,
    REGISTER_ERROR,
    LOGIN_ERROR,
    LOGOUT
 } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_ITEM:
            return [...state, payload];
        case DELETE_ITEM:
            return state.filter(item => item.id !== payload);
        case REGISTER_ERROR:
        case LOGIN_ERROR:
        case LOGOUT:
        case DELETE_ALL:
        case BUY_ALL:
            return state = [];
        default:
            return state;
    }
}