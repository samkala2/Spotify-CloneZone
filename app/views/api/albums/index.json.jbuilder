@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :name

    if album.album_image.attached?
      json.albumImageUrl url_for(album.album_image)
    else 
      json.albumImageUrl ""
    end

  end


end
