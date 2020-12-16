class Favorite < ApplicationRecord
    validates :liker_id, uniqueness: { scope: :product_id }

    belongs_to :user,
    foreign_key: :liker_id,
    class_name: :User,
    optional: true


end
