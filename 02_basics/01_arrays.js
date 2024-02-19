const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0]);

const arr2 = new Array(1, 2, 3, 4);
// console.log(arr2);

// Methods in array

// push to add element in the array
arr.push(6);
arr.push(7);
// console.log(arr);

// pop to remove element from the end of the array
arr.pop();
// console.log(arr);

// unshift add element from the front
arr.unshift(0);
// console.log(arr);

// shift remove from front
arr.shift();

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

const newArray = [1, 2, 3, 4, 5];

// console.log(newArray);
// console.log(newArray.join()); // it will convert the origin array into a string

// slice , splice
// slice dont manipulate the original array also the last index is excluded
// splice manipulates the original array and the last index is included.
// console.log("A", arr);

const myArr1 = arr.slice(1, 3);
console.log(myArr1);
console.log(arr);

const myArr2 = arr.splice(1,3);
console.log(myArr2);
console.log(arr);
