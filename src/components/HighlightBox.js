import React, { Component } from 'react';
import Highlight from './Highlight';

export default class HighlightBox extends Component {
    
    makeHighlights(){
        const highlightArray = this.props.highlights.map( (hLight, key) => {
            return (
                <li key={key}>
                    <Highlight highlight={hLight}/>
                </li>
            );

        });
        return highlightArray;
    }
    
    render() {
        if (this.props.highlights !== undefined){
            return (
                <div className={'highlight-box'}>
                    <ul>
                        {this.makeHighlights()}
                    </ul>
                </div>
            );
        }
        else{
            return (null);
        }

    }

}


