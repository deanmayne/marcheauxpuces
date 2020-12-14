import { withRouter } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../util/cart_api_util";

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    const { product } = this.props;
    e.preventDefault;
    this.props.removeFromCart(product.id);
    this.props.history.push("/cartRedirect");
  }

  render() {
    const { product } = this.props;
    return (
      <div className="cart-item">
        <Link to={"/product/" + product.id}>
          <img
            className="cart-item--left"
            src={product.img_url}
          />
          <div className="cart-item--right">
            <div className="cart-item__name">{product.name}</div>
            <div className="cart-item__location">{product.location}</div>
            <div className={"cart-item__shipping--" + product.free_shipping}>
              {product.free_shipping === "true"
                ? "Free Shipping"
                : "Paid Shipping"}
            </div>
            <div className="cart-item__price">${product.price}</div>
          </div>
        </Link>
        <div className="cart-item--far-right">
          <button
            className="button button--primary button--sm"
            onClick={this.handleRemove}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    );
  }
}

export default CartIndexItem;
