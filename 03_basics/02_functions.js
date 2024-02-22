function cartItem(num1) {
  return num1;
}

console.log(cartItem(5));

// rest operator ... to take dynamic input parameters. how to pass multiple values in the function parameter

function totalCartItem(...item1) {
  return item1;
}

console.log(totalCartItem(200, 300, 400));

function totalCartItem2(val1, val2, ...num1) {
  return num1;
}

console.log(totalCartItem2(5, 6, 7, 8));

// objects and functions

const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and the price is ${anyObject.price}`
  );
}

handleObject(user);
