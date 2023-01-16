import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Feedback extends Component {
  render() {
    return (
      <div>
        <p data-testid="feedback-text">FEEDBACK</p>
      </div>
    );
  }
}

// Feedback.propTypes = {
//   click: PropTypes.func.isRequired,
// };

export default connect()(Feedback);
