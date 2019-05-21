//Portfolio class
var stockGetter = require("./Stock")
class Portfolio{
    constructor(props){
        this.props=props
        this.stock_list=[];
    }

    addStock(symbol){
        var stock = new stockGetter.Stock( null, symbol)
        this.stock_list.push(stock)
    }

    // calculateValue(){
    //     this.stock_list
    // }
}

var p = new Portfolio()
p.addStock("MSFT")
console.log(p.stock_list)

module.exports = {Portfolio}