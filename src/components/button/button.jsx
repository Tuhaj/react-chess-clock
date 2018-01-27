import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SVG = {
  startIcon: 'url(/svg/start-icon.svg)',
};

const DefaultSVGButton = styled.div`
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  box-sizing: border-box;
`;

const StyledStartButton = DefaultSVGButton.extend`
  content: ${SVG.startIcon};
`;

const SVGButton = ({ action, type }) => {
  let StyledSVGButton;
  if (type === 'start') {
    StyledSVGButton = StyledStartButton;
  }

  return (
    <StyledSVGButton onClick={action} />
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
