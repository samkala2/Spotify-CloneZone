import { searchPlaylists } from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS'

export const receivePlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const fetchPlaylistsThunk = (name) => (dispatch) => searchPlaylists(name)
  .then((playlists) => dispatch(receivePlaylists(playlists)));





