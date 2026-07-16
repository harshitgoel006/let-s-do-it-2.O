# JavaScript Execution Context & Call Stack Complete Notes

# What is Execution Context?

## Simple Language

```text
Execution Context ka matlab hai:

JavaScript humare code ko kis environment mein execute karega aur variables/functions ko kaise handle karega.
```

Jab bhi JavaScript code run karti hai, woh directly line-by-line execute nahi karti.

Sabse pehle woh execution environment create karti hai.

Isi environment ko:

```text
Execution Context
```

kehte hain.

---

## Technical Definition

```text
Execution Context is the environment in which JavaScript code is evaluated and executed.
```

Execution Context determine karta hai:

- Variables kahan store honge
- Functions kaise execute honge
- Current scope kya hai
- `this` ki value kya hogi

---

# Types of Execution Context

JavaScript mein mainly 3 types ke Execution Context hote hain.

## 1. Global Execution Context (GEC)

Program start hote hi create hota hai.

Har JavaScript program mein ek hi Global Execution Context hota hai.

Example:

```js
let name = "Harshit";
```

Ye Global Execution Context ke andar execute hoga.

---

## 2. Function Execution Context (FEC)

Jab bhi koi function call hota hai.

```js
function greet(){
    console.log("Hello");
}

greet();
```

Toh greet() ke liye ek naya Function Execution Context create hoga.

---

## 3. Eval Execution Context

```js
eval("console.log('Hello')")
```

Ye Eval Context create karta hai.

Practical development mein almost use nahi hota.

Interview ke liye:

```text
Global EC
Function EC
```

yaad rakhna enough hai.

---

# Global Execution Context

Program start hote hi:

```text
Global Execution Context
```

create hota hai.

---

# this Keyword in Global Context

Browser Environment:

```js
console.log(this);
```

Output:

```text
Window Object
```

---

Node.js Environment:

```js
console.log(this);
```

Output:

```text
Global Object
```

---

Important

```text
Browser → Window Object
Node.js → Global Object
```

---

# JavaScript Execution Phases

Har Execution Context do phases mein kaam karta hai.

```text
1. Memory Creation Phase
2. Execution Phase
```

---

# Memory Creation Phase

Is phase mein:

```text
Variables → undefined
Functions → complete definition
```

store kiye jaate hain.

Code execute nahi hota.

Sirf memory allocation hoti hai.

---

# Execution Phase

Ab JavaScript line-by-line code execute karti hai.

Values assign hoti hain.

Functions call hote hain.

Calculations perform hoti hain.

---

# Example

```js
let val1 = 10;
let val2 = 5;

function addNum(num1,num2){
    let total = num1 + num2;
    return total;
}

let result = addNum(val1,val2);
```

---

# Step 1 : Global Execution Context Creation

Sabse pehle:

```text
Global Execution Context
```

create hoga.

---

# Step 2 : Memory Creation Phase

Memory:

```text
val1      → undefined
val2      → undefined
addNum    → function definition
result    → undefined
```

Diagram:

```text
Memory Phase

val1      -> undefined
val2      -> undefined
addNum    -> function(){...}
result    -> undefined
```

---

# Step 3 : Execution Phase

Line 1

```js
let val1 = 10;
```

Memory:

```text
val1 = 10
```

---

Line 2

```js
let val2 = 5;
```

Memory:

```text
val2 = 5
```

---

Line 3

Function already memory mein hai.

Skip.

---

Line 4

```js
let result = addNum(val1,val2);
```

Ab function call hoga.

---

# Function Execution Context

Function call:

```js
addNum(10,5);
```

Ab ek naya:

```text
Function Execution Context
```

create hoga.

---

# Function Execution Context Structure

Har Function Execution Context ke andar:

```text
New Variable Environment
+
Execution Thread
```

create hota hai.

---

# Function Memory Phase

Memory:

```text
num1  -> undefined
num2  -> undefined
total -> undefined
```

---

# Function Execution Phase

Arguments assign honge.

```text
num1 = 10
num2 = 5
```

---

Calculation:

```js
total = num1 + num2;
```

↓

```text
total = 15
```

---

Return:

```js
return total;
```

↓

```text
15
```

Global Execution Context ko return ho jayega.

---

Global Context:

```text
result = 15
```

---

# Function Context Destroy

Function ka kaam complete.

Execution Context remove.

```text
Function Execution Context Deleted
```

---

# Multiple Function Calls

```js
let res = addNum(10,5);
let res2 = addNum(20,2);
```

Har call par:

```text
New Function Execution Context
```

create hoga.

---

Diagram:

```text
Call 1

Memory Phase
Execution Phase

↓

Delete


Call 2

Memory Phase
Execution Phase

↓

Delete
```

