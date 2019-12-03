import {connect} from 'react-redux';

import AlbumSongs from './album_songs';

import {fetchAlbumSongsThunk, fetchArtistSongsThunk} from '../../actions/song_actions'
import {receiveCurrentSong} from '../../actions/currently_playing_actions';

import {fetchAlbumInfoThunk} from '../../actions/album_actions';

import {addPlaylistSong} from '../../util/playlist_song_api_util';

const mapStateToProps = state => {
    return{
        albumSongs: Object.values(state.entities.albumSongs),
        albumInfo: Object.values(state.entities.singleAlbumInfo),
        playlists: Object.values(state.entities.playlists)
    }
}

const mapDispatchToProps = dispatch => ({
    receiveAlbumSongs: (albumId) => dispatch(fetchAlbumSongsThunk(albumId)),
    getAlbumInfo: (albumId) => dispatch(fetchAlbumInfoThunk(albumId)),
    receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl)),
    receiveArtistSong: (artistId) => dispatch(fetchArtistSongsThunk(artistId)),
    addNewPlaylistSong: (playlistSong) => addPlaylistSong(playlistSong),
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumSongs)