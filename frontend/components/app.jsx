import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';

import ProductIndexContainer from './product_show/product_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal'
import fourohfour from './fourohfour'


const App = () => (
    <div>
        <header className="main-header">
            <Link to='/'> <h1 className='site-title'> Marché aux Puces</h1></Link>
            <GreetingContainer/>
        </header>
        <Modal/>
    <Switch>
        <Route exact path="/" />
        <Route exact path="/products" component={ProductIndexContainer} />
        <Route exact path="/404" component={fourohfour} />
        <Redirect to="/404" />
    </Switch>
    </div>
);

export default App;
