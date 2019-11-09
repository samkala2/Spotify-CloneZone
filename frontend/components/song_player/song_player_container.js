import {connect} from 'react-redux';

import { receiveCurrentSong } from '../../actions/currently_playing_actions';

import SongPlayer from './song_player';

const mapStateToProps = state => {
  return{
    allSongs: Object.values(state.entities.allsongs),
    currentlyPlaying: state.currentlyPlaying,
    albumSongs: Object.values(state.entities.albumSongs),
    artistSongs: Object.values(state.entities.artistSongs)
  }
}


const mapDispatchToProps = dispatch => ({
  receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongPlayer);




