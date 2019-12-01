import {connect} from 'react-redux';
import { getPlaylistSongsById} from '../../util/playlist_api_util';


// import getfirstlaylist for component did mount

import Library from './library.js'

const mapStateToProps = state => {
    return{
        playlists: Object.values(state.entities.playlists)        
    }
}


const mapDispatchToProps = dispatch => ({
    fetchPlaylistSongs: playlistId => getPlaylistSongsById(playlistId)
})

export default connect(mapStateToProps, mapDispatchToProps)(Library)