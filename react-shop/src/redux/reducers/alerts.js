import { SET_ALERT, DELETE_ALERT } from '../actions/types';

const initialState = {
  msg: '',
  variant: '',
  id: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {...state, ...payload};
    case DELETE_ALERT:
      return {...state,
              msg: '',
              variant: '',
              id: null}
    default:
      return state;
  }
}