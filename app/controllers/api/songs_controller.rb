class Api::SongsController < ApplicationController

  # def index
  #   query = ('%' + params[:title].downcase + '%')
   
  #   @songs = Song.where("lower(title) like '#{query}' ") 
  #   render :index
  # end


  def index
    query = ('%' + params[:title].downcase + '%')
    @songs = Song.where("lower(title) like '#{query}' ") + Song.joins(:artist).where("lower(artists.name) like '#{query}' ")
    render :index
  end


  def getall
    @all_songs = Song.all
    render :show
  end

  def songs_for_artist
    query = params[:artist_id]
    @songs = Song.joins(:artist).where("artists.id = '#{query}' ")
    render :specific
  end
  

  def song_params
    params.require(:song).permit(:title, :artist_id)
  end

  

end
