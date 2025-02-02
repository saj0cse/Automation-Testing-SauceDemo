const loginObject = require("./loginObject");


class loginAction{
    async usernameAction(lockedOutUser){
        await loginObject.usernameInput.click();
        await loginObject.usernameInput.setValue(lockedOutUser);
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