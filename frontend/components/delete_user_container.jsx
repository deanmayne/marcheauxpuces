import React from 'react';
import { closeModal } from "../actions/modal_actions";
import {logout} from '../actions/session_actions';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';



class DeleteUserContainer extends React.Component{
    constructor(props){
        super(props)

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        const { user } = this.props;
        e.preventDefault;
        $.ajax({
              url: `/api/users/${user}`,
              method: "DELETE",
            });
            logout();
            this.props.history.push("/")
          }


    render(){

        const {user, closeModal} = this.props
    return (
      <div>
        <button
          type="button"
          className="button button--primary button--lg"
          onClick={this.handleDelete}
        >
          Delete My Account
        </button>
        <button
          type="button"
          className="button button--primary button--lg"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
      </div>
    );}
};


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeleteUserContainer));

