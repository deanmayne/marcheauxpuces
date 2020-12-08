import { combineReducers } from 'redux';

import productsReducer from './products_reducer';
import reviewsReducer from './reviews_reducer';
import usersReducer from './users_reducer';


const entitiesReducer =  combineReducers({
  products: productsReducer,
  reviews: reviewsReducer,
  users: usersReducer
});

export default entitiesReducer;