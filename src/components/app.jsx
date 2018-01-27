import React, { Component } from 'react';
import SVGButton from './button/button';

export default class App extends Component {
  render() {
    return (
      <div><SVGButton action={() => console.log('start clock')} /></div>
    );
  }
}
