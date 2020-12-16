import React, { Component } from "react";
import { Link } from "react-router-dom";

class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOwnedProducts();
  }

  render() {
    const { products, user } = this.props;
    if (products.length === 0) {
      return (
        <div className="fourohfour-container">
          <h1>No products found !</h1>
        </div>
      );
    } else {
      return (
        <div>
            <div className="user--info">
                {user.username}
            </div>
          <div className="product-index">
            <div className="products-index__grid">
              {products.map((product) => (
                <Link
                  to={"/product/" + product.id}
                  className="product-card"
                  key={product.id}
                >
                  <img src={product.img_url} />
                  <div className="product-card__name">{product.name}</div>
                  <div className="product-card__location">
                    {product.location}
                  </div>
                  <div
                    className={
                      "product-card__shipping--" + product.free_shipping
                    }
                  >
                    {product.free_shipping === "true"
                      ? "Free Shipping"
                      : "Paid Shipping"}
                  </div>
                  <div className="product-card__price">
                    $
                    {/\.\d$/.test(product.price)
                      ? product.price + "0"
                      : !/\./.test(product.price)
                      ? product.price + ".00"
                      : product.price}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Account;
