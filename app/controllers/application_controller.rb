class ApplicationController < ActionController::Base
# CLLR
helper_method :current_user, :logged_in?

  def current_user
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_token!
    @current_user = user
  end

  def logout!
    current_user.try(:reset_token!)
    session[:session_token] = nil
    @current_user = nil
  end

  def require_user
    unless current_user
      render json: ['Please Sign In'], status: 401
    end
  end

end
