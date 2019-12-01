export const searchPlaylists = (user_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists-for-user?user_id=${user_id}`,
    error: (err) => console.log(err)
  })
);





export const createPlaylist = playlist => (
  $.ajax({
    method: 'POST',
    url: '/api/playlists/new',
    data: { playlist }
  })
);


export const getPlaylistSongsById = id => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`
  })
)