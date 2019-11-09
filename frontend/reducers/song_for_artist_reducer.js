import {RECEIVE_ARTIST_SONGS, ZERO_OUT_ARTIST_SONGS} from '../actions/song_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state}
    switch(action.type) {
      case RECEIVE_ARTIST_SONGS:
        return action.songs
      case ZERO_OUT_ARTIST_SONGS:
        return {} 
      default:
        return state;
    }
  }