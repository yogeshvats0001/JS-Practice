/// Promise.all( )

const promise1 = Promise.resolve(23);
const promise2 = "34";
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 67);
});

// console.log(typeof promise1);

// Promise.all([promise1, promise2, promise3]).then(res => console.log(res)).catch(error => console.error(error));

Promise.myAll = function (arrays = []) {
  return new Promise((resolve, reject) => {
    if (arrays.length === 0) {
      resolve(arrays);
    }

    let newArray = [];
    let count = arrays.length;

    arrays.forEach((promise) => {
      Promise.resolve(promise)
        .then((result) => {
          newArray.push(result);
          count--;

          if (count == 0) {
            resolve(newArray);
            // return newArray;
          }
        })
        .catch((error) => {
          console.log('Rejected at : ')
          reject(error);
        });
    });
  });
};

Promise.myAll([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
