import {connect} from 'react-redux';

import ArtistSongs from './artist_songs';

import {fetchArtistSongsThunk, fetchArtistImageThunk} from '../../actions/song_actions'
import {receiveCurrentSong} from '../../actions/currently_playing_actions';
import {addPlaylistSong} from '../../util/playlist_song_api_util';
import {zeroAlbumSongs, zeroPlaylistSongs} from '../../actions/song_actions'

function getUniqueAlbums(state) {
    let arraySongs = state.entities.artistSongs;
    let newarr =[] 
    Object.values(arraySongs).forEach(song => newarr.push(song.albumName))
    const distinctAlbumsArr = [...new Set(newarr)]
    return distinctAlbumsArr
}

function returnUniqueImages(distinctAlbumsArr) {

    if (distinctAlbumsArr[0].slice(151) !== distinctAlbumsArr[distinctAlbumsArr.length-1])
    {
        return [distinctAlbumsArr[0], distinctAlbumsArr[distinctAlbumsArr.length-1]] 
    } else if (distinctAlbumsArr[0].slice(151) === distinctAlbumsArr[distinctAlbumsArr.length-1]) {
        return [distinctAlbumsArr[0]] 

    }

}

function getUniqueAlbumImages(state) {
    let arraySongs = state.entities.artistSongs;
    let newarr =[] 
    Object.values(arraySongs).forEach(song => newarr.push(song.songImageUrl))
    const distinctAlbumsArr = [...new Set(newarr)]
    return [distinctAlbumsArr[0], distinctAlbumsArr[distinctAlbumsArr.length-1]] 

    
    // if (arraySongs.length > 0) {

    // setTimeout( function() {if (distinctAlbumsArr[0].slice(151) !== distinctAlbumsArr[distinctAlbumsArr.length-1])
    // {
    //     return [distinctAlbumsArr[0], distinctAlbumsArr[distinctAlbumsArr.length-1]] 
    // } else if (distinctAlbumsArr[0].slice(151) === distinctAlbumsArr[distinctAlbumsArr.length-1]) {
    //     return [distinctAlbumsArr[0]] 

    // }}, 10 )
    // }
}


const mapStateToProps = state => {
    return{
        artistSongs: Object.values(state.entities.artistSongs),
        artistImage: state.entities.artistImage,
        uniqueAlbums: getUniqueAlbums(state),
        uniqueImages: getUniqueAlbumImages(state),
        playlists: Object.values(state.entities.playlists)

    }
}

const mapDispatchToProps = dispatch => ({
    receiveArtistSong: (artistId) => dispatch(fetchArtistSongsThunk(artistId)),
    getArtistImage: (artistId) => dispatch(fetchArtistImageThunk(artistId)),
    receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl)),
    addNewPlaylistSong: (playlistSong) => addPlaylistSong(playlistSong),
    zeroSongsAlbum: () => dispatch(zeroAlbumSongs()),
    zeroSongsPlaylist: () => dispatch(zeroPlaylistSongs()),

})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSongs)