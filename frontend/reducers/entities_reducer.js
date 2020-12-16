import { combineReducers } from 'redux';

import productsReducer from './products_reducer';
import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer';
import cartsReducer from './carts_reducer';
import favoritesReducer from './favorites_reducer';


const entitiesReducer =  combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  reviews: reviewsReducer,
  favorites: favoritesReducer,
  users: usersReducer
});

export default entitiesReducer;