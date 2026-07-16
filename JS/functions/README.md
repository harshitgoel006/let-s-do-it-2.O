# JavaScript Functions Complete Notes (Part 1)

# What is a Function?

Function ek reusable block of code hota hai jo kisi specific task ko perform karta hai.

Simple Language:

```text
Ek baar function likho,
jitni baar chahe use call karo.
```

Technical Definition:

```text
A function is a reusable block of code that executes when invoked (called).
```

---

# Basic Function Syntax

```js
function sayMyName(){
    console.log("Harshit Goel");
}

sayMyName();
```

Output:

```js
Harshit Goel
```

---

Explanation:

```js
function sayMyName(){
}
```

Ye function declaration hai.

---

```js
sayMyName();
```

Ye function call hai.

---

# Function Declaration

```js
function greet(){
    console.log("Hello");
}
```

Most common way of creating functions.

---

# Parameters vs Arguments

Sabse important interview question.

---

Example

```js
function addTwoNumber(number1,number2){
    console.log(number1 + number2);
}
```

---

Yahan:

```js
number1
number2
```

Parameters hain.

---

Function call:

```js
addTwoNumber(10,20);
```

Yahan:

```js
10
20
```

Arguments hain.

---

Difference

Parameters:

```text
Function define karte waqt jo variables likhte hain.
```

Arguments:

```text
Function call karte waqt jo actual values pass karte hain.
```

---

# JavaScript Type Coercion Inside Functions

Example

```js
addTwoNumber(4,"a");
```

Output:

```js
"4a"
```

---

Reason

JavaScript string dekh kar concatenation kar deta hai.

---

Example

```js
addTwoNumber(4,"5");
```

Output:

```js
"45"
```

---

Example

```js
addTwoNumber(4,5);
```

Output

```js
9
```

---

Example

```js
addTwoNumber(4,null);
```

Output

```js
4
```

---

WHY?

```js
null
```

numeric operation mein:

```js
0
```

ban jata hai.

---

# Return Keyword

Function ka result bahar bhejne ke liye use hota hai.

---

Example

```js
function addTwoNumber(num1,num2){
    return num1 + num2;
}

const result =
addTwoNumber(3,4);

console.log(result);
```

Output

```js
7
```

---

# Return vs Console.log

Bahut important.

---

Example

```js
function add(a,b){
    console.log(a+b);
}

const result = add(10,20);

console.log(result);
```

Output

```js
30
undefined
```

---

WHY?

```js
console.log()
```

sirf print karta hai.

Return nahi karta.

---

# Return Stops Execution

Example

```js
function test(){

    return 10;

    return 20;
}

console.log(test());
```

Output

```js
10
```

---

WHY?

```js
return
```

execute hote hi function terminate ho jata hai.

Uske baad wala code nahi chalta.

---

# Function Without Return

Example

```js
function test(){
    console.log("Hello");
}

console.log(test());
```

Output

```js
Hello
undefined
```

---

Rule

Agar function mein:

```js
return
```

nahi likha hai.

Toh function default:

```js
undefined
```

return karta hai.

---

# Default Parameters

Agar user argument pass na kare toh default value use hoti hai.

---

Example

```js
function loginUserMsg(
    userName = "HG"
){
    return `${userName} just logged in`;
}
```

---

Example

```js
loginUserMsg();
```

Output

```js
HG just logged in
```

---

Example

```js
loginUserMsg("Harshit");
```

Output

```js
Harshit just logged in
```

---

# Important Interview Trap

```js
function greet(name = "Guest"){
    return name;
}

console.log(greet(undefined));
```

Output

```js
Guest
```

---

WHY?

Default parameter tab trigger hota hai jab value:

```js
undefined
```

ho.

---

Example

```js
console.log(greet(null));
```

Output

```js
null
```

---

Example

```js
console.log(greet(""));
```

Output

```js
""
```

---

Example

```js
console.log(greet(false));
```

Output

```js
false
```

---

Example

```js
console.log(greet(0));
```

Output

```js
0
```

---

Golden Rule

Default Parameter Sirf:

```js
undefined
```

par trigger hota hai.

---

# Rest Operator (...)

Multiple arguments ko ek array mein collect karta hai.

---

Example

```js
function calculateCartPrice(
    ...num1
){
    return num1;
}
```

---

Call

```js
calculateCartPrice(
    100,
    200,
    300
);
```

Output

```js
[100,200,300]
```

---

# Rest Operator With Fixed Parameters

Example

```js
function calculateCartPrice(
    val1,
    val2,
    ...num1
){
    return num1;
}
```

---

Call

```js
calculateCartPrice(
    2,3,4,5,6
);
```

Output

```js
[4,5,6]
```

---

Explanation

```js
val1 = 2
val2 = 3
```

Remaining values:

```js
[4,5,6]
```

