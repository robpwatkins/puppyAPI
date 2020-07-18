import React from 'react';
import { Switch, Route } from 'react-router';
import Landing from './components/Landing';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  )
}

export default Router;