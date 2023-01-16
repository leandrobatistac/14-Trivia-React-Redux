import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeedbackForm from '../components/FeedbackForm';

class Feedback extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        {/* <p data-testid="feedback-text">FEEDBACK</p> */}
        <FeedbackForm history={ history } />
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Feedback);
