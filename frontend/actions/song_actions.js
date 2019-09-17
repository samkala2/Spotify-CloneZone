import {searchSongs} from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

export const receiveSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const fetchSongsThunk = (title) => dispatch => searchSongs(title)
.then((songs) => dispatch(receiveSongs(songs)));