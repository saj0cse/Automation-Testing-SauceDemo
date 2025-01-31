
class loginObject{
    get usernameInput(){
        return $("//input[@placeholder='Username']");
    }

    get passwordInput(){
        return $("//input[@placeholder='Password']");
    }

    get loginClickInput(){
        return $("//input[@id='login-button']");
    }

}

module.exports = new loginObject();