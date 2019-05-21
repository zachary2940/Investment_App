//What should a stock contain
/**
 * It needs to be:
 * - Updated regularly (on refresh for now)
 * - Have no. of stock bought
 * - Have purchased price
 * - Have total returns/losses
 * - Links to recent news*
 */

var axios = require('axios')
var apikey = "QV0FGYM21GJG9GQ5";

class Stock{
  
  constructor(props, symbol){
    this.symbol = symbol;
    getStock(symbol)
    this.props = {
      stockAmount : null,
      purchasedPrice : null,
      currentPrice : null,
      totalReturns : null,
      news : "broken link to news"
    }
  }


  calculateReturns(){
    absoluteReturns=(this.currentPrice-this.purchasedPrice)*stockAmount
    percentageReturns= (this.currentPrice-this.purchasedPrice)/this.purchasedPrice
    this.totalReturns={
      absoluteReturns : this.absoluteReturns,
      percentageReturns : this.percentageReturns
    }
  }
}

module.exports = {Stock}
