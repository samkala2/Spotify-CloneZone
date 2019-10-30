import {connect} from 'react-redux';

import ArtistSongs from './artist_songs';

import {fetchArtistSongsThunk} from '../../actions/song_actions'
import {receiveCurrentSong} from '../../actions/currently_playing_actions';


const mapStateToProps = state => {
    return{
        artistSongs: Object.values(state.entities.artistSongs),
        artists: state.entities.artists
    }
}

const mapDispatchToProps = dispatch => ({
    receiveArtistSong: (artistId) => dispatch(fetchArtistSongsThunk(artistId)),
    receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSongs)