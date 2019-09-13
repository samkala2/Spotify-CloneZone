@songs.each do |song|
  json.set! song.id do
    json.title song.title
    json.artist song.artist.name
    json.album song.album.name
  end
end
