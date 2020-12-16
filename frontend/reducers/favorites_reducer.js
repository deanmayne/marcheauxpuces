import {
  RECEIVE_FAVORITES,
  RECEIVE_FAVORITE,
  REMOVE_FAVORITE
} from "../actions/favorites_actions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVORITES:
      return action.products;
    case RECEIVE_FAVORITE:
      const newProduct = { [action.product.id]: action.product };
      return Object.assign({}, state, newProduct);
    case REMOVE_FAVORITE:
      let nextState = Object.assign({}, state);
      delete nextState[action.product.id];
      return nextState;
    default:
      return state;
  }
};

export default favoritesReducer;
