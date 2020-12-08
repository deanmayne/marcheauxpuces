class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
        t.string :name, null: false
        t.text :description, null: false
        t.float :price, null: false
        t.string :category, null: false
        t.boolean :free_shipping, null: false
        t.string :location, null: false
        t.integer :owner_id, null: false


      t.timestamps
    end
    add_index :products, :owner_id
  end
end
