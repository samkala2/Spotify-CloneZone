class Api::PlaylistsController < ApplicationController

  def user_playlists
    query = params[:user_id]
    @playlists = Playlist.joins(:user).where("users.id ='#{query}'")
    render :playlists
  end


  def create_playlist
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render :new
    else
      render json: @playlist.errors.full_messages, status: 404
    end
  end

  def show
    query = params[:id]
    @playlist = Playlist.find(query)
    if @playlist
      render :show
    else
      render json: @playlist.errors.full_messages, status: 404
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist.destroy
      render json: {message: "playlist deleted successfully"} 
    else
      render json: { error: "No user to logout!" }, status: 409
    end
  end

  # def get_playlist_name
  #   query = params[:playlist_id]
  #   @playlist = Playlist.find(query)
  #   if @playlist
  #     render :playlist_name
  #   else
  #     render json: @playlist.errors.full_messages, status: 404
  #   end
  # end

  def playlist_params
    params.require(:playlist).permit(:name, :user_id, :playlist_id)
  end

end
