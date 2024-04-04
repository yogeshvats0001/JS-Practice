/// ASYNC JS PROGRAMMING
/// Calbacks, Promises, Async/ Await

// Problem Statement ::
// 1. We have an object of details containing 2 data.
// 2.

const students = [
  { name: "Yogesh", age: 25 },
  { name: "Vinayak", age: 27 },
];

function getData() {
  setTimeout(() => {
    let output = "";
    students.forEach((element) => {
      output += `<li>${element.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// function addData(newData) {
//   setTimeout(() => {
//     students.push(newData);
//   }, 2000);
// }
// addData({name : "Ankit", age : 26});
// getData();

//Way1. Adding callback functions :: call the getData function after the addData to avoid the timings issue
// function addData(newData, callback){
//     setTimeout(()=>{
//         students.push(newData);
//         callback();
//     }, 4000);
// }
// addData({name : "Ankit", age : 26}, getData);

//Way2. Adding Promises
function addData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      students.push(newData);
      let failedFlag = false;
      if (!failedFlag) {
        resolve();
      } else {
        reject("Kuch shi ni ha, please check");
      }
    }, 4000);
  });
};
// addData({ name: "Ankit", age: 26 })
//   .then(getData)
//   .catch((error) => console.log(error));
// Promises provide a cleaner and more structured way to work with asynchronous code compared to traditional callback functions. They are widely used in modern JavaScript development, and they form the foundation of many modern asynchronous programming patterns.

//Way3. Async-Await : are built on top of promises. : use-case -> fetch api
async function addGetData() {
  await addData({ name: "Ankit", age: 26 });
  getData();
}
addGetData();
// async/await provides a more concise and readable way to handle asynchronous code compared to using callbacks or chaining promises. It's particularly useful when you need to execute multiple asynchronous operations sequentially or when you want to make asynchronous code look more synchronous, which can improve code readability and maintainability.