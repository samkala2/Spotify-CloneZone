export const addPlaylistSong = playlistsong => (
    $.ajax({
      method: 'POST',
      url: '/api/playlistsongs',
      data: { playlistsong }
    })
  );