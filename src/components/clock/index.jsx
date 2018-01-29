import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const Clock = ({ time }) => (<StyledClock>{time}</StyledClock>);

Clock.defaultProps = {
  time: 6000,
};

Clock.propTypes = {
  time: PropTypes.number,
};

export default Clock;
