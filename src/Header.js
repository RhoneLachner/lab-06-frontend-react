import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                       <span>
            
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/list">List of Fixed Signs</Link>
                </li>
                <li>
                    <Link to="/create" >Creation Page</Link>
                    
                </li>
                <li>
                    <Link to="/detail/:id">Detail/Update Page</Link> 
                </li> 
            </ul>
            </span>

            </div>
        )
    }
}
