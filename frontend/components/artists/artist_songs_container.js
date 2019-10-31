import {connect} from 'react-redux';

import ArtistSongs from './artist_songs';

import {fetchArtistSongsThunk, fetchArtistImageThunk} from '../../actions/song_actions'
import {receiveCurrentSong} from '../../actions/currently_playing_actions';



const mapStateToProps = state => {
    return{
        artistSongs: Object.values(state.entities.artistSongs),
        artistImage: state.entities.artistImage
    }
}

const mapDispatchToProps = dispatch => ({
    receiveArtistSong: (artistId) => dispatch(fetchArtistSongsThunk(artistId)),
    // search: (name) => dispatch(fetchArtistsThunk(name)),
    getArtistImage: (artistId) => dispatch(fetchArtistImageThunk(artistId)),
    receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSongs)