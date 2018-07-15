import React, { Component } from 'react';
import './Home.css';
import Score from './Score.js'
import Bureau from '../../models/Bureau.js'

class Home extends Component {

  constructor(props) {
    super(props);


    this.state = {
      bureaus : [ 
        new Bureau("Trans Union", 600, 400, 850),
        new Bureau("Experian", 650, 400, 850),
        new Bureau("Equifax", 675, 400, 850)
      ],
    }
  }

  UpdateScores =  () => {

    var newb = [];

    for(var i=0 ; i < this.state.bureaus.length ; i++) {
      newb.push(this.state.bureaus[i].refresh())
    }

    this.setState(
      {
        bureaus:newb
      }
    )
  }

  render() {
    return (
      <div className="Home">
        {
          this.state.bureaus.map((b,i) => 
            <Score report={b} />
          )
        }
        <div>
          <button onClick={this.UpdateScores} >Refresh</button>
        </div>
      </div>
    );
  }
}

export default Home;
