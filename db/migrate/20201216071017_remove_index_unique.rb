class RemoveIndexUnique < ActiveRecord::Migration[5.2]
  def change

    remove_index :favorites, :product_id
    remove_index :favorites, :liker_id
    
    add_index :favorites, :product_id
    add_index :favorites, :liker_id

  end
end
