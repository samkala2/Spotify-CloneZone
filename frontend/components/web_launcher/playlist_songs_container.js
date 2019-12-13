import {connect} from 'react-redux';
import PlaylistSongs from './playlist_songs';
import { fetchPlaylistSongs, fetchCurrentPlaylist } from '../../actions/playlists_actions'
import {receiveCurrentSong} from '../../actions/currently_playing_actions';

import { deletePlaylist } from '../../util/playlist_api_util'

import { deletePlaylistSong} from '../../util/playlist_song_api_util'

import {zeroArtistSongs, zeroAlbumSongs} from '../../actions/song_actions'

const mapStateToProps = state => ({
   songs: state.entities.playlistSongs,
   currentPlaylist: state.entities.currentPlaylist
})

const mapDispatchToProps = dispatch => ({
   getPlaylistSongs: (id) => dispatch(fetchPlaylistSongs(id)),
   getCurrentPlaylist: (id) => dispatch(fetchCurrentPlaylist(id)),
   receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl)),
   deletePlaylistById: (id) => deletePlaylist(id),
   zeroSongsArtist: () => dispatch(zeroArtistSongs()),
   zeroSongsAlbum: () => dispatch(zeroAlbumSongs()),
   deletePlaylistSong: (id) => deletePlaylistSong(id)
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSongs)