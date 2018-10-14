import React, { Component } from 'react';
import Graph from './graph';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
      
      this.state = {pieData: [{name: "Firefox",y: 6},{name: "MSIE",y: 4},{name: "Safari",y: 4},{name: "Opera",y: 1},{name: "Chrome",y: 7}]}

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Graph/>
      </div>
    );
  }
}

export default App;
