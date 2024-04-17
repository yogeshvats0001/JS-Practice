/// Memoization in JS

///WHAT?: It is a technique used in programming to optimise the performance of the functions, particularly those that are computationally expensive or require repetitive calculations. The basic idea is to cache the result of the function calls based upon the inputs so that if function has been called again with the same parameters then we should return the cached result instead of re-computing.

///WHY?:
// 1. Performance Improved
// 2. Reduce Re-calculations
// 3. Simplifies the code.

function memoize(func){
    let cache = {};
    return function(...args){
        // const key = JSON.stringify(args);
        const key = args;
        if(!cache[key]){
            console.log('inside if', cache);
            cache[key] = func.apply(this, args);
        }
        console.log(cache);
        return cache[key];
    }
}

function fibonacciSeries(num){
    if(num <= 1) return num;
    return fibonacciSeries(num - 1) + fibonacciSeries(num - 2);
}

const memoizationFibo = memoize(fibonacciSeries);

console.log(memoizationFibo(5));
console.log(memoizationFibo(10));
console.log(memoizationFibo(10)); //returned the result from the cache