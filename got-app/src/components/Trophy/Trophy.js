import React, { Component } from 'react';
import './Trophy.css';
import Gallery from '../Gallery/Gallery.js';
import Grid from '../Grid/Grid.js';

class Trophy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badgeCollection : [],
      customerBadges : []
    }
  }

  componentWillMount() {
    
    var badgeCollection = localStorage.getItem('badgeCompendium');
    var customerBadges = localStorage.getItem('customerBadges');
    
    if(badgeCollection == null) {
      badgeCollection = [];
    }

    if(customerBadges == null) {
      customerBadges == [];
    }

    this.setState({ 
      badgeCollection: JSON.parse(badgeCollection), 
      customerBadges: JSON.parse(customerBadges)
    });
  }
  render() {    
    return (
      <div className="Trophy">
        <h1>Trophy Page</h1>
        <Gallery badgeList={this.state.customerBadges} />
        <br />
        <Grid badgeList={this.state.badgeCollection} />
      </div>
    );
  }
}

export default Trophy;