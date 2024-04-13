///PROMISES

///WHAT?: Promise is an object in JS that represents the eventual completion or failure of asynchronous operation and its resulting value. It has three stages: pending, resolved, rejected.

// const data = [
//     {name: 'obj1', age: 25},
//     {name: 'obj2', age: 26}
// ];

// function getData(name, age) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("hello, setTimeOut");
//       let newData = {
//         name, age
//       };
//       data.push(newData);
//       let resolveFlag = true;
//       if (resolveFlag) {
//         resolve();
//       } else {
//         reject("rejected");
//       }
//     }, 5000);
//   });
// }

// function displayData(){
//     data.forEach(val => console.log(val));
//     return data;
// }

// function remove(){
//     data.pop();
// }

// getData('chintu', 45)
//   .then(displayData)
//   .then(remove)
//   .then(displayData)
//   .then(()=> getData('mintu', 78)) //func ko agar arguments ni provide kr skte ha, tww hm we arrow function se call krskte ha
//   .then(displayData)
//   .then(displayData)
//   .catch((error) => console.error(error));

//promises basically use the return values in the successive calls and argument passed in resolve().
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("promise called");
//     resolve(10);
//   }, 3000);
// });

// p.then((result) => {
//   console.log(result, '1st then');
//   return 10 * 2;
// })
//   .then((result) => {
//     console.log(result, '2nd then');
//     return 10 * 3;
//   })
//   .then((result) => {
//     console.log(result, '3rd then');
//   })
//   .catch((error) => {
//     console.error(error);
//   });




//fetch api with the help of promise
// import axios from "axios";
// const getProducts = new Promise((resolve, reject) => {
//   axios
//     .get("https://dummyjson.com/products")
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });

// getProducts
//   .then((result) => console.log(result.products[0], 'xxx'))
//   .catch((error) => console.error(error));



///Promise.all
const promise1 = Promise.resolve(12);
const promise2 = 23;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'food');
});

Promise.all([promise1, promise2, promise3]).then((values)=>{
    console.log(values);
});

// //Promise.any
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, 'naughty')
// });

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));
// // Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
// // Promise.any([promise1, promise2, promise3]).then(values => console.log(values));
// // Promise.any([promise1, promise2, promise3, promise4]).then(values => console.log(values));


