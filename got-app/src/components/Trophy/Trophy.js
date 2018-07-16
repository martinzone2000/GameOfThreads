import React, { Component } from 'react';
import './Trophy.css';
import Gallery from '../Gallery/Gallery.js';
import Grid from '../Grid/Grid.js';
import BadgeModel from '../../models/Badge.js';

class Trophy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badgeCompendium : [],
      customerBadges : []
    }
  }

  componentWillMount() {
    
    var badgeCompendium = localStorage.getItem('badgeCompendium');
    var customerBadges = localStorage.getItem('customerBadges');
    
    if(badgeCompendium == null) {
      badgeCompendium = [];
    }

    if(customerBadges == null) {
      customerBadges == [];
    }

    this.setState({ 
      badgeCompendium: JSON.parse(badgeCompendium), 
      customerBadges: JSON.parse(customerBadges)
    });
  }
  render() {    
    return (
      <div className="Trophy">
        <h1>Trophy Page</h1>
        <Gallery badgeList={this.state.customerBadges} />
        <br />
        <Grid badgeList={this.state.badgeCompendium} />
      </div>
    );
  }
}

export default Trophy;