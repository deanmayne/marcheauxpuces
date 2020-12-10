import {
  RECEIVE_REVIEW,
} from '../actions/product_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      const { review } = action;
      return Object.assign({}, state, { [review.id]: review });
    default:
      return state;
  }
}

export default reviewsReducer;
