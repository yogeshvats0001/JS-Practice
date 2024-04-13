/// Promise.allSettled() in JS

const promise1 = Promise.resolve(23);
const promise2 = "34";
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 67);
});

const promises = [promise1, promise2, promise3];

// Promise.allSettled(promises).then(res => console.log(res)).catch(error => console.error(error));

Promise.myAllSettled = function (promises) {
  if (promises === undefined) {
    throw TypeError("Undefined cant be called");
  }

  return new Promise((resolve, reject) => {
    let result = [];
    let count = promises.length;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((res) => {
          result.push({
            status: "fulfilled",
            value: res,
          });
          count--;

          if (count == 0) {
            resolve(result);
          }
        })
        .catch((error) => {
          result.push({
            status: "rejected",
            reason: error,
          });
          count--;

          if (count == 0) {
            reject(result);
          }
        });
    });
  });
};

Promise.myAllSettled(promises)
  .then((res) => console.log(res, 'then'))
  .catch((error) => console.error(error, 'catch')); //promises