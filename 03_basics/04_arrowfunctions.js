// const user = {
//   name: "hitesh",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.name} , welcome to website.`);
//     console.log(this);
//   },
// };

// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "shudhanshu";
//     console.log(this.username);
// }

// chai();

//Arrow function

// const chai = () => {
//   console.log("chai");
// };

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// implicit return

const addThree = (num1, num2, num3) => num1 + num2; //  in implicit type remove the return keyword because it is containing single line inside it.

console.log(addThree(5, 6, 7));

// console.log(addTwo(5, 4));

// arrow function just not support hoisting
