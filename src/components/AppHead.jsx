import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export class AppHead extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>{this.props.appTitle}</h1>
        <a href="https://www.google.rs/" target="_blank" rel="noopener noreferrer">GitHub Project</a>
      </Jumbotron>
    )
  }
}

export default AppHead;
