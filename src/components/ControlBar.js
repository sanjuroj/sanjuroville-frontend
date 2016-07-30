import React, { Component } from 'react';
import { toggle_grouped } from '../actions/';


export default class ControlBar extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange() {
        this.props.dispatch(toggle_grouped());
        
    }

    render() {
        return (
            <div className="control-bar">
                <div className="grouped-switch">
                    <div className="grouped-label">
                        Chronological
                    </div>
                    <div className="switch">
                        <input 
                            id="cmn-toggle-1" 
                            className="cmn-toggle cmn-toggle-round" 
                            type="checkbox" 
                            checked={this.props.groupFlag}
                            onClick={this.handleChange}
                        />
                        <label htmlFor="cmn-toggle-1"></label>
                    </div>
                    <div className="grouped-label">
                        Grouped
                    </div>
                </div>
            </div>
          
        );
    }
}
/*
<div className="btn-toolbar" role="toolbar" aria-label="Control bar">
                <div className="btn-group" role="group" aria-label="Chronological or Grouped">
                    <label className="btn grouped active">
                        <input 
                            type="radio" 
                            name="grouped" 
                            id="chronological" 
                            className={this.props.groupedFlag !== true ? "checked" : null} />
                        Chronological
                        
                    </label>
                    <label className="btn grouped active">
                        <input 
                            type="radio" 
                            name="grouped" 
                            id="grouped" 
                            className={this.props.groupedFlag !== true ? null : "checked"} />
                        Grouped
                        
                        
                    </label>
                </div>
            </div>

*/