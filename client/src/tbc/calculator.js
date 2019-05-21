/*calculator
this.priceBought = priceSold;
    this.priceSold = priceSold;*/
    
// function realised_PL_raw (priceBought, priceSold){
//    return priceSold-priceBought;
// }

// function realised_PL_percentage (realised_PL_raw){
//    return realised_PL_raw/priceBought*100;
// }

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Instances of the readline.Interface class are constructed using the readline.createInterface() method. 
// Every instance is associated with a single input Readable stream and a single output Writable stream. 
// The output stream is used to print prompts for user input that arrives on, and is read from, the input stream.

// rl.question(query, callback)
// Callback:
// accessible by another function, and
// is invoked after the first function if that first function completes

rl.question('Enter stock symbol', (stock_symbol) => {
   // var stock_symbol = stock_symbol;
   console.log(`Searching for ${stock_symbol}...`); //temperate literal e.g. '' allows multiline strings and the ${} instead of the break in ' and using +
   console.log(stock_symbol);   
   rl.close(); //instance is closed
});

