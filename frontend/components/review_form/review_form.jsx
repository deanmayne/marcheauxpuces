import React from "react";
import { withRouter } from "react-router-dom";
import Icon from "../icons/icon";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "1",
      body: "",
      product_id: this.props.history.location.pathname.match(/\d+/)[0],
      author_id: this.props.session,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review).then(this.props.closeModal);
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }


  render() {
    const { closeModal } = this.props;
    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <div className="modal__header">
          <h2>Write a Review:</h2>
          <button
            type="button"
            className="button button--link button--icon"
            onClick={closeModal}
          >
            <Icon icon="cross" />
          </button>
        </div>
        <div className="form-field">
          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
        </div>

        <div className="form-field">
          <label htmlFor="rating">Rating:</label>

          <select id="rating" onChange={this.update("rating")}>
            <option selected disabled></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button type="submit" className="button button--primary button--lg">
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(ReviewForm);
