import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';


export default class Highlight extends Component {
    
    
    render() {
        return (
            <div>
                <ReactMarkdown 
                    source={this.props.highlight}
                    escapeHtml={true}
                />
            </div>
        );
    }

}


