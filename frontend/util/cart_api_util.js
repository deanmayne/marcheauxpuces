export const fetchCartProducts = (shopper_id) => (
  $.ajax({
    url: `/api/carts/`,
    method: "GET",
    data: {shopper_id}
  })
)


export const addToCart = (product) => (
  $.ajax({
    url: `/api/carts/`,
    method: "POST",
    data: {product}
  })
)

export const removeFromCart = (product) => (
  $.ajax({
    url: `/api/carts/`,
    method: "DELETE",
    data: {product}
  })

)