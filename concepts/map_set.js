///MAP
//holds key-value pairs and any value(both object & primitive values) may be used as either key or value.

// const abx = (name)=>{
//     console.log(name)
// }

// const map = new Map();
// //setting key, val in the map
// map.set(1, { name: "yogesh", age: 25 });
// map.set(2, { name: "lubana", age: 27 });
// map.set(abx, { name: "bathla", age: 26 });
// //getting/ retrieving the value with the help of key.
// console.log(map.get(1));
// console.log(map);
// console.log(map.get(abx('xx')));
// console.log(map.size)

// //iteration :
// //Way1- forEach
// map.forEach((val, key) => console.log(key, val));
// //Way2- for..of loop
// for(const [key, value] of map){
//     console.log(key, value)
// }

// //delete
// map.delete(3); //return type is true/ false.
// map.delete(2);
// map.forEach((val, key) => console.log(key, val));

// //exist or not: returns true/ false
// console.log(map.has(2));
// console.log(map.has(1));

// //size
// console.log(map.size);










///SET
//let you store unique values of any type either primitive or object references.
const set = new Set();
//adding element
set.add(1);
set.add(1);
set.add(2);
console.log(set);
//checking element present or not
console.log(set.has(2));
console.log(set.has(3));
//size
console.log(set.size);
//delete/ remove the element
set.delete(2);
console.log(set);
//iterate
for(const item of set){
    console.log(item);
}
