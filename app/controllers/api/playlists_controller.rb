class Api::PlaylistsController < ApplicationController


  def index
    @playlists = Playlist.all
    render :index
  end

  def show
    @playlist = Playlist.find_by(name: params[:name]) || Playlist.find(params[:id])
    render :show
    # http://localhost:3000/api/playlists/*?title=Anita TO TEST need *?
  end

  def playlist_params
    params.require(:playlist).permit(:name)
  end

end
