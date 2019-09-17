import {searchArtists} from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS'

export const receiveArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const fetchArtistsThunk = (name) => (dispatch) => searchArtists(name)
.then( (artists) => dispatch(receiveArtists(artists)));





