/// REST : elements -> array : The rest operator allows you to collect the remaining arguments or elements into a single array. It's primarily used in function definitions or destructuring assignments.
//Usage1. Arguments
function sum (...numbers){
    return numbers.reduce((acc, ele) => acc + ele);
}
console.log(sum(1,2,3,4));

//Usage2. Destructuring
const [first, second, ...rest]= [1,2,3,4,5,6,7,8];
console.log(first);
console.log(second);
console.log(rest);
// console.log(last);


/// SPREAD : array -> elements : The spread operator allows an iterable (like an array) to be expanded into individual elements. It's used in function calls, array literals, and object literals.
//Usage1. Functions
function sum1(a, b, c){
    return a + b + c;
};
const arr = [1, 2, 3];
console.log('sum1: ', sum1(...arr));

//Usage2. Concatenate the arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
