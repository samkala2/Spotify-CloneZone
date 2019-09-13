@albums.each do |album|
  json.set! album.id do
    json.name album.name
    json.artist album.artist.name
    json.songs album.songs do |song|
      json.set! song.id do 
      json.id song.id
      json.title song.title
      end
    end
  end
end
