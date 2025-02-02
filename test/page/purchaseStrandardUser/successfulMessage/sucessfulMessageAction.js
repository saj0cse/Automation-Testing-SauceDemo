const successfullMessageObject = require("./sucessfulMessageObject");

class successfullMessageAction{
    
    async getVerifyfinishButton(){
        await successfullMessageObject.finishButton.click();
    }
    get successfulCompleteHeader(){
        return $("//h2[@data-test='complete-header']");
    }
    get successfulCompleteText(){
        return $("//div[@data-test='complete-text']");
    }
}
module.exports = new successfullMessageAction();