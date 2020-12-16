import { connect } from "react-redux";
import { deleteProduct, fetchProduct } from "../../actions/product_actions";
import ProductShow from "./product_show";
import {addToCart} from '../../actions/cart_actions'
import { openModal } from "../../actions/modal_actions";
import { withRouter } from 'react-router';


const mapStateToProps = (state, {match: {params: { productId }}}) => ({

      product: state.entities.products[productId],
      session: state.session.id,
      review: state.entities.reviews,
      productId

    });

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  addToCart: (product) => dispatch(addToCart(product)),
  openModal: modal => dispatch(openModal(modal)),
  deleteProduct: (product_id) => dispatch(deleteProduct(product_id)),
  

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductShow));
