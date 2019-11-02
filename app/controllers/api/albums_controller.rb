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

  

  def album_params
    params.require(:album).permit(:name)
  end

end
