/// REDUCE POLYFILL

const arr = [1, 2, 3, 4, 5];

function sum(val, intial){
    return val + intial;
}

function multiply(val, initial){
    return val * initial;
}

Array.prototype.calculate = function(callback, intial = this[0]){
    let result = intial;
    for(let i = 0; i < this.length; i++){
        result = callback(this[i], result);
    }
    return result;
}

let init = 0;
const result1 = arr.calculate(sum, init);
console.log(result1);

const result2 = arr.calculate(multiply);
console.log(result2);