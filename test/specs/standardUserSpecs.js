const loginAction = require("../page/loginTest/loginAction");
const homeAction = require("../page/purchaseStrandardUser/home/homeAction");
const addToCardAction = require("../page/purchaseStrandardUser/addCard/addToCardAction");
const checkOutAction = require("../page/purchaseStrandardUser/checkOut/checkOutAction")
const verifyCardAction = require("../page/purchaseStrandardUser/verifyCard/verifyCardAction");

const standardUser = "standard_user";
const cardNumbers = [1, 2, 3];
const cardProducts = [];
const firstName = "Shakil Ahammed";
const lastName = "Joy";
const postalCode = 2025;

describe("Logint with standard_user login", () => {
    it("standard_user login", async () => {
        await loginAction.usernameAction(standardUser);
        await loginAction.passwordAction();
        await loginAction.loginClickAction();
    });

    it("hamburger menu to Reset App State", async () => {
        await homeAction.naviGateHamburgerMenuAction();
        await homeAction.resetAppStateAction();
        await homeAction.closeMenuAction();
    });
    
    it("Add To Card", async () => {
        await addToCardAction.addToCardAction(cardNumbers);
    });
    it("Check Out Card", async () => {
        await checkOutAction.shoppinCardIconAction();
        await checkOutAction.checkOutAction();
        await checkOutAction.firstNameAction(firstName);
        await checkOutAction.lastNameAction(lastName);
        await checkOutAction.postalCodeAction(postalCode);
        await checkOutAction.checkOutContinueAction();
    });

    it("verify Card Products Name And PriceAction", async () => {
        await expect(verifyCardAction.verifyTotalPrice).toHaveText("Total: $58.29");
    })


});