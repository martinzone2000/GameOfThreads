import React from 'react';
import './Gallery.css'

class Gallery extends React.Component {

    renderImage(imageUrl, i) {
        return (
            <div className="Gallery-image" key={i}>
                <img src={imageUrl} />
            </div>
        );
    }

    render() {
        return (
          <div className="Gallery">
            <div className="Gallery-images">
                {this.props.imageUrls.map((imageUrl, i) => this.renderImage(imageUrl, i))}
            </div>
          </div>
        );
      }

}

export default Gallery;