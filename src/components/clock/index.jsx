import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { timeOver } from '../../actions';

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
      this.props.timeOverAction();
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
  timeOverAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  timeOverAction: () => dispatch(timeOver()),
});

export default connect(null, mapDispatchToProps)(Clock);
