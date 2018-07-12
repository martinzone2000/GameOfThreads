import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import Trophy from './components/Trophy/Trophy.js';
import Badge from './components/Badge/Badge.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <Route exact path="/home" component={Home} />
            <Route exact path="/trophy" component={Trophy} />
            <Route exact path="/badge" component={Badge} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
