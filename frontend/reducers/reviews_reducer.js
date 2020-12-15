import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS
} from '../actions/product_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      const { review } = action;
      debugger
      return Object.assign({}, state, review);
      case RECEIVE_REVIEWS:
      const {reviews} = action;
      return reviews
    default:
      return state;
  }
}

export default reviewsReducer;
