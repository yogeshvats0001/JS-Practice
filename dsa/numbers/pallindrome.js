/**Que1: Check if given number is pallindrome or not
 * (an integer number is pallindrome if digits are same from frontend and backend)
 * 
 * eg1- x = 121 -> true
 * eg2- x = 90 -> false
 */

// with traditional way
const isPallindrome = (n) => {
    let originalNum = n;
    let reversedNum = 0;
    while(n > 0){
        let rem = Math.trunc(n % 10);
        reversedNum = reversedNum * 10 + rem;
        n = Math.trunc(n/10);
    }
    if(reversedNum === originalNum) return true;
    else return false;
};

// with in-built functions
const isPalindrome_InBuildFunc = (x) => {
    // return x === Number(x.toString().split("").reverse().join(""));
    return x === +x.toString().split("").reverse().join("");  //Unary Plus
}

const num = 121;
console.log(isPallindrome(num));
console.log(isPalindrome_InBuildFunc(num));