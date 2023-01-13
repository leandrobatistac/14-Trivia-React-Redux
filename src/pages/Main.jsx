import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../components/Questions';
import Game from './Game';

class Main extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Game />
        <Questions history={ history } />
      </div>
    );
  }
}

Main.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
