class Api::SongsController < ApplicationController

  # def index
  #   query = ('%' + params[:title].downcase + '%')
   
  #   @songs = Song.where("lower(title) like '#{query}' ") 
  #   render :index
  # end


  def index
    query = ('%' + params[:title].downcase + '%')
   
    @songs = Song.where("lower(title) like '#{query}'") || Song.artist.name.includes(query)
    render :index
  end


  def getall
    @all_songs = Song.all
    render :show
  end
  

  def song_params
    params.require(:song).permit(:title)
  end

  

end
