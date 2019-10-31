
    json.extract! @artist1, :id, :name
    if @artist1.picture.attached?
    json.photoUrl url_for(artist.picture)
    else
    json.photoUrl ""
    end
