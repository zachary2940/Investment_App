var axios = require('axios');
var apikey = "QV0FGYM21GJG9GQ5";
var https = require('https');
//The only difference between this method and http.request() is that it sets the method to GET and calls req.end() automatically. 
function get_Stock(Stock){
    https.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + String(Stock.name) + "&interval=5min&apikey=" + apikey, (res)=> {

    }
}

function get_Stock(Stock){
    axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + String(Stock.name) + "&interval=5min&apikey=" + apikey)
      .then(function(response){
          var priceList = response.data["Time Series (5min)"];
          var recentPricelist = priceList[Object.keys(priceList)[0]];
          Stock.high = recentPricelist['2. high'];
          Stock.low = recentPricelist['3. low'];
          Stock.current_value = recentPricelist['4. close'];
          var percentage_change = (Stock.high - Stock.low)/(Stock.high)*100
          Stock.percentageChange = percentage_change;
          console.log(Stock.high)
          return Stock;
      });
  }

  var stock = new Stock("MSFT")
  console.log(get_Stock(stock).percentage_change);

  function Stock(name, market, currency, current_value, purchase_value, high, low, percentage_change){
    this.name=name;
    this.market=market;
    this.currency=currency;
    this.current_value=current_value;
    this.purchase_value=purchase_value;
    this.gain_loss=current_value-purchase_value;
    this.high=high;
    this.low=low;
    this.percentage_change=percentage_change;
}
