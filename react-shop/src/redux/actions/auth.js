import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_USER,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT
} from './types';
import setToken  from '../../utils/setToken';
import {setAlert } from './alerts';


export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR
    });
  }
};

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({ name, email, password });
  
    try {
      const res = await axios.post('/api/user', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {
        dispatch(setAlert(err.response.data.msg, 'danger'))
        dispatch({
          type: REGISTER_ERROR
        });
    }
  };
  
  
  export const login = (email, password) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({ email, password });
  
    try {
      const res = await axios.post('/api/auth', body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.msg, 'danger'));
      dispatch({
        type: LOGIN_ERROR
      });
    }
  };

  export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
  };