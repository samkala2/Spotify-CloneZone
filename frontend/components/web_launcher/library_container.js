import {connect} from 'react-redux';

// import getfirstlaylist for component did mount

import Library from './library.js'

const mapStateToProps = state => {
    return{
        playlists: Object.values(state.entities.playlists)        
    }
}


const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Library)