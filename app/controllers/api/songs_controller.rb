class Api::SongsController < ApplicationController

  def index
    query = ('%' + params[:title].downcase + '%')
    # debugger
    @songs = Song.where("lower(title) like '#{query}' ") 
    render :index
  end

  def show
    @song = Song.find_by(title: params[:title]) || Song.find(params[:id])
    render :show
    # http://localhost:3000/api/songs/*?title=Anita TO TEST need *?
  end

  def song_params
    params.require(:song).permit(:title)
  end

  

end
