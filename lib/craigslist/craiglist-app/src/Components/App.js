import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import { Route } from "react-router-dom";
import Results from './Results';
import Result from './Result';

class App extends Component {
  render() {
  console.log("Data:", this.props.FurnitureData[0].title);
  let allCouches = this.props.FurnitureData;
  
    return (
      <div className="App">
        
        <Header />
        <Results allCouches={allCouches} />
        
        <Route path='/couch/:index' 
            render={routerProps=> <Result allCouches={allCouches} {...routerProps}/>}
        />     
        
      </div>
    );
  }
}

export default App;
