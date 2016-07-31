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
            //console.log('grd endate parse', Date.prototype.toString(Date.parse(item.endDate)));
            item.endDate = new Date(item.endDate);
            item.startDate = new Date(item.startDate);
            return item;
        });


        if (groupFlag == true || groupFlag == null){

            returnData.push(catObj);    
        }
        else {
            catObj.category_title = "Work, Education, and Volunteering";
            try{
                returnData[0].data = returnData[0].data.concat(catObj.data);
            }
            catch(err){
                returnData.push(catObj);
            }
        }
    }

    const sortedData = sortCategoryData(returnData);
    // console.log('grd sorted', sortedData);
    return sortedData;
}

export function sortCategoryData(catData) {
    for(var cat of catData) {
        cat.data.sort(function(a,b){
            return b.endDate - a.endDate;
        });
    }
    return catData;
}
