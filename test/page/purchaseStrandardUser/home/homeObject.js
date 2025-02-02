
class homeObject{
    get naviGateHamburgerMenuObject (){
        return $("//div[@class='bm-burger-button']");
    }
    get resetAppStateObject(){
        return $("//a[@id='reset_sidebar_link']");
    }
    get closeMenuObject(){
        return $("//div[@class='bm-cross-button']");
    }

}

module.exports = new homeObject();