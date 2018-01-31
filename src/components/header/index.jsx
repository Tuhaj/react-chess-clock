import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../button';
import { setTime } from '../../actions';

const StyledHeader = styled.header`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

const Header = ({ setTimeAction }) => (
  <StyledHeader>
    <h1>Chess Clock</h1>
    <ul>
      <li><Button action={() => setTimeAction(60000)} text="1min" /></li>
      <li><Button action={() => setTimeAction(180000)} text="3min" /></li>
      <li><Button action={() => setTimeAction(300000)} text="5min" /></li>
      <li><Button action={() => setTimeAction(600000)} text="10min" /></li>
      <li><Button action={() => setTimeAction(900000)} text="15min" /></li>
    </ul>
  </StyledHeader>
);

Header.propTypes = {
  setTimeAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setTimeAction: time => dispatch(setTime(time)),
});

export default connect(null, mapDispatchToProps)(Header);
