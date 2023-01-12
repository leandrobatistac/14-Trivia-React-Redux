import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Configuration from './pages/Configuration';

export default function App() {
  return (
    <div>
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/main" component={ Main } />
          <Route path="/configuration" component={ Configuration } />
        </Switch>
      </header>
    </div>
  );
}
