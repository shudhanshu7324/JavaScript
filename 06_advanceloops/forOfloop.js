// for of

// const arr = [1, 2, 3, 4, 5];

// for (const val of arr) {
//   console.log(val);
// }

// const str = "Hello World";

// for (const s of str) {
//   if (s === " ") {
//     continue;
//   } else {
//     console.log(s);
//   }
// }

// Maps it store unique key value pairs

const map = new Map();
map.set("IN", "India");
map.set("USA", "America");
map.set("UAE", "Dubai");

// console.log(map);

for (const [key, value] of map) {
  console.log(key + " " + value);
}

// for of loop on object (it not works on objects)

// const myObj = {
//   name: "Shudhanshu",
//   age: 21,
//   mobile: "7654160150",
// };

// for(const [key,value] of myObj){
//     console.log(key, " " , value);
// }
