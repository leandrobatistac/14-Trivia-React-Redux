import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class FeedbackForm extends Component {
  handleButton = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { score, email, nome, assertions } = this.props;
    const magicNumber = 3;
    const emailConverted = md5(email).toString();
    return (
      <div>
        <p data-testid="header-score">{ score }</p>
        <p data-testid="header-player-name">{ nome }</p>
        <img
          src={ `https://www.gravatar.com/avatar/${emailConverted}` }
          data-testid="header-profile-picture"
          alt="avatar"
        />
        <p data-testid="feedback-text">
          { assertions < magicNumber ? 'Could be better...' : 'Well Done!' }
        </p>
        <p data-testid="feedback-total-score">{ (score) }</p>
        <p data-testid="feedback-total-question">{ (assertions) }</p>

        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.handleButton }
        >
          Play Again
        </button>

        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.handleRanking }
        >
          Ranking
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  email: state.email.email,
  nome: state.email.nome,
  assertions: state.player.assertions,
});

FeedbackForm.propTypes = {
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(FeedbackForm);