Rest Operator mein store ho gayi.

---

# Objects As Arguments

Function ko object bhi pass kar sakte hain.

---

Example

```js
const user = {
    username:"Harshit",
    price:199
};

function handleObject(
    anyObject
){
    console.log(
       `Username is ${anyObject.username}
        and price is ${anyObject.price}`
    );
}

handleObject(user);
```

---

Direct Object Pass

```js
handleObject({
   username:"Harshit",
   price:199
});
```

Allowed.

---

# Arrays As Arguments

Example

```js
const myArr =
[200,400,100,600];
```

---

Function

```js
function returnSecondValue(
    getArray
){
    return getArray[1];
}
```

---

Call

```js
returnSecondValue(myArr);
```

Output

```js
400
```

---

Direct Array

```js
returnSecondValue(
   [1,2,3,4,5]
);
```

Output

```js
2
```

---

# Function Declaration

Example

```js
function addOne(num){
    return num+1;
}
```

Call

```js
addOne(5);
```

Output

```js
6
```

---

# Function Expression

Example

```js
const addTwo =
function(num){
    return num+2;
};
```

Call

```js
addTwo(5);
```

Output

```js
7
```

---

Difference

Function Declaration

```js
function greet(){}
```

Function Expression

```js
const greet =
function(){}
```

---

# Hoisting

JavaScript execution se pehle declarations ko memory mein register karta hai.

Isi process ko hoisting kehte hain.

---

# Function Declaration Hoisting

Example

```js
sayHello();

function sayHello(){
   console.log("Hello");
}
```

Output

```js
Hello
```

---

WHY?

Function declaration poori ki poori hoist ho jaati hai.

Memory:

```text
sayHello
↓
function(){...}
```

---

# Function Expression Hoisting Trap

Example

```js
hello();

var hello = function(){
   console.log("Hi");
}
```

Output

```js
TypeError:
hello is not a function
```

---

Memory Phase

```js
var hello = undefined;
```

---

Execution

```js
hello();
```

Actually:

```js
undefined();
```

ban gaya.

---

# let / const Function Expression Trap

Example

```js
hello();

const hello =
function(){
   console.log("Hi");
}
```

Output

```js
ReferenceError
```

---

WHY?

const TDZ mein hota hai.

---

# Parameters Missing

Example

```js
function add(a,b){
    return a+b;
}

console.log(add(10));
```

Output

```js
NaN
```

---

WHY?

```js
10 + undefined
```

↓

```js
NaN
```

---

Example

```js
add();
```

Output

```js
NaN
```

---

WHY?

```js
undefined + undefined
```

↓

```js
NaN
```

---

# Extra Arguments

Example

```js
function add(a,b){
    return a+b;
}

console.log(
   add(10,20,30,40)
);
```

Output

```js
30
```

---

WHY?

Extra arguments ignore ho jate hain.

---

# arguments Object

Normal function ke andar ek special object hota hai:

```js
arguments
```

---

Example

```js
function test(a,b){
    console.log(arguments);
}

test(1,2,3,4);
```

Conceptual Output

```js
{
   0:1,
   1:2,
   2:3,
   3:4,
   length:4
}
```

---

# arguments.length

Example

```js
function test(a,b){
   console.log(
      arguments.length
   );
}

test(1,2,3,4);
```

Output

```js
4
```

---

# arguments Index Access

Example

```js
function test(a,b){
   console.log(arguments[0]);
   console.log(arguments[1]);
}

test(10,20);
```

Output

```js
10
20
```

---

# arguments Link With Parameters

Example

```js
function test(a,b){

   arguments[0] = 100;

   console.log(a);

}

test(10,20);
```

Output

```js
100
```

---

Example

```js
function test(a,b){

   a = 500;

   console.log(
      arguments[0]
   );

}

test(10,20);
```

Output

```js
500
```

---

Reason

Normal functions mein:

```js
a
```

aur

```js
arguments[0]
```

linked rehte hain.

---


# Arrow Functions

ES6 mein introduce hue.

Short syntax provide karte hain.

---

# Basic Arrow Function

```js
const greet = () => {
    console.log("Hello");
}

greet();
```

Output

```js
Hello
```

---

# Arrow Function With Parameters

```js
const addTwo = (num1,num2) => {
    return num1+num2;
}

console.log(addTwo(3,4));
```

Output

```js
7
```

---

# Implicit Return

Agar function body sirf ek expression return kar rahi ho toh:

```js
return
```

likhne ki zarurat nahi.

---

Example

```js
const addTwo =
(num1,num2) => num1+num2;
```

Equivalent

```js
const addTwo =
(num1,num2) => {
    return num1+num2;
}
```

---

Example

```js
console.log(
    addTwo(4,5)
);
```

Output

```js
9
```

---

# Parenthesis Syntax

```js
const addTwo =
(num1,num2) => (
    num1+num2
);
```

