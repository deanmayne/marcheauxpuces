import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";

import Account from "./account";

const mapStateToProps = (state) => ({
  products: Object.values(state.entities.products),
  session: state.session.id,
  user: Object.values(state.entities.users)[0]
});

const mapDispatchToProps = (dispatch) => ({
    fetchOwnedProducts: () => dispatch(fetchOwnedProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
