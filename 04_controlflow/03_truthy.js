const userEmail = "h@hitesh.ai";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

// assume that if string contains some value then it is truthy else if string is empty it is falsy.

// rules of truthy and falsy value
// falsy value
/* 
    false, 0 , -0, BigInt 0n, "", null, undefined, NaN
*/

// truthy value
/* 
    [], "0", 'false', " ", {}, function(){}, 
*/

let array = [];

if (array.length === 0) {
  console.log("Array is empty");
}

let obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing operator ?? : null undefined

let val1;
console.log(val1);
val1 = 5 ?? 10;
console.log(val1);


//  ternary operation
// condition ? 11 : 20;
let val2 = 15;
val2>10 ? console.log(val2) : console.log("less than 10");;
