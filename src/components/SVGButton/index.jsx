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

const SVG = {
  start: Start,
  stop: Stop,
};

const SVGButton = ({ action, type }) => {
  const Icon = SVG[type];

  return (
    <StyledSVGButton onClick={action}>
      <Icon />
    </StyledSVGButton>
  );
};

SVGButton.propTypes = {
  action: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default SVGButton;
