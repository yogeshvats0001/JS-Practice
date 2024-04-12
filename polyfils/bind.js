///BIND POLYFILL

const obj1 = {
    name: 'obj1',
    age: 25,
    print: function(city, country){
        console.log(this.name, this.age, city, country);
    }
};

const obj2 = {
    name: 'obj2',
    age: 34
};

Function.prototype.myBind = function(context, ...args){
    if(typeof this !== 'function'){
        throw new Error(this, 'invalid call');
    }

    context.myfunc = this;
    return function(...newArgs){
        context.myfunc(...args, ...newArgs);
    }
}

const result = obj1.print.myBind(obj2, 'amb');
result('ind');