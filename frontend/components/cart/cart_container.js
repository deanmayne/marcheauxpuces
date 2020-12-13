import { connect } from "react-redux";
import {
  addToCart,
    receiveCartProducts,
  removeFromCart,
} from "../../actions/cart_actions";
import { openModal } from "../../actions/modal_actions";
import CartIndex from "./cart_index";

const mapStateToProps = (state) => {

  return {
    products: Object.values(state.entities.products),
    shopper_id: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    receiveCartProducts: (shopper_id) => dispatch(receiveCartProducts(shopper_id)),
    openModal: (modal) => openModal(modal)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);
