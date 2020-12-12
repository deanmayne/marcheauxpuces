import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
      <div className="products-container">
        {products.map((product) => {
          return <ProductIndexItem key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

export default ProductIndex;
