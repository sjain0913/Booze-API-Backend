import React, { Component } from 'react';
import './App.css';
import Header from './Header'

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //   fetch("http://localhost:9000/api/gin/5ed3ff146541f82af0d6def5")
  //       .then(res => res.text())
  //       .then(res => this.setState({ apiResponse: res }));
  
  // }

  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>

      );
    }
  }

export default App;