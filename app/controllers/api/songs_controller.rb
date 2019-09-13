class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find_by(title: params[:title]) 
    render :show
    # http://localhost:3000/api/songs/*?title=Anita TO TEST need *?
  end

  def song_params
    params.require(:song).permit(:title)
  end

end
