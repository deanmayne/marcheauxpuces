import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ProductShow from "./product_show";

const mapStateToProps = (state, {match: {params: { productId }}}) => ({

      product: state.entities.products[productId],
      productId

    });

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
