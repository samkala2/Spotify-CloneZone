class Api::PlaylistsongsController < ApplicationController

    def playlist_songs
        query = params[:playlist_id]
        @playlistSongs = Playlistsong.where("playlist_id = '#{query}'")
        render :playlist_songs
    end

    def create
        @playlist_song = Playlistsong.new(playlist_song_params)
        if @playlist_song.save
            render :show
        else
            render json: @playlistSong.errors.full_messages, status: 404
        end
    end
    
    def playlist_song_params
        params.require(:playlistsong).permit(:playlist_id, :song_id, :ord)
    end
end
