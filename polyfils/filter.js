/// FILTER POLYFILL

const arr = [1,2,3,4];

function greaterThan2(val){
    return val > 2;
}

function lessThan2(val){
    return val < 2;
}

Array.prototype.calculate = function(callback){
    let output = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            output.push(this[i]);
        }
    }
    return output;
}

const result1 = arr.calculate(greaterThan2);
console.log(result1);

const result2 = arr.calculate(lessThan2);
console.log(result2);