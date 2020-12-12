import React from "react";
import { withRouter } from "react-router";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      category: "",
      location: "",
      free_shipping: "false",
      owner_id: this.props.session,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  navigateToSearch() {
    this.props.history.push("/");
  }

  update(property) {
    return (e) =>
      this.setState({
        [property]: e.target.value,
      });
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if (error) console.log(error);
      else this.setState({ picture_url: results[0].secure_url });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const product = Object.assign({}, this.state);
    this.props.closeModal();
    this.props.createProduct(product);
    this.navigateToSearch();
  }

  render() {
    const { description, name, price, free_shipping } = this.state;

    return (
      <form className="new-product-form" onSubmit={this.handleSubmit}>
        <div className="modal__header">
          <h2>Create A Product!</h2>
          <button
            onClick={this.props.closeModal}
            className="button button--outline"
          >
            x
          </button>
        </div>
        <div className="form-field">
          <label htmlFor="product-name">Name: </label>
          <input
            id="product-name"
            type="text"
            value={name}
            onChange={this.update("name")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="product-price">Price:</label>
          <input
            id="product-price"
            type="text"
            value={price}
            onChange={this.update("price")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="product-location">Location: </label>
          <input
            id="product-price"
            type="text"
            value={this.state.location}
            onChange={this.update("location")}
          />
        </div>
        <div className="form-field">
          <label htmlFor="product-category">Category: </label>
          <select id="product-category" onChange={this.update("category")}>
            <option selected disabled></option>
            <option value="jewelry-accessories">Jewelry & Accessories</option>
            <option value="clothing-shoes">Clothing & Shoes</option>
            <option value="home-living">Home & Living</option>
            <option value="wedding-party">Wedding & Party</option>
            <option value="toys-enterainment">Toys & Entertainment</option>
            <option value="arts-collectibles">Arts & Collectibles</option>
            <option value="craft-supplies">Craft Supplies</option>
            <option value="gifts-gift-cards">Gifts & Gift Cards</option>
          </select>
        </div>
        <div className="form-field form-field--radio">
          <label htmlFor="product-shipping">Free Shipping: </label>
          <input
            id="product-shipping--true"
            type="radio"
            value={true}
            checked={free_shipping === "true"}
            onChange={this.update("free_shipping")}
          />
          <label htmlFor="product-shipping--true">True</label>
          <input
            id="product-shipping--false"
            type="radio"
            value={false}
            checked={free_shipping === "false"}
            onChange={this.update("free_shipping")}
          />
          <label htmlFor="product-shipping--false">False</label>
        </div>
        <div className="form-field">
          <label htmlFor="product-description">Description: </label>
          <textarea
            cols="30"
            rows="10"
            value={description}
            onChange={this.update("description")}
          />
        </div>

        {/* <div className="button-holder">
              <button
                onClick={this.handleCloudinary}
                className="session-submit"
              >
                Add image
              </button>
            </div> */}

        <button type="submit" className="button button--primary button--block button--lg">
          Create Product
        </button>
      </form>
    );
  }
}

export default withRouter(ProductForm);
