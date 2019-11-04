

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


export const getAlbumInfo = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `/api/album/info?album_id=${albumId}`,
    error: (err) => console.log(err)
  })
);




