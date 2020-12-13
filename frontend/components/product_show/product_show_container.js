import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ProductShow from "./product_show";
import {addToCart} from '../../actions/cart_actions'

const mapStateToProps = (state, {match: {params: { productId }}}) => ({

      product: state.entities.products[productId],
      productId

    });

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
