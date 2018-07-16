import React from 'react';
import './Gallery.css'

class Gallery extends React.Component {

    renderImage(badge, i) {
        return (
            <div className="Gallery-image" key={i}>
                <img src={badge.imageUrl} />
            </div>
        );
    }

    render() {
        return (
          <div className="Gallery">
            <div className="Gallery-images">
                { this.props.badgeList && this.props.badgeList.map((badge, i) => this.renderImage(badge, i))}
            </div>
          </div>
        );
      }

}

export default Gallery;