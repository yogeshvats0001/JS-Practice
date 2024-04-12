// APPLY POLYFILL

const obj1 = {
    name: 'obj1',
    age: 25,
    print: function(city, country){
        console.log(this.name, this.age, city, country);
    }
};

const obj2 = {
    name: 'obj2',
    age: 27
};

Function.prototype.myApply = function(context, args){
    if(typeof this !== "function"){
        throw new Error(this, 'invalid call');
    }

    if(!Array.isArray(args)){
        throw new TypeError("arguments are not in array");
    }
    context.myfunc = this;
    context.myfunc(...args);
};

const arr = ['amb', 'ind'];
// obj1.print.myApply(obj2, arr);
obj1.print.myApply(obj2, arr);