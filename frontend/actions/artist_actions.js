import {searchArtists, getAllArtists} from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS'
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS'

export const receiveArtists = (artists) => ({
  type: RECEIVE_ARTISTS,
  artists
});


//Thunk
export const fetchArtistsThunk = (name) => (dispatch) => searchArtists(name)
.then( (artists) => dispatch(receiveArtists(artists)));




export const receiveAllArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});


export const fetchAllArtistsThunk = (name) => (dispatch) => getAllArtists(name)
.then( (artists) => dispatch(receiveAllArtists(artists)));
