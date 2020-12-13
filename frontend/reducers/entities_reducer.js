import { combineReducers } from 'redux';

import productsReducer from './products_reducer';
import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer';
import cartsReducer from './carts_reducer';


const entitiesReducer =  combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  reviews: reviewsReducer,
  users: usersReducer
});

export default entitiesReducer;