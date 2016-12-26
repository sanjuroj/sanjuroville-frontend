import React from 'react';
import { Router, Route} from 'react-router';
import Resume from './containers/Resume';
import Home from './components/Home';
import About from './components/About';


export default function routes(history){
    return (
        <Router history={history}>
            <Route path='/' component={Home} />
                <Route path='home' component={Home} />
                <Route path='resume' component={Resume} />
                <Route path='about' component={About} />
                
        </Router>

    );
}