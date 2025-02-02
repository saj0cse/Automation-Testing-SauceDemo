
class addToCardObject{
   
    get productsName(){
        return  (cardNumber) => $(`(//div[contains(@class, 'inventory_item_name')])[${cardNumber}]`);
    }
    get productsPrice(){
        return  (cardNumber) => $(`(//div[contains(@class, 'inventory_item_price')])[${cardNumber}]`);
    }
    get addToCardObject(){
        return  (cardNumber) => $(`(//button[contains(@class,'btn_inventory')])[${cardNumber}]`);
    }

   
    
    
}

module.exports = new addToCardObject();