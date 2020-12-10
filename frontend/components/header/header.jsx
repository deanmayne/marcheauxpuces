import React from 'react';
import {Link} from 'react-router-dom'



const Header = ({ currentUser, logout, openModal }) => {


    const signin = () => (
        <header className="main-header">
            <div className="top-header">
                <Link to='/'> <h1 className='site-title'> Marché aux Puces</h1></Link>
                <input className="search-box" type="text" value="Search"/>
                <div className="login-sign-up-box">
                    <span className="login-button" onClick={() => openModal('login')}>Sign In</span>
                        &nbsp;
                    <span className="signup-button" onClick={() => openModal('signup')}>Sign Up</span>                
                </div>
            </div>
                <div className="bottom-header">
                    <Link className="jewelry-accessories" to="/">Jewelry & Accessories</Link>
                    <Link className="clothing-shoes" to="/">Clothing & Shoes</Link>
                    <Link className="home-living" to="/">Home & Living</Link>
                    <Link className="wedding-party" to="/">Wedding & Party</Link>
                    <Link className="toys-enterainment" to="/">Toys & Entertainment</Link>
                    <Link className="arts-collectibles" to="/">Arts & Collectibles</Link>
                    <Link className="craft-supplies" to="/">Craft Supplies</Link>
                    <Link className="gifts-gift-cards" to="/">Gifts & Gift Cards</Link>
                    <hr className="category-animation"/>
                </div>     
        </header>        
    );

    const signout = () => (
        <header className="main-header">
            <div className="top-header">
                <Link to='/'> <h1 className='site-title'> Marché aux Puces</h1></Link>
                <input className="search-box" type="text" value="Search" />
                <div className="login-sign-up-box">
                    <span className="product-form-button" onClick={() => openModal('add_product')}>Add a Product</span>
                        &nbsp;
                    <span className="logout-button" onClick={() => logout()}>Sign Out</span>
                </div>
            </div>
                <div className="bottom-header">
                    <Link className="jewelry-accessories" to="/">Jewelry & Accessories</Link>
                    <Link className="clothing-shoes" to="/">Clothing & Shoes</Link>
                    <Link className="home-living" to="/">Home & Living</Link>
                    <Link className="wedding-party" to="/">Wedding & Party</Link>
                    <Link className="toys-enterainment" to="/">Toys & Entertainment</Link>
                    <Link className="arts-collectibles" to="/">Arts & Collectibles</Link>
                    <Link className="craft-supplies" to="/">Craft Supplies</Link>
                    <Link className="gifts-gift-cards" to="/">Gifts & Gift Cards</Link>
                    <hr className="category-animation"/>
                </div>

                
        </header>
    );

    return (currentUser ? signout() : signin());
};

export default Header;
