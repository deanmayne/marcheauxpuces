import React, { Component } from "react";
import { Link } from "react-router-dom";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.loaded = this.props.loaded;
  }

  componentDidMount() {
    this.props.fetchOwnedProducts();
    this.loaded = true
  }

  render() {
    const { products, user, openModal, closeModal } = this.props;
    if (products.length === 0 && this.loaded) {
      return (
        <div className="fourohfour-container">
          <h1>No products found !</h1>
        </div>
      );
    } else {
      return (
        <div className="store-container">
          <div className="user-box">
            <h1>{user.username}</h1>
            <button
              type="button"
              className="button button--primary"
              onClick={() => openModal("add_product")}
            >
              Add a Product
            </button>

            {user.username === "guest_user" ? null : 
            <button
              type="button"
              className="button button--primary"
              onClick={() => openModal("delete_user")}
            >
              Delete User
            </button>}
          </div>
          <div className="product-index">
            <div className="product-index__highlight">
              <h2>My Products</h2>
            </div>
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
