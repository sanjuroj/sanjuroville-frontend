import React, { Component } from 'react';
import ResumeItemGroup from './ResumeItemGroup';

export default class CategoryGroup extends Component {

    makeRIGItems(){
        console.log('catgroup props',this.props)
        return this.props.data.map(function(item, key){
        
            return (
                <div className={'res-itemgroup'} key={key}>
                    <ResumeItemGroup {...item} highlightTracker={this.props.highlightTracker} className="title-card"/>
                </div>
            )
            
        }, this);
        
    }
    

    render() {
        //console.log('rig props', this.props);
        
        return (
            <div className={'category-group'}>
                CATEGORY = {this.props.category_title}
                {this.makeRIGItems()}
            </div>
        )
        
    }

}