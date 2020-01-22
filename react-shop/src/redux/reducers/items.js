import { GET_ITEMS, GET_ITEMS_ERROR } from '../actions/types';

const initialState = [];

export default function(state = initialState, action ) {
    const { type, payload } = action;

    switch (type) {
        case GET_ITEMS:
            return state= payload
        case GET_ITEMS_ERROR:
            return state=[]
        default:
            return state;
    }
}