import React, { Component } from 'react';
import SimpleText from './SimpleText';
import { HIGHLIGHTS } from '../actions/';

export default class TitleCard extends Component {

    clickAction() {
        //console.log('clicked highlights')
        this.props.dispatch({
            type: HIGHLIGHTS,
            title: this.props.title
        });
    }


    buildElements(){
        const hasHighlights = this.props.highlights.length > 0 ? true : false;
        let start = this.props.startDate.getUTCFullYear();
        let end = this.props.endDate.getUTCFullYear();
        let titleSpanClasses = '';
        let summarySpanClasses = '';
        let title = this.props.title;
        let titleText = 
            <span>
                <span className='title-date'>
                    {start == end ? start : start + " - " + end}
                </span>
                <span className='title-text'>{title}</span>    
            </span>;

        if (
            this.props.groupFlag == false && 
            (this.props.summary || hasHighlights)
            ) {
            titleSpanClasses += "has-highlights";
        }
        else if (this.props.summary && hasHighlights) {
            summarySpanClasses = "has-highlights";
        }
        else if (!this.props.summary && hasHighlights) {
            titleSpanClasses = "has-highlights";
        }
        
        const titleComponent =  
            <SimpleText 
                key="1" text={titleText} 
                spanClasses={titleSpanClasses} 
                divClasses="title"
            />;
        const summaryComponent = 
            <SimpleText 
                key="2" 
                text={this.props.summary} 
                spanClasses={summarySpanClasses} 
                divClasses="summary"
            />;

        let returnArray = [];
        if ((this.props.summary && this.props.groupFlag) || 
            (
            this.props.summary &&
            this.props.groupFlag == false &&
            this.props.highlightTracker[this.props.title]
            )
            )
        {
            returnArray = [
                titleComponent,
                summaryComponent
            ];
        }
        else {
            returnArray = [titleComponent];
        }
        
        return returnArray;
        
    }

    render(){
        //console.log('tc props', this.props)
        const hasHighlights = this.props.highlights.length > 0;
        let className = 'title-card';
        let expandable = false;
        if (hasHighlights || (this.props.groupFlag == false && this.props.title)){
            expandable = true;
            className += ' titlecard-has-highlights';
        }
            
        return (
                <div 
                    className={className}
                    onClick={expandable ? this.clickAction.bind(this) : null }
                >
                    {this.buildElements()}
                </div>
            );
    }


}
