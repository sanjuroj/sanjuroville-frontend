export function getDatedData(resumeData, groupFlag){
    
    //console.log('rc rdata=',this.props);
    let datedCategories = ['job', 'education'];
    
    let returnData = [];
    //groupFlag = false;
    for (let cat of datedCategories) {
        //console.log('getdated this', this);
        let catObj = {};
        var catData = resumeData[cat];
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
