//import { combineReducers } from 'redux';
import { RECEIVE_DATA, DATA_ERROR } from '../actions/';


const defaultStore = {resumeData: null};
export default function getRData(store=defaultStore, action) {
    //console.log('reducer action=',action);
    //console.log('receivedata action type =',RECEIVE_DATA);
    switch (action.type) {
        case RECEIVE_DATA:
        
        let data = Object.assign({}, store, {resumeData: action.data});
        data.highlights = null;
        data.groupFlag = null;
        return data;

        case DATA_ERROR: 
        return Object.assign({},{resumeData: 'error'}) 

    }



    return {'resumeData': {'job': [], 'education': []}};

}