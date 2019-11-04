import {RECEIVE_ALBUM_INFO} from '../actions/album_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state}
    switch(action.type) {
      case RECEIVE_ALBUM_INFO:
        return action.albumInfo 
      default:
        return state;
    }
  }