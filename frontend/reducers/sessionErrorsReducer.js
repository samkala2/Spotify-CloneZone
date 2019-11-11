import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, ZERO_ERRORS } from '../actions/session_actions';

const SessionErrorsReducer = (errors = [], action) => {
  let newErrors = [];
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
      return newErrors;
    case ZERO_ERRORS:
      return {};
    default:
      return errors;
  }
};

export default SessionErrorsReducer;