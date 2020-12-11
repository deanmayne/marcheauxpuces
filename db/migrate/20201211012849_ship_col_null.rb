class ShipColNull < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :free_shipping
    add_column :products, :free_shipping, :string, null: false, default: ""
    change_column :products, :free_shipping, :string, default: nil
  end
end
