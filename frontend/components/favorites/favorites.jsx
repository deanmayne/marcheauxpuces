import React, { Component } from "react";
import { Link } from "react-router-dom";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavoriteProducts(this.props.liker_id);
  }

  render() {
    const { products } = this.props;
    return (
      <div className="product-index">
        <div className="product-index__highlight">
          <h2>Favorites</h2>
        </div>
        {products.length === 0 ? (
          <div className="fourohfour-container">
            <h1>No products found !</h1>
          </div>
        ) : (
          <div className="products-index__grid">
            {products.map((product) => (
              <Link
                to={"/product/" + product.id}
                className="product-card"
                key={product.id}
              >
                <img src={product.img_url} />
                <div className="product-card__name">{product.name}</div>
                <div className="product-card__location">{product.location}</div>
                <div
                  className={"product-card__shipping--" + product.free_shipping}
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
        )}
      </div>
    );
  }
}

export default Favorites;
