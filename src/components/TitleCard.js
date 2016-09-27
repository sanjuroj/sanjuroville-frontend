import React, { Component } from 'react';
import SimpleText from './SimpleText';
import { HIGHLIGHTS } from '../actions/';
import ReactMarkdown from 'react-markdown';

export default class TitleCard extends Component {

    clickAction(e) {
        //console.log('clicked highlights')
        let re = new RegExp("http");
        if (!re.test(e.target)) {
            this.props.dispatch({
                type: HIGHLIGHTS,
                title: this.props.title + this.props.organization
            });
        }
    }


    buildElements(){
        const hasHighlights = this.props.highlights.length > 0 ? true : false;
        let start = this.props.startDate.getUTCFullYear();
        let end = this.props.endDate.getUTCFullYear();
        let titleSpanClasses = 'title ilb';
        let summarySpanClasses = '';
        
        /*let titleText = 
            <span>
                <span className='title-date'>
                    {start == end ? start : start + " - " + end}
                </span>
                <span className='title-text'>{title}</span>    
            </span>;
        */

        if (
            this.props.groupFlag == false && 
            (this.props.summary || hasHighlights)
            ) {
            titleSpanClasses += " has-highlights";
        }
        else if (this.props.summary && hasHighlights) {
            summarySpanClasses += " has-highlights";
        }
        else if (!this.props.summary && hasHighlights) {
            titleSpanClasses += " has-highlights";
        }

        let loc = ''
        if (this.props.location != null){
            loc = ", " + this.props.location;
        }
        const org_loc = `\u2013 ${this.props.organization} ${loc}`;

        const dateComponent =  
            <SimpleText 
                key="1" 
                text={start == end ? start : start + " - " + end}
                spanClasses="title-date" 
                divClasses="title-element"
            />

        const titleComponent =  
            <div 
                key="2" 
                className={titleSpanClasses}
            >

                <SimpleText 
                    text={this.props.title} 
                    spanClasses="title-text ilb"
                    divClasses="title-element"
                />
            
                <SimpleText 
                    text={org_loc} 
                    spanClasses="title-org ilb"
                    divClasses="title-element"
                />
            </div>


        // const summaryComponent = 
        //     <ReactMarkdown 
        //         source={this.props.summary} 
        //         key="4" 
        //         className={summarySpanClasses} 
        //         containerTagName="div"
        //         containerProps={{className: "summary"}}
        //     />;

        let returnArray = [
            dateComponent,
            titleComponent
        ];
        if ((this.props.summary && this.props.groupFlag) || 
            (
            this.props.summary &&
            this.props.groupFlag == false &&
            this.props.highlightTracker[this.props.title+this.props.organization]
            )
            )
        {
            returnArray.push(
                <ReactMarkdown 
                    source={this.props.summary} 
                    key="4" 
                    className={summarySpanClasses} 
                    containerTagName="div"
                    containerProps={{className: "summary"}}
                />
            );
        }
        
        return returnArray;
        
    }

    render(){
        //console.log('tc props', this.props)
        const hasHighlights = this.props.highlights.length > 0;
        let className = 'title-card';
        let expandable = false;
        if (hasHighlights || (this.props.groupFlag == false && this.props.summary)){
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
