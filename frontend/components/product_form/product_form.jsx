import React from 'react';
import { withRouter } from 'react-router';

class ProductForm extends React.Component{
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  navigateToSearch() {
    this.props.history.push('/');
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(error)
        console.log(error);
      else
        this.setState({ picture_url: results[0].secure_url });
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


    return (
      <div className="new-product-container">
        <div >
            <div className = "add-product-form-top-box">
                <div className="formType">Create A Product!</div>
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>
            <div className="new-product-form-box">
            <form className="new-product-form" onSubmit={this.handleSubmit}>
                <label className="product-field">Name:</label>
                <input
                type="text"
                value={name}
                onChange={this.update('name')}
                className="product-field"
                />

            {/* <label className="product-field">Description</label>
            <input
              type="text"
              value={description}
              onChange={this.update('description')}
              className="product-field"
            /> */}

             {/* <label className="product-field">Price</label>
            <input
              type="float"
              value={price}
              className="product-field"
            /> */}

            <div className="button-holder">
              <button
                onClick={this.handleCloudinary}
                className="session-submit"
              >
                Add image
              </button>
            </div>

        <input type="submit" value="Create Product" className="session-submit"/>
          </form>
          </div>


        </div>
      </div>
    );
  }
}

export default withRouter(ProductForm);
