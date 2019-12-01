class Api::SongsController < ApplicationController

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

  def songs_for_playlist
    query = params[:song_ids]
    @songs = Song.where("id in '#{query}'")
  end

  
  def get_artist_image
    query = params[:artist_id]
    @artist1 = Artist.find(query)
    render :artist_image
  end

  

  def song_params
    params.require(:song).permit(:title, :artist_id, :song_ids)
  end

  

end
