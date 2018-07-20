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

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentReport : 0,
      creditReports : [],
      register: new AccountRegister(),
      badge: new Badge(),
      badgeCompendium : new BadgeCollection(),
      customerBadges : new CustomerBadges(),
      newCount : 0
    }

    this.state.register.add(new Account("Wells Fargo", "mortgage", 255000, [], 255000))
    this.state.register.add(new Account("Toyota Finance", "auto", 12500, [], 12500))
    this.state.register.add(new Account("CitiBank Visa", "creditcard", 2500, [], 10000))
    this.state.register.add(new Account("American ", "creditcard", 1450, [], 15000))

    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addTrophy());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addGoingUp());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addSuperStar());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addBlastOff());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addLoyalty());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addQuizMaster());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addRecruiter());
    this.state.badgeCompendium.badgeCollection.push(this.state.badge.addTechnoMaster());
    this.InitReports();
  }

  InitReports = () => {
    var reports = [];

    //month 1
    var cr = new CreditReport(false, false, true)
    cr.addBureau(new Bureau("Trans Union", 502))
    cr.addBureau(new Bureau("Equifax", 520))
    cr.addBureau(new Bureau("Experian", 512))
    cr.accountRegister.add(new Account("Wells Fargo", "mortgage", 255000, [], 255000))
    cr.accountRegister.add(new Account("Toyota Finance", "auto", 12500, [], 12500))
    cr.accountRegister.add(new Account("CitiBank Visa", "creditcard", 2500, [], 10000))
    cr.accountRegister.add(new Account("American Express", "creditcard", 1450, [], 15000))
    this.state.creditReports.push(cr)

    //month 2
    cr = new CreditReport(true, false, false)
    cr.addBureau(new Bureau("Trans Union", 522))
    cr.addBureau(new Bureau("Equifax", 530))
    cr.addBureau(new Bureau("Experian", 505))
    cr.accountRegister.add(new Account("Wells Fargo", "mortgage", 252500, [], 252500))
    cr.accountRegister.add(new Account("Toyota Finance", "auto", 12000, [], 12500))
    cr.accountRegister.add(new Account("CitiBank Visa", "creditcard", 5000, [], 10000))
    cr.accountRegister.add(new Account("American Express", "creditcard", 2200, [], 15000))
    this.state.creditReports.push(cr)

    //month 3
    cr = new CreditReport(false, true, true)
    cr.addBureau(new Bureau("Trans Union", 622))
    cr.addBureau(new Bureau("Equifax", 635))
    cr.addBureau(new Bureau("Experian", 640))
    cr.accountRegister.add(new Account("Wells Fargo", "mortgage", 250000, [], 250000))
    cr.accountRegister.add(new Account("Toyota Finance", "auto", 11500, [], 12500))
    cr.accountRegister.add(new Account("CitiBank Visa", "creditcard", 3000, [], 10000))
    cr.accountRegister.add(new Account("American Express", "creditcard", 1000, [], 15000))
    cr.accountRegister.add(new Account("Discover", "creditcard", 1000, [], 7000))
    this.state.creditReports.push(cr)

    //month 4
    cr = new CreditReport(true, true, true)
    cr.addBureau(new Bureau("Trans Union", 600))
    cr.addBureau(new Bureau("Equifax", 630))
    //changed to 750 to trigger the above 700 trophy badge.
    cr.addBureau(new Bureau("Experian", 750))
    cr.accountRegister.add(new Account("Wells Fargo", "mortgage", 247500, [], 247500))
    cr.accountRegister.add(new Account("Toyota Finance", "auto", 11100, [], 12500))
    cr.accountRegister.add(new Account("CitiBank Visa", "creditcard", 2000, [], 10000))
    cr.accountRegister.add(new Account("American Express", "creditcard", 0, [], 15000))
    cr.accountRegister.add(new Account("Discover", "creditcard", 2500, [], 7000))
    this.state.creditReports.push(cr)
    
  }

  UpdateScores =  () => {
    var curr = this.state.currentReport;
    var nextr = Math.min(curr+1, this.state.creditReports.length-1)
    var cur = this.state.creditReports[curr];
    var next = this.state.creditReports[nextr];
    next.compare(cur);
    
    this.state.customerBadges.updateBadgeCollection(this.state.creditReports[nextr]);

    this.setState(
      {
        currentReport:nextr,
        creditReports: this.state.creditReports
      }
    );

    var stringify = require('json-stable-stringify');
    localStorage.setItem('customerBadges', stringify(this.state.customerBadges.customerBadgeCollection));
    this.state.newCount = this.getNewCount();
    this.props.updateAppScore();
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
    return (
      <div className="Home">
        {
          this.state.creditReports[this.state.currentReport].bureaus.map((b,i) => 
            <Score report={b} />
          )

        }
        <div>Referrals: {this.state.creditReports[this.state.currentReport].referrals ? "Yes":"No"}</div>
        <div>Quiz: {this.state.creditReports[this.state.currentReport].quiz ? "Yes":"No"}</div>
        <div>Refresh Count: {this.state.creditReports[this.state.currentReport].refreshCount}</div>
        <div>
          <button className="button" onClick={this.UpdateScores}>Refresh</button>
        </div>
        {
          this.state.newCount > 0 ? (
            <div className="trophy">
              <MaterialsBadge className="Home-MaterialsBadge" badgeContent={this.state.newCount} color="primary">
                  <a href="/trophy"><img className="smallimg" src="/images/trophy.jpg"/></a>
              </MaterialsBadge>
            </div>) : (
              <div className="trophy">
                <a href="/trophy"><img className="smallimg" src="/images/trophy.jpg"/></a>
            </div>
            )
        }
        <div>
          <RegisterView register={this.state.creditReports[this.state.currentReport].accountRegister}/>
        </div>
        <div>Current Revolving: {this.state.creditReports[this.state.currentReport].accountRegister.current}</div>
        <div>Max Revolving: {this.state.creditReports[this.state.currentReport].accountRegister.max}</div>
        <div>Total Credit: {this.state.creditReports[this.state.currentReport].accountRegister.total}</div>
      </div>
    );
  }
}

export default Home;
