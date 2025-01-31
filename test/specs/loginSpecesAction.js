const loginAction = require("../page/login/loginAction");

describe("Login test with locked_out_user", () =>{

    it("loging user", async () => {
       await loginAction.usernameAction();
       await loginAction.passwordAction();
       await loginAction.loginClickAction();
    });

    it("Verify the error message", async ()=> {
        await expect(loginAction.errorMessage).toBeDisplayed();
        await expect(loginAction.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');

    });

});