import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewProduct from './pages/NewProduct';

function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/novo_produto" component={NewProduct} />
        </Switch>
    </BrowserRouter>
    );
}
export default Routes;