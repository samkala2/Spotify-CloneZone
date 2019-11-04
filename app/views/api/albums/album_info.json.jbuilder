    json.extract! @album, :id, :name

    if @album.album_image.attached?
        json.albumImageUrl url_for(@album.album_image)
    else
        json.albumImageUrl ""
    end

    json.artistName @album.artist.name

    json.artistId @album.artist.id

