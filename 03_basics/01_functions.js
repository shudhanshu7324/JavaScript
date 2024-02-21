function greetings() {
  console.log("Hello World");
}

function addToNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

let result = addToNumbers(5, 7);
console.log(result);

// scoping
// function subs(){
//     var a =5;
//     let b = 7;
// }

// var can be accessed outside the block but let cant be accessed.

a = 7;
console.log(a);
