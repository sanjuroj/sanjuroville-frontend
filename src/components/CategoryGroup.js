import React, { Component } from 'react';
import ResumeItemGroup from './ResumeItemGroup';

export default class CategoryGroup extends Component {

    makeRIGItems() {
        //console.log('catgroup props',this.props)
        return this.props.data.map(function(item, key){
        
            return (
                <ResumeItemGroup {...item} dispatch={this.props.dispatch} highlightTracker={this.props.highlightTracker} className="title-card"/>
            );
            
        }, this);
        
    }
    

    render() {
        //console.log('rig props', this.props);
        
        return (
            <div className={'category-group'}>
                <p className={'category-title'}>{this.props.category_title.toUpperCase()}</p>
                {this.makeRIGItems()}
            </div>
        )
        
    }

}