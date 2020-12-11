import React from 'react';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }


    handleGuest(e){
            this.props.processForm({
                ['username']: 'guest_user',
                ['password']: 'demouser'
            }).then(this.props.closeModal)

    }


    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    componentDidMount(){this.props.removeErrors()};

    render() {

        const {openModal, formType, errors} = this.props

        const formSwitch = () => {
          if (formType === "Sign In"){
              return(  <button className="button--outline" onClick={() => openModal('signup')}>Sign Up</button> )
            }else{
              return (<button className="button--outline" onClick={() => openModal('login')}>Sign In</button> )
            }
        }


        // B__E--M
            

        return (
          <form onSubmit={this.handleSubmit} className="session-form">
            <div className="modal__header">
              <h2>{formType}</h2>
              {formSwitch()}
            </div>

            <div className="form-field">
              <label htmlFor="username">Username:</label>

              <input
                id="userName"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password:</label>

              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>
            <button
              className="button button--primary button--block button--lg"
              type="submit"
              
            >{formType}</button>
            {formType === "Sign Up" ? null : (
              <button
                className="button--outline button--block button--lg"
                onClick={this.handleGuest}
              >
                Guest User
              </button>
            )}

            {errors.length != 0 && this.renderErrors()}
          </form>
        );
    }
}

export default withRouter(SessionForm);


