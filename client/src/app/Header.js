import React, { Component } from 'react';
import logo from '../media/blacklogo.jpg';
import './styles/Header.css';

class Header extends Component {

  render() {
    return (
      <div className="App-header-div">
        <header className = "App-Header">
          <img src = {logo} className = "App-logo" alt="Booze-API" />
        </header>
        <p className = "App-description">Simple JSON/plain-text API to obtain data of</p>
        <p className = "App-description"> alcoholic products sold in the United States.</p>
      </div>

      );
    }
  }

export default Header;