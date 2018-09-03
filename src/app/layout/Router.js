import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Calendar from '../Calendar';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/calendar' component={Calendar} />
  </Switch>
);

export default Router;
