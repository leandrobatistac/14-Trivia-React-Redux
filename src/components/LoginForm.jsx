import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../redux/actions';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      botaoDisable: true,
      loginEmail: '',
      loginName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { dispatch } = this.props;
    const { loginEmail, loginName } = this.state;
    dispatch(addEmail(loginEmail, loginName));
    this.setState({
      loginName: '',
      loginEmail: '',
    });
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
    const { botaoDisable, loginEmail, loginName } = this.state;
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
              value={ loginName }
            />
          </label>

          <label htmlFor="loginEmail">
            Email
            <input
              data-testid="input-gravatar-email"
              id="loginEmail"
              name="loginEmail"
              onChange={ this.handleChange }
              value={ loginEmail }
            />
          </label>

          <button
            type="button"
            data-testid="btn-play"
            disabled={ botaoDisable }
            onClick={ this.handleSubmit }
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginForm);
