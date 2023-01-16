import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Next extends Component {
  render() {
    const { click } = this.props;
    return (
      <div>
        <button data-testid="btn-next" type="button" onClick={ click }>
          Next
        </button>
      </div>
    );
  }
}

Next.propTypes = {
  click: PropTypes.func.isRequired,
};

export default connect()(Next);
