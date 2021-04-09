class Author < ApplicationRecord
  validates :name, presence: true
  
  has_many :tags
  has_many :books, through: :tags
end

