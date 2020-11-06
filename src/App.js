
import React, { Component } from 'react'

import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import HomePage from './HomePage.js';
import Header from './Header.js';


export default class App extends React.Component {
    render() {
        return (

            <div>
                <Router>
                  <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/list" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>

        )
    }
}