Output

```js
9
```

---

# Important Trap

```js
const add = (a,b) => {
    a+b;
}

console.log(add(2,3));
```

Output

```js
undefined
```

---

WHY?

Return nahi likha.

---

Equivalent

```js
const add = (a,b) => {

    a+b;

}
```

Koi value return nahi hui.

Default:

```js
undefined
```

---

# Returning Object From Arrow Function

Wrong

```js
const getUser = () => {
    username:"Harshit"
}

console.log(getUser());
```

Output

```js
undefined
```

---

WHY?

JavaScript isko object nahi samajhta.

Ye block samajhta hai.

---

Correct

```js
const getUser = () => ({
    username:"Harshit"
});

console.log(getUser());
```

Output

```js
{
   username:"Harshit"
}
```

---

# Golden Rule

Object return karna ho toh:

```js
() => ({})
```

Use karo.

---

# this Keyword

Sabse important JavaScript concepts mein se ek.

---

Simple Definition

```text
this current execution context ko refer karta hai.
```

---

# this Inside Object

```js
const user = {

    name:"Harshit",

    price:999,

    msg:function(){

        console.log(
          `${this.name},
           welcome to website`
        );

    }

}
```

---

Call

```js
user.msg();
```

Output

```js
Harshit, welcome to website
```

---

WHY?

```js
this
```

↓

```js
user
```

ko refer kar raha hai.

---

# Property Change

```js
user.name = "Sam";

user.msg();
```

Output

```js
Sam, welcome to website
```

---

# this Inside Normal Function

```js
function test(){

    let name = "Harshit";

    console.log(this);

    console.log(this.name);

}

test();
```

---

Output environment dependent hota hai.

Lekin:

```js
this.name
```

normally:

```js
undefined
```

dega.

---

WHY?

```js
this
```

local variables ko access nahi karta.

---

Wrong Thinking

```js
let name = "Harshit";

this.name
```

❌

---

Correct

```js
name
```

---

# Arrow Function and this

Bahut important interview topic.

---

Example

```js
const user = {

   name:"Harshit",

   greet:() => {

      console.log(
         this.name
      );

   }

}

user.greet();
```

Output

```js
undefined
```

---

WHY?

Arrow function apna:

```js
this
```

nahi banati.

---

Normal Function

```js
function(){}
```

↓

Own this

---

Arrow Function

```js
()=>{}
```

↓

No own this

↓

Outer scope ka this use karegi.

---

# Comparison

Normal Function

```js
const user = {

   name:"Harshit",

   greet:function(){

      console.log(
         this.name
      );

   }

}
```

Output

```js
Harshit
```

---

Arrow Function

```js
const user = {

   name:"Harshit",

   greet:() => {

      console.log(
         this.name
      );

   }

}
```

Output

```js
undefined
```

---

# Interview Rule

Object Methods ke liye:

✅ Normal Function

```js
greet:function(){}
```

or

```js
greet(){}
```

---

❌ Avoid

```js
greet:()=>{}
```

---

# IIFE

Immediately Invoked Function Expression

---

Purpose

```text
Function ko define karte hi
immediately execute karna.
```

---

Syntax

```js
(function(){

})();
```

---

Example

```js
(function chai(){

    console.log(
       "DB CONNECTED"
    );

})();
```

Output

```js
DB CONNECTED
```

---

# Why IIFE?

Global Scope Pollution se bachne ke liye.

---

Global Variables

```js
let name = "Harshit";
```

Kabhi kabhi unwanted conflicts create kar sakte hain.

---

IIFE apna private scope create karta hai.

---

# Named IIFE

```js
(function chai(){

    console.log(
       "DB CONNECTED"
    );

})();
```

---

# Unnamed IIFE

```js
((name)=>{

   console.log(
      `DB CONNECTED ${name}`
   );

})("Harshit");
```

Output

```js
DB CONNECTED Harshit
```

---

# Important

Multiple IIFE likho toh:

```js
;
```

lagana zaruri hota hai.

---

Example

```js
(function(){

})();

(function(){

})();
```

---

# Scope

Scope define karta hai ki variable kahan access ho sakta hai.

---

# Global Scope

```js
let a = 10;
```

Accessible everywhere.

---

# Function Scope

```js
function test(){

    let b = 20;

}
```

---

```js
console.log(b);
```

Output

```js
ReferenceError
```

---

# Block Scope

```js
{

   let x = 10;

}
```

---

```js
console.log(x);
```

Output

```js
ReferenceError
```

---

# var Does Not Follow Block Scope

```js
{

   var x = 10;

}

console.log(x);
```

Output

```js
10
```

---

# Shadowing

```js
let a = 10;

{

   let a = 20;

   console.log(a);

}

console.log(a);
```

Output

```js
20
10
```

---

Inner variable outer variable ko temporarily hide kar deta hai.

