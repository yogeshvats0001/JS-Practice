/// DEBOUNCING in JS
//Defination: Debouncing in JS is a technique used to limit the rate at which function is called, typically used in scenarios where a function could triggered rapidly(eg., due to frequent user input events like scrolling or typing). Debouncing ensures that the function is only executed after a certain amount of time has passed since the last call to the function.

//Why?
// 1. Performance
// 2. User Experience


//Tradtional Way
let counter = 0;
function getInfo(){
    console.log("function called" + counter++)
}

//Better Way : with the help of setTimeout
function myDebounce(callback, time){
    let timeoutID;
    return function(){
        console.log('timer:line11:', timeoutID);
        clearTimeout(timeoutID);
        console.log('timer:line13:', timeoutID);
        timeoutID = setTimeout(()=>{
            callback();
        }, time);
        console.log('timer:line17:', timeoutID);
    }

}
const optimized = myDebounce(getInfo, 2500);