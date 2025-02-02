const verifyCardObject = require("./verifyCardObject");

class verifyCardAction {
    async getVerifyProductsName(cardNumbers) {
        const VerifyProductsNameList = [];
        for (let cardNumber of cardNumbers) {
            if (typeof cardNumber === 'number' && cardNumber > 0) {
                const VerifyProductName = await verifyCardObject.verifyProductsName(cardNumber).getText();
                VerifyProductsNameList.push(VerifyProductName);
            }
        }
        return VerifyProductsNameList;
    }
    async getVerifyProductsPrice(cardNumbers) {
        let VerifyProductsPriceList = 0;
        for (let cardNumber of cardNumbers) {
            if (typeof cardNumber === 'number' && cardNumber > 0) {
                try {
                    const VerifyProductPrice = await verifyCardObject.verifyProductsPrice(cardNumber).getText();
                    const price = parseFloat(VerifyProductPrice.toString().replace(/[$]/g, ""));
                    if (!isNaN(price)) {
                        VerifyProductsPriceList += price;
                    } else {
                        console.log(`Invalid price for card ${cardNumber}: ${VerifyProductPrice}`);
                    }
                } catch (error) {
                    console.log(`Error verifying price for card ${cardNumber}: ${error.message}`);
                }
            }
        }
        return VerifyProductsPriceList;
    }

    async getverifyTotalPrice() {
        const totalPrice = await verifyCardObject.verifyTotalPrice.getText();
        const subTotalPrice = parseFloat(totalPrice.replace(/^Item total: \$/, ""));
        return subTotalPrice;
    }
}
module.exports = new verifyCardAction();
