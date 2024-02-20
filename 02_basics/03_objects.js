// singleton method
// Object.create

const mySym = Symbol("key1");
// object literals
const JsUser = {
  name: "Shudhanshu",
  "full name": "Shudhanshu Pandey", // this cannot be accessed through . operator
  age: 21,
  location: "Mohali",
  [mySym]: "myKey1",
  email: "shudhanshu7324@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"],
};

// accessing elements from objects
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

// change value of key
// JsUser["full name"] = "SP";
// console.log(JsUser["full name"]);

// Object.freeze(JsUser); // it freezes the object

// console.log(JsUser);

// adding function in object
JsUser.greetings = function() {
  console.log(`Hello ${this.name}`);
};

JsUser.greetings();
