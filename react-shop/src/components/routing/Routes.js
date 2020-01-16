import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Alerts from '../layout/Alerts';
import Boards from '../pages/Boards';
import Jackets from '../pages/Jackets';
import Boots from '../pages/Boots';

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route exact path='/boards' component={Boards}/>
                <Route exact path='/jackets' component={Jackets}/>
                <Route exact path='/boots' component={Boots}/>
            </Switch>
        </section>
    )
}

export default Routes;