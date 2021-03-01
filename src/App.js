import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './pages';
import Result from './pages/result';
import './assets/scss/font.scss';
import './App.scss';

const App = () => (
  <div className="App">
    <div className="app-content">
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/result" exact component={Result} />
      </Switch>
    </div>
  </div>
);

export default App;
