import {connect} from 'react-redux';
import { getPlaylistSongsById} from '../../util/playlist_api_util';
import {fetchPlaylistsThunk } from '../../actions/playlists_actions';


// import getfirstlaylist for component did mount

import Library from './library.js'

const mapStateToProps = state => {
    return{
        userId:  Object.values(state.entities.users),
        playlists: Object.values(state.entities.playlists)        
    }
}


const mapDispatchToProps = dispatch => ({
    fetchPlaylistSongs: playlistId => getPlaylistSongsById(playlistId),
    getUserPlaylists: (id) => dispatch(fetchPlaylistsThunk(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Library)