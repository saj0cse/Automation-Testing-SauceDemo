
class logOutObject{
    get resetLogOutObject(){
        return $("//a[@id='logout_sidebar_link']");
    }
}
module.exports = new logOutObject();