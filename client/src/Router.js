import React from 'react';
import { Switch, Route } from 'react-router';
import Landing from './components/Landing';
import SubmitPup from './components/SubmitPup';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/submit" component={SubmitPup} />
    </Switch>
  )
}

export default Router;