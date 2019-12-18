class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user 
      # debugger
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Username/Password'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render 'api/users/show'
    else
      render json: ['Please Sign In'], status: 401
    end
  end

end