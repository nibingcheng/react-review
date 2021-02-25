import './App.css';
import ResultsHeader from './ResultsHeader';
import React, { Component } from "react";
import ResultsList from './ResultsList';

class Results extends Component {
    
    render() {
        console.log('ResultsJS:',this.props.allCouches);
        return (
          <div className="Results">
        
              <ResultsHeader />
              <ResultsList allCouches={this.props.allCouches}/>

          </div>
        );
    }
}

export default Results;
