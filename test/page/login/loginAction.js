const loginObject = require("./loginObject");

class loginAction{
    async usernameAction(){
        await loginObject.usernameInput.click();
        await loginObject.usernameInput.setValue("locked_out_user");
    }

    async passwordAction(){
        await loginObject.passwordInput.click();
        await loginObject.passwordInput.setValue("secret_sauce");
    }

    async loginClickAction(){
        await loginObject.loginClickInput.click();
    }

    get errorMessage(){
        return $("//h3[@data-test='error']");
    }
}

module.exports = new loginAction();