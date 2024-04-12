///PROTOTYPE in JS : Just inheritance in JS.

///WHAT? : Every object has a property named as 'prototype' which is a reference to another object. This 'prototype' object is used as fallback source of properties and methods when they are not directly found in the object itself.

const obj1 = {
    name: 'obj1-name',
    getName: function(){
        return this.name;
    },
    getAge: function(){
        return this.age;
    },
    getCity: function(){
        return this.city;
    }
};

const obj2 = {
    age: 26,
    __proto__:obj1 //obj1, obj2 m as prototype jaye
};

const obj3 = {
    city: 'delhi',
    __proto__: obj2
}

console.log(obj1.name);
console.log(obj2.name);

console.log(obj2.age);
console.log(obj1.age); // age is not present in the scope of obj1

console.log(obj2.getName());
console.log(obj2.getAge());
console.log(obj1.getAge()); //undefined

console.log(obj3.getCity());

//constructor
function MyProto(name, city){
    this.name = name;
    this.city = city;
};

MyProto.prototype = obj1; //other way to assign prototype

const proto = new MyProto('xxx', 'ppp');
console.log(proto);
console.log(proto.getName());
console.log(proto.getCity());
