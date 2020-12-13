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

p1 = Product.create(
    name: "hedghog pillow",
    description: "what it says",
    price: 10,
    category: "home-living",
    free_shipping: "true",
    location: 'San Francisco',
    owner_id: guest.id,

)

p2 = Product.create(
    name: "catcus toothbrush",
    description: "what it says",
    price: 12,
    category: "gift-gift-cards",
    free_shipping: "true",
    location: 'Paris',
    owner_id: guest.id,

)

p3 = Product.create(
    name: "dog mittens",
    description: "what it says",
    price: 6,
    category: "clothing-shoes",
    free_shipping: "true",
    location: 'Steamboat Springs',
    owner_id: guest.id,

)

p4 = Product.create(
    name: "grooms tears",
    description: "what it says",
    price: 8,
    category: "wedding-party",
    free_shipping: "true",
    location: 'Las Vegas',
    owner_id: guest.id,

)

c1 = Cart.creat(
    product_id: p1.id,
    shopper_id: guest.id
)

c2 = Cart.creat(
    product_id: p2.id,
    shopper_id: guest.id
)

c3 = Cart.creat(
    product_id: p3.id,
    shopper_id: guest.id
)

c4 = Cart.creat(
    product_id: p4.id,
    shopper_id: guest.id
)
