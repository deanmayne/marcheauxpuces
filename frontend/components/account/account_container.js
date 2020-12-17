import { connect } from "react-redux";

import Account from "./account";
import {fetchOwnedProducts} from '../../actions/product_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  products: Object.values(state.entities.products),
  user: Object.values(state.entities.users)[0],
  loaded: false
});

const mapDispatchToProps = (dispatch) => ({
  fetchOwnedProducts: () => dispatch(fetchOwnedProducts()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
