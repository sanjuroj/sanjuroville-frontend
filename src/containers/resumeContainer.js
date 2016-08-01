import React, { Component } from 'react';
import CategoryGroup from '../components/CategoryGroup.js';
import { connect } from 'react-redux';
import { fetchData } from '../actions/';
import { getDatedData } from '../utils/getResData';
import NameLevelBlurbList from '../components/NameLevelBlurbList';
import ControlBar from '../components/ControlBar';


// TODO: move css from React to Django
// TODO: sort categories by date
// TODO: strip extra spaces off 
// TODO: sort skills and lang by best-> worst
// TODO: include dates on chronological items
// TODO: accent on resume
// TODO: remove periods from ends of sentances
// TOTO: make it impossible to expand items that have no highlights

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

    getSubheading(type){
        let textObj = {
            skills: "Estimated skill level in parenthesis on a scale of 1 to 10"
        };
        
        return(textObj[type]);
    }

    buildCategoryList(posData){
        //console.log('bpl postdata=',posData);
        //console.log('rc props in build', this.props);
        const posList = posData.map( (item, key) => {
            return (<CategoryGroup {...item} 
                        dispatch={this.props.dispatch} 
                        highlightTracker={this.props.highlightTracker} 
                        groupFlag={this.props.groupFlag}
                        key={key}/>);
        }, this);
        //console.log('poslist', posList);
        return posList;
        
        
    }

    getSubTitle(section) {
        let subTitles = {
            skills: "Self-estimated skill levels are shown in parenthesis"
        };
        return(subTitles[section]);
    }

    render(){
        //console.log('container props', this.props);
        //console.log('render props', this.props)
        const datedData = getDatedData(this.props.resumeData, this.props.groupFlag);
        //console.log('datedlist=',datedData);
        const categoryList = this.buildCategoryList(datedData);
        // console.log('catlist=',categoryList);
        //console.log('container props2', this.props);


        if (categoryList !== 'undefined') {
            return(
                <div className="resume-body">
                    <ControlBar {...this.props} style={require('../../assets/resume-styles.css')} />
                    <div className="resume-heading">
                        An interactive version of my resume is displayed below.  It loads in a 
                        condensed form with expandable items highlighted by a bottom border. 
                        The control buttons just above can be used to collapse and expand all items,
                        or change how some of the information is viewed.  For an explanation of
                        how this page was built, please go to the About page.
                    </div>
                    <div className="resume-data">
                        <section id="dated-items" >
                            {categoryList}
                        </section>
                        <section id="skilz" className="skilz-card" >
                            <NameLevelBlurbList 
                                data={this.props.resumeData.skill} 
                                heading="SKILLS" 
                                subtitle={this.getSubTitle('skills')}/>
                        </section>
                        <section id="languages" className="lang-card" >
                            <NameLevelBlurbList data={this.props.resumeData.language} heading="LANGUAGES" />
                        </section>
                        
                    </div>
                
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