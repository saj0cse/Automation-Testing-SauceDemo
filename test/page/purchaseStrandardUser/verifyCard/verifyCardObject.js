
class verifyCardObject {
    get verifyProductsName() {
        return (cardNumber) => $(`(//div[contains(@class, 'inventory_item_name')])[${cardNumber}]`);
    }
    get verifyProductsPrice() {
        return (cardNumber) => $(`(//div[contains(@class, 'inventory_item_price')])[${cardNumber}]`);
    }
    get verifyTotalPrice(){
        return $("//div[contains(@class,'summary_subtotal_label')]");
    }
}
module.exports = new verifyCardObject();