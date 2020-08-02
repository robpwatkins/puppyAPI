import React from 'react';
import { Switch, Route } from 'react-router';
import Landing from './components/Landing';
// import SubmitPup from './components/SubmitPup';
import Login from './components/Login';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Landing} />
    </Switch>
  )
}

export default Router;