import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StartIcon from '../svg/startIcon';

const StyledSVGButton = styled.div`
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  box-sizing: border-box;
  cursor: pointer;
`;

const SVGButton = ({ action, type }) => {
  let Icon;
  if (type === 'start') {
    Icon = StartIcon;
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
