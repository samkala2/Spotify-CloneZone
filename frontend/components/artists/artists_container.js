import {connect} from 'react-redux';

import Artists from './artists_index';
import {fetchAlbumsThunk} from '../../actions/album_actions'
import {fetchArtistsThunk} from '../../actions/artist_actions';
import {fetchSongsThunk} from '../../actions/song_actions';
import {fetchPlaylistsThunk} from '../../actions/playlists_actions';
import {receiveCurrentSong} from '../../actions/currently_playing_actions';
import {fetchArtistSongsThunk} from '../../actions/song_actions'
import {addPlaylistSong} from '../../util/playlist_song_api_util';

const mapStateToProps = state => {
  
  return {
  topArtists: Object.values(state.entities.artists).slice(0).reverse().slice(0,5),
  artists: Object.values(state.entities.artists),
  topAlbums: Object.values(state.entities.albums).slice(0,5),
  albums: Object.values(state.entities.albums),
  topsongs: Object.values(state.entities.songs).slice(0).reverse().slice(0,5),
  songs: Object.values(state.entities.songs).slice(0).reverse(),
  playlists: Object.values(state.entities.playlists)
}}

const mapDispatchToProps = dispatch => ({
  search: (name) => dispatch(fetchArtistsThunk(name)),
  searchAlbum: (name) => dispatch(fetchAlbumsThunk(name)),
  searchSongs: (title) => dispatch(fetchSongsThunk(title)),
  searchPlaylists: (name) => dispatch(fetchPlaylistsThunk(name)),
  receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl)),
  receiveArtistSong: (artistId) => dispatch(fetchArtistSongsThunk(artistId)),
  addNewPlaylistSong: (playlistSong) => addPlaylistSong(playlistSong),
  

})

export default connect(mapStateToProps, mapDispatchToProps)(Artists);

