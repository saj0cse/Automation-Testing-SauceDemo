const homeObject = require("./homeObject");

class homeAction{
    async naviGateHamburgerMenuAction(){
        await homeObject.naviGateHamburgerMenuObject.click();
    }
    async resetAppStateAction(){
        await homeObject.resetAppStateObject.click();
    }
    async closeMenuAction(){
        await homeObject.closeMenuObject.click();
    }
   
}

module.exports = new homeAction();