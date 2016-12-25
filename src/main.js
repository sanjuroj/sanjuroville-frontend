import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import getRData from './reducers';
import ResumeContainer from './containers/resumeContainer.js';
import thunk from 'redux-thunk';

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
        <ResumeContainer/>
    </Provider>,
    document.getElementById('target')
);


