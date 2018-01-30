import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, action }) => (
  <button onClick={action}>{text}</button>
);

Button.defaultProps = {
  text: '',
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default Button;
