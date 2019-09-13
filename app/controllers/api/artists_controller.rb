class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = Artist.find_by(name: params[:name]) || Artist.find(params[:id])
    render :show
    # http://localhost:3000/api/artists/*?title=Anita TO TEST need *?
  end

  def artist_params
    params.require(:artist).permit(:name)
  end

end
