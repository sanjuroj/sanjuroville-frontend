import React, { Component } from 'react';
import TitleCard from './TitleCard';
import HighlightBox from './HighlightBox';

export default class ResumeItemGroup extends Component {

    render() {
        //console.log('rig props', this.props);
        
        return (
            <div className={'res-itemgroup'}>
                <TitleCard data={this.props.data} className="title-card"/>
                <HighlightBox highlights={this.props.data.highlights} className="highlight-box" />
            </div>
        );
    }

}