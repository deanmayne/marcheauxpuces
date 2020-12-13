import { connect } from "react-redux";
import {
  addToCart,
    receiveCartProducts,
  removeFromCart,
} from "../../actions/cart_actions";
import {
  fetchProducts,
} from "../../actions/product_actions";
import { openModal } from "../../actions/modal_actions";
import CartIndex from "./cart_index";

const mapStateToProps = (state, ownProps) => {

  return {
    carts: Object.values(state.entities.carts),
    shopper_id: state.session.id,
    loaded: false
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    fetchProducts: () => dispatch(fetchProducts()),
    receiveCartProducts: (shopper_id) => dispatch(receiveCartProducts(shopper_id)),
    openModal: (modal) => openModal(modal)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);
