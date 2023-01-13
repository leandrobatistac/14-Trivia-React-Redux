import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

import logo from '../trivia.png';

class Login extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className="App">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
        <LoginForm history={ history } />
        <Link to="/configuration">
          <button data-testid="btn-settings" type="button">
            Configurações
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
