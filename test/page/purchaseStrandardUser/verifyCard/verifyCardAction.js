const verifyCardObject = require("./verifyCardObject");

class verifyCardAction {
    get verifyTotalPrice(){
        return $("//div[@class='summary_total_label']");
    }
}



module.exports = new verifyCardAction();
