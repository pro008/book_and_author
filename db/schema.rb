# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_04_142301) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.integer "gender"
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "publisher_id"
  end

  create_table "publishers", force: :cascade do |t|
    t.string "name"
  end

  create_table "tags", force: :cascade do |t|
    t.integer "author_id"
    t.integer "book_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name", limit: 16
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_admin", default: false
    t.string "remember_token"
    t.index ["remember_token"], name: "index_users_on_remember_token"
  end

end
