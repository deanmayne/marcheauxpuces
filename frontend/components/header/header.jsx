import React from 'react';
import {Link} from 'react-router-dom'


const Header = ({ currentUser, logout, openModal }) => {

    const signedout = () => (

        <div className="login-sign-up-box">
            <button className="button button--link" onClick={() => openModal('login')}>Sign In</button>
        </div>

    )

    const signedin = () => (
      <div className="login-sign-up-box">
        <button
          className="button button--primary"
          onClick={() => openModal("add_product")}
        >
          Add a Product
        </button>
        <Link to="/cart">
          <button className="button button--link">Cart</button>
        </Link>
        <button className="button button--link" onClick={() => logout()}>
          Sign Out
        </button>
      </div>
    );


    const header = () => (
      <header className="main-header">
          {/* acll  header__top etc */}
        <div className="top-header">
          <Link to="/">
            <h1 className="site-title"> Marché aux Puces</h1>
          </Link>
          <div className="search-box">
            <input
              className="search-field"
              type="text"
              placeholder="Search for Products"
            />
          </div>
          {currentUser ? signedin() : signedout()}
        </div>
        <div className="bottom-header">
          <Link className="jewelry-accessories" to="/jewelry-accessories">
            Jewelry & Accessories
          </Link>
          <Link className="clothing-shoes" to="/clothing-shoes">
            Clothing & Shoes
          </Link>
          <Link className="home-living" to="/home-living">
            Home & Living
          </Link>
          <Link className="wedding-party" to="/wedding-party">
            Wedding & Party
          </Link>
          <Link className="toys-entertainment" to="/toys-entertainment">
            Toys & Entertainment
          </Link>
          <Link className="arts-collectibles" to="/arts-collectibles">
            Arts & Collectibles
          </Link>
          <Link className="craft-supplies" to="/craft-supplies">
            Craft Supplies
          </Link>
          <Link className="gifts-gift-cards" to="/gifts-gift-cards">
            Gifts & Gift Cards
          </Link>
        </div>
      </header>
    );

    return header()


}

export default Header;