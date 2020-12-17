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
Review.destroy_all
Favorite.destroy_all


guest = User.create(
    username: 'guest_user',
    password: 'demouser'

)

philip = User.create(
    username: 'philip',
    password: 'philiplau'

)

dean = User.create(
    username: 'dean',
    password: 'deanmayne'

)


cart = 1
50.times do
    name = Faker::Commerce.unique.product_name

    size = (400..600).to_a.sample.to_s

    product = Product.create(
        name: name,
        description: Faker::Lorem.sentences(number: 4).join(" "),
        price: Faker::Commerce.price(range: 0..100.0),
        category: ["jewelry-accessories","clothing-shoes","home-living","wedding-party","toys-entertainment","arts-collectibles","craft-supplies","gifts-gift-cards"].sample,
        free_shipping: ["true","false"].sample,
        img_url:  "https://source.unsplash.com/random/" + size + "x" + size + "/?" + name.split(" ").last.downcase + "&content-filter=low" + "&orientation=squarish",
        location: Faker::Address.full_address.split(", ").drop(1).join(", ")[/([a-zA-Z\s])+\,\s[a-zA-Z]{2}/],
        owner_id: [guest.id, philip.id].sample

    )

    review = Review.create(
        body: Faker::Lorem.sentences(number: 8).join(" "),
        rating: Faker::Number.within(range: 1..5),
        product_id: product.id,
        author_id: philip.id
    )

    review1 = Review.create(
        body: Faker::Lorem.sentences(number: 8).join(" "),
        rating: Faker::Number.within(range: 1..5),
        product_id: product.id,
        author_id: guest.id
    )

    favorite = Favorite.create(
        product_id: product.id,
        liker_id: [guest.id, philip.id].sample
    )

    if cart < 6 && product.owner_id != guest.id
        Cart.create(
            shopper_id: guest.id,
            product_id: product.id
        )
        cart += 1
    end


end