---

# Visual Flow

```text
Global Execution Context

│
├── Memory Phase
│
├── Execution Phase
│
└── Function Call
      │
      ├── New Function EC
      │
      ├── Memory Phase
      │
      ├── Execution Phase
      │
      └── Return
```

---

# Hoisting Connection

Memory Creation Phase ki wajah se:

```js
sayHello();

function sayHello(){
    console.log("Hello");
}
```

works.

Output:

```text
Hello
```

---

WHY?

Memory Phase mein:

```text
sayHello
↓
Complete Function Definition
```

store ho chuki thi.

---

# Call Stack

JavaScript Single Threaded Language hai.

Ek time par ek hi kaam karta hai.

Function calls ko manage karne ke liye:

```text
Call Stack
```

use hota hai.

---

# Call Stack Definition

```text
Call Stack is a stack data structure used by JavaScript to manage function execution.
```

---

# Stack Rule

```text
LIFO

Last In First Out
```

---

# Example

```js
function one(){
    two();
}

function two(){
    three();
}

function three(){
    console.log("Hello");
}

one();
```

---

# Step 1

```js
one();
```

Stack:

```text
┌─────┐
│ one │
└─────┘
```

---

# Step 2

```js
two();
```

Stack:

```text
┌─────┐
│ two │
├─────┤
│ one │
└─────┘
```

---

# Step 3

```js
three();
```

Stack:

```text
┌───────┐
│ three │
├───────┤
│ two   │
├───────┤
│ one   │
└───────┘
```

---

# Step 4

Output

```text
Hello
```

---

# Step 5

three complete.

Stack:

```text
┌─────┐
│ two │
├─────┤
│ one │
└─────┘
```

---

# Step 6

two complete.

Stack:

```text
┌─────┐
│ one │
└─────┘
```

---

# Step 7

one complete.

Stack:

```text
Empty
```

---

# Visual Push & Pop

```text
Push one

one
```

---

```text
Push two

two
one
```

---

```text
Push three

three
two
one
```

---

```text
Pop three

two
one
```

---

```text
Pop two

one
```

---

```text
Pop one

Empty
```

---

# Example 2

```js
function one(){
    console.log("One");
}

function two(){
    one();
    console.log("Two");
}

function three(){
    two();
    console.log("Three");
}

three();
```

Output:

```text
One
Two
Three
```

---

# Stack Flow

```text
three

↓

two

↓

one

↓

print One

↓

pop one

↓

print Two

↓

pop two

↓

print Three

↓

pop three
```

---

# Stack Overflow

Most Important Interview Question.

---

Example

```js
function test(){
    test();
}

test();
```

---

Execution:

```text
test
test
test
test
test
test
test
test
...
```

Stack continuously grow karta rahega.

Kabhi empty nahi hoga.

---

Output:

```text
RangeError:
Maximum Call Stack Size Exceeded
```

---

# Lexical Environment + Execution Context

Example

```js
let a = 10;

function one(){
    console.log(a);
}

function two(){
    let a = 20;
    one();
}

two();
```

Output:

```text
10
```

---

# Why Not 20?

JavaScript:

```text
Dynamic Scope
```

use nahi karti.

---

JavaScript:

```text
Lexical Scope
```

use karti hai.

---

Rule:

```text
Function ko call kaha se kiya gaya
ye important nahi hai.

Function create kaha hua tha
ye important hai.
```

---

one() create hua tha:

```js
let a = 10;

function one(){
}
```

Toh uska lexical environment:

```text
one
↓
Global Scope
```

hai.

---

Isliye:

```text
a = 10
```

milta hai.

---

# Execution Context Summary

✅ Global Execution Context

✅ Function Execution Context

✅ Memory Creation Phase

✅ Execution Phase

✅ Variable Environment

✅ Execution Thread

✅ Function Execution Context Creation

✅ Function Execution Context Deletion

✅ Hoisting Connection

---

# Call Stack Summary

✅ Stack Data Structure

✅ LIFO

✅ Push

✅ Pop

✅ Function Execution Order

✅ Nested Function Calls

✅ Stack Overflow

---

# Golden Interview Lines

```text
JavaScript creates a Global Execution Context before executing any code.
```

```text
Every function call creates a new Function Execution Context.
```

```text
Execution Context has two phases:
1. Memory Creation Phase
2. Execution Phase
```

```text
Variables are assigned undefined during Memory Creation Phase.
```

```text
Functions are stored with their complete definitions during Memory Creation Phase.
```

```text
JavaScript uses a Call Stack to manage function execution.
```

```text
Call Stack follows LIFO (Last In First Out).
```

```text
Too many recursive calls result in:
Maximum Call Stack Size Exceeded.
```