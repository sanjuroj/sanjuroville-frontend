import React, { Component } from 'react';


export default class Summary extends Component {
    
    
    render() {
        return (
            <span className={this.props.classes}>
                {this.props.text}
            </span>
        );
    }

}


