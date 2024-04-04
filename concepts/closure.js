///CLOSURE in JS.

//Defination: In JS, a closure is a combination of a function and the lexical environment within which that function was declared. This combination allows the function to access the variable from its containing scope even after the scope has been exited.

//Example1. Return a function.
const sum = function(a){
    let b = 9;
    return function(c){
        console.log(a, b, c);
        return a + b + c;
    };
};
const fnc = sum(2);
const result = fnc(4);
console.log(result);

//Example2. Return object of functions.
function sumDigits(a,b,c){
    return {
        sumTwoDigit : function(){
            return a + b;
        },
        sumThreeDigit : function(){
            return a + b + c;
        }
    };
};
const store = sumDigits(1,2,3);
console.log(store.sumTwoDigit());
console.log(store.sumThreeDigit());
const store1 = sumDigits(10,10,10);
console.log(store1.sumTwoDigit());
console.log(store1.sumThreeDigit());


///Use-Cases: Encapsulation, Callbacks, Partial application & currying.
//UseCase1. Encapsulation : Closures can be used to encapsulate the private data within a funcation a scope for data privacy.
function createCounter(){
    let count = 0;
    return function(){
        return ++count;
    };
};
const counter = createCounter();
console.log(counter());
console.log(counter());

//UseCase2. Closures : Closures are often used in asynchronous programming, particularly in callbacks. They allow you to maintain the context of the variables even after the outer function has completed the execution.
function fetchData(url, callback){
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error(error));
}
function processData(data){
    console.log(data);
}
// fetchData('https://www.api.com/data', processData);

//UseCase3. Partial application & Currying : Closures can be used to create functions that remember the argument passed to them and can be reused later with those argument partially applied.
function multiple(x){
    return function(y){
        return x * y;
    };
}
const multiplyByTwo = multiple(2);
console.log(multiplyByTwo(5));
//currying
console.log(multiple(4)(5));