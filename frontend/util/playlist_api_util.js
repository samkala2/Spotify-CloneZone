

export const searchPlaylists = (name) => (
  $.ajax({
    method: 'GET',
    url: `/api/playlists?name=${name}`,
    error: (err) => console.log(err)
  })
);