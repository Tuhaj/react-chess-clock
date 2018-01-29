import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Start from '../svg/start';
import Stop from '../svg/stop';

const StyledSVGButton = styled.div`
  position: relative;
  display: inline-block;
  width: 2em;
  margin: .5em;
  box-sizing: border-box;
  cursor: pointer;
`;

const SVGButton = ({ action, type }) => {
  let Icon;
  if (type === 'start') {
    Icon = Start;
  } else if (type === 'stop') {
    Icon = Stop;
  }

  return (
    <StyledSVGButton onClick={action}>
      <Icon />
    </StyledSVGButton>
  );
};

SVGButton.defaultProps = {
  type: 'start',
};

SVGButton.propTypes = {
  action: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default SVGButton;
