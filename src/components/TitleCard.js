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
        let titleSpanClasses = '';
        let summarySpanClasses = '';

        if (this.props.groupFlag == false && hasHighlights) {
            titleSpanClasses += "has-highlights";
        }
        else if (this.props.summary && hasHighlights) {
            summarySpanClasses = "has-highlights";
        }
        
        const titleComponent =  <SimpleText key='1' text={this.props.title} spanClasses={titleSpanClasses} divClasses="title"/>;
        const summaryComponent = <SimpleText key='2' text={this.props.summary} spanClasses={summarySpanClasses} divClasses="summary"/>;

        if (this.props.summary && this.props.groupFlag) {
            return ([
                titleComponent,
                summaryComponent
            ]);
        }
        if(
            this.props.summary &&
            this.props.groupFlag == false &&
            this.props.highlightTracker[this.props.title]
        )
        {
            console.log('passed')
            return ([
                titleComponent,
                summaryComponent
            ]);
        }
        
        
        else {
            return [titleComponent];
        }


        
    }

    render(){
        //console.log('tc props', this.props)
        const hasHighlights = this.props.highlights.length > 0;
        let className = 'title-card';
        hasHighlights ? className+=' titlecard-has-highlights' : '';
        return (
                <div 
                    className={className}
                    onClick={hasHighlights ? this.clickAction.bind(this) : null }
                >
                    {this.buildElements()}
                </div>
            );
    }


}

/*
    render() {
        //console.log('titlecard props',this.props);
        if (this.props.summary) {
            return (
                <div className={
                        'title-card ' + 
                        (this.props.highlights.length > 0 ? 'titlecard-has-highlights' : '')
                    } onClick={this.clickAction.bind(this)}>
                    <div className={'title'}>
                        <SimpleText text={this.props.title} />
                    </div>
                    <div className={'summary'}>
                        <SimpleText classes={this.props.highlights.length > 0 ? 'has-highlights' : ''} text={this.props.summary} />
                    </div>
                </div>
            );    
        }
        else {
            return (
                <div className={
                        'title-card ' + 
                        (this.props.highlights.length > 0 ? 'titlecard-has-highlights' : '')
                    } onClick={this.clickAction.bind(this)}>
                    <div className={'title'}>
                        <SimpleText classes={this.props.highlights.length > 0 ? 'has-highlights' : ''} text={this.props.title} />
                    </div>
                    
                </div>
            );
        }
    }
*/



