import { searchAlbums, getAllAlbums, getAlbumInfo } from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS'
export const RECEIVE_ALBUM_INFO = 'RECEIVE_ALBUM_INFO'

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



// Album Info
export const receiveAlbumInfo = (albumInfo) =>({
  type: RECEIVE_ALBUM_INFO,
  albumInfo
})
//album Info Thunk
export const fetchAlbumInfoThunk = (albumId) => dispatch => getAlbumInfo(albumId)
.then((albumInfo) => dispatch(receiveAlbumInfo(albumInfo)));



