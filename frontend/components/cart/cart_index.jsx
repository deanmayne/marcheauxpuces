import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CartIndexItem from "./cart_index_item";
import {Link} from 'react-router-dom'

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.shopper_id) {
      this.props.receiveCartProducts(this.props.shopper_id);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.path !== this.props.match.path && this.props.shopper_id) {
      this.props.receiveCartProducts(this.props.shopper_id);
    }
  }

  render() {
    const { products, shopper_id } = this.props;
    if (!shopper_id) {
      return (
        <div className="cart--not-signed-in">
          <h1>Please sign in to view items in your cart !</h1>
        </div>
      );
    } else if (products.length === 0) {
      return (
        <div className="cart--empty">
          <h1>
            <p>Your cart is empty ! </p>
            <p><Link>Go discover something cool !</Link>
            </p>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="cart">
          {products.map((product) => {
            return <CartIndexItem key={product.id} product={product} />;
          })}
        </div>
      );
    }
  }
}

export default CartIndex;
