import {connect} from 'react-redux';

import WebLauncher from './web_launcher';

import { receiveCurrentSong } from '../../actions/currently_playing_actions';


const mapStateToProps = state => {
  return {
    currentlyPlaying: state.currentlyPlaying
  }
}


const mapDispatchToProps = dispatch => ({
  receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(WebLauncher);