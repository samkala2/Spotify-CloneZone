import {connect} from 'react-redux';

import {fetchAllSongsThunk} from '../../actions/all_songs_actions';

import {fetchAllAlbumsThunk} from '../../actions/album_actions';
import WebLauncherHome from './web_launcher_midhome';

import { receiveCurrentSong } from '../../actions/currently_playing_actions';

const mapStateToProps = state => {
  return{
    songs: Object.values(state.entities.allsongs),
    albums: Object.values(state.entities.allAlbums)
  }
}


const mapDispatchToProps = dispatch => ({
  getAllSongs: () => dispatch(fetchAllSongsThunk()),
  getAllAlbums: () => dispatch(fetchAllAlbumsThunk()),
  receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(WebLauncherHome);




