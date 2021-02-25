import './App.css';
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Result from './Result';

class ResultsList extends Component {
    
    
    render() {
        console.log('This is ResultsList',this.props.allCouches);
        let listOfCouches = this.props.allCouches.map((item,index) => {
            return (
              <div className="couch" key={index}>
                <Link to={"/couch/" + index}> <img src={process.env.PUBLIC_URL + '/images/' + item.image} alt="" /></Link>
                <p id='Caption'>{item.title} <span>${item.cost}</span></p>
              </div>
            );
        });
        return (
        <div className="Home">
            
            <div className="imageContainer">
                {listOfCouches}
            </div>   
            <Route path='/couch/:index' 
            render={routerProps=> <Result allCouches={this.props.allCouches} {...routerProps}/>}
            />     
        </div>
        );
    }
}

export default ResultsList;
