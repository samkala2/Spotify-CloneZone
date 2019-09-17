import { searchAlbums } from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS'

export const receiveAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const fetchAlbumsThunk = (name) => (dispatch) => searchAlbums(name)
  .then((albums) => dispatch(receiveAlbums(albums)));





