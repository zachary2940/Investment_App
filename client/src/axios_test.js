// var axios = require('axios')
// axios.get('https://api.github.com/users/' + "zachary2940")
//   .then(function(response){
//     console.log(response.data.login); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });  

  var axios = require('axios')
axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo')
  .then(function(response){
    var priceList = response.data[Object.keys(response.data)[1]];
    console.log(response.data[Object.keys(response.data)[1]][Object.keys(priceList)[0]]); // ex.: { user: 'Your User'}
    // console.log([Object.keys(priceList)[0]]);
    console.log(response.status); // ex.: 200
  });  

// var test = {
//   "id": "109",
//   "No. of interfaces": "4"
// }
// console.log(test["No. of interfaces"]);