import { RECEIVE_USER_PLAYLISTS} from '../actions/playlists_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = { ...state }
  switch (action.type) {
    case RECEIVE_USER_PLAYLISTS:
      return action.playlists
    default:
      return state;
  }
}