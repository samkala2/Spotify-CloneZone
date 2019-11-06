import {connect} from 'react-redux';

import ArtistSongs from './artist_songs';

import {fetchArtistSongsThunk, fetchArtistImageThunk} from '../../actions/song_actions'
import {receiveCurrentSong} from '../../actions/currently_playing_actions';


function getUniqueAlbums(state) {
    let arraySongs = state.entities.artistSongs;
    let newarr =[] 
    Object.values(arraySongs).forEach(song => newarr.push(song.albumName))
    const distinctAlbumsArr = [...new Set(newarr)]
    return distinctAlbumsArr
}

function getUniqueAlbumImages(state) {
    let arraySongs = state.entities.artistSongs;
    let newarr =[] 
    Object.values(arraySongs).forEach(song => newarr.push(song.songImageUrl))
    const distinctAlbumsArr = [...new Set(newarr)]
    return distinctAlbumsArr
}

// function getSongsByAlbum(state) {

//     let distinctAlbumsArr = getUniqueAlbums(state);

//     let dividedAlbumSongs = [];

//     distinctAlbumsArr.forEach( (albumName) => {
//         let subArraySongs = this.props.artistSongs.filter(song => 
//             song.albumName === albumName )
//         dividedAlbumSongs.push(subArraySongs)
//         subArraySongs = [];
        
//     } )
//     return dividedAlbumSongs
// }


const mapStateToProps = state => {
    return{
        artistSongs: Object.values(state.entities.artistSongs),
        artistImage: state.entities.artistImage,
        uniqueAlbums: getUniqueAlbums(state),
        uniqueImages: getUniqueAlbumImages(state)
    }
}

const mapDispatchToProps = dispatch => ({
    receiveArtistSong: (artistId) => dispatch(fetchArtistSongsThunk(artistId)),
    getArtistImage: (artistId) => dispatch(fetchArtistImageThunk(artistId)),
    receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSongs)