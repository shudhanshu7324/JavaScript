// const tinderUser = new Object();
// console.log(tinderUser);

const tinderUser = {};
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName: {
      firstname: "hitesh",
      lastname: "chaudhary",
    },
  },
};

// console.log(regularUser);
// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2); // {} this meaning all the object gets copied in this new object
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "i@gmail.com",
  },
  {
    id: 3,
    email: "j@gmail.com",
  },
];

// console.log(users);
// console.log(users[0].id);
// console.log(users[0]["id"]);

const tinderUserKeys = Object.keys(tinderUser);
const tinderUserValues = Object.values(tinderUser);
const tinderUserEntries = Object.entries(tinderUser);

// console.log(tinderUserKeys);
// console.log(tinderUserValues);

// tinderUserKeys.map((value) => {
//     console.log(value);
// })
