import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleX = this.handleX.bind(this)
        this.handleGuest = this.handleGuest.bind(this)
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

    handleX(){
        this.setState({ ['errors']: [] })
        this.props.closeModal
    }

    handleGuest(){
        this.setState({
            ['username']: 'guest_user',
            ['password']: 'demouser'
        });
        setTimeout(() => { return }, 100000)
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
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

        const formtype = this.props.formType === "login" ? "Sign In" : "Sign Up" 

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form-top">
                        <div className="formType">{formtype}</div>
                        <div onClick={this.props.closeModal} className="close-x">X</div>
                    </div>
                    <div className="login-form">
                        <label className="login-input">Username:
              <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                            />
                        </label>
                        <label className="login-input">Password:
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <div className ="session-submit-box">
                        <input className="session-submit" type="submit" value={formtype} />
                        <span onClick = {this.handleGuest} className="session-submit guest-user">Guest User</span>
                        </div>

                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);


