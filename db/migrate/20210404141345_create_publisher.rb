class CreatePublisher < ActiveRecord::Migration[5.2]
  def change
  	add_column :books, :publisher_id, :integer

    create_table :publishers do |t|
    	t.string :name
    end
  end
end
