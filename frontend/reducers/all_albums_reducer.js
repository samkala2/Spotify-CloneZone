import { RECEIVE_ALL_ALBUMS } from '../actions/album_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = { ...state }
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return action.albums
    default:
      return state;
  }

  
}