class Product < ApplicationRecord
    validates :name, :description, :price, :location, :free_shipping, :category, presence: true
    validates :free_shipping, inclusion: {in: ["true", "false"]} 

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User 

  has_many :reviews,
    foreign_key: :product_id,
    class_name: :Review

end
