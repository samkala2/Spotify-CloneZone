class Api::AlbumsController < ApplicationController

  def index
    query = ('%' + params[:name].downcase + '%')
    @albums = Album.where("lower(name) like '#{query}' ") + Album.joins(:artist).where("lower(artists.name) like '#{query}' ")
    render :index
  end



  def getall
    @albums = Album.all
    render :show
  end

  def songs_for_album
    query = params[:album_id]
    @songs = Song.joins(:album).where("albums.id = '#{query}'")
    render :specific
  end

  

  def album_params
    params.require(:album).permit(:name, :album_id)
  end

end
