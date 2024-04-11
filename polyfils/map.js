//MAP Polyfill

const arr = [1,2,3];

function doubleAll(val){
    return 2 * val;
}

function increaseBy10(val){
    return 10 + val;
}

Array.prototype.calulate = function(callback){
    const output = [];
    for(let i = 0; i < this.length; i++){
        output.push(callback(this[i]));
    }
    return output;
}

const result = arr.calulate(doubleAll);
console.log(result);

const result1 = arr.calulate(increaseBy10);
console.log(result1);