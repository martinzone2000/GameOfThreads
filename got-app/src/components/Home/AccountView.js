import React, { Component } from 'react';
import './Home.css';

export default class AccountView extends Component {
    render() {
        return(
            <div className="accountRow">
                <div className="accountColumn">{this.props.account.type}</div>
                <div className="accountColumn">{this.props.account.name}</div>
                <div className="accountColumn">{this.props.account.balance}</div>
                <div className="accountColumn">{this.props.account.change}</div>
            </div>
        )
    }
}