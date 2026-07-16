const promiseOne = new Promise(function (resolve, reject) {
  don an async task
  db calls, cryptography

const { log } = require("async");

  setTimeout(function () {
    resolve();
    console.log("async work complete");
  }, 1000);
});

promiseOne.then(function () {
  resolve ka connection hai .then ke sath
  console.log("promise consume");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log("user", user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", pass: "1234" });
    } else {
      reject("Error: something went wrong");
    }
  }, 2000);
});

const userName = promiseFour
.then((user) => {
  console.log(user);
  return user.username;
})
.then((username) => {
console.log(username);
})
.catch(function(err){
    console.log(err)
})
.finally(() => console.log("the promise is either resolve or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"harshit",pass:"345"})
        }
        else{
            reject('Error: Js went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
   try {
    const res =  await promiseFive
   console.log(res);
   } catch (error) {
    console.log(error);
    
   }
   
}
consumePromiseFive()


 -----------------------------------------------------------------

fetch suru krege okay yaha se aage ka
 
  


console.log("A");

setTimeout(() => {

    console.log("B");

},0);

Promise.resolve().then(() => {

    console.log("C");

    setTimeout(() => {

        console.log("D");

    },0);

});

Promise.resolve().then(() => {

    console.log("E");

});

console.log("F");

console.log("1");

async function demo(){

    console.log("2");

    await Promise.resolve();

    console.log("3");

    await Promise.resolve();

    console.log("4");

}

demo();

Promise.resolve().then(()=>{

    console.log("5");

});

setTimeout(()=>{

    console.log("6");

},0);

console.log("7");
