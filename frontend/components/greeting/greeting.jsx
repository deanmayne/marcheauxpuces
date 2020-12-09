import React from 'react';



const Greeting = ({ currentUser, logout, openModal }) => {

    const signin = () => (
        <div className="login-sign-up-box">
            <span className="login-button" onClick={() => openModal('login')}>Sign In</span>
                &nbsp;
            <span className="signup-button" onClick={() => openModal('signup')}>Sign Up</span>
        </div>
    );
    const signout = () => (
        <div className="login-sign-up-box">
        <span className="product-form-button" onClick={() => openModal('add_product')}>Add a Product</span>
        &nbsp;
        <span className="logout-button" onClick={() => logout()}>Sign Out</span>
        </div>
    );

    return (currentUser ? signout() : signin());
};

export default Greeting;
