import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import HeaderContainer from "./header/header_container";

import ProductIndexContainer from "./product_show/product_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "./modal";
import fourohfour from "./fourohfour";

const App = () => (
  <div>
    <HeaderContainer />
    <Switch>
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
        path="/toys-enterainment"
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
      <Redirect to="/404" />
    </Switch>
    <Modal />
  </div>
);

export default App;
