import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import HeaderContainer from "./header/header_container";

import ProductIndexContainer from "./product_index/product_index_container";
import SearchContainer from './search/search_container';
import Modal from "./modal";
import fourohfour from "./fourohfour";
import ProductShowContainer from "./product_show/product_show_container";
import CartContainer from "./cart/cart_container";
import FavoritesContainer from './favorites/favorites_container';
import AccountContainer from './account/account_container';
import Footer from './footer';


const App = () => (
  <div>
    <HeaderContainer />
    <Switch>
      <Route exact path="/me" component = {AccountContainer}/>
      <Route exact path="/favorites" component={FavoritesContainer} />
      <Route exact path="/search/:searchTerm" component={SearchContainer} />
      <Route exact path="/product/:productId" component={ProductShowContainer} />
      <Route
        exact
        path="/jewelry-accessories"
        component={ProductIndexContainer}
      />
      <Route exact path="/clothing-shoes" component={ProductIndexContainer} />
      <Route exact path="/home-living" component={ProductIndexContainer} />
      <Route exact path="/wedding-party" component={ProductIndexContainer} />
      <Route
        exact
        path="/toys-entertainment"
        component={ProductIndexContainer}
      />
      <Route
        exact
        path="/arts-collectibles"
        component={ProductIndexContainer}
      />
      <Route exact path="/craft-supplies" component={ProductIndexContainer} />
      <Route exact path="/gifts-gift-cards" component={ProductIndexContainer} />
      <Route exact path="/" component={ProductIndexContainer} />
      <Route exact path="/404" component={fourohfour} />

      <Route exact path="/cart" component={CartContainer} />
      <Redirect to="/404" />
    </Switch>
    <Modal />
    <Footer/>
  </div>
);

export default App;
