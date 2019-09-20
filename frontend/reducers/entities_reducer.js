import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import ArtistsReducer from './artists_reducer';
import AlbumsReducer from  './albums_reducer'
import SongsReducer from './songs_reducer'
import PlaylistsReducer from './playlists_reducer'

import AllSongsReducer from './all_songs_reducer';


// import benchesReducer from './benches_reducer';

export default combineReducers({
  users: usersReducer,
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  songs: SongsReducer,
  playlists: PlaylistsReducer,
  allsongs: AllSongsReducer
});

