import {connect} from 'react-redux';

import AlbumSongs from './album_songs';

import {fetchAlbumSongsThunk} from '../../actions/song_actions'
import {receiveCurrentSong} from '../../actions/currently_playing_actions';



const mapStateToProps = state => {
    return{
        albumSongs: Object.values(state.entities.albumSongs),
        // artistImage: state.entities.artistImage
    }
}

const mapDispatchToProps = dispatch => ({
    receiveAlbumSongs: (albumId) => dispatch(fetchAlbumSongsThunk(albumId)),
    // getArtistImage: (albumId) => dispatch(fetchArtistImageThunk(albumId)),
    receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumSongs)