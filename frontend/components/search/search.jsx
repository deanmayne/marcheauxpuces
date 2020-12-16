import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSearchProducts(this.props.searchTerm);
  }

  componentDidUpdate(prevProps) {
      debugger
    if (prevProps.match.url !== this.props.match.url) {
      this.props.fetchSearchProducts(this.props.searchTerm);
    }
  }
  render() {
    const { products } = this.props;
    if (products.length === 0) {
      return (
        <div className="fourohfour-container">
          <h1>No products found !</h1>
        </div>
      );
    } else {
      return (
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
        </div>
      );
    }
  }
}

export default Search;
