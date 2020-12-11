import React from 'react';
import { withRouter } from 'react-router';

class ProductForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        description: '',
        price: '',
        category: '',
        rating: 5,
        locale: '',
        free_shipping: false,
        owner_id: this.props.session,
    }

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
    const {description, name, price} = this.state;
    


    return (
      <div className="new-product-container">
        <div >
            <div className = "add-product-form-top-box">
                <div className="formType">Create A Product!</div>
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>
            <div className="new-product-form-box">
            <form className="new-product-form" onSubmit={this.handleSubmit}>
            <label className="add-product-input">Name:
              <input type="text"
                        value={name}
                        onChange={this.update('name')}
                    />
                </label>

            <label className="add-product-input">Price:
              <input type="text"
                        value={price}
                        onChange={this.update('price')}
                    />
                </label>

            <label className="add-product-input">Location:
              <input type="text"
                                value={this.state.locale}
                                onChange={this.update('locale')}
                            />
                        </label>

                        {/* <label className="add-product-input">Category:
              <input type="dropdown"
                                value={category}
                                onChange={this.update('category')}
                            />
                        </label> */}

                        {/* <label className="add-product-input">Free Shipping?:
              <input type="radio"
                                value={free_shipping}
                                onChange={this.update('free_shipping')}
                            />
                        </label> */}

        <label className="add-product-input">Description:
        <br/>
          <textarea
                cols="30"
                rows="10"
                value={description}
                onChange={this.update("description")}
            />
            
            </label>

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
