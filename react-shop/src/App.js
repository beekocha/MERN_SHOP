import React, {Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';
import Navigation from './components/layout/Navigation';
import Landing from './components/layout/Landing';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from '../src/redux/store/store';
import  setToken  from './utils/setToken'
import { loadUser } from './redux/actions/auth';

if (localStorage.token) {
  setToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation/>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}



export default (App);
