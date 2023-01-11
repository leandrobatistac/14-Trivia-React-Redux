import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

export default function App() {
  return (
    <div>
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </header>
    </div>
  );
}
