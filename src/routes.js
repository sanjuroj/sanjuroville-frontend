import React from 'react';
import { Router, Route} from 'react-router';
import Resume from './containers/Resume';
import Home from './components/Home';
import About from './components/About';
import OldHomepage from './components/OldHomepage';


export default function routes(history){
    return (
        <Router history={history}>
            <Route path='/' component={Home} />
            <Route path='home' component={Home} />
            <Route path='resume' component={Resume} />
            <Route path='about' component={About} />
            <Route path='old-homepage' component={OldHomepage} />                
        </Router>
    );
}