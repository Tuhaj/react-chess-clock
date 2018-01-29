import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { stopClock } from '../../actions';

const StyledClock = styled.div`
  position: relative;
  display: inline-block;
  width: 4em;
  margin: .5em;
  font-size: 36px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid black;
`;

class Clock extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.time >= 0;
  }

  componentWillUpdate(nextProps) {
    if (nextProps.time <= 0) {
      this.props.stopClockAction();
    }
  }

  render() {
    return <StyledClock>{this.props.time}</StyledClock>;
  }
}

Clock.defaultProps = {
  time: 6000,
};

Clock.propTypes = {
  time: PropTypes.number,
  stopClockAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  stopClockAction: () => dispatch(stopClock()),
});

export default connect(null, mapDispatchToProps)(Clock);
