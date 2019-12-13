class Api::PlaylistsongsController < ApplicationController


    def create
        @playlist_song = Playlistsong.new(playlist_song_params)
        if @playlist_song.save
            render :show
        else
            render json: @playlistSong.errors.full_messages, status: 404
        end
    end

    def destroy
        @playlist_song = Playlistsong.find(params[:id])
        if @playlist_song.destroy
        render json: {message: "Song removed from playlist successfully"} 
        else
        render json: { error: "Unable to delete songs" }, status: 409
        end
    end
    
    def playlist_song_params
        params.require(:playlistsong).permit(:playlist_id, :song_id, :ord)
    end
end
