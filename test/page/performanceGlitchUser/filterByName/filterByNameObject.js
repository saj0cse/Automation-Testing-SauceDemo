
class filterByNameObject{
    get filterButton(){
        return $("//select[@class = 'product_sort_container']");
    }
    get setValue(){
        return $("//option[@value= 'za']");
    }
}
module.exports = new filterByNameObject();