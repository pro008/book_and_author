class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name, limit: 16
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
