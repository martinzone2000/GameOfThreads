import React from 'react';
import './Gallery.css'

class Gallery extends React.Component {
    renderImage(badge, i) {
        if(badge.count > 0) {
            return (
                <div className="Gallery-image" key={i}>
                   <a href={"/badge/"+badge.name}><img src={badge.imageUrl} />x{badge.count}</a>
                </div>
            );
        } else {
            return (
                <div className="Gallery-image" key={i}>
                    <a href={"/badge/"+badge.name}><img src={badge.imageUrl} /></a>
                </div>
            );
        }
        
    }

    render() {
        return (
          <div className="Gallery" >
                { this.props.badgeList && this.props.badgeList.map((badge, i) => this.renderImage(badge, i))}
          </div>
        );
      }

}

export default Gallery;