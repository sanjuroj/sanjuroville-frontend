import React, { Component } from 'react';
import ResumeItemGroup from '../components/ResumeItemGroup.js';
import { connect } from 'react-redux';
import { fetchData } from '../actions/';




class ResumeContainer extends Component {
    
    getDatedData(rData){
        const { education, job } = rData;
        var itemList = [];
        //console.log('get edu=', education)
        for (var edukey in education) {
            const item = education[edukey];
            //console.log('item=',item)
            item.title = `${item.degreeType} in ${item.major}; ${item.institution}`;
            itemList.push(item);
        }

        for (var jobkey in job) {
            const item = job[jobkey];
            //console.log('item=',item)
            item.title = `${item.position}; ${item.company}`;
            itemList.push(item);
        }

        //console.log('ilist',itemList)
        return itemList;
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
        const datedData = this.getDatedData(this.props.resumeData);
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
    return( {'resumeData': state.resumeData} );
};

export default connect(mapStateToProps)(ResumeContainer);