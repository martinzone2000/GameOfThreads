import React from 'react';
import './Gallery.css'

class Gallery extends React.Component {
    renderImage(badge, i) {
        if(badge.count > 1) {
            return (
                <div className="Gallery-image" key={i}>
                   <a className="image" href={"/badge/"+badge.name}><img src={badge.imageUrl} /><div>x{badge.count}</div></a>
                </div>
            );
        } else {
            return (
                <div className="Gallery-image" key={i}>
                    <a className="image" href={"/badge/"+badge.name}><img src={badge.imageUrl} /><div></div></a>
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