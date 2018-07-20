import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import Trophy from './components/Trophy/Trophy.js';
import Badge from './components/Badge/Badge.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }
    this.childNavBar = React.createRef();
  }

  updateAppScore() {
    this.childNavBar.current.updateScore();
  }

  render() {
    const HomePage = () => {
      return (
        <Home updateAppScore={this.updateAppScore.bind(this)} />
      );
    }
    return (
      <Router>
        <div className="App">
          <NavBar ref={this.childNavBar} />
          <br />
          <div>
            <Route exact path="/home" render={HomePage} />
            <Route exact path="/trophy" component={Trophy} />
            <Route exact path="/badge/:badge" component={Badge} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
