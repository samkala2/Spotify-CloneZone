import {RECEIVE_CURRENT_SONG} from '../actions/currently_playing_actions';

let nullStateSong = {
  songId: "1",
  songUrl: "https://craftifybucket.s3.us-east-2.amazonaws.com/1.mp3",
  artist: "Eminem",
  title: "Stan",
  songImageUrl: "https://craftifybucket.s3.us-east-2.amazonaws.com/1song.jpg"

}
export default (state= nullStateSong, action) => {
  Object.freeze(state);
  let newState = { ...state }
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return {songId: action.songId, 
        songUrl: action.songUrl, 
        artist: action.artist, 
        title: action.title,
        songImageUrl: action.songImageUrl}
    default:
      return state;
  }

}