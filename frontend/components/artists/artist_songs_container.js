import {connect} from 'react-redux';

import ArtistSongs from './artist_songs';

import {fetchArtistSongsThunk} from '../../actions/song_actions'

const mapStateToProps = state => {
    return{
        artistSongs: Object.values(state.entities.artistSongs),
        artists: Object.values(state.entities.artists)
    }
}

const mapDispatchToProps = dispatch => ({
    receiveArtistSong: (artistId) => dispatch(fetchArtistSongsThunk(artistId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSongs)