import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CartIndexItem from "./cart_index_item";
import { Link } from "react-router-dom";

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loaded = this.props.loaded;
  }

  componentDidMount() {
    if (this.props.shopper_id) {
      this.props.receiveCartProducts(this.props.shopper_id);
      this.loaded = true;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.path !== this.props.match.path) {
      this.props.receiveCartProducts(this.props.shopper_id);
      this.loaded = true;
    }
  }

  render() {
    const { carts, shopper_id, removeFromCart } = this.props;


        let cartTotal = 0;
        carts.forEach((product) => {
            cartTotal += product.price
        })

    if (!shopper_id) {
      return (
        <div className="cart--not-signed-in">
          <h1>Please sign in to view or add items to your cart !</h1>
        </div>
      );
    } else
    if (!this.loaded) {
      return null;
    } else if (this.loaded && shopper_id && carts.length === 0) {
      return (
        <div className="cart--empty">
          <h1>
            <p>Your cart is empty ! </p>
            <p>
              <Link to="/">Go discover something cool !</Link>
            </p>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="cart">
          {carts.map((product) => {
            return (
              <CartIndexItem
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              />
            );
          })}
          <div className="cartTotal">
            Total Cost: $
            {/\.\d$/.test(cartTotal)
              ? cartTotal + "0"
              : !/\./.test(cartTotal)
              ? cartTotal + ".00"
              : cartTotal}
            <button className="button button--primary button--lg">
              Checkout
            </button>
          </div>
        </div>
      );
    }
  }
}

export default CartIndex;
