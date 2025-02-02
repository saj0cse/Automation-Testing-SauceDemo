
class addToCardObject{
    // addedProductsListObject(cardNumber) {
    //     return $(`(//div[@class='inventory_item_name'])[${cardNumber}]`);
    // }

    get addToCardObject(){
        return  (cardNumber) => $(`(//button[contains(text(),'Add to cart')])[${cardNumber}]`);
    }

   
    
    
}

module.exports = new addToCardObject();