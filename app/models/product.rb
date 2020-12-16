class Product < ApplicationRecord
    validates :name, :description, :price, :location, :free_shipping, :category, :img_url, presence: true
    validates :free_shipping, inclusion: {in: ["true", "false"]} 

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User,
    optional: true

    has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review

    has_many :carts,
    foreign_key: :product_id,
    class_name: :Cart

    has_many :favorites,
    foreign_key: :product_id,
    class_name: :Favorite

end
