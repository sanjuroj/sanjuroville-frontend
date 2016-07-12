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
        
        console.log('rc rdata=',this.props);
        let datedCategories = ['job', 'education'];
        
        let returnData = [];
        let groupFlag = this.props.groupFlag;
        //groupFlag = false;
        for (let cat of datedCategories) {
            console.log('getdated this', this);
            let catObj = {};
            var catData = this.props.resumeData[cat];
            if (cat == 'job'){
                catObj.data = catData.map(function(item){
                    item.title = `${item.position}, ${item.company}`;
                    return (item);
                });
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


            // catData = catData.map((item)=>{
            //     if (cat == 'job'){
            //         item.title = `${item.position}, ${item.company}`;
            //     }
            //     else if (cat == 'education'){
            //         item.title = `${item.degreeType} in ${item.major}, ${item.institution}`;
            //     }
                
            //     return (item);
            // });

            if (groupFlag == true || groupFlag == null){
                if (cat == 'education'){
                    catObj.category_title = "Education";
                }
                if (cat == 'job'){
                    catObj.category_title = "Work Experience";
                    catObj.icon = 'job';       
                }
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
        
            

            // //console.log('get edu=', education)
            // for (var jobkey in job) {
            //     const item = job[jobkey];
            //     //console.log('item=',item)
            //     item.title = `${item.position}, ${item.company}`;
            //     itemList.push(item);
            // }

            // for (var edukey in education) {
            //     const item = education[edukey];
            //     //console.log('item=',item)
            //     item.title = `${item.degreeType} in ${item.major}, ${item.institution}`;
            //     itemList.push(item);
            // }
        }
        
        console.log('returndata',returnData)
        return returnData;
    }

    



    componentWillMount(){
        //console.log('didmount',this.props);
        var { dispatch } = this.props;
        //console.log('isfunc',dispatch);
        dispatch(fetchData());
    }

    buildCategoryList(posData){
        //console.log('bpl postdata=',posData);
        const posList = posData.map( (item, key) => {
            //return (<CategoryGroup {...item} highlightTracker={this.props.highlights} key={key}/>);
            return (<CategoryGroup {...item} highlightTracker={'Faculty Research Assistant, Oregon State University'} key={key}/>);
        });
        //console.log('poslist', posList);
        return posList;
        
        
    }

    render(){
        console.log('render this', this)
        //console.log('render props', this.props)
        const datedData = this.getDatedData();
        console.log('datedlist=',datedData);
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