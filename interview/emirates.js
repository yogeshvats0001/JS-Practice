// 1. Memoization
// 2. Event bubbling and capturing
// 3. prototype and prototypal inheritance
// 4. How to change the exisiting property like of .map method?
// 5. CSS box model
// 6. different ways of introducing css in html
// 7. class vs id selectors
// 8. z-index
// 9. pseudo-classes in css
// 10. find the double occurrence element in [10,45,34,12,10]

const arr = [10,45,34,12,10];
const resultObj = arr.reduce((acc, val) => {
    if(acc[val]){
        acc[val] = acc[val] + 1;
    }else{
        acc[val] = 1;
    }
    return acc;
}, {});
console.log('resultObj : ' , resultObj);

const result = Object.entries(resultObj).filter(([key, value]) => value > 1);
console.log('result : ' , result[0][0]);