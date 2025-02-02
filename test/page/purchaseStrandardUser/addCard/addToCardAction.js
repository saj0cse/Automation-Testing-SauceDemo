const addToCardObject = require("./addToCardObject");

class addToCardAction {

    async getProductsName(cardNumbers) {
        const productsNameList = [];
        for (let cardNumber of cardNumbers) {
            if (typeof cardNumber === 'number' && cardNumber >= 0) {
                const getProductName = await addToCardObject.productsName(cardNumber).getText();
                productsNameList.push(getProductName);
            }
        }
        return productsNameList;
    }

    async getProductsPrice(cardNumbers) {
        let productsPriceList = 0;
        for (let cardNumber of cardNumbers) {
            if (typeof cardNumber === 'number' && cardNumber > 0) {
                try {
                    const getProductPrice = await addToCardObject.productsPrice(cardNumber).getText();
                    const price = parseFloat(getProductPrice.toString().replace(/[$]/g, ""));
                    if (!isNaN(price)) {
                        productsPriceList += price;
                    } else {
                        console.log(`Invalid price for card ${cardNumber}: ${getProductPrice}`);
                    }
                } catch (error) {
                    console.log(`Error fetching price for card ${cardNumber}: ${error.message}`);
                }
            } else {
                console.log(`Invalid card number: ${cardNumber}`);
            }
        }
        return productsPriceList;
    }

    async clickAddToCard(cardNumbers) {
        for (let cardNumber of cardNumbers) {
            if (typeof cardNumber === 'number' && cardNumber >= 0) {
                await addToCardObject.addToCardObject(cardNumber).click();
            } else {
                console.log("Invalid CardNumber", cardNumber);
            }
        }
    }


}

module.exports = new addToCardAction();