import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getToken } from '../fetchAPI';
import { sendToken } from '../redux/actions';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      botaoDisable: true,
      loginEmail: '',
      loginName: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    const size = 1;
    this.setState({ [name]: value }, () => {
      const { loginEmail, loginName } = this.state;
      if (loginEmail.length >= size && loginName.length >= size) {
        this.setState({ botaoDisable: false });
      } else {
        this.setState({ botaoDisable: true });
      }
    });
  };

  handleButton = async () => {
    const { dispatch } = this.props;
    const objectToken = await getToken();
    localStorage.setItem('token', objectToken.token);
    dispatch(sendToken(objectToken.token));
  };

  render() {
    const { botaoDisable } = this.state;

    return (
      <div>
        Login
        <form>
          <label htmlFor="loginName">
            Nome
            <input
              data-testid="input-player-name"
              id="loginName"
              name="loginName"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="loginEmail">
            Email
            <input
              data-testid="input-gravatar-email"
              id="loginEmail"
              name="loginEmail"
              onChange={ this.handleChange }
            />
          </label>

          <Link to="/main">
            <button
              type="button"
              data-testid="btn-play"
              disabled={ botaoDisable }
              onClick={ this.handleButton }
            >
              Play
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginForm);
