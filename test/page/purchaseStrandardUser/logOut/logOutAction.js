const logOutObject = require("./logOutObject");
class logOutAction{
    async clickLogOut(){
        await logOutObject.resetLogOutObject.click();
    }
}
module.exports = new logOutAction();