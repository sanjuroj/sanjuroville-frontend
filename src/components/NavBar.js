import React, {Component} from 'react';
import {Link} from 'react-router';

// TODO: fix accent

export default class NavBar extends Component {

    render() {
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div id="navbar-container" className="container">  
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <Link to="/" className="navbar-brand">Sanjuroville</Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                      <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/resume">Resumé</Link></li>
                        <li><Link to="/about">About</Link></li>
                      </ul>
                    </div>
                </div>  
            </nav>
        );
    }
}