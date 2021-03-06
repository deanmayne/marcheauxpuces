import * as APIUtil from '../util/favorites_api_utl';

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export const receiveFavoriteProducts = (products) =>({
    type: RECEIVE_FAVORITES,
    products,
})

export const receiveFavoriteProduct = (product) => ({
  type: RECEIVE_FAVORITE,
  product,
});

export const removeFavorite = (product) => ({
  type: REMOVE_FAVORITE,
  product,
});

export const removeFavoriteProduct = (product_id) => (dispatch) =>
  APIUtil.removeFromFavorites(product_id).then((product) =>
    dispatch(removeFavorite(product))
  );

export const addFavoriteProduct = (product) => (dispatch) =>
  APIUtil.addToFavorites(product).then((product) =>
    dispatch(receiveFavoriteProduct(product))
  );

export const fetchFavoriteProducts = (liker_id) => (dispatch) =>
  APIUtil.fetchFavoriteProducts(liker_id).then((products) =>
    dispatch(receiveFavoriteProducts(products))
  );



