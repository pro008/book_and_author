# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin_user = User.create(user_name: "Admin", email: "admin123@gmail.com", is_admin: true, password: "Admin1234")


Publisher.create(name: "VNXK")
Publisher.create(name: "Publish ReUnion")
Publisher.create(name: "P Co.op")


Author.create(name:"Phong Vuong")
Author.create(name:"Felix")
Author.create(name:"Christian")
Author.create(name:"Joel")




Book.create(title: "Straight to Heaven", description: "Long Story", publisher_id: pub_id)
Book.create(title: "Back To Black", description: "", publisher_id: pub_id)
Book.create(title: "Good Girl Gone Bad", description: "", publisher_id: pub_id)
Book.create(title: "Angel Share", description: "", publisher_id: pub_id)


1.upto(10) do |i|
	rand_author = Author.order('RANDOM()').first
	rand_Book = Book.order('RANDOM()').first
	Tag.create(author_id: rand_author.id, book_id: rand_Book.id)
end
