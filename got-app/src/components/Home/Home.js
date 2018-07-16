import React, { Component } from 'react';
import './Home.css';
import Score from './Score.js'
import Bureau from '../../models/Bureau.js'
import RegisterView from "./RegisterView"
import AccountRegister from "../../models/AccountRegister"
import Account from "../../models/Account"

class Home extends Component {

  constructor(props) {
    super(props);


    this.state = {
      bureaus : [ 
        new Bureau("Trans Union", 600, 400, 850),
        new Bureau("Experian", 650, 400, 850),
        new Bureau("Equifax", 675, 400, 850)
      ],
      register: new AccountRegister()
    }

    this.state.register.accounts.push(new Account("Wells Fargo", "mortgage", 255000, [], 255000))
    this.state.register.accounts.push(new Account("Toyota Finance", "auto", 12500, [], 12500))
    this.state.register.accounts.push(new Account("CitiBank Visa", "creditcard", 2500, [], 10000))
    this.state.register.accounts.push(new Account("American ", "creditcard", 1450, [], 15000))
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
          <button className="button" onClick={this.UpdateScores}>Refresh</button>
        </div>
        <div className="trophy">
            <a href="/trophy"><img className="smallimg" src="/images/trophy.jpg"/></a>
        </div>
        <div>
          <RegisterView register={this.state.register}/>
        </div>
      </div>
    );
  }
}

export default Home;
