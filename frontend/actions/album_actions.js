import { searchAlbums, getAllAlbums } from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS'

export const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums
});


export const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});


export const fetchAlbumsThunk = (name) => (dispatch) => searchAlbums(name)
  .then((albums) => dispatch(receiveAlbums(albums)));


  export const fetchAllAlbumsThunk = (name) => (dispatch) => getAllAlbums(name)
  .then((albums) => dispatch(receiveAllAlbums(albums)));





