/// CALL, APPLY and BIND in JS.
// Defination: In JS, these three methods are used to manipulate the context('this' keyword) of a function during its execution.
// CALL : The call method allows you to invoke a function with a specified 'this' value and arguments provided individually.
// APPLY : The apply method is similar to call method, but it accepts arguments as array.
// BIND : The bind method creates a new function that when called has its 'this' keyword set to the provided value with the given sequence of the arguments. 


///Problem Statement1: let say we have an object which contains the properties and functions (say, printDetails) and we have another object in which we want to use the same function. So, instead of copying the same function in other object, we can just change the context(this) of the calling object.
let user1 = {
    name : "Yogesh",
    age : 25,
    printDetails : function(){
        console.log(this);
    }
};
user1.printDetails();
let user2 = {
    name : "Ankit",
    age : 26
}
//call : function borrowing
user1.printDetails.call(user2);
//apply : function borrowing
user1.printDetails.apply(user2);

//Main difference in call and apply in the additional arguments. Call accepts the arguments provided individually whereas Apply accepts arguments as an array.
let user3 = {
    name : "Yogi",
    age : 25,
    printDetails : function(state, country){
        console.log(this.name + " " + state + " " +  country);
    }
};
user3.printDetails();
let user4 = {
    name : "Dev",
    age : 26
}
//call 
user3.printDetails.call(user4, "haryana", "india");
//apply
user3.printDetails.apply(user4, ["punjab", "india"]);

//We can also move the printDetails funciton to the global context:
let user5 = {
    name : "Bathla",
    age : 25,
};
let printDetails = function(){
    console.log(this);
};
let user6 = {
    name : "Lubana",
    age : 26
}
printDetails();
printDetails.call(user5);
printDetails.apply(user6);

//BIND : same as call but in this we just create the copy of that which we can invoke in the future.
let bind_user3 = user3.printDetails.bind(user4, "uttarpradesh", "india");
bind_user3();
let bind_user = user3.printDetails.bind(user5, ["uttarpradesh", "india"]); //almost same behaviour as call
bind_user();