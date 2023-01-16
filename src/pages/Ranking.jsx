import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranking extends Component {
  handleButton = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">RANKING</h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleButton }
        >
          Play Again
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Ranking;
