import {connect} from 'react-redux';

import {fetchAllSongsThunk} from '../../actions/all_songs_actions';

import {fetchAllAlbumsThunk} from '../../actions/album_actions';

import {fetchAllArtistsThunk} from '../../actions/artist_actions';
import {fetchArtistSongsThunk, zeroAlbumSongs, zeroArtistSongs} from '../../actions/song_actions'


import WebLauncherHome from './web_launcher_midhome';

import { receiveCurrentSong } from '../../actions/currently_playing_actions';

const mapStateToProps = state => {
  return{
    songs: Object.values(state.entities.allsongs),
    albums: Object.values(state.entities.allAlbums),
    artists: Object.values(state.entities.allArtists)
  }
}


const mapDispatchToProps = dispatch => ({
  getAllSongs: () => dispatch(fetchAllSongsThunk()),
  getAllAlbums: () => dispatch(fetchAllAlbumsThunk()),
  getAllArtists: () => dispatch(fetchAllArtistsThunk()),
  zeroSongsAlbum: () => dispatch(zeroAlbumSongs()),
  zeroSongsArtist: () => dispatch(zeroArtistSongs()),
  receiveArtistSong: (artistId) => dispatch(fetchArtistSongsThunk(artistId)),
  receiveCurrentSong: (songId, songUrl, artist, title, songImageUrl) => dispatch(receiveCurrentSong(songId, songUrl, artist, title, songImageUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(WebLauncherHome);




