import React, { Component } from 'react';
import TitleCard from './TitleCard';
import HighlightBox from './HighlightBox';
let lodash = require('lodash');

export default class ResumeItemGroup extends Component {

    render() {
        //console.log('rig props', this.props);
        //console.log('prop=', this.props.highlightTracker)
        //console.log('title=', this.title)
        if (this.props.highlightTracker[this.props.title]){
            //console.log('here');
            return(
                <div className='res-itemgroup'>
                    <TitleCard {...this.props} />
                    <HighlightBox highlights={this.props.highlights} className="highlight-box" />
                </div>
            );
        }
        else{
            //console.log('there');
            return(
                <div className='res-itemgroup'>
                    <TitleCard {...this.props} />
                </div>
            );  
        }
    
    }

}