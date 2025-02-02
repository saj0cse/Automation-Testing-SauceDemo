const addToCardObject = require("./addToCardObject");

class addToCardAction {
    
    async addToCardAction(cardNumbers) {
        for (let cardNumber of cardNumbers) {
            if (typeof cardNumber === 'number' && cardNumber > 0) {
                await addToCardObject.addToCardObject(cardNumber).click();
            } else {
                console.log("Invalid CardNumber", cardNumber);
            }
        }
    }
}

module.exports = new addToCardAction();