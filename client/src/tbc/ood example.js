var axios = require('axios');
var apikey = "QV0FGYM21GJG9GQ5";
function stock (name, high, low, percentageChange) {
this.name = name;
this.high = high;
this.low = low;
this.percentageChange = percentageChange;
} // Employee () is the constructor function because we use the new keyword below to invoke it.

function stock (name) {
    this.name = name;
    } 

var microsoft = new stock ('MSFT') // richard is a new object we create from the Employee () constructor function.

axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + String(microsoft.name) + "&interval=5min&apikey=" + apikey) 
  .then(function(response){
      var priceList = response.data["Time Series (5min)"];
      var recentPricelist = priceList[Object.keys(priceList)[0]];
      microsoft.high = recentPricelist['2. high'];
      microsoft.low = recentPricelist['3. low'];
      console.log(microsoft.high)
      console.log(microsoft.low)
      var percentageChange = (microsoft.high - microsoft.low)/(microsoft.high)*100 
      console.log(percentageChange)
      microsoft.percentageChange = percentageChange;
      console.log(microsoft.percentageChange)
  });



