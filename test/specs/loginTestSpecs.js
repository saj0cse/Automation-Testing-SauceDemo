const loginAction = require("../page/loginTest/loginAction");

const lockedOutUser = "locked_out_user";

describe("Login test with locked_out_user", () => {

    it("1. locked_out_user login", async () => {
        await loginAction.usernameAction(lockedOutUser);
        await loginAction.passwordAction();
        await loginAction.loginClickAction();
    });

    it("2. Verify the error message", async () => {
        await expect(loginAction.errorMessage).toBeDisplayed();
        await expect(loginAction.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

});


