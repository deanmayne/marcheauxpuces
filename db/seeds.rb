# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Product.destroy_all
Cart.destroy_all


guest = User.create(
    username: 'guest_user',
    password: 'demouser'

)

philip = User.create(
    username: 'philip',
    password: 'philiplau'

)


100.times do
    name = Faker::Commerce.unique.product_name



    Product.create(
    name: name,
    description: Faker::Lorem.sentences(number: 4).join(" "),
    price: Faker::Commerce.price(range: 0..100.0),
    category: ["jewelry-accessories","clothing-shoes","home-living","wedding-party","toys-entertainment","arts-collectibles","craft-supplies","gifts-gift-cards"].sample,
    free_shipping: ["true","false"].sample,
    img_url:  "https://source.unsplash.com/300x300/?" + name.split(" ")[-2].downcase + "," + name.split(" ").last.downcase + "&content-filter=low",
    location: Faker::Address.full_address.split(", ").drop(1).join(", ")[/([a-zA-Z\s])+\,\s[a-zA-Z]{2}/],
    owner_id: [guest.id, philip.id].sample

    )

end

