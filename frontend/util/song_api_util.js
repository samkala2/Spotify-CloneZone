export const searchSongs = (title) => (
  $.ajax({
    method: 'GET',
    url: `api/songs?title=${title}`,
    error: (err) => console.log(err)
  })
);