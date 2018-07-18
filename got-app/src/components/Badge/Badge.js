import React, { Component } from 'react';
import './Badge.css';

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      badge : {}
    }
  }

  componentWillMount() {
    
    var badgeCollection = localStorage.getItem('badgeCompendium');
    badgeCollection = JSON.parse(badgeCollection);

    for(var i = 0; i < badgeCollection.length; i++) {
      if(badgeCollection[i].name == this.props.match.params.badge) {
        this.state.badge = badgeCollection[i]
        break;
      }
    }
  }

  render() {
    return (
      <div className="Badge">
        <h1>{this.state.badge.displayName + " Badge"}</h1>
        <img src={this.state.badge.imageUrl} />
        <div className="Badge-description">
        <h2>Description:</h2>
        <p>{this.state.badge.description}</p>
        </div>
        <div className="Badge-tips">
        <h2>Tips:</h2>
        <p>{this.state.badge.tips}</p>
        </div>
      </div>
    );
  }
}

export default Badge;