import React, { Component } from 'react';
import './Home.css';
import Score from './Score.js';
import Bureau from '../../models/Bureau.js';
import RegisterView from "./RegisterView";
import AccountRegister from "../../models/AccountRegister";
import Account from "../../models/Account";
import Badge from "../../models/Badge";
import BadgeCollection from '../../models/BadgeCollection';
import CustomerBadges from '../../models/CustomerBadges';

class Home extends Component {

  constructor(props) {
    super(props);


    this.state = {
      bureaus : [ 
        new Bureau("Trans Union", 600, 400, 850),
        new Bureau("Experian", 650, 400, 850),
        new Bureau("Equifax", 675, 400, 850)
      ],
      register: new AccountRegister(),
      badge: new Badge(),
      badgeCompendium : new BadgeCollection(),
      customerBadges : new CustomerBadges()
    }

    this.state.register.accounts.push(new Account("Wells Fargo", "mortgage", 255000, [], 255000))
    this.state.register.accounts.push(new Account("Toyota Finance", "auto", 12500, [], 12500))
    this.state.register.accounts.push(new Account("CitiBank Visa", "creditcard", 2500, [], 10000))
    this.state.register.accounts.push(new Account("American ", "creditcard", 1450, [], 15000))

    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addTrophy());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addGoingUp());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addSuperStar());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addBlastOff());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addLoyalty());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addQuizMaster());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addRecruiter());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addTechnoMaster());
    console.log(this.state.badgeCompendium.badgeCollection);
  }

  UpdateScores =  () => {

    var newb = [];
    var stringify = require('json-stable-stringify');
    for(var i=0 ; i < this.state.bureaus.length ; i++) {
      newb.push(this.state.bureaus[i].refresh())
    }

    this.state.customerBadges.updateBadgeCollection(this.state.bureaus)

    this.setState(
      {
        bureaus:newb
      }
    );
    
    localStorage.setItem('customerBadges', stringify(this.state.customerBadges.customerBadgeCollection));
  }


  componentWillMount() {
    
    var stringify = require('json-stable-stringify');
    var badgeCompendium = localStorage.getItem('badgeCompendium');
    var customerBadges = localStorage.getItem('customerBadges');

    if(badgeCompendium == null) {
      
      localStorage.setItem('badgeCompendium', stringify(this.state.badgeCompendium.badgeCollection));
    } else {
      
      this.state.badgeCompendium.badgeCollection = JSON.parse(badgeCompendium);
    }

    if(customerBadges == null) {
      
      localStorage.setItem('customerBadges', stringify(this.state.customerBadges.customerBadgeCollection));
    } else {
      
      this.state.customerBadges.customerBadgeCollection = JSON.parse(customerBadges);
    }
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
