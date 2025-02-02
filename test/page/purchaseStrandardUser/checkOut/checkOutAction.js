const checkOutObject = require("./checkOutObject");

class checkOutAction {
    async shoppinCardIconAction() {
        await checkOutObject.shoppingCardIconObject.click();
    }
    async checkOutAction() {
        await checkOutObject.checkOutObject.click();
    }
    async firstNameAction(firstName){
        await checkOutObject.firstNameObject.click();
        await checkOutObject.firstNameObject.setValue(firstName)
    }
    async lastNameAction(lastName){
        await checkOutObject.lastNameObject.click();
        await checkOutObject.lastNameObject.setValue(lastName)
    }
    async postalCodeAction(postalCode){
        await checkOutObject.postalCodeObject.click();
        await checkOutObject.postalCodeObject.setValue(postalCode)
    }
    async checkOutContinueAction(){
        await checkOutObject.checkOutContinueObject.click();
    }
}
module.exports = new checkOutAction();



