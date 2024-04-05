/// MAP, FILTER and REDUCE in JS.
// These are higher order function of JS.

// Question:
const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2020 },
  { name: "Mindtree", category: "Service Based", start: 1980, end: 2020 },
];
// Traditional Way : for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}
// forEach Way : ES6
companies.forEach((val) => console.log(val));
// map Way
companies.map((val) => console.log(val));
// filter Way : to get service based companies only
const serviceCompanies = companies.filter(
  (val) => val.category === "Service Based"
);
console.log(
  "Service Based Companies are : ",
  serviceCompanies.map((val) => val.name)
);

// sort: Ex1
const sorted = companies.sort(function (val1, val2) {
  if (val1.start > val2.start) {
    return 1;
  } else {
    return -1;
  }
});
//OR - shorthand
const sorted1 = companies.sort((val1, val2) =>
  val1.start > val2.start ? 1 : -1
);
console.log("sorted array : ", sorted);
console.log("sorted1 array : ", sorted1);
//sort : Ex2
const ages = [90, 23, 45, 12, 1, 6, 78, 50, 100];
const sortedAges = ages.sort((val1, val2) => val1 - val2); //ascending: val1 - val2; descending: val2-val1;
console.log("Sorted Ages : ", sortedAges); //it will sort with the exact value, like: [1, 6, 12, 23, 45, 50, 78, 90, 100].
console.log("Sorted Ages by .sort : ", ages.sort()); //it will sort on the basis of first-second-third letters of the number. like: [1, 100, 12, 23, 45, 50, 6, 78, 90].

// forEach and map are used for iterating the given array, but map returns a new array based on the result of callback function whereas forEach is not returing anything.

// MAP:
// 1. Is used to transform the entire array.
// 2. It returns a new array of same length.
// 3. .map((value, index, array)=> value * 10);
//MAP: Ex1
const arr = [1, 2, 3, 4, 5, 1, 39, 9, 7];
console.log(arr.sort());
const arrNew = arr.map((value) => {
  return value * 10;
});
console.log(arrNew);
//MAP: Ex2
function double(data) {
  return data * 2;
}
const doubleArr = arr.map(double);
console.log("Double Array : ", doubleArr);

// FILTER:
// 1. Is used to filter out the element from the given array on the basis of some condition(true/ false).
// 2. It returns a new array might be of different or same length.
// 3. .filter((value, index, array) => value > 45)
// FILTER : Ex1
const arr1 = [10, 40, 2, 33, 21];
const arr1New = arr1.filter((value) => value > 10);
console.log(arr1New);
// FILTER : Ex2 : Find out odd
const oddArr1 = arr1.filter((value) => value % 2 != 0);
console.log("Odd Array : ", oddArr1);

// REDUCE:
// 1. It returns a final/ single value from each and every element of the given array.
// 2. We can pass the initial value of accumulator.
// 3. .reduce((accumulator, value, index, array) => accumulator + value, initialValue);
// REDUCE: Ex1
const arr2 = [1, 2, 3, 4, 5];
const sum = arr2.reduce((acc, val) => acc + val, 100);
console.log(sum);
// REDUCE: Ex2 : Max
const max = arr2.reduce((acc, value) => Math.max(acc, value), -Infinity);
console.log("Max Value : ", max);

//Question :
const users = [
  { firstName: "Yogesh", lastName: "Vats", age: 26 },
  { firstName: "Yogi", lastName: "Sharma", age: 9 },
  { firstName: "Toshal", lastName: "Lubana", age: 28 },
  { firstName: "Ankit", lastName: "Arora", age: 26 },
];
//Task1: Count the number of person with particular age. : {26 : 2, 28 : 1, 90 : 1}
const result = users.reduce((acc, val) => {
  console.log(val);
  let currentAge = val.age;
  if (acc[currentAge]) {
    acc[currentAge] = acc[currentAge] + 1;
  } else {
    acc[currentAge] = 1;
  }
  return acc;
}, {});
console.log(result);
//Task2: all firstname where age is greater than 25
const resultName = users.reduce((acc, val) => {
  //we can also do first filter for >25 and then map for firstName on that  filtered out array. -- users.filter(val=> val.age>25).map(val=>val.firstName);
  if (val.age > 25) {
    acc.push(val.firstName);
  }
  return acc;
}, []);
console.log(resultName);
//Task3: list of fullNames.
const fullName = users.map((value) => value.firstName + " " + value.lastName);
console.log("Full Name from users : ", fullName);
