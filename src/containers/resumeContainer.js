import React, { Component } from 'react';
import CategoryGroup from '../components/CategoryGroup.js';
import { connect } from 'react-redux';
import { fetchData } from '../actions/';




class ResumeContainer extends Component {
    
    makeTitle(title, location, modifier=null){
        if (modifier==null){
            return (`${title}, ${location}`);
        }
        else {
            return (`(${title} in ${modifier}, ${location}`);
        }
    }

    
    getDatedData(){
        
        //console.log('rc rdata=',this.props);
        let datedCategories = ['job', 'education'];
        
        let returnData = [];
        let groupFlag = this.props.groupFlag;
        //groupFlag = false;
        for (let cat of datedCategories) {
            //console.log('getdated this', this);
            let catObj = {};
            var catData = this.props.resumeData[cat];
            if (cat == 'job'){
                catObj.data = catData.map(function(item){
                    item.title = `${item.position}, ${item.company}`;
                    return (item);
                });
                catObj.category_title = "Work Experience";
            }
            if (cat == 'education'){
                catObj.data = catData.map(function(item){
                    //item.title = this.makeTitle(item.degreeType, item.major, item.institution);
                    item.title = `${item.degreeType} in ${item.major}, ${item.institution}`;
                    return (item);
                });
                catObj.category_title = "Education";
            }
            catObj.data = catObj.data.map(function(item){
                item.icon = cat;
                return item;
            });


            if (groupFlag == true || groupFlag == null){

                returnData.push(catObj);    
            }
            else {
                catObj.category_title = "All Work/Education/Volunteering";
                try{
                    let priorData = returnData[0].data;
                    returnData.data = priorData.concat(catObj.data);
                }
                catch(err){
                    returnData.push(catObj);
                }
            }
        
            

        }
        
        //console.log('returndata',returnData)
        return returnData;
    }

    



    componentWillMount() {
        //console.log('didmount',this.props);
        var { dispatch } = this.props;
        //console.log('isfunc',dispatch);
        dispatch(fetchData());
    }

    buildCategoryList(posData){
        //console.log('bpl postdata=',posData);
        //console.log('rc props in build', this.props);
        const posList = posData.map( (item, key) => {
            return (<CategoryGroup {...item} dispatch={this.props.dispatch} highlightTracker={this.props.highlights} key={key}/>);
        }, this);
        //console.log('poslist', posList);
        return posList;
        
        
    }

    render(){
        //console.log('render this', this)
        //console.log('render props', this.props)
        const datedData = this.getDatedData();
        //console.log('datedlist=',datedData);
        const categoryList = this.buildCategoryList(datedData);
        //console.log('poslist=',positionList);

        if (categoryList !== 'undefined') {
            return(
                <section id="timeline" style={require('../../assets/styles.css')}>
                    {categoryList}
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