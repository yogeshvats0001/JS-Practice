/// MAP, FILTER and REDUCE in JS.
// These are higher order function of JS.

// MAP:
// 1. Is used to transform the entire array.
// 2. It returns a new array of same length.
// 3. .map((value, index, array)=> value * 10);
//MAP: Ex1
const arr = [1,2,3,4,5];
const arrNew = arr.map(value =>{
    return value * 10;
});
console.log(arrNew);
//MAP: Ex2
function double(data){
    return data * 2;
};
const doubleArr = arr.map(double);
console.log('Double Array : ', doubleArr);


// FILTER: 
// 1. Is used to filter out the element from the given array on the basis of some condition(true/ false).
// 2. It returns a new array might be of different or same length.
// 3. .filter((value, index, array) => value > 45)
// FILTER : Ex1
const arr1 = [10,40,2,33,21];
const arr1New = arr1.filter(value => value > 10);
console.log(arr1New);
// FILTER : Ex2 : Find out odd 
const oddArr1 = arr1.filter(value => value%2 != 0);
console.log('Odd Array : ', oddArr1);

// REDUCE:
// 1. It returns a final/ single value from each and every element of the given array.
// 2. We can pass the initial value of accumulator.
// 3. .reduce((accumulator, value, index, array) => accumulator + value, initialValue);
// REDUCE: Ex1
const arr2 = [1,2,3,4,5];
const sum = arr2.reduce((acc, val)=> acc + val, 100);
console.log(sum);
// REDUCE: Ex2 : Max
const max = arr2.reduce((acc, value) => Math.max(acc, value), -Infinity);
console.log('Max Value : ', max);

//Question : 
const users = [
    {firstName : "Yogesh" , lastName : "Vats", age : 26},
    {firstName : "Yogi" , lastName : "Sharma", age : 9},
    {firstName : "Toshal" , lastName : "Lubana", age : 28},
    {firstName : "Ankit" , lastName : "Arora", age : 26}
];
//Task1: Count the number of person with particular age. : {26 : 2, 28 : 1, 90 : 1}
const result = users.reduce((acc, val)=>{
    console.log(val);
    let currentAge = val.age;
    if(acc[currentAge]){
        acc[currentAge] = acc[currentAge] + 1;
    }else{
        acc[currentAge] = 1;
    }
    return acc;
}, {});
console.log(result);
//Task2: all firstname where age is greater than 25
const resultName = users.reduce((acc, val)=>{ //we can also do first filter for >25 and then map for firstName on that  filtered out array. -- users.filter(val=> val.age>25).map(val=>val.firstName);
    if(val.age > 25){
        acc.push(val.firstName);
    }
    return acc;
}, []);
console.log(resultName);
//Task3: list of fullNames.
const fullName = users.map(value => value.firstName + " " + value.lastName);
console.log('Full Name from users : ', fullName);