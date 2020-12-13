import {
  RECEIVE_CART_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/cart_actions";

const cartsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_TO_CART:
      newState[action.product.id] = action.product;
      return newState;
    case RECEIVE_CART_PRODUCTS:
      return action.products;
    case REMOVE_FROM_CART:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default cartsReducer;
