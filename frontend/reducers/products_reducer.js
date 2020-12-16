import {
    REMOVE_PRODUCT,
    RECEIVE_PRODUCTS,
    RECEIVE_PRODUCT
} from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            const newProduct = { [action.product.id]: action.product };
            return Object.assign({}, state, newProduct);
        case REMOVE_PRODUCT:
            let nextState = Object.assign({}, state)
            delete nextState[action.product.id];
            return nextState;
        default:
            return state;
    }
};

export default productsReducer;
