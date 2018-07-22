import React from 'react';
import './Gallery.css'
import {Link} from "react-router-dom"

class Gallery extends React.Component {
    renderImage(badge, i) {
        if(badge.count > 1) {
            return (
                <div className="Gallery-image" key={i}>
                   <Link className="image" to={"/badge/"+badge.name}><img src={badge.imageUrl} /><div>x{badge.count}</div></Link>
                </div>
            );
        } else {
            return (
                <div className="Gallery-image" key={i}>
                    <Link className="image" to={"/badge/"+badge.name}><img src={badge.imageUrl} /><div></div></Link>
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