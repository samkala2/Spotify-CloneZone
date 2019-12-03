import {RECEIVE_CURRENT_PLAYLIST} from '../actions/playlists_actions';

export default (state= {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_PLAYLIST:
        return action.playlist
      default:
        return state;
    }
}