import React from 'react';
import LoginForm from '../components/LoginForm';
import logo from '../trivia.png';

class Login extends React.Component {
  render() {
    return (
      <div className="App">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
