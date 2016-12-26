import React, {Component} from 'react';

export default class NavBar extends Component {

    render() {
        return(
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div id="navbar-container" class="container">  
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      Sanjuroville
                    </div>
                    <div id="navbar" class="collapse navbar-collapse">
                      <ul class="nav navbar-nav navbar-right">
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