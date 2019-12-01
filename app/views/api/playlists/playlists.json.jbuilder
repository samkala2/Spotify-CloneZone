@playlists.each do |playlist|

    json.set! playlist.id do
        json.extract! playlist, :id, :name

        # if playlist.songs.length > 0
        #     json.playlistImageUrl playlist.songs[0]
        # else
        #     json.playlistImageUrl "enss"
        # end

    end
    
end
