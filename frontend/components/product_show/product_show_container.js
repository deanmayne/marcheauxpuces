import { connect } from "react-redux";
import { deleteProduct, fetchProduct } from "../../actions/product_actions";
import ProductShow from "./product_show";
import {addToCart} from '../../actions/cart_actions'
import { openModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router';
import {addFavoriteProduct, fetchFavoriteProducts, removeFavoriteProduct} from '../../actions/favorites_actions';


const mapStateToProps = (state, {match: {params: { productId }}}) => ({

      product: state.entities.products[productId],
      session: state.session.id,
      review: state.entities.reviews,
      favorites: state.entities.favorites,
      productId

    });

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  addToCart: (product) => dispatch(addToCart(product)),
  openModal: (modal) => dispatch(openModal(modal)),
  deleteProduct: (product_id) => dispatch(deleteProduct(product_id)),
  fetchFavoriteProducts: (liker_id) =>
    dispatch(fetchFavoriteProducts(liker_id)),
    removeFavoriteProduct: (product_id) => dispatch(removeFavoriteProduct(product_id)),
    addFavoriteProduct: (product) => dispatch(addFavoriteProduct(product)) 

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductShow));
