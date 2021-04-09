class BooksController < ApplicationController
  before_action :signed_in_user
  before_action :load_book, only: %i[update destroy show]

  def index
    # books = Book.all.joins("LEFT JOIN tags ON books.id = authors.id", :publisher)
    q_books = Book.all.left_outer_joins(:tags => :author).joins(:publisher).
                       select("authors.name as author_name, books.*, publishers.name as publisher_name").
                       distinct.group_by{|b| b.title}
    
    books = q_books.map do |book_name, book|
      data ||= book.first.as_json
      data['author_name'] = book.pluck(:author_name).join (', ')

      data
    end
    
    render json:{ books: books }
  end

  def get_publisher
    render json:{ publishers: Publisher.all }
  end

  def show
    render json:{ book: @book }
  end

  def update
  	if @book.update_attributes(book_params)
      render json:{ book: @book }
    else
      render json: { message: @book.errors.messages.to_s }, status: 500
    end
  end

  def create
    @book = Book.new(book_params)
  
    if (@book.save)
      render json:{ book: @book}
    else
      render json: {}, status:400
    end
  end

  def destroy
    @book.destroy

    render json:{ status: 200 }
  end

  private

  def load_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :description, :publisher_id, author_ids:[])
  end
end