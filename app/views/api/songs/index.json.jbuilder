@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title
    if song.mp3song.attached?
      json.songUrl url_for(song.mp3song)
    else
      json.songUrl ""
    end
    json.artist song.artist.name
  end
end
