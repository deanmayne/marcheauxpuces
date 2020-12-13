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
    category: "jewelry-accessories",
    free_shipping: "true",
    location: 'San Francisco',
    owner_id: guest.id,

)

p2 = Product.create(
    name: "catcus toothbrush",
    description: "what it says",
    price: 12,
    category: "clothing-shoes",
    free_shipping: "false",
    location: 'Paris',
    owner_id: guest.id,

)

p3 = Product.create(
    name: "dog mittens",
    description: "what it says",
    price: 6,
    category: "home-living",
    free_shipping: "true",
    location: 'Steamboat Springs',
    owner_id: guest.id,

)

p4 = Product.create(
    name: "grooms tears",
    description: "what it says",
    price: 8,
    category: "wedding-party",
    free_shipping: "false",
    location: 'Las Vegas',
    owner_id: guest.id,

)

p5 = Product.create(
    name: "banana bread",
    description: "what it says",
    price: 56,
    category: "toys-entertainment",
    free_shipping: "true",
    location: 'San Antonio',
    owner_id: guest.id,

)

p6 = Product.create(
    name: "my tears",
    description: "something really long but I am not sure what to write so I am typing a bunch so that it will render with a lot of space",
    price: 89,
    category: "arts-collectibles",
    free_shipping: "false",
    location: 'Argentina',
    owner_id: guest.id,

)

p7 = Product.create(
    name: "cat ears",
    description: "something really long but I am not sure what to write so I am typing a bunch so that it will render with a lot of space",
    price: 23,
    category: "craft-supplies",
    free_shipping: "true",
    location: 'Morocco',
    owner_id: guest.id,

)

p8 = Product.create(
    name: "eye of bat",
    description: "something really long but I am not sure what to write so I am typing a bunch so that it will render with a lot of space",
    price: 1,
    category: "gifts-gift-cards",
    free_shipping: "true",
    location: 'Morocco',
    owner_id: guest.id,

)

c1 = Cart.create(
    product_id: p1.id,
    shopper_id: guest.id,
)

c2 = Cart.create(
    product_id: p2.id,
    shopper_id: guest.id,
)

c3 = Cart.create(
    product_id: p3.id,
    shopper_id: guest.id,
)

c4 = Cart.create(
    product_id: p4.id,
    shopper_id: guest.id,
)
