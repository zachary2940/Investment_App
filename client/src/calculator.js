/*calculator
this.priceBought = priceSold;
    this.priceSold = priceSold;*/
function realised_PL_raw (priceBought, priceSold){
   return priceSold-priceBought;
}

function realised_PL_percentage (realised_PL_raw){
   return realised_PL_raw/priceBought*100;
}

// function realised_PL_raw (priceBought, priceSold){
//    return priceSold-priceBought;
// }