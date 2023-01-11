import React, { Component } from 'react';
import { connect } from 'react-redux';

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

          <button
            type="button"
            data-testid="btn-play"
            disabled={ botaoDisable }
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(LoginForm);
