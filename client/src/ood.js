function User (theName, theEmail) { // constructor
    this.name = theName; //defining attributes or properties
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
    console.log("i am still here");
}

//This way of overwriting the constructor is simply for convenience, so we don’t have to write User.prototype each time
//All JavaScript objects inherit properties and methods from a prototype. e.g. User.prototype
//Human constructor function has a prototype property which points to the prototype object. The prototype object has a constructor property which points back to the Human constructor function.
//I am just adding new methods to the prototype so that all User objects can inherit from it
//A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. 
// using an object literal destroys the constructor PROPERTY, so THE ONLY thing that is affected is that object.constructor does not point back to constructor
User.prototype = {   
    constructor: User, //Instead of User.prototype.constructor = User;, basically labelling the constructor
    saveScore:function (theScoreToAdd)  { 
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

var user1 = new User("zach");
user1.constructor; // does not console log anything

function Fruit () {
    console.log("hello")
}
var newFruit = new Fruit ();
console.log(newFruit.constructor) // Fruit ()

// A User 
firstUser = new User("Richard", "Richard@examnple.com"); 
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10); 

firstUser.showNameAndScores(); //Richard Scores: 15,10

// Another User
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18