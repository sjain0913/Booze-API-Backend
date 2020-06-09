import React, { Component } from 'react';
import logo from '../media/blacklogo.jpg';
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
          <img src = {logo} className = "App-logo" alt="Booze-API" />
        </header>
        <p className = "App-intro">{this.state.apiResponse}</p>
        <p className = "App-description">Simple JSON/plain-text API to obtain data of alcoholic products sold in the United States.</p>
      </div>
      );
    }
  }

export default App;