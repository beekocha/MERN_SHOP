import { GET_ITEMS, GET_ITEMS_ERROR } from './types';
import axios from 'axios';

export const getItems = () => dispatch => {
    axios.get('/api/items')
    .then( res => dispatch(
        {type: GET_ITEMS,
        payload: res.data}
    ))
    .catch((error) => dispatch({
        type: GET_ITEMS_ERROR,
        payload: error
    }))
};