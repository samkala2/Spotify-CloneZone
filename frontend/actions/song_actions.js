import {searchSongs, SongsForArtist, GetArtistImage, SongsForAlbum} from '../util/song_api_util';
import {deletePlaylistSong} from '../util/playlist_song_api_util' ;

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ARTIST_SONGS = 'RECEIVE_ARTIST_SONGS';
export const RECEIVE_ARTIST_IMAGE = 'RECEIVE_ARTIST_IMAGE';
export const RECEIVE_ALBUM_SONGS = 'RECEIVE_ALBUM_SONGS';
export const ZERO_OUT_ALBUMSONGS = 'ZERO_OUT_ALBUMSONGS';
export const ZERO_OUT_ARTIST_SONGS = 'ZERO_OUT_ARTIST_SONGS';
export const ZERO_OUT_PLAYLIST_SONGS = 'ZERO_OUT_PLAYLIST_SONGS';
export const DELETE_PLAYLIST_SONG =  'DELETE_PLAYLIST_SONG';



export const zeroAlbumSongs = () => ({
  type: ZERO_OUT_ALBUMSONGS
});

export const zeroArtistSongs = () => ({
  type: ZERO_OUT_ARTIST_SONGS
});

export const zeroPlaylistSongs = () => ({
  type: ZERO_OUT_PLAYLIST_SONGS
});

export const receiveSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});





// Thunk
export const fetchSongsThunk = (title) => dispatch => searchSongs(title)
.then((songs) => dispatch(receiveSongs(songs)));



export const receiveArtistSongs = (songs) => ({
  type: RECEIVE_ARTIST_SONGS,
  songs
});
// Thunk
export const fetchArtistSongsThunk = (artistId) => dispatch => SongsForArtist(artistId)
.then((songs) => dispatch(receiveArtistSongs(songs)));



// ALBUM SONGS
export const receiveAlbumSongs = (songs) => ({
  type: RECEIVE_ALBUM_SONGS,
  songs
})

// ALBUM SONGS Thunk
export const fetchAlbumSongsThunk = (albumId) => dispatch => SongsForAlbum(albumId)
.then((songs) => dispatch(receiveAlbumSongs(songs)));




// Artist IMAGE Actions
// Artist Image
export const receiveArtistImage = (artistInfo) =>({
  type: RECEIVE_ARTIST_IMAGE,
  artistInfo
})
//Artist Image Thunk
export const fetchArtistImageThunk = (artistId) => dispatch => GetArtistImage(artistId)
.then((artistInfo) => dispatch(receiveArtistImage(artistInfo)));




// export const deletePlaylistSongThunk = (playlistSongId) => dispatch => deletePlaylistSong(playlistSongId)
// .then((mess) => dispatch(receiveArtistImage(artistInfo)));
