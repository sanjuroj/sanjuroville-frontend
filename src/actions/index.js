import fetch from 'isomorphic-fetch';



export const RECEIVE_DATA = 'RECEIVE_DATA';
export const DATA_ERROR = 'DATA_ERROR';

export const HIGHLIGHTS = 'HIGHLIGHTS';



function receiveData (json) {
    return {
        type:RECEIVE_DATA,
        data: json
    }
}

function dataError (err) {
    return {
        type:DATA_ERROR,
        data: err
    }
}




export function fetchData () {
    
    return dispatch => {
        fetch('http://127.0.0.1:8000/resume/api/?format=json')
        .then(
            response => {
                //console.log('here');
                return response.json();
            },
            reject => dispatch(dataError(reject))
        )
        .then(
            json => {
                //console.log('there',json);
                dispatch(receiveData(json));
            }
        )
    }
}