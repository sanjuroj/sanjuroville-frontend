import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import getRData from './reducers';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import routes from './routes';


require("../assets/stylesheets/main.scss");

let store = createStore(
    getRData,
    null,
    applyMiddleware(
        thunk
    ));


// document.getElementById('target').innerHTML = "Zip";

ReactDOM.render(
    <Provider store={store}>
        {routes(browserHistory)}
    </Provider>,
    document.getElementById('target')
);


