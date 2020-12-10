import * as APIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';


export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products,
});

export const receiveProduct = ({ product }) => ({
    type: RECEIVE_PRODUCT,
    product,
});

export const receiveReview = ({ review }) => ({
    type: RECEIVE_REVIEW,
    review,
});



export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
);

export const fetchProducts = filters => dispatch => (
    APIUtil.fetchProducts(filters).then(products => (
        dispatch(receiveProducts(products))
    ))
);

export const fetchProduct = id => dispatch => (
    APIUtil.fetchProduct(id).then(payload => (
        dispatch(receiveProduct(payload))
    ))
);

export const createProduct = product => dispatch => (
    APIUtil.createProduct(product).then(product => {
        debugger
        dispatch(receiveProduct(product))
    })
);
