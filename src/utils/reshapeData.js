

export function sortResItems(items, field, direction){

}

export function flattenData(resumeData, categoryKeys){
    var allItems = [];
    for (const ckey of categoryKeys) {
        allItems = allItems.concat(resumeData[ckey]);
    }
    
    return allItems;
}
 