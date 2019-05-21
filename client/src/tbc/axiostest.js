//STATIC

var axios = require('axios')
var apikey = "QV0FGYM21GJG9GQ5";

function getStock(symbol){
  return axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='+symbol+'&interval=5min&apikey='+apikey).then(res => {
    var latestPrice = res.data["Time Series (5min)"][Object.keys(res.data["Time Series (5min)"])[0]]["1. open"]; 
    return latestPrice
  })
  .catch(err => {
    console.log(err);
  });
}

getStock("MSFT").then(res => console.log(res))



