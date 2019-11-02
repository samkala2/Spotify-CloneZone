

export const searchArtists = (name) => (
  $.ajax({
    method: 'GET',
    url: `/api/artists?name=${name}`,
    error: (err) => console.log(err)
  })
);


export const getAllArtists = () => (
  $.ajax({
    method: 'GET',
    url: `/api/artists/all`,
    error: (err) => console.log(err)
  })
);