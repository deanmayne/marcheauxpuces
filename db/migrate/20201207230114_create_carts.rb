class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
        t.integer :product_id, null: false
        t.integer :shopper_id, null: false

      t.timestamps
    end
    add_index :carts, :product_id
    add_index :carts, :shopper_id
  end
end
