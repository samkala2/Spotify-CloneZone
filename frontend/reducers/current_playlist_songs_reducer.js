import { RECEIVE_PLAYLIST_SONGS} from '../actions/playlists_actions';

export default (state= {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PLAYLIST_SONGS:
        return action.playlistSongs
      default:
        return state;
    }
}