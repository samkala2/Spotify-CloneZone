import { login, logout, signup } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const signupThunk = (user) => (dispatch) => {
  return (signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors))));
};

export const loginThunk = (user) => (dispatch) => login(user)
  .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)));

export const logoutThunk = () => (dispatch) => (logout()
  .then(() => dispatch(logoutCurrentUser())));


