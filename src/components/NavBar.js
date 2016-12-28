import React, {Component} from 'react';
import {Link} from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

// TODO: collapsed navbar not working

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
                    <Navbar.Collapse>
                      <Nav bsStyle="pills" className="navbar-nav navbar-right">
                        <LinkContainer to={{pathname: "/home"}} >
                          <NavItem>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to={{pathname: "/resume"}} >
                          <NavItem>Resumé</NavItem>
                        </LinkContainer>
                        <LinkContainer to={{pathname: "/about"}} >
                          <NavItem>About</NavItem>
                        </LinkContainer>
                      </Nav>
                    </Navbar.Collapse>
                    </div>
                </div>  
            </nav>
        );
    }
}