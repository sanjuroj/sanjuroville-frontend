import React, { Component } from 'react';

export default class NameLevelBlurbList extends Component {
    
    makeList(){
        return(this.props.data.map( (item, key) => {
            if (item.summary){
                return(<li key={key}> <span className="skill">{item.name} ({item.level})</span> - {item.summary}</li>);
            }
            else {
                return(<li key={key}><span className="skill">{item.name} ({item.level})</span></li>);
            }
        }));
    }


    render() {
        //console.log('nlbl props', this.props)
        return (
            
            <ul>
                {this.makeList()}
            </ul>
        );
    
    }

}
