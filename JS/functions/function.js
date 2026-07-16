function sayMyName(){
    console.log("harshit goel");
}

sayMyName();


function addTwoNumber(number1,number2){  // number1,number2 are parameters
    console.log(number1 + number2);
}



console.log(typeof addTwoNumber(4,"a"));   // jb call krte hai toh argument dete hai
console.log(typeof addTwoNumber(4,"5"));
console.log(typeof addTwoNumber(4,5));
console.log(typeof addTwoNumber(4,null));

function addTwoNumber(num1,num2){
    let result = num1+num2;
    return result;

    return num1+num2;
    
}

const res = addTwoNumber(3,4);
console.log(res);

function loginUserMsg(userName =  "HG"){
    return `${userName} just logged in`
}

let res = loginUserMsg("harshit");
console.log(res)


function calculateCartPrice(...num1){
    return num1;
}

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(2,3,4,5,6));


const user = {
    username:"harshit",
    prices:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user);

const myArr = [200,400,100,600]

function returnSecValue(getArray){
    return getArray[1];
}

console.log(returnSecValue(myArr));

console.log(returnSecValue([1,2,3,4,5]));


function addOne(num){
    return num+1;
}

addOne(5);

const addTwo = function(num){
    return num+2;
}

addTwo(5);



arrow function


const user = {
    name:"harshit",
    price: 999,
    msg:function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
}

this --> current context ko refer krta hai

user.msg();
user.name = "sam"
user.msg();


function a(){
    let name = "harshit"
    console.log(this);
    console.log(this.name)
    
}
a();

const chai = () => {
    let username = "harshit"
    console.log(this)
}

console.log(this);

chai();

() => {}



const addTwo = (num1,num2) => {
    return num1+num2;
}

addTwo(3,4);

const addTwo = (num1,num2) =>  num1+num2;

addTwo(4,5);


const addTwo = (num1,num2) => (num1+num2);

console.log(addTwo(3,4))

const add = (num1,num2) => ({username:"harshit"})    //  object ko hum ese return kr hi nhi skte hai uske liye parenthesis likhna hi oadega   

console.log(addTwo(3,4))




IIFE -->  Immediately Invoked Function Expressions


(function chai(){   //named iife
    console.log(`DB CONNECTED`);
})();


()()    ---->   first wale mein funciton likhte hai and dusre wala execution ke liye hota hai 


global scope ke pollution se problem hoti hai kai baar toh uss gloabl scope ke jo bhi variables hai ya koi aur declaration hai uske pollution ko hatane e liye humne IIFE ka use kiya  
IIFE mein semicolon lagana jaruri hai 

((name) => {     //unnamed iife
console.log(`DB CONNECTED 2 ${name}`)
})("hitesh")


 lexical scoping 
 function init(){
    let name = "harshit";
    function displayName(){
        console.log(name);
        
    }

    displayName();
 }
 init();


 function makeFunc(){
    const name = "harshit";
    function displayed(){
        console.log(name);
    }

    return displayed;        iss function ka pura lexical scope return hota hai 
 }

 const myFunc = makeFunc();
 myFunc(); 

