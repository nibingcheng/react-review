import './App.css';
import Nav from './Nav';
import React, { Component } from "react";

class Header extends Component {
    
    
    render() {
        return (
          <div className="Header">
        
              <h1>Craiglist</h1>
              <Nav />

          </div>
        );
    }
}

export default Header;
