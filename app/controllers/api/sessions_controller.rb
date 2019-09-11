class Api::SessionsController < ApplicationController

  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Invalid Username or password'], status: 402
    else
      login(@user)
      render 'api/users/show'
    end
  end


  def destroy
    if current_user
      logout
      render json: {} 
    else
      render json: { error: "No user to logout!" }, status: 409
    end
  end


end
