import React, { Component } from 'react';
import ResumeItemGroup from '../components/ResumeItemGroup.js';
import { connect } from 'react-redux';
import { fetchData } from '../actions/';
import {sortResData, flattenData } from '../utils/reshapeData';




class ResumeContainer extends Component {
    
    getDatedData(){

        console.log('rc rdata=',this.props);
        if (this.props.groupFlag == true || this.props.groupFlag == null){

            
            
            const { education, job } = this.props.resumeData;
            var itemList = [];
            //console.log('get edu=', education)
            for (var jobkey in job) {
                const item = job[jobkey];
                //console.log('item=',item)
                item.title = `${item.position}; ${item.company}`;
                itemList.push(item);
            }

            for (var edukey in education) {
                const item = education[edukey];
                //console.log('item=',item)
                item.title = `${item.degreeType} in ${item.major}; ${item.institution}`;
                itemList.push(item);
            }

            
            //console.log('ilist',itemList)
            return itemList;
        }
    }


    componentWillMount(){
        //console.log('didmount',this.props);
        var { dispatch } = this.props;
        //console.log('isfunc',dispatch);
        dispatch(fetchData());
    }

    buildPositionList(posData){
        //console.log('bpl postdata=',posData);
        const posList = posData.map( (item, key) => {
            return (<ResumeItemGroup data={item} key={key}/>);
        });
        //console.log('poslist', posList);
        return posList;
        
        
    }

    render(){
        //console.log('render props', this.props)
        const datedData = this.getDatedData();
        //console.log('datedlist=',datedData);
        const positionList = this.buildPositionList(datedData);
        //console.log('poslist=',positionList);

        if (positionList !== 'undefined') {
            return(
                <section id="timeline" style={require('../../assets/styles.css')}>
                    {positionList}
                </section>
            );
        }
        
    }


}

const mapStateToProps = (state) => {
    //console.log('state=',state);
    return(state);
};

export default connect(mapStateToProps)(ResumeContainer);