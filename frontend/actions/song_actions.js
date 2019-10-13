import {searchSongs, SongsForArtist} from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ARTIST_SONGS = 'RECEIVE_ARTIST_SONGS';

export const receiveSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const fetchSongsThunk = (title) => dispatch => searchSongs(title)
.then((songs) => dispatch(receiveSongs(songs)));


export const receiveArtistSongs = (songs) => ({
  type: RECEIVE_ARTIST_SONGS,
  songs
});

export const fetchArtistSongsThunk = (artistId) => dispatch => SongsForArtist(artistId)
.then((songs) => dispatch(receiveArtistSongs(songs)));



