import React, { Component } from 'react';
import './Trophy.css';
import Gallery from '../Gallery/Gallery.js';

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
    return (
      <div className="Trophy">
        <h1>Trophy Page</h1>
        <Gallery imageUrls={images} />
      </div>
    );
  }
}

export default Trophy;