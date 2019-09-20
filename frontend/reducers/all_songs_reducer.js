import {GET_ALL_SONGS} from '../actions/all_songs_actions';

export default (state ={}, action) => {
  Object.freeze(state);
  let newState = { ...state} 
  switch (action.type) {
  case GET_ALL_SONGS:
    return action.songs
  default: 
    return state;
  }
}