import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Timer extends Component {
  render() {
    const { seconds } = this.props;
    return (
      <p>
        { seconds === 0 ? 'Seu tempo acabou!'
          : `Tempo restante: ${seconds}`}
      </p>
    );
  }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
};

export default connect()(Timer);
