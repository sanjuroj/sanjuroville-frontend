import React, { Component } from 'react';
import SimpleText from './SimpleText';
import { HIGHLIGHTS } from '../actions/';

export default class TitleCard extends Component {

    clickAction() {
        this.props.dispatch({
            type: HIGHLIGHTS,
            title: this.props.title
        });
    }

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

}


