import React, {Component} from 'react';

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
                      <a className="navbar-brand" href="http://">?????Sanjuroville</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                      <ul className="nav navbar-nav navbar-right">
                        <li>Home</li>
                        <li>Resum&eacute</li>
                        <li>About</li>
                      </ul>
                    </div>
                </div>  
            </nav>
        );
    }
}