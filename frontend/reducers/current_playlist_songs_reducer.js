import { RECEIVE_PLAYLIST_SONGS} from '../actions/playlists_actions';
import { ZERO_OUT_PLAYLIST_SONGS} from '../actions/song_actions'
export default (state= {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PLAYLIST_SONGS:
        return action.playlistSongs
      case ZERO_OUT_PLAYLIST_SONGS:
          return {} 
      default:
        return state;
    }
}