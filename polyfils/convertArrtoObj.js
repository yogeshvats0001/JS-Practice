// Convert Array to Object (Polyfill)

const arr = ['delhi', 'haridwar', 'jaipur'];

Array.prototype.convertArr2Object = function(){
    let object = new Object();
    let count = 0;
    this.forEach(element => {
        object[count++] = element;
    });
    return object;
}

console.log(arr.convertArr2Object());