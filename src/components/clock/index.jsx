import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { timeOver } from '../../actions';

const StyledClock = styled.div`
  position: relative;
  display: inline-block;
  width: 5em;
  margin: .5em;
  font-size: 36px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid black;
`;

export const parseTime = (miliseconds) => {
  const tenthSecond = parseInt((miliseconds / 100) % 6, 10);
  let seconds = parseInt((miliseconds / 1000) % 60, 10);
  let minutes = parseInt((miliseconds / (1000 * 60)), 10 % 60);
  let hours = parseInt((miliseconds / (1000 * 60 * 60)), 10 % 24);

  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  return `${hours}:${minutes}:${seconds}:${tenthSecond}`;
};


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
    const time = parseTime(this.props.time);
    return <StyledClock>{time}</StyledClock>;
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
