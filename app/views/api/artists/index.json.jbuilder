@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name
    if artist.picture.attached?
      json.photoUrl url_for(artist.picture)
    else
      json.photoUrl ""
    end
  end
end
