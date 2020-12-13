class Cart < ApplicationRecord
    belongs_to :user,
        foreign_key: :shopper_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

end
