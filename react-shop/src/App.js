import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';
import Navigation from './components/layout/Navigation';
import Landing from './components/layout/Landing';
import './App.css';
import {product} from './components/pages/product';
function App() {

  return (
      <Router>
        <Fragment>
          <Navigation/>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route component={Routes}/>
          </Switch>
        </Fragment>
      </Router>
  );
}

export default App;
