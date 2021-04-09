class Book < ApplicationRecord
  validates :title, presence: true
  
  belongs_to :publisher
  
  has_many :tags
  has_many :authors, through: :tags

  def list_authors
  	authors.pluck(:name).uniq.join(', ')
	end

	def book_infor
		{id: id, title: title, author_name: list_authors, publisher_name: publisher.name}
	end
end

