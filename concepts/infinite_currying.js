// Problem Statement: Implement a function which will work smoothly with infinite currying calls. [There must be only one () empty paranthesis in the given call]

// function sum(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }
// console.log(sum(1)(2)(3));

function myAdd(a){
    return function(b){
        if(b) return myAdd(a + b);
        else return a;
    }
}

console.log(myAdd(1)(2)(3)(4)(5)(6)(7)());