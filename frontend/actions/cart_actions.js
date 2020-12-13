import * as APIUtil from "../util/cart_api_util";

export const RECEIVE_CART_PRODUCTS = "RECEIVE_CART_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const receivecartproducts = ({products}) => ({
  type: RECEIVE_CART_PRODUCTS,
  products,
});

export const addtocart = ({ product }) => ({
  type: ADD_TO_CART,
  product,
});

export const removefromcart = ({ product }) => ({
  type: REMOVE_FROM_CART,
  product,
});

export const addToCart = (product) => (dispatch) =>
  APIUtil.addToCart(product).then((product) =>
    dispatch(addtocart(product))
  );

export const receiveCartProducts = (shopper_id) => (dispatch) =>
  APIUtil.fetchCartProducts(shopper_id).then((products) =>
    dispatch(receivecartproducts(products))
  );

export const removeFromCart = (product) => (dispatch) =>
  APIUtil.removeFromCart(product).then((product) =>
    dispatch(removefromcart(product))
  );



