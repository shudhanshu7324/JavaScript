const user = {
    username: "shudhanshu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
    }
}


user.getUserDetails();

// Constructor functions

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

// const user1 = User("shudhanshu",8,true);
// const user2 = User("ChaiAurCode",10,false);
// console.log(user1);
// user2 is overwrite all the details of user1


// to create new user we have to use new keyword

const user1 = new User("shudhanshu",8,true);
const user2 = new User("ChaiAurCode",10,false);
console.log(user1);
console.log(user2);

// when we use new keyword a new empty object called instance 
// constructor function is called because of new keyword
// this created add all the details
// return the value
