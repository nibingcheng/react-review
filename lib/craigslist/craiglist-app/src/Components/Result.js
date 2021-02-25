import './App.css';
import React, { Component } from "react";

class Result extends Component {
    
    render() {
        console.log('ResultJS:', this.props.allCouches);
        let index = this.props.match.params.index;
        
        return (
          <div className="Result">
             <p>{this.props.allCouches[`${index}`].title}</p>
             <p>{this.props.allCouches[`${index}`].cost}</p>
          </div>
        );
    }
}

export default Result;
