import React, { Component } from 'react';
import SVGButton from './button';
import Clock from './clock';
import styled from 'styled-components';


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

export default class App extends Component {
  render() {
    const player1Time = 6000;
    const player2Time = 6000;
    return (
      <StyledChessClock>
        <Clock time={player1Time}/>
        <SVGButton action={() => console.log('start clock')} />
        <Clock time={player2Time}/>
      </StyledChessClock>
    );
  }
}
