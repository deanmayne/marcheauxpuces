import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToProductShow = this.navigateToProductShow.bind(this);
  }

  navigateToProductShow() {
    this.props.closeModal();
    const url = `/products/${this.props.match.params.productId}`
    this.props.history.push(url);
    
  }

  handleSubmit(e) {
    e.preventDefault();
    const productId = parseInt(this.props.match.params.productId);
    const review = Object.assign({}, this.state, {
      product_id: productId
    });
    this.props.createReview(review);
    this.navigateToProductShow();
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
            <div className='formType' >Write a Review</div>
            <div className="close-x" onClick={this.props.closeModal}>X</div>
            <br/>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>

          <label>Comment</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input type="submit" />
        </form>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
