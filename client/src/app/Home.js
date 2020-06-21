import React, { Component } from 'react';
import './styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className = "home">
                <div className = "center">
                    <hr></hr>
                    <br></br>
                    <p>App currently in development!</p>
                    
                <a href="/api">Link to Booze API</a>
                </div>
            </div>
        )
    }
}
export default Home;