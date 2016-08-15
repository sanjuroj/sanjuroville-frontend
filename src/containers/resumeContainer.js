import React, { Component } from 'react';
import CategoryGroup from '../components/CategoryGroup.js';
import { connect } from 'react-redux';
import { fetchData } from '../actions/';
import { getDatedData } from '../utils/getResData';
import NameLevelBlurbList from '../components/NameLevelBlurbList';
import ControlBar from '../components/ControlBar';


// TODO: strip extra spaces off text entries (5)
// TODO: remove periods from ends of sentances (5)
// TODO: rotate branding font (5)
// TODO: allow user to specify which Linkedin files to import (5)
// TODO: fix underline hlighting so it only highlights the bottom of the box (6)
// TODO: make a better readme file for the repositories (3)
// TODO: need to run is_valid on form submissions (5)
// TODO: make labels on grouping slider clickable
// TODO: deemphasize location of volunteering (5)
// TODO: come up with better timeline icons.  Maybe just single letters in the circle? (5)
// TODO: add padding at bottom of highlights and reduce at top
// TODO: formalize how language skills are sorted (8)


class ResumeContainer extends Component {
    
    makeTitle(title, location, modifier=null){
        if (modifier==null){
            return (`${title}, ${location}`);
        }
        else {
            return (`(${title} in ${modifier}, ${location}`);
        }
    }

    sortResDataByLevel(data, type='fwd') {
        let sortedData = data;
        if(type == 'fwd'){
            sortedData = data.sort(function(a, b) {
                return a.level > b.level;
            });
        }
        else if(type == 'rev'){
            sortedData = data.sort(function(a, b) {
                return a.level < b.level;    
            });
        }
        else if(type.constructor === Array){
            sortedData = data.sort(function(a, b) {
                let aIndex = type.indexOf(a.level);
                let bIndex = type.indexOf(b.level);
                return aIndex > bIndex;
            });

        }

        console.log('rc sorted', sortedData);
        return sortedData;
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
        //console.log('rc render props', this.props)
        const datedData = getDatedData(this.props.resumeData, this.props.groupFlag);
        // console.log('datedlist=',datedData);
        const categoryList = this.buildCategoryList(datedData);
        let langSort = ['Native', 'Elementary'];
        if (categoryList !== 'undefined') {
            return(
                <div className="resume-body">
                    <ControlBar 
                        {...this.props} 
                        style={require('../../assets/resume-styles.css')} 
                        expandable={datedData}/>
                    <div className="resume-heading">
                        An interactive version of my resum&#233; is displayed below.  It loads in a 
                        compressed form with expandable items highlighted by a bottom border. 
                        The control buttons just above can be used to change the layout or
                        to collapse and expand all items.
                        My <a href="https://www.linkedin.com/in/sanjurojogdeo" target="_blank">
                        LinkedIn</a> page provides similar resum&#233; info as what is found here.  
                        I also have a <a href="https://github.com/sanjuroj" target="_blank">
                        GitHub</a> repository that can be perused.
                        The <a href={ window.location.origin + "/about"}>About</a> page 
                        has infomration on how this interactive resum&#233; was built.
                        <br/><br/>
                        I am currently looking for a software development job in Portland, Oregon.
                        I enjoy making data useful and digestable, which has been the consistent thread through 
                        most of my working and volunteer life.  I would like to be in an environment where 
                        I can learn from more experienced developers and where my diversity of experience 
                        will be useful.  
                    </div>
                    <div className="resume-data">
                        <section id="dated-items" >
                            {categoryList}
                        </section>
                        <section id="skilz" className="skilz-card" >
                            <NameLevelBlurbList 
                                data={this.sortResDataByLevel(this.props.resumeData.skill, 'rev')} 
                                heading="SKILLS" 
                                subtitle={this.getSubTitle('skills')}/>
                        </section>
                        <section id="languages" className="lang-card" >
                            <NameLevelBlurbList 
                                data={this.sortResDataByLevel(this.props.resumeData.language, langSort)} 
                                heading="LANGUAGES" />
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