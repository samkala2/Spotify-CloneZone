import {RECEIVE_ALBUM_SONGS, ZERO_OUT_ALBUMSONGS} from '../actions/song_actions';


export default (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state}
    switch(action.type) {
      case RECEIVE_ALBUM_SONGS:
        return action.songs 
      case ZERO_OUT_ALBUMSONGS:
        return {}
      default:
        return state;
    }
  }