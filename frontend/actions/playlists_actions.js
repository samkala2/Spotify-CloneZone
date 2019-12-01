import { searchPlaylists, getPlaylistSongsById} from '../util/playlist_api_util';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_PLAYLIST_SONGS = 'RECEIVE_PLAYLIST_SONGS';

export const receiveUserPlaylists = (playlists) => ({
  type: RECEIVE_USER_PLAYLISTS,
  playlists
});

export const fetchPlaylistsThunk = (id) => (dispatch) => searchPlaylists(id)
  .then((playlists) => dispatch(receiveUserPlaylists(playlists)));



export const receiveCurrentPlaylistSongs = (playlistSongs) => ({
  type: RECEIVE_PLAYLIST_SONGS,
  playlistSongs
})

export const fetchPlaylistSongs = (id) => dispatch => getPlaylistSongsById(id)
.then((playlistSongs) => dispatch(receiveCurrentPlaylistSongs(playlistSongs)) )
