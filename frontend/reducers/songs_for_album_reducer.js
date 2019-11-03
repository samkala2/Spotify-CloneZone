import {RECEIVE_ALBUM_SONGS} from '../actions/song_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state}
    switch(action.type) {
      case RECEIVE_ALBUM_SONGS:
        return action.songs 
      default:
        return state;
    }
  }