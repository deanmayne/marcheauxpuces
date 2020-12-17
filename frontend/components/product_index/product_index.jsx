import React, { Component } from "react";
import ProductIndexItem from "./product_index_item";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.category) {
      this.props.fetchCategoryProducts(this.props.category);
    } else {
      this.props.fetchProducts();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.path !== this.props.match.path) {
      this.props.fetchCategoryProducts(this.props.category);
    }
  }

  render() {
    const { products } = this.props;

    const highlights = () => {
      if (!this.props.category) {
        return (
          <div className="product-index__highlight">
            <h2>Chic has no logic.</h2>
            <div className="product-index__highlight--images">
              <img
                className="highlight-photo--1"
                src="https://source.unsplash.com/tOVmshavtoo/800x800"
              />
              <img
                className="highlight-photo--2"
                src="https://source.unsplash.com/heEPoapeiVk/800x800"
              />
              <img
                className="highlight-photo--3"
                src="https://source.unsplash.com/2dcYhvbHV-M/800x800"
              />
            </div>
          </div>
        );
      }
    };

    return (
      <div className="product-index">
        {highlights()}
        <div className="products-index__grid">
          {products.map((product) => {
            return <ProductIndexItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProductIndex;
