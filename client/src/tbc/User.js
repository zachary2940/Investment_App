//User class
var portfolioMaker = require("./Portfolio")

class User{
    constructor(name, password){
        this.name=name;
        this.password=password;
        this.id=password
        this.Portfolio= new portfolioMaker.Portfolio();
    }
    buyStock(symbol){ () => {
            Portfolio.addStock(symbol);
        }
    }

    sellStock(symbol){
        for(i=0;i<Portfolio.stock_list.length();i++){
            if (symbol==Portfolio.stock_list[i].symbol){
                //delete stock
            }
        }
    }
}

module.exports = {User}

