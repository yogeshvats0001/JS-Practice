/// Currying in JS

///WHAT: Currying in JS is a transformation of functions that translates a function from callable as f(a,b,c) into callable as f(a)(b)(c). It is an advanced technique of working with functions.

//Traditional Way:
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 4));

//Currying Way
//Ex1
// function sum1(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }
// console.log(sum1(3)(4)(10));

//Ex2
function func(myFun) {
  return function (a) {
    return function (b) {
      return function (c) {
        return myFun(a, b, c);
      };
    };
  };
};
const resultFun = func(sum);
console.log(resultFun(1)(2)(3));

//Ex3: Real world example.
const userInfo = {
    name: 'user1',
    age: 25
};
function getDetail(obj){
    return function(objProp){
        return obj[objProp];
    }
};
const details = getDetail(userInfo);
console.log(details('name'));
console.log(details('age'));

//USE_CASES: More advanced implementations of currying, such as _.curry from lodash library, return a wrapper that allows a function to be called both normally and partially:
// function sumAB(a, b) {
//   return a + b;
// }
// let curriedSum = _.curry(sumAB); // using _.curry from lodash library
// alert( curriedSum(1, 2) ); // 3, still callable normally
// alert( curriedSum(1)(2) ); // 3, called partially

//EDGE_CASES: If we use forth argument sum(1)(2)(3)(4) in above, then we will get TypeError: sum1()()() is not a function. AND in case of less argument like sum1(1)(3) then it will return the definition of the sum1()().
