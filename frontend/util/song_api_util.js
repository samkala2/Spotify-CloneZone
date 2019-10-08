export const searchSongs = (title) => (
  $.ajax({
    method: 'GET',
    url: `api/songs?title=${title}`,
    error: (err) => console.log(err)
  })
  
);

export const getAllSongs = () => (
  $.ajax({
    method: 'GET',
    url: "api/songs/all",
    error: (err) => console.log(err)
  })
);