@artists.each do |artist|
  json.set! artist.id do
    json.name artist.name
    json.albums artist.albums do |album|
      json.set! album.id do
        json.id album.id
        json.name album.name 
      end
    end
  end
end
