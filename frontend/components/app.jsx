import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';

// import ProductIndexContainer from './product_show/product_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal'

const App = () => (

    <div>
    <Modal/>
        <header>
            <h1 className = 'site-title'>Marché aux Puces</h1>
            <GreetingContainer/>
        </header>

    <Switch>
        {/* <Route exact path="/" component={ProductIndexContainer} /> */}
    </Switch>
    </div>
);

export default App;
