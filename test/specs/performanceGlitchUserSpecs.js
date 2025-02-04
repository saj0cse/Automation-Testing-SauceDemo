const loginAction = require("../page/loginTest/loginAction");
const homeAction = require("../page/purchaseStrandardUser/home/homeAction");
const filterByNameAction = require("../page/performanceGlitchUser/filterByName/filterByNameAction");
const addToCardAction = require("../page/purchaseStrandardUser/addCard/addToCardAction");
const checkOutAction = require("../page/purchaseStrandardUser/checkOut/checkOutAction")
const verifyCardAction = require("../page/purchaseStrandardUser/verifyCard/verifyCardAction");
const successfullMessageAction = require("../page/purchaseStrandardUser/successfulMessage/sucessfulMessageAction");
const logOutAction = require("../page/purchaseStrandardUser/logOut/logOutAction");

const performanceGlitchUser = "performance_glitch_user";
const cardNumbers = [1];
const firstName = "Shakil";
const lastName = "Cse";
const postalCode = 2026;
let productsName = [];
let ProductsPrice = 0 ;
let verifyProductsPrice = 0;

describe("Logint with standard_user login", () => {

    it("standard_user login", async () => {
        await loginAction.usernameAction(performanceGlitchUser);
        await loginAction.passwordAction();
        await loginAction.loginClickAction();
    });

    it("hamburger menu to Reset App State", async () => {
        await homeAction.naviGateHamburgerMenuAction();
        await homeAction.resetAppStateAction();
        await homeAction.closeMenuAction();
    });

    it("Filter By Name", async () => {
        await filterByNameAction.ClickFilterButton();
        await filterByNameAction.ClicksetValue();
    });
    it("Get Products Name and Price List", async () => {
        const ProductsName = await addToCardAction.getProductsName(cardNumbers);
        console.log("Click Products Name: " + ProductsName);
        ProductsPrice = await addToCardAction.getProductsPrice(cardNumbers);
        console.log("Click Products Price: " + ProductsPrice);
    });
    it("Add To Card", async () => {
        await addToCardAction.clickAddToCard(cardNumbers);
    });
    it("Check Out Card", async () => {
        await checkOutAction.shoppinCardIconAction();
        await checkOutAction.checkOutAction();
        await checkOutAction.firstNameAction(firstName);
        await checkOutAction.lastNameAction(lastName);
        await checkOutAction.postalCodeAction(postalCode);
        await checkOutAction.checkOutContinueAction();
    });
    it("verify Card Products Name And Price", async () => {
            const verifyProductsName = await verifyCardAction.getVerifyProductsName(cardNumbers);
            console.log("Verify Products Name: " + verifyProductsName);
            expect(productsName).toHaveText(verifyProductsName);
    
            verifyProductsPrice = await verifyCardAction.getVerifyProductsPrice(cardNumbers);
            console.log("Verify Products Price: " + verifyProductsPrice);
            expect(ProductsPrice).toBe(verifyProductsPrice);
    
            const verifyTotaProductsPrice = await verifyCardAction.getverifyTotalPrice();
            expect(ProductsPrice).toBe(verifyTotaProductsPrice);
            console.log(verifyTotaProductsPrice);
         })
        it("Successful Order Message", async () => {
            await successfullMessageAction.getVerifyfinishButton();
            await expect(successfullMessageAction.successfulCompleteHeader).toBeDisplayed();
            await expect(successfullMessageAction.successfulCompleteHeader).toHaveText("Thank you for your order!");
            await expect(successfullMessageAction.successfulCompleteText).toBeDisplayed();
            await expect(successfullMessageAction.successfulCompleteText).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        });
        it("hamburger menu to Reset App State", async () => {
            await homeAction.naviGateHamburgerMenuAction();
            await homeAction.resetAppStateAction();
        });
        it("Log Out", async () => {
            await logOutAction.clickLogOut();
        });

});