const loginAction = require("../page/loginTest/loginAction");
const homeAction = require("../page/purchaseStrandardUser/home/homeAction");

const performanceGlitchUser = "performance_glitch_user";

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

});