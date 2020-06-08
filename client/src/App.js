import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/api/gin/5ed3ff146541f82af0d6def5")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  
  }

  componentWillMount() {
    this.callAPI();
    
  }

  render() {
    return (
      <div className="App">
        <header className = "App-Header">
          <img src = {logo} className = "App-logo" alt="logo" />
          <h1 className = "App-title">Welcome to React!</h1>
        </header>
        <p className = "App-intro">{this.state.apiResponse}</p>
      </div>
      );
    }
  }

export default App;