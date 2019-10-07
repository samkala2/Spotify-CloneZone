class Api::ArtistsController < ApplicationController

  def index
    query = ('%' + params[:name].downcase + '%')
    @artists = Artist.where("lower(name) like '#{query}' ") #look up % interpolating
    render :index
  end


  

    # Artist.where("name LIKE '%E%'")

    
    # def show
    #   @artist = Artist.find_by(name: params[:name]) || Artist.find(params[:id])
    #   render :show
    #   # http://localhost:3000/api/artists/*?title=Anita TO TEST need *?
    # end

  def artist_params
    params.require(:artist).permit(:name)
  end

end
