
class checkOutObject {
    get shoppingCardIconObject() {
        return $("//div[@id='shopping_cart_container']");
    }
    get checkOutObject() {
        return $("//button[@id='checkout']");
    }
    get firstNameObject(){
        return $("//input[@id='first-name']");
    }
    get lastNameObject(){
        return $("//input[@id='last-name']");
    }
    get postalCodeObject(){
        return $("//input[@id='postal-code']");
    }
    get checkOutContinueObject(){
        return $("//input[@id='continue']");
    }
}
module.exports = new checkOutObject();


