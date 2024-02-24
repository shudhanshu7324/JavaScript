// function chai(){
//     console.log("DB connected");
// }

// chai();

// Immediately invoked function expression (IIFE)

// (expression)(execution)

// named iife
(function chai() {
  console.log("Db connected");
})();

// unnamed iife
(() => {
  console.log("Db Connected two");
})();

//iife with parameters
((name) => {
  console.log(`Db connected three ${name}`);
})("Shudhanshu");

// whenever we write two iife always use ; after the end other wise it will give error.
