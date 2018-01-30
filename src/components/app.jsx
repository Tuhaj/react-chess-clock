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
  flex-direction: column;
  padding: 2em;
  margin: 2em;
  text-align: center;
  border: 1px solid black;
`;

const StyledEndOfTime = styled.p`
  color: ${props => (props.isTimeOver ? 'red' : 'white')};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.startClock = this.props.startClock.bind(this);
    this.stopClock = this.props.stopClock.bind(this);
  }

  render() {
    return (
      <StyledChessClock>
        <main>
          <Clock time={this.props.player1Time} />
          <SVGButton action={() => this.startClock()} type="start"/>
          <Clock time={this.props.player2Time} />
        </main>
        <footer>
          <SVGButton action={() => this.stopClock()} type="stop" />
          <p>{this.props.isTimeOver}</p>
          <StyledEndOfTime isTimeOver={this.props.isTimeOver} >Time Over!</StyledEndOfTime>
        </footer>
      </StyledChessClock>
    );
  }
}

const mapStateToProps = state => ({
  player1Time: state.player1Time,
  player2Time: state.player2Time,
  isTimeOver: state.isTimeOver,
});

App.propTypes = {
  startClock: PropTypes.func.isRequired,
  stopClock: PropTypes.func.isRequired,
  player1Time: PropTypes.number.isRequired,
  player2Time: PropTypes.number.isRequired,
  isTimeOver: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(clockActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

