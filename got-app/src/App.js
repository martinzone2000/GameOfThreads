import React, { Component } from 'react';
import './App.css';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import Trophy from './components/Trophy/Trophy.js';
import Badge from './components/Badge/Badge.js';
import AppRouter from "./Router"
import {Router} from "react-router-dom"
import GlobalState from "./GlobalState"

class App extends Component {
  constructor(props) {
    super(props);

    var data = new GlobalState()
    data.initGlobatState()
    this.state= {
      globalData: data,
    }
  }

  UpdateScores =  () => {

    var curr = this.state.globalData.currentReport;
    var nextr = Math.min(curr+1, this.state.globalData.creditReports.length-1)
    var cur = this.state.globalData.creditReports[curr];
    var next = this.state.globalData.creditReports[nextr];
    next.compare(cur);
    this.state.globalData.currentReport=nextr

    var data = this.state.globalData;
    var currentReport = data.creditReports[data.currentReport]
    data.customerBadges.updateBadgeCollection(currentReport);

    var stringify = require('json-stable-stringify');
    localStorage.setItem('customerBadges', stringify(data.customerBadges.customerBadgeCollection));
    data.newCount = this.getNewCount();

    this.setState( {
      globalData: this.state.globalData 
    })
  }

  getNewCount() {
    var count = 0;
    console.log(this.state.globalData.customerBadges.customerBadgeCollection);

    for(var i=0; i < this.state.globalData.customerBadges.customerBadgeCollection.length; i++) {
      if(this.state.globalData.customerBadges.customerBadgeCollection[i].isNew) {
        count ++;
      }
    }
    return count;
  }

  render() {
    const HomePage = () => {
      return (
        <Home updateAppScore={this.updateAppScore.bind(this)} />
      );
    }
    return (
        <div className="App">
              <AppRouter app={this}/>
        </div>
    );
  }
}

export default App;
