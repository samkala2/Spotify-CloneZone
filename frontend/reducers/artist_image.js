import {RECEIVE_ARTIST_IMAGE} from '../actions/song_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = { ...state}
    switch(action.type) {
      case RECEIVE_ARTIST_IMAGE:
        return action.artistInfo 
      default:
        return state;
    }
  }