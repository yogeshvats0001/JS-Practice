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