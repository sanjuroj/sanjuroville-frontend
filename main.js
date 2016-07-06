import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import getRData from './src/reducers';
import ResumeContainer from './src/containers/resumeContainer.js';
import thunk from 'redux-thunk';


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


