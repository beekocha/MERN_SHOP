import uuid from 'uuid';
import { SET_ALERT, DELETE_ALERT } from './types';

export const setAlert = (msg, variant, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, variant, id }
  });

  setTimeout(() => dispatch({ type: DELETE_ALERT, payload: id }), timeout);
};