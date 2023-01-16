import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Feedback from './pages/Feedback';
import Configuration from './pages/Configuration';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div>
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/main" component={ Main } />
          <Route exact path="/configuration" component={ Configuration } />
          <Route exact path="/feedback" component={ Feedback } />
          <Route exact path="/ranking" component={ Ranking } />
        </Switch>
      </header>
    </div>
  );
}
