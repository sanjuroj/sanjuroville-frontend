//import { combineReducers } from 'redux';
import { RECEIVE_DATA, DATA_ERROR, HIGHLIGHTS, TOGGLE_GROUP} from '../actions/';


const defaultStore = {
    'resumeData': {
        'job': [],
        'education': [],
        'volunteer': [],
        'skill': [],
        'language': []
    },
    'groupFlag': false
};
export default function getRData(store=defaultStore, action) {
    //console.log('reducer action=',action);
    //console.log('receivedata action type =',RECEIVE_DATA);
    switch (action.type) {
    
    case RECEIVE_DATA:    
        let data = Object.assign({}, store, {resumeData: action.data});
        data.highlights = null;
        data.groupFlag = false;
        return data;

    case DATA_ERROR: 
        return Object.assign({},{resumeData: 'error'});

    case HIGHLIGHTS:
        console.log('highlights store', store);
        if (action.title == store.highlights) {
            return Object.assign({}, store);   
        }
        else {
            return Object.assign({}, store, {highlights: action.title});
        }
    
    case TOGGLE_GROUP: 
        if (store.groupFlag == true) {
            return Object.assign({}, store, {groupFlag: false});   
        }
        else {
            return Object.assign({}, store, {groupFlag: true});   
        }
    }

    return defaultStore;

}