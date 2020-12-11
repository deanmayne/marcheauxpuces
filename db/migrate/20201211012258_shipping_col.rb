class ShippingCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :free_shipping
    add_column :products, :free_shipping, :string
    add_column :products, :rating, :integer
    change_column_null :products, :free_shipping, true
  end
end
