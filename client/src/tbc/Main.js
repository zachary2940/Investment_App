// import "./User.js"
// var req = require('./Stock');
var userMaker = require('./User');

// req.getStock('MSFT').then(res=>{console.log(res)})
let zach = new userMaker.User('Zachary', "Hello")
zach.buyStock("MSFT").then(res => res(console.log(person1.Portfolio)))
