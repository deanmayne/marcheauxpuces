import React from 'react';
import {Link} from 'react-router-dom'


const Header = ({ currentUser, logout, openModal }) => {

    const signedout = () => (

        <div className="login-sign-up-box">
            <span className="login-button" onClick={() => openModal('login')}>Sign In</span>
                &nbsp;
            <span className="signup-button" onClick={() => openModal('signup')}>Sign Up</span>                
        </div>

    )

    const signedin = () => (
        <div className="login-sign-up-box">
            <span className="product-form-button" onClick={() => openModal('add_product')}>Add a Product</span>
                &nbsp;
            <span className="logout-button" onClick={() => logout()}>Sign Out</span>
        </div>
    )


    const header = () => (
        <header className="main-header">
            <div className="top-header">
                <Link to='/'><h1 className='site-title'> Marché aux Puces</h1></Link>
                <div className="search-box">
                    <input className="search-field" type="text" placeholder = "Search for Products"/>
                    
                </div>
                    {currentUser ? signedin() : signedout()}
            </div>
                <div className="bottom-header">
                <Link className="jewelry-accessories" to="/jewelry-accessories">Jewelry & Accessories</Link>
                    <Link className="clothing-shoes" to="/clothing-shoes">Clothing & Shoes</Link>
                    <Link className="home-living" to="/home-living">Home & Living</Link>
                    <Link className="wedding-party" to="/wedding-party">Wedding & Party</Link>
                    <Link className="toys-enterainment" to="/toys-enterainment">Toys & Entertainment</Link>
                    <Link className="arts-collectibles" to="/arts-collectibles">Arts & Collectibles</Link>
                    <Link className="craft-supplies" to="/craft-supplies">Craft Supplies</Link>
                    <Link className="gifts-gift-cards" to="/gifts-gift-cards">Gifts & Gift Cards</Link>
                    <br/>
                    <hr className="category-animation"/>
                </div>     
        </header>        
    );

    return header()


}

export default Header;