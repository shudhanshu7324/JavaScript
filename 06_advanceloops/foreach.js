const obj = ["js", "react", "c++", "java"];

// for each loop is a higher order function it means it contain a call back inside it

// callback function cant be a named function

// obj.forEach((val) => {
//   console.log(val);
// });

// objects inside array

const arr = [
  {
    js: "javascript",
    py: "python",
    cpp: "C++",
  },
  {
    name: "Shudhanshu",
    age: 21,
    gender: "male",
  },
  {
    degree: "BE",
    cgpa: "7.20",
    college: "CU",
  },
];

arr.forEach( (item) => {
  console.log(item.name);
});
