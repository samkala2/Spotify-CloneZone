

export const searchArtists = (name) => (
  $.ajax({
    method: 'GET',
    url: `/api/artists?name=${name}`,
    error: (err) => console.log(err)
  })
);