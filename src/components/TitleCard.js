import React, { Component } from 'react';
import Title from './Title';
import Summary from './Summary';

export default class TitleCard extends Component {
    
    
    render() {
        //console.log('render props',this.props);
        return (
            <div>
                <Title title={this.props.data.title} />
                <Summary summary={this.props.data.summary} />
            </div>
        );
    }

}


