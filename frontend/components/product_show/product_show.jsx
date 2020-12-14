import React from "react";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);


    this.cartAdd = this.cartAdd.bind(this);
  }

  cartAdd(e) {
    e.preventDefault();
    if (this.props.session) {
      this.props.addToCart({ cart:{
        product_id: this.props.product.id,
        shopper_id: this.props.session,
      }});
    }
    this.props.history.push("/cartRedirect");
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.productId);
  }

  render() {
    const { product } = this.props;
    if (!product) {
      return null;
    } else {
      return (
        <div className="product-show-container">
          <img
            className="product-show--left"
            src={product.img_url}
          />
          <div className="product-show--right">
            <div className="product-show__name">{product.name}</div>
            <div className="product-show__location">{product.location}</div>
            <div className={"product-show__shipping--" + product.free_shipping}>
              {product.free_shipping === "true"
                ? "Free Shipping"
                : "Paid Shipping"}
            </div>
            <div className="product-show__price">${product.price}</div>
            <label className="product-show__description--label">
              Description:
            </label>
            <div className="product-show__description">
              {product.description}
            </div>
            <button
              type="button"
              onClick={this.cartAdd}
              className="button button--primary button--lg"
            >
              Add to Cart
            </button>
            <button type="button" className="button button--primary button--lg">
              Leave a Review
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ProductShow;
