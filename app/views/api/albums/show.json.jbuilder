@albums.each do |album|

  json.set! album.id do

    json.extract! album, :id, :name
    json.artistName album.artist.name
    json.artistId album.artist.id


    if album.album_image.attached?
      json.albumImageUrl url_for(album.album_image)
    else 
      json.albumImageUrl ""
    end



    json.songs album.songs do |song|
      json.set! song.id do 
        json.id song.id
        json.title song.title
      end
    end

    

  end

end
