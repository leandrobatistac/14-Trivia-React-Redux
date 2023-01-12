import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Game from './Game';
import logo from '../trivia.png';

class Login extends React.Component {
  render() {
    return (
      <div className="App">
        <Game />
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
        <LoginForm />
        <Link to="/configuration">
          <button data-testid="btn-settings" type="button">
            Configurações
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
