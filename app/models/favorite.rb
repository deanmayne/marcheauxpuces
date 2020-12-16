class Favorite < ApplicationRecord
    validates :liker_id, uniqueness: { scope: :product_id }

    belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User,
    optional: true

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product,
    optional: true


end
