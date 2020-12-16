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
    return (
      <div className="product-index">
        <div className="product-index__highlight">
          <h1>THIS WILL BE SOME SORT OF HIGHLIGHT</h1>
        </div>
        <div className="products-index__grid">
          {products.slice(0, 15).map((product) => {
            return <ProductIndexItem key={product.id} product={product} />;
          })}
        </div>
        <div className="product-index__highlight">
          <h1>THIS WILL BE SOME SORT OF HIGHLIGHT</h1>
        </div>
        <div className="products-index__grid">
          {products.slice(15, products.length).map((product) => {
            return <ProductIndexItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProductIndex;
