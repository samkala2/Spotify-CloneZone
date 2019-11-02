

export const searchAlbums = (name) => (
  $.ajax({
    method: 'GET',
    url: `/api/albums?name=${name}`,
    error: (err) => console.log(err)
  })
);



export const getAllAlbums = () => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/all`,
    error: (err) => console.log(err)
  })
);