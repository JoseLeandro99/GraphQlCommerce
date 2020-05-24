import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import NewProduct from './pages/NewProduct';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/new' exact component={NewProduct}/>
      <Route path='/404' exact component={() => <h1>Page not found!</h1>}/>
      <Redirect from='*' to='/404'/>
    </Switch>
  );
}

export default Routes;