import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class Game extends Component {
  render() {
    const { email, nome, placar } = this.props;
    const emailConverted = md5(email).toString();
    console.log(nome);
    return (
      <header>
        <h1 data-testid="header-player-name">{ nome }</h1>
        <img
          src={ `https://www.gravatar.com/avatar/${emailConverted}` }
          data-testid="header-profile-picture"
          alt="avatar"
        />
        <p data-testid="header-score">{ placar }</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email.email,
  nome: state.email.nome,
  placar: state.email.placar,
});

Game.propTypes = {
  email: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  placar: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Game);
