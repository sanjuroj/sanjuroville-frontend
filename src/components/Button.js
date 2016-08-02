import React, { Component } from 'react';
import { toggle_grouped } from '../actions/';


export default class Button extends Component {
    handleClick(){
        console.log('button props', this.props)
        this.props.dispatch(this.props.action(this.props.expandable));
    }

    render(){
        return (
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={this.handleClick.bind(this)}
            >
            {this.props.text}
            </button>
        );
    }

}