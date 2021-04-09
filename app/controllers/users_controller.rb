class UsersController < ApplicationController
  before_action :signed_in_user, only: [:index, :edit, :update, :destroy]
  before_action :correct_user,   only: [:edit, :update]
  before_action :admin_user,     only: :destroy

  def index
    @users = User.all
    render json:{ users: @users }
    # If more User we can use paginate
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in @user unless signed_in?
      render json:{ message: "Create Successful", user: @user }
    else
      render json: { error: @user.errors.messages }, status: 500
    end
  end

  def edit
    render json: { user: @user }
  end

  def update
    if @user.update_attributes(update_user_params)
      render json:{ status: 200 }
    else
      render json: { message: @user.errors.messages.to_s }, status: 500
    end
  end

  def destroy
    User.find(params[:id]).destroy
    render json:{ status: 200 }
  end

  private

    def user_params
      params.require(:user).permit(:email, :user_name, :password,
                                   :password_confirmation)
    end

    def update_user_params
      params.require(:user).permit(:email, :user_name)
    end

    # Before filters

    def correct_user
      @user = User.find(params[:id])

      return true if current_user.is_admin

      render json:{}, status: 401 unless current_user?(@user)
    end

    def admin_user
      render json:{}, status: 401 unless current_user.is_admin
    end
  end
