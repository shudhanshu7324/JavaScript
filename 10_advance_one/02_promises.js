
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, crytography, network
    setTimeout(()=>{
        console.log("Async task is completed");
        resolve();  // we have to resolve the promise to consume in then method
    },1000)
});

promiseOne.then(()=>{
    console.log("Promise consumed");
})


// 2nd

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 resolved");
})


// 3rd

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "shudhanshu7324", password: "123"})
    },1000)
}).then((user)=>console.log(user))


// 4th

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"shudhanshu",password: "1234"})
        }else{
            reject("Error in resolving promiseFour")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>console.log(username))
.catch((error)=>console.log(error))
.finally(()=>console.log("The promiseFour is either resolved or rejected"));



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async await try catch

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/shudhanshu7324')
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

