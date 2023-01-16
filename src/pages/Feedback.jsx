import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackForm from '../components/FeedbackForm';
// import PropTypes from 'prop-types';

class Feedback extends Component {
  render() {
    return (
      <div>
        <p data-testid="feedback-text">FEEDBACK</p>
        <FeedbackForm />
      </div>
    );
  }
}

export default connect()(Feedback);
