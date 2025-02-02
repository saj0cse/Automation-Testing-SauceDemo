const filterByNameObject = require("./filterByNameObject");

class filterByNameAction{
    async ClickFilterButton(){
        await filterByNameObject.filterButton.click();
    }
    async ClicksetValue(){
        await filterByNameObject.setValue.click();
    }
}
module.exports = new filterByNameAction();