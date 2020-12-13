import React from "react";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.cartAdd = this.cartAdd.bind(this);
  }

  cartAdd(e){
      e.preventDefault();
      this.props.addToCart(this.props.product);
      this.props.history.push('/cart')

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
            src="https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg"
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
            <button type="button" onClick={this.cartAdd}className="button button--primary button--lg">
              Add to Cart
            </button>
            <label className="product-show__description--label">Description</label>
            <div className="product-show__description">
              {product.description}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProductShow;
