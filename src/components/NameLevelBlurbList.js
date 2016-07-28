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
            <div>
                <p className="category-title">{this.props.heading}</p>
                {this.props.subtitle !== 'undefined' ? (
                        <div className="category-subtitle">{this.props.subtitle}</div>
                    ) : none
                }
                
                <ul>
                    {this.makeList()}
                </ul>
            </div>
        );
    
    }

}
