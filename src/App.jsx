import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import SVGButton from './components/SVGButton';
import Clock from './components/clock';
import Header from './components/header';
import * as clockActions from './actions';

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
  &:focus {
    outline: none;
  }
`;

const StyledEndOfTime = styled.p`
  visibility: ${props => (props.isTimeOver ? 'initial' : 'hidden')};
  color: red;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.startClock = this.props.startClock.bind(this);
    this.stopClock = this.props.stopClock.bind(this);
    this.handleKeyEvents = this.handleKeyEvents.bind(this);
  }
  componentDidMount() {
    this.chessClock.focus();
  }

  handleKeyEvents(e) {
    switch (e.keyCode) {
      case 32: {
        this.startClock();
        break;
      }
      case 16: {
        this.stopClock();
        break;
      }
      default: {
        e.preventDefault();
      }
    }
  }

  render() {
    return (
      <StyledChessClock
        onKeyDown={this.handleKeyEvents}
        tabIndex="0"
        innerRef={(clock) => { this.chessClock = clock; }}
      >
        <Header />
        <main>
          <Clock time={this.props.player1Time} />
          <SVGButton action={() => this.startClock()} type="start" />
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
