import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/App.css';
import Header from './Header'
import Home from './Home'
import APIHome from './APIHome'
import HeaderApp from './HeaderApp'

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
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HeaderApp />
              <Home />  
            </Route>
            <Route path="/api">
              <Header />
              <APIHome />
            </Route>
            
          </Switch>
        </div>
      </Router>
      </div>

      );
    }
  }

export default App;