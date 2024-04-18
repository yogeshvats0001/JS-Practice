//

const userBase = [
  { id: 1, name: "yogesh", isActive: true, age: 25 },
  { id: 2, name: "lubana", isActive: false, age: 27 },
  { id: 3, name: "bathla", isActive: true, age: 26 },
  { id: 4, name: "vinayak", isActive: false, age: 28 },
];

//Task1: Check if name exists, eg: yogesh
const checkName = 'yogesh';
const task1_1 = userBase.forEach(user => {
    console.log('inside foreach: ', user);
    if(user.name === checkName){
        return user; //it will return undefined since forEach returns nothing,
    }
})
console.log(task1_1);

const task1_2 = (arr, nameToCheck) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === nameToCheck){
            return arr[i];
        }
    }
    return 'nothing';
};
console.log('task1_2 : ' , task1_2(userBase, checkName));

const task1_3 = (arr, nameToCheck) => {
    const result = arr.find(val => val.name === nameToCheck);
    return Boolean(result);
}
console.log('task1_3 : ' , task1_3(userBase, checkName));

const task1_4 = (arr, nameToCheck) => {
    const result = arr.findIndex(val => val.name === nameToCheck);
    return (result);
}
console.log('task1_4 : ' , task1_4(userBase, checkName));


const task1_5 = userBase.filter(val => {
    if(val.name === checkName){
        return true;
    }
});
console.log(task1_5.length !== 0 ? task1_5 : 'Not found');
