import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ArtistsReducer from './artists_reducer';
import AlbumsReducer from  './albums_reducer'
import SongsReducer from './songs_reducer'
import PlaylistsReducer from './playlists_reducer'
import SongsForArtistReducer from './song_for_artist_reducer';
import SongsForAlbumReducer from './songs_for_album_reducer';
import AllSongsReducer from './all_songs_reducer';
import ArtistImageReducer from './artist_image';
import AllAbumsReducer from './all_albums_reducer'
import AllArtistsReducer from './all_artists_reducer';
import AlbumInfoReducer from './album_info_reducer';
import CurrentPlaylistSongs from './current_playlist_songs_reducer';


export default combineReducers({
  users: usersReducer,
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  songs: SongsReducer,
  playlists: PlaylistsReducer,
  allsongs: AllSongsReducer,
  allAlbums: AllAbumsReducer,
  artistSongs: SongsForArtistReducer,
  artistImage: ArtistImageReducer,
  allArtists: AllArtistsReducer,
  albumSongs: SongsForAlbumReducer,
  singleAlbumInfo: AlbumInfoReducer,
  playlistSongs: CurrentPlaylistSongs
});

