import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Classify from './pages/Classify';
import NotFound from './pages/NotFound';
// eslint-disable-line no-unused-vars 
import Copy from './pages/Copy';


export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Classify} props={childProps} />
    <Route path="/about" exact component={About} props={childProps} />
    <Route path="/Copy" exact component={Copy} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
