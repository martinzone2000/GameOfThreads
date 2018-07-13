import React, { Component } from 'react';
import './Trophy.css';
import Gallery from '../Gallery/Gallery.js';
import Grid from '../Grid/Grid.js';

class Trophy extends Component {
  render() {
    const images = [
      "/images/badges/score1.png",
      "/images/badges/score2.png",
      "/images/badges/score3.png",
      "/images/badges/score1.png",
      "/images/badges/score2.png",
      "/images/badges/score3.png"
    ];

    const badges = [
      {
        id: 1,
        badgeName: 'Rocket',
        badgeDescription: 'This is a test for passing badges object',
      },
      {
        id: 2,
        badgeName: 'Bucket',
        badgeDescription: 'This is a second badge item',
      },
      {
        id: 3,
        badgeName: 'Loyalty',
        badgeDescription: 'This is a third badge item',
      },
      {
        id: 4,
        badgeName: 'Paid Off',
        badgeDescription: 'This is a fourth badge item',
      }
    ];
    return (
      <div className="Trophy">
        <h1>Trophy Page</h1>
        <Gallery imageUrls={images} />
        <br />
        <Grid badgeList={badges} />
      </div>
    );
  }
}

export default Trophy;