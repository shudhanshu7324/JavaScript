const user = {
  name: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.name} , welcome to website.`);
    console.log(this);
  },
};

user.welcomeMessage();

console.log(this);
