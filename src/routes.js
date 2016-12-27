import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import Resume from './containers/Resume';
import Home from './components/Home';
import About from './components/About';
import OldHomepage from './components/OldHomepage';
import NavBar from './components/NavBar';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div id="main-body">
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default function routes(history){
    return (
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home} />
                <Route path='home' component={Home} />
                <Route path='resume' component={Resume} />
                <Route path='about' component={About} />
            </Route>
            <Route path='old-homepage' component={OldHomepage} />                
        </Router>
    );
}