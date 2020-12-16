import * as APIUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProduct = ({ product }) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const removeProduct = (product) => ({
    type: REMOVE_PRODUCT,
    product,
})

export const fetchReviews = (product_id) => (dispatch) =>
  APIUtil.fetchReviews(product_id).then((reviews) =>
    dispatch(receiveReviews(reviews))
  );

export const createReview = (review) => (dispatch) =>
  APIUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
  );

export const fetchProducts = () => (dispatch) =>
  APIUtil.fetchProducts().then((products) =>
    dispatch(receiveProducts(products))
  );

export const fetchCategoryProducts = (category) => (dispatch) =>
  APIUtil.fetchCategoryProducts(category).then((products) =>
    dispatch(receiveProducts(products))
  );

export const fetchProduct = (id) => (dispatch) =>
  APIUtil.fetchProduct(id).then((product) => dispatch(receiveProduct(product)));

export const createProduct = (product) => (dispatch) =>
  APIUtil.createProduct(product).then((product) =>
    dispatch(receiveProduct(product))
  );

export const updateProduct = (product) => (dispatch) =>
  APIUtil.updateProduct(product).then((product) =>
    dispatch(receiveProduct(product))
  );

export const deleteProduct = (product_id) => (dispatch) =>
  APIUtil.deleteProduct(product_id).then((product) => dispatch(removeProduct(product)));
