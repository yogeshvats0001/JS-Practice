//CALL POLYFILL

const obj1 = {
    name: 'obj1',
    age: 11,
    print: function(city){
        console.log(this.name, this.age, city);
    }
};

const obj2 = {
    name: 'obj2',
    age: 12
};

Function.prototype.myCall = function(context, ...args){
    if(typeof this != "function"){
        throw new Error(this, 'invalid call');
    }
    console.log(context);
    console.log(context.yogeshvats);
    console.log(typeof context);

    context.yogeshvats = this;

    console.log(context);
    console.log(context.yogeshvats);

    context.yogeshvats(...args);
};

obj1.print.myCall(obj2, 'ambala');

