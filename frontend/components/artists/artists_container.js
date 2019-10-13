import {connect} from 'react-redux';

import Artists from './artists_index';
import {fetchAlbumsThunk} from '../../actions/album_actions'
import {fetchArtistsThunk} from '../../actions/artist_actions';
import {fetchSongsThunk} from '../../actions/song_actions';
import {fetchPlaylistsThunk} from '../../actions/playlists_actions';
import {receiveCurrentSong} from '../../actions/currently_playing_actions';
import {fetchArtistSongsThunk} from '../../actions/song_actions'

const mapStateToProps = state => {
  
  return {
  artists: Object.values(state.entities.artists) ,
  albums: Object.values(state.entities.albums),
  songs: Object.values(state.entities.songs),
  playlists: Object.values(state.entities.playlists)
}}

const mapDispatchToProps = dispatch => ({
  search: (name) => dispatch(fetchArtistsThunk(name)),
  searchAlbum: (name) => dispatch(fetchAlbumsThunk(name)),
  searchSongs: (title) => dispatch(fetchSongsThunk(title)),
  searchPlaylists: (name) => dispatch(fetchPlaylistsThunk(name)),
  receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl)),
  receiveArtistSong: (artistId) => dispatch(fetchArtistSongsThunk(artistId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Artists);

