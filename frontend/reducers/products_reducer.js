import {
    RECEIVE_REVIEW,
    RECEIVE_PRODUCTS,
    RECEIVE_BENCH
} from '../actions/product_actions';

const productesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.productes;
        case RECEIVE_BENCH:
            const newProduct = { [action.product.id]: action.product };
            return Object.assign({}, state, newProduct);
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            const newState = Object.assign({}, state);
            newState[review.product_id].reviewIds.push(review.id);
            newState[review.product_id].average_rating = average_rating;
            return newState;
        default:
            return state;
    }
};

export default productesReducer;
