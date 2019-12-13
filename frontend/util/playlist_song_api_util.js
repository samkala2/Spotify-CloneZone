export const addPlaylistSong = playlistsong => (
    $.ajax({
      method: 'POST',
      url: '/api/playlistsongs',
      data: { playlistsong }
    })
);


export const deletePlaylistSong = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlistsongs/${id}`,
  })
);
