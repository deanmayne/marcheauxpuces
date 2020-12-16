class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
        t.integer :product_id, null: false
        t.integer :liker_id, null: false

      t.timestamps
    end
    add_index :favorites, :product_id, unique: true
    add_index :favorites, :liker_id, unique: true
  end
end
