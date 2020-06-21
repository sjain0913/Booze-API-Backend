import React, { Component } from 'react';
import logo from '../media/applogo.jpg';
import './styles/Header.css';

class HeaderApp extends Component {

  render() {
    return (
      <div className="App-header-div">
        <header className = "App-Header">
          <img src = {logo} className = "App-logo" alt="Booze-App" />
        </header>
      </div>
      );
    }
  }

export default HeaderApp;