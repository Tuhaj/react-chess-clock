import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import SVGButton from './button';
import Clock from './clock';
import * as clockActions from '../actions';

const StyledChessClock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  margin: 2em;
  text-align: center;
  border: 1px solid black;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.startClock = this.props.startClock.bind(this);
  }

  render() {
    return (
      <StyledChessClock>
        <Clock time={this.props.player1Time} />
        <SVGButton action={() => this.props.startClock()} />
        <Clock time={this.props.player2Time} />
      </StyledChessClock>
    );
  }
}

const mapStateToProps = state => ({
  player1Time: state.player1Time,
  player2Time: state.player2Time,
});

App.propTypes = {
  startClock: PropTypes.func.isRequired,
  player1Time: PropTypes.number.isRequired,
  player2Time: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(clockActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

