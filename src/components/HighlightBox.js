import React, { Component } from 'react';
import Highlight from './Highlight';

export default class HighlightBox extends Component {
    
    makeHighlights(){
        const highlightArray = this.props.highlights.map( (hLight, key) => {
            return (<Highlight highlight={hLight} key={key}/>);
        });
        return highlightArray;
    }
    
    render() {
        if (this.props.highlights !== undefined){
            return (
                <div className={'highlight-box'}>
                    {this.makeHighlights()}
                </div>
            );
        }
        else{
            return (null);
        }

    }

}