---

# Illegal Shadowing

Wrong

```js
let a = 10;

{

   var a = 20;

}
```

Output

```js
SyntaxError
```

---

WHY?

```js
var
```

block scope follow nahi karta.

Same scope mein conflict create hota hai.

---

# Lexical Scope

Definition

```text
Function apne variables ke saath-saath
outer scope ko bhi access kar sakta hai.
```

---

Example

```js
function init(){

    let name = "Harshit";

    function displayName(){

        console.log(name);

    }

    displayName();

}

init();
```

Output

```js
Harshit
```

---

# Scope Chain

JavaScript variable search order:

```text
Current Scope
↓
Parent Scope
↓
Grand Parent Scope
↓
Global Scope
```

---

Example

```js
let a = 100;

function outer(){

    let a = 10;

    function inner(){

        console.log(a);

    }

    inner();

}

outer();
```

Output

```js
10
```

---

WHY?

Search Order

```text
inner
↓
outer
↓
global
```

Outer mein variable mil gaya.

Search stop.

---

# Closure

Most Important JavaScript Concept

---

Definition

```text
Closure =
Function
+
Lexical Environment
```

---

Technical Definition

```text
A closure allows a function
to remember variables from its
outer scope even after the
outer function has finished execution.
```

---

# Basic Closure Example

```js
function makeFunc(){

    const name = "Harshit";

    function displayed(){

        console.log(name);

    }

    return displayed;

}
```

---

```js
const myFunc =
makeFunc();

myFunc();
```

Output

```js
Harshit
```

---

# Most Important Question

Outer function execute ho chuka.

Toh:

```js
name
```

destroy kyu nahi hua?

---

Answer

```text
Closure
```

---

JavaScript ne sirf function return nahi kiya.

Usne:

```text
Function
+
Uska Lexical Environment
```

dono preserve kiye.

---

# Counter Example

```js
function outer(){

   let counter = 0;

   return function(){

      counter++;

      console.log(counter);

   };

}
```

---

```js
const fn = outer();

fn();
fn();
fn();
```

Output

```js
1
2
3
```

---

WHY?

Closure ne:

```js
counter
```

ko memory mein preserve rakha.

---

# Multiple Closures

```js
const fn1 = outer();
const fn2 = outer();
```

---

Output

```js
fn1() -> 1
fn1() -> 2

fn2() -> 1
fn2() -> 2
```

---

WHY?

Har call:

```js
outer()
```

naya closure create karta hai.

---

# Closure Interview Trap

```js
for(var i=1;i<=3;i++){

    setTimeout(()=>{

        console.log(i);

    },0);

}
```

Output

```js
4
4
4
```

---

WHY?

Saare callbacks same:

```js
i
```

variable ko share karte hain.

Loop khatam hone tak:

```js
i = 4
```

ho chuka hota hai.

---

# let Version

```js
for(let i=1;i<=3;i++){

    setTimeout(()=>{

        console.log(i);

    },0);

}
```

Output

```js
1
2
3
```

---

WHY?

Har iteration mein:

```js
let i
```

ka naya copy create hota hai.

---

# Private Variables Using Closure

```js
function createBankAccount(){

    let balance = 0;

    return {

        deposit(amount){

            balance += amount;

        },

        getBalance(){

            return balance;

        }

    };

}
```

---

```js
const account =
createBankAccount();

account.deposit(100);

console.log(
   account.getBalance()
);
```

Output

```js
100
```

---

```js
console.log(
   account.balance
);
```

Output

```js
undefined
```

---

WHY?

```js
balance
```

private hai.

Closure ke andar store hai.

---

# Functions Complete Summary

Covered:

✅ Function Declaration

✅ Function Expression

✅ Parameters

✅ Arguments

✅ Return

✅ Default Parameters

✅ Rest Operator

✅ Objects As Arguments

✅ Arrays As Arguments

✅ Hoisting

✅ arguments Object

✅ Arrow Functions

✅ Implicit Return

✅ Returning Objects

✅ this Keyword

✅ Arrow vs Normal Function

✅ IIFE

✅ Global Scope

✅ Function Scope

✅ Block Scope

✅ Shadowing

✅ Illegal Shadowing

✅ Lexical Scope

✅ Closures

✅ Counter Closures

✅ Multiple Closures

✅ Private Variables

✅ setTimeout Closure Trap

---

# Golden Interview Lines

```text
Function Declaration is fully hoisted.
```

```text
Arrow Functions do not have their own this.
```

```text
Default Parameters trigger only for undefined.
```

```text
Closure = Function + Lexical Environment.
```

```text
A Closure remembers variables from its outer scope even after the outer function has finished execution.
```

```text
Lexical Scope follows:
Current Scope → Parent Scope → Global Scope
```

```text
Every call to outer() creates a new closure.
```
