import React from "react";
import Icon from "../icons/icon";

import ReviewsContainer from "../reviews_index/reviews_container";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.cartAdd = this.cartAdd.bind(this);
  }

  cartAdd(e) {
    e.preventDefault();
    if (this.props.session) {
      this.props.addToCart({
        cart: {
          product_id: this.props.product.id,
          shopper_id: this.props.session,
        },
      });
    }

    this.props.history.push("/cart");

  }

  componentDidMount() {
    this.props.fetchProduct(this.props.productId);
  }

  render() {
    const { product, openModal, session, deleteProduct } = this.props;
    if (!product) {
      return null;
    } else {
      return (
        <div className="product-show-container">
          <div className="product-show--info">
            <img src={product.img_url} />
            <div className="product-show__name">{product.name}</div>
            <div className="product-show__location">{product.location}</div>
            <div className={"product-show__shipping--" + product.free_shipping}>
              {product.free_shipping === "true"
                ? "Free Shipping"
                : "Paid Shipping"}
            </div>
            <div className="product-show__price">
              $
              {/\.\d$/.test(product.price)
                ? product.price + "0"
                : !/\./.test(product.price)
                ? product.price + ".00"
                : product.price}
            </div>
            <label className="product-show__description--label">
              Description:
            </label>
            <div className="product-show__description">
              {product.description}
            </div>

            {session && product.owner_id === session ? (
              <React.Fragment>
                <button
                  type="button"
                  onClick={() => openModal("edit_product")}
                  className="button button--primary button--lg"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => { deleteProduct(product.id).then(this.props.history.push("/"))}}
                  className="button button--primary button--lg"
                >
                  Delete
                </button>
              </React.Fragment>
            ) : session && product.owner_id !== session ? (
              <React.Fragment>
                <button
                  type="button"
                  onClick={this.cartAdd}
                  className="button button--primary button--lg"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={() => openModal("review")}
                  className="button button--primary button--lg"
                >
                  Leave a Review
                </button>
              </React.Fragment>
            ) : null}
          </div>
          <div className="button button--link button--icon">
            <Icon icon="heart" className="icon icon--heart" />
          </div>
          <ReviewsContainer product={product} />
        </div>
      );
    }
  }
}

export default ProductShow;
