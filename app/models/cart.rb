class Cart < ApplicationRecord
    belongs_to :user,
        foreign_key: :shopper_id,
        class_name: :User

    has_many :products,
        foreign_key: :product_id,
        class_name: :Product
end
