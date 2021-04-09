class AuthorsController < ApplicationController
  before_action :signed_in_user
  before_action :load_author, only: %i[update destroy show]

  def index
    @authors = Author.all
    render json:{ authors: @authors }
    # If more Author we can use paginate
  end

  def create
    @author = Author.new(author_params)
    if @author.save
      sign_in @author unless signed_in?
      render json:{ message: "Create Successful", author: @author }
    else
      render json: { error: @author.errors.messages }, status: 500
    end
  end

  def show
    render json:{ author: @author }
  end

  def edit
    render json: { author: @author }
  end

  def update
    if @author.update_attributes(author_params)
      render json:{ author: @author }
    else
      render json: { message: @author.errors.messages.to_s }, status: 500
    end
  end

  def destroy
    Author.find(params[:id]).destroy
    render json:{ status: 200 }
  end

  private

    def author_params
      params.require(:author).permit(:name)
    end

    def load_author
      @author = Author.find(params[:id])
    end

  end
