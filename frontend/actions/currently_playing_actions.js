export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

export const receiveCurrentSong = (songId, songUrl, artist, title) => ({
  type: RECEIVE_CURRENT_SONG,
  songId: songId,
  songUrl: songUrl,
  artist: artist,
  title: title
});

