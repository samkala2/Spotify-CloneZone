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

export const SongsForArtist = (artistId) => (
  $.ajax({
    method: 'GET',
    url: `api/songs/artist/?artist_id=${artistId}`,
    error: (err) => console.log(err)
  })
)

export const SongsForAlbum = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `api/songs/album?album_id=${albumId}`
  })
)

export const GetArtistImage =  (artistId) =>(
  $.ajax({
    method: 'GET',
    url: `api/songs/image/?artist_id=${artistId}`,
    error: (err) => console.log(err)
  })
)


