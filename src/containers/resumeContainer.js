import React, { Component } from 'react';
import CategoryGroup from '../components/CategoryGroup.js';
import { connect } from 'react-redux';
import { fetchData } from '../actions/';
import { getDatedData } from '../utils/getResData';
import NameLevelBlurbList from '../components/NameLevelBlurbList';


// TODO: move css from React to Django
// TODO: sort categories by date
// TODO: strip extra spaces off 
// TODO: sort skills and lang by best-> worst
// TODO: include dates on chronological items

class ResumeContainer extends Component {
    
    makeTitle(title, location, modifier=null){
        if (modifier==null){
            return (`${title}, ${location}`);
        }
        else {
            return (`(${title} in ${modifier}, ${location}`);
        }
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

    getTitle(section) {
        let titles = {
            language: "This", 
            skills: "that"
        };
        return(titles[section]);
    }

    render(){
        //console.log('container props', this.props);
        //console.log('render props', this.props)
        const datedData = getDatedData(this.props.resumeData, this.props.groupFlag);
        //console.log('datedlist=',datedData);
        const categoryList = this.buildCategoryList(datedData);
        //console.log('poslist=',positionList);


        if (categoryList !== 'undefined') {
            return(
                 <div className="resume-data">
                    <section id="timeline" style={require('../../assets/styles.css')} >
                        {categoryList}
                    </section>
                    <section id="skilz" className="skilz-card" >
                        <NameLevelBlurbList data={this.props.resumeData.skill} heading="Skills" />
                    </section>
                    <section id="languages" className="lang-card" >
                        <NameLevelBlurbList data={this.props.resumeData.language} heading="Language" />
                    </section>
                    
                </div>
            );
        }
        else {
            return (<div>No Data Found</div>);
        }
        
    }


}

const mapStateToProps = (state) => {
    //console.log('state=',state);
    return(state);
};

export default connect(mapStateToProps)(ResumeContainer);