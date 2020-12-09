import React from 'react';



const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <div className="login-sign-up-box">
            <span className="login-signup-button" onClick={() => openModal('login')}>Sign In</span>
                &nbsp;
            <span className="login-signup-button" onClick={() => openModal('signup')}>Sign Up</span>
        </div>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (currentUser ? personalGreeting() : sessionLinks());
};

export default Greeting;
