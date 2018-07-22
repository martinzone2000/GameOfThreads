import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import Trophy from './components/Trophy/Trophy.js';
import Badge from './components/Badge/Badge.js';
import {BrowserRouter, Route, Switch} from "react-router-dom"

export default class AppRouter extends React.Component {

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={(props) => <Home {...props} {...this.props}/>}/>
                    <Route  path="/trophy/" component={(props) => <Trophy {...props} {...this.props}/> } />
                    <Route  path="/badge/:badge" component={(props) => <Badge {...props} {...this.props}/>} />
                </Switch>
            </BrowserRouter>
        )
    }
}