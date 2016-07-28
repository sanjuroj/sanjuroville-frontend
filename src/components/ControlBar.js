import React, { Component } from 'react';


export default class ControlBar extends Component {

    render() {
        return (
            <div class="btn-toolbar" role="toolbar" aria-label="Control bar">
                <div class="btn-group" role="group" aria-label="Chronological or Grouped">
                    <label className="btn grouped active">
                        <input 
                            type="radio" 
                            name="grouped" 
                            id="chronological" 
                            autocomplete="off"
                            className={this.props.groupedFlag !== true ? "checked" : null} />
                        Chronological
                        
                    </label>
                    <label className="btn grouped active">
                        <input 
                            type="radio" 
                            name="grouped" 
                            id="grouped" 
                            autocomplete="off"
                            className={this.props.groupedFlag !== true ? null : "checked"} />
                        Grouped
                        
                        
                    </label>
                </div>
            </div>
        )
    }
}