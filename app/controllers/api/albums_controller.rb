class Api::AlbumsController < ApplicationController

  def index
    query = ('%' + params[:name].downcase + '%')
    
    @albums = Album.where("lower(name) like '#{query}' ") 
    render :index
  end

  def show
    @album = Album.find_by(name: params[:name]) || Album.find(params[:id])
    render :show
    # http://localhost:3000/api/albums/*?name=Anita TO TEST need *?
  end

  def album_params
    params.require(:album).permit(:name)
  end

end
