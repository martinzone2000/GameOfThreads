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
import CreditReport from '../../models/CreditReport'
import MaterialsBadge from '@material-ui/core/Badge';
import {Router, Route, Link} from "react-router-dom"
import NavBar from '../NavBar/NavBar';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      badge: new Badge(),
      badgeCompendium : new BadgeCollection(),
      customerBadges : new CustomerBadges(),
      newCount : 0
    }

    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addTrophy());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addGoingUp());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addSuperStar());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addBlastOff());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addLoyalty());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addQuizMaster());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addRecruiter());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addTechnoMaster());
  }

  UpdateScores =  () => {
    var data = this.props.app.state.globalData;
    var currentReport = data.creditReports[data.currentReport]
    this.state.customerBadges.updateBadgeCollection(currentReport);

    this.props.app.UpdateScores();

    var stringify = require('json-stable-stringify');
    localStorage.setItem('customerBadges', stringify(this.state.customerBadges.customerBadgeCollection));
    this.state.newCount = this.getNewCount();

    this.setState( {
      newCount: this.state.newCount 
    })
  }

  getNewCount() {
    var count = 0;
    console.log(this.state.customerBadges.customerBadgeCollection);

    for(var i=0; i < this.state.customerBadges.customerBadgeCollection.length; i++) {
      if(this.state.customerBadges.customerBadgeCollection[i].isNew) {
        count ++;
      }
    }
    return count;
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

    this.state.newCount = this.getNewCount();
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    var data = this.props.app.state.globalData;
    var currentReport = data.creditReports[data.currentReport]
    return (
      <div className="Home">
        <NavBar/>
        {
          currentReport.bureaus.map((b,i) => 
            <Score report={b} />
          )

        }

        <div>Referrals: {currentReport.referrals ? "Yes":"No"}</div>
        <div>Quiz: {currentReport.quiz ? "Yes":"No"}</div>
        <div>Refresh Count: {currentReport.refreshCount}</div>


        <div>
          <button className="button" onClick={this.UpdateScores}>Refresh</button>
        </div>
        {
          data.newCount > 0 ? (
            <div className="trophy">
              <MaterialsBadge className="Home-MaterialsBadge" badgeContent={data.newCount} color="primary">
                  <Link to="/trophy"><img className="smallimg" src="/images/trophy.jpg"/></Link>
              </MaterialsBadge>
            </div>) : (
              <div className="trophy">
                <Link to="/trophy"><img className="smallimg" src="/images/trophy.jpg"/></Link>
            </div>
            )
        }
        <Link to="/trophy">trophy</Link>
        <div>
          <RegisterView register={currentReport.accountRegister}/>
        </div>
        <div>Current Revolving: {currentReport.accountRegister.current}</div>
        <div>Max Revolving: {currentReport.accountRegister.max}</div>
        <div>Total Credit: {currentReport.accountRegister.total}</div>
        <div>Month: {data.currentReport}</div>
      </div>
    );
  }
}

export default Home;
