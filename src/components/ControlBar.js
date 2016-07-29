import React, { Component } from 'react';


export default class ControlBar extends Component {

    render() {
        return (
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
        )
    }
}