import uuid from 'uuid';
import { ADD_ITEM,
         DELETE_ITEM ,
         DELETE_ALL,
         BUY_ALL
        } from './types';
        
export const addItem = (item)  => {
    item.id = uuid.v4();
    return({
        type: ADD_ITEM,
        payload: item
    })
};

export const deleteItem = (id) => {
    return({
        type: DELETE_ITEM,
        payload: id
    })
}

export const buyAll = (id) => {
    return({
        type: BUY_ALL,
        payload: id
    })
}

export const deleteAll = (id) => {
    return({
        type: DELETE_ALL,
        payload: id
    })
}