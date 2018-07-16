import React, { Component } from 'react';
import './Home.css';
import AccountView from "./AccountView"

export default class RegisterView extends Component {
    render() {
        return(
            <div>
                {
                    this.props.register.accounts.map((account, i) => 
                        <AccountView account={account}/>
                    )
                }
            </div>
        )
    }
}