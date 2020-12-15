import { connect } from "react-redux";
import { fetchProduct, fetchReviews } from "../../actions/product_actions";
import ProductShow from "./product_show";
import {addToCart} from '../../actions/cart_actions'
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state, {match: {params: { productId }}}) => ({

      product: state.entities.products[productId],
      session: state.session.id,
      review: state.entities.reviews,
      productId

    });

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  addToCart: (product) => dispatch(addToCart(product)),
  openModal: modal => dispatch(openModal(modal))

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
