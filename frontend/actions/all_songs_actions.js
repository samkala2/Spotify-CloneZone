import {getAllSongs} from '../util/song_api_util';

export const GET_ALL_SONGS = 'GET_ALL_SONGS';

export const receiveAllSongs = (songs) => ({
  type: GET_ALL_SONGS,
  songs
})

export const fetchAllSongsThunk = () => dispatch => getAllSongs()
.then((songs) => dispatch(receiveAllSongs(songs)))