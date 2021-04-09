class SessionsController < ApplicationController
  def index 
    signed_in_user
    render json:{ user: current_user }
  end

  def create
    user = User.find_by(email: params[:session][:user][:email].downcase)
    if user && user.authenticate(params[:session][:user][:password])
      sign_in user
      render json:{ message: 'Login Successful', user: user }
    else
      render json: { message: 'Login has failed' }, status: 401
    end
  end

  def destroy
    sign_out
    render json:{ logged_out: true }
  end
end
