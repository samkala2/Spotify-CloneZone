@songs.each do |song|

    json.set! song.id do 
        json.extract! song, :id, :title, :album_id, :artist_id

        if song.mp3song.attached?
            json.songUrl url_for(song.mp3song)
          else
            json.songUrl ""
          end
    
    end

end