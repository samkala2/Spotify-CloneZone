

export const searchAlbums = (name) => (
  $.ajax({
    method: 'GET',
    url: `/api/albums?name=${name}`,
    error: (err) => console.log(err)
  })
);