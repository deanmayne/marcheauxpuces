class AddUrls < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :img_url, :string, null: false, default: ""
    change_column :products, :img_url, :string, default: nil
  end
end
