
class verifyCardObject{
        get verifyProductsNameObject(){
            return $("//div[@class='inventory_item_name']");
        }
        get verifyProductsPriceObject(){
            return $("//div[@class='inventory_item_price']");
        }
        // get verifyTotalPriceObject(){
        //     return $("//div[@class='summary_total_label']");
        // }
        
}
module.exports = new verifyCardObject();