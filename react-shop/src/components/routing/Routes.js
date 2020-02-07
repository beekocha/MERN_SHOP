import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Boards from '../pages/Boards';
import Jackets from '../pages/Jackets';
import Boots from '../pages/Boots';
import Basket from '../basket/Basket';
import PrivateRoute from './PrivateRoute';
import NotFound from '../layout/NotFound';

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route exact path='/boards' component={Boards}/>
                <Route exact path='/jackets' component={Jackets}/>
                <Route exact path='/boots' component={Boots}/>
                <PrivateRoute exact path='/basket' component={Basket}/>
                <Route component={NotFound}/>
            </Switch>
        </section>
    )
}

export default Routes;