import React from 'react';
import Questions from '../components/Questions';
import Game from './Game';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Questions />
        <Game />
      </div>
    );
  }
}

export default Login;
