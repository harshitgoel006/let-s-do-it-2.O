# JavaScript Variables, Scope & Hoisting Notes

# Variable Declaration in JavaScript

```js
const accountId = 1543
let accountEmail = "harshitgoel886@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

accountEmail = "xyz@gmail.com"
accountPassword = "654867"
accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity])
```

---

# Variable Keywords

JavaScript mein variables mainly 3 tarah se declare kiye jate hain:

* `var`
* `let`
* `const`

---

# 1. const

## Features

* Value reassign nahi kar sakte
* Declaration ke time value deni mandatory hoti hai
* Block scoped hota hai
* TDZ follow karta hai

```js
const a = 10;

a = 20; // Error
```

---

# 2. let

## Features

* Block scoped hota hai
* Reassign kar sakte hain
* Redeclare same scope mein nahi kar sakte
* TDZ follow karta hai

```js
let name = "Harshit";

name = "Goel"; // Allowed
```

---

# 3. var

## Features

* Function scoped hota hai
* Redeclare bhi kar sakte hain
* Reassign bhi kar sakte hain
* Hoisting ke time automatically `undefined` se initialize hota hai
* Block scope follow nahi karta

```js
var a = 10;
var a = 20;
```

Isi liye modern JavaScript mein `var` avoid kiya jata hai.

---

# JavaScript is Dynamically Typed

## Definition

JavaScript ek dynamically typed language hai.

Matlab:

> Variable ka datatype fixed nahi hota. Runtime pe datatype change ho sakta hai.

```js
let value = 10;

value = "Harshit";
```

Allowed hai.

---

# Undefined in JavaScript

Agar variable declare kiya but value assign nahi ki:

```js
let name;

console.log(name);
```

### Output

```js
undefined
```

---

# Technical Definition of Undefined

> `undefined` ek primitive value hai jo indicate karti hai ki variable declare toh hua hai but usko abhi tak koi value assign nahi hui.

---

# Scope in JavaScript

## Technical Definition

> Scope determines the accessibility and visibility of variables in different parts of the program.

Simple language:
Variable kaha accessible hai aur kaha nahi.

---

# Types of Scope

# 1. Global Scope

Global variable pure program mein accessible hota hai.

```js
let name = "Harshit";
```

---

# 2. Function Scope

Function ke andar declare variable sirf function ke andar accessible hota hai.

```js
function test() {
   var a = 10;
}
```

---

# 3. Block Scope

Block `{}` ke andar declare variable sirf us block ke andar accessible hota hai.

```js
{
   let x = 10;
}

console.log(x); // Error
```

`let` aur `const` block scoped hote hain.

---

# var vs let

# Using var

```js
if(true){
   var a = 10;
}

console.log(a);
```

### Output

```js
10
```

Reason:
`var` block scope follow nahi karta.

---

# Using let

```js
if(true){
   let b = 20;
}

console.log(b);
```

### Output

```js
ReferenceError
```

Reason:
`let` block scoped hota hai.

---

# Redeclare vs Reassign

# Reassign

```js
let a = 10;

a = 20;
```

Allowed.

---

# Redeclare

```js
let a = 10;
let a = 20;
```

Error.

---

# Hoisting in JavaScript

# Technical Definition

> Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

---

# Important Point

JavaScript code execute hone se pehle:

* Memory allocate karta hai
* Variables aur functions ko memory mein register karta hai

Ye process:

# Memory Creation Phase

mein hota hai.

---

# Example with var

```js
console.log(a);

var a = 10;
```

### Output

```js
undefined
```

---

# Internally JavaScript Roughly Isko Aise Treat Karta Hai

```js
var a;

console.log(a);

a = 10;
```

Reason:
`var` hoist hota hai aur automatically `undefined` se initialize ho jata hai.

---

# Hoisting with let and const

```js
console.log(b);

let b = 20;
```

### Output

```js
ReferenceError
```

Reason:
`let` aur `const` hoist toh hote hain,
but initialize immediately nahi hote.

---

# Temporal Dead Zone (TDZ)

# Simple Definition

> Wo area jahan variable memory mein toh hota hai but usable nahi hota.

---

# Technical Definition

> The Temporal Dead Zone is the time period between the hoisting of a `let` or `const` variable and its initialization, during which the variable cannot be accessed.

---

# Important Point

`let` aur `const`:

* Memory mein hoist hote hain
* But initially `<uninitialized>` state mein rehte hain

Isi liye initialization se pehle access karne par:

```js
ReferenceError
```

aata hai.

---

# Why TDZ Exists

TDZ intentionally design kiya gaya tha taaki:

* accidental access avoid ho
* bugs kam ho
* safer variable behavior mile

---

# Internal Behavior of let/const

## Memory Creation Phase

JavaScript:

* variable ke liye memory reserve karta hai
* but usko initialize nahi karta

Internally:

```js
b = <uninitialized>
```

---

# Execution Phase

Jab execution declaration line tak pahuchta hai:

```js
let b = 20;
```

tab:

```js
b = 20
```

initialize hota hai.

Uske baad variable accessible ho jata hai.

---

# Summary Table

| Feature                    | var      | let   | const |
| -------------------------- | -------- | ----- | ----- |
| Scope                      | Function | Block | Block |
| Redeclare                  | ✅        | ❌     | ❌     |
| Reassign                   | ✅        | ✅     | ❌     |
| Hoisted                    | ✅        | ✅     | ✅     |
| Initialized with undefined | ✅        | ❌     | ❌     |
| TDZ                        | ❌        | ✅     | ✅     |
