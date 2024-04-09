/// UNDEFINED and Not DEFINED in JS.

//1. undefined is a placeholder which has been used by javascript while creating Execution Context. Also, it takes some memory. [It's like: we bought a home, but not shifted yet].

//2. More Structured:
//-- undefined is a global variable that JS creates at run time or Execution Context.
//-- JS assigns undefined to any variable which has been declared but not initialized or defined.

//3. JS is lossly-typed or weekly-typed programming language as it don't attach data type to any variable and we can assign any value to any variable.
var a;
console.log(a);
a = 'yogesh';
console.log(a);
a = 23;
console.log(a);

//4. "not defined" means variable has not defined in the program. [Reference Error].

//5. Recommended: 
var p;
console.log('p', p)
//-- don't do like below: (not a good practice)
var q = undefined;
console.log('q', q);



















let flag; // = [1,2,3,4,5];

flag ? flag.map(val => console.log(val)) : console.log("Nothing bro");