import {connect} from 'react-redux';
import PlaylistSongs from './playlist_songs';
import { fetchPlaylistSongs } from '../../actions/playlists_actions'
import {receiveCurrentSong} from '../../actions/currently_playing_actions';


const mapStateToProps = state => ({
   songs: state.entities.playlistSongs
})

const mapDispatchToProps = dispatch => ({
   getPlaylistSongs: (id) => dispatch(fetchPlaylistSongs(id)),
   receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl)),

})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSongs)