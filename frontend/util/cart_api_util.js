export const fetchCartProducts = (shopper_id) => (
  $.ajax({
    url: `/api/carts/`,
    method: "GET",
    data: {shopper_id}
  })
)


export const addToCart = ({ cart }) => (
  $.ajax({
    url: `/api/carts/`,
    method: "POST",
    data: {cart}
  })
)

export const removeFromCart = ({product}) => (
  $.ajax({
    url: `/api/carts/`,
    method: "DELETE",
    data: {product}
  })

)