

# 📘 Chapter 6 : Modules in Node.js

---

# What are Modules?

## 📖 Technical Definition (Interview)

> **A module in Node.js is a reusable, self-contained piece of code that encapsulates related functionality and can be imported into other files using the CommonJS or ES Module system.**

---

# 💡 Simple Explanation

Suppose tum Smart Cart bana rahe ho.

Tumhara pura backend sirf ek file me hai.

```javascript
// app.js

// 5000+ Lines

Login

Register

Products

Orders

Payments

Coupons

Reviews

Wishlist

Notifications

Chat

Admin

Seller

...
```

😂😂😂

Question.

Kya ye maintain karna easy hoga?

Obviously **NO**.

Isi problem ko solve karne ke liye **Modules** aaye.

---

# Why do we need Modules?

Software Engineering ka ek golden principle hai.

> **Divide and Conquer**

Bade project ko chhote-chhote parts me divide karo.

Example

```text
Smart Cart

│

├── auth.js

├── product.js

├── order.js

├── payment.js

├── review.js

├── notification.js
```

Ab agar future me Product module me change karna hai.

Sirf

```text
product.js
```

change hoga.

Baaki project untouched rahega.

Yehi Modules ka sabse bada benefit hai.

---

# Problem Before Modules

Suppose.

```javascript
// app.js

function login(){

}

function register(){

}

function addProduct(){

}

function removeProduct(){

}

function placeOrder(){

}

function payment(){

}

function wishlist(){

}

function notification(){

}
```

1000 functions.

Ek hi file.

Debug karna mushkil.

Code reuse impossible.

Maintenance nightmare.

---

# Modules ka Solution

Har functionality ko alag file me daal do.

```text
Auth Module

↓

auth.js
```

```text
Product Module

↓

product.js
```

```text
Order Module

↓

order.js
```

Ab jaha zarurat ho.

Import kar lo.

---

# Benefits of Modules

### 1. Code Reusability

Ek baar function likho.

Har file me use karo.

---

### 2. Better Maintenance

Changes sirf ek file me.

---

### 3. Better Readability

Code organized rehta hai.

---

### 4. Team Collaboration

Ek developer.

Products.

Dusra.

Orders.

Teesra.

Authentication.

Sab parallel kaam kar sakte hain.

---

### 5. Scalability

Project bada hone par bhi manageable rehta hai.

---

# Types of Modules

Node.js me mainly 3 types ke modules hote hain.

```text
Modules

│

├── Built-in Modules

├── Local Modules

└── Third Party Modules
```

---

# 1️⃣ Built-in Modules

## 📖 Technical Definition

> **Built-in modules are modules that are provided by Node.js itself and do not require installation.**

---

Examples

```text
fs

http

path

os

events

crypto

stream

buffer

process
```

Use

```javascript
const fs = require("fs");
```

Install?

❌ Nahi.

---

# Real World

```javascript
const fs = require("fs");
```

↓

Product Images Read

---

```javascript
const http = require("http");
```

↓

HTTP Server

---

```javascript
const path = require("path");
```

↓

File Path Management

---

# 2️⃣ Local Modules

## 📖 Technical Definition

> **Local modules are user-created modules stored within the project and imported using relative paths.**

---

Example.

Project.

```text
project

│

├── app.js

└── math.js
```

---

math.js

```javascript
function add(a,b){

    return a+b;

}

module.exports = add;
```

---

app.js

```javascript
const add = require("./math");

console.log(add(10,20));
```

Output

```text
30
```

---

# Real World

Smart Cart

```text
controllers

services

middlewares

utils

models
```

Ye sab local modules hi hain.

---

# 3️⃣ Third Party Modules

## 📖 Technical Definition

> **Third-party modules are packages developed by the community and installed through npm.**

---

Examples

```text
express

mongoose

jsonwebtoken

bcrypt

multer

cors

dotenv

nodemon
```

Install

```bash
npm install express
```

Use

```javascript
const express = require("express");
```

---

# Internal Working of Modules

Suppose.

```javascript
const fs = require("fs");
```

Internally.

```text
require()

↓

Search Module

↓

Load Module

↓

Execute Once

↓

Cache

↓

Return exports
```

---

# Module Loading Process

Node.js internally ye steps follow karti hai.

```text
1.

Module Search

↓

2.

Module Load

↓

3.

Module Wrap

↓

4.

Execute

↓

5.

Cache

↓

6.

Return Exports
```

Ye process interview me pucha ja sakta hai.

---

# Module Wrapper Function ⭐⭐⭐⭐⭐

Ye bahut important hai.

Har module internally Node.js ek function ke andar wrap karti hai.

```javascript
(function(exports, require, module, __filename, __dirname){

    // Your Code

});
```

Question.

Why?

Taaki har file ka apna private scope ho.

---

Example.

math.js

```javascript
const secret = "ABC";
```

app.js

```javascript
console.log(secret);
```

Output

```text
ReferenceError
```

Kyun?

Kyuki dono alag wrapper function ke andar hain.

---

# Real World Example

Smart Cart

```text
productController.js
```

ka variable.

Automatically

```text
authController.js
```

me access nahi hoga.

Ye accidental conflicts prevent karta hai.

---

# Module Caching ⭐⭐⭐⭐⭐

Ye placement favourite hai.

Suppose.

```javascript
const math = require("./math");

const math2 = require("./math");
```

Question.

Kya module 2 baar execute hoga?

❌ Nahi.

Sirf pehli baar.

Uske baad.

Cache.

---

## Why Module Caching?

Performance improve karne ke liye.

Agar har baar file execute hogi.

To unnecessary overhead hoga.

---

# Internal Flow

```text
require()

↓

Already Loaded?

│

├── Yes

│      ↓

│   Return Cache

│

└── No

       ↓

Execute Module

↓

Store in Cache

↓

Return exports
```

---

# Real World

Suppose.

```text
Database Connection
```

Module.

Agar cache na ho.

Har file.

```javascript
require("./db")
```

karegi.

Aur har baar naya database connection banega.

😂😂

Server crash ho jayega.

Caching isi problem ko solve karti hai.

---

# Best Practices

✅ Related code ko ek hi module me rakho.

✅ Ek module ka ek hi responsibility honi chahiye.

✅ Circular dependencies avoid karo.

✅ Meaningful module names use karo.

---

# ⚠️ Interview Traps

### Question

Does require() execute module every time?

❌ Wrong.

Yes.

✅ Correct.

No.

Sirf first time.

Uske baad cache.

---

### Question

Can local variables of one module be accessed directly from another module?

❌ Yes.

✅ No.

Har module ka apna private scope hota hai.

---

# Common Mistakes

❌ Module = File

✅ Usually ek module ek file hoti hai.

Lekin logically ek module multiple files bhi ho sakta hai.

---

❌ require() always executes code.

✅ Pehli baar execute karta hai.

Uske baad cache return karta hai.

---

# Visual Mind Map

```text
                    Modules
                       │
       ┌───────────────┼───────────────┐
       │               │               │
       ▼               ▼               ▼
   Built-in        Local Module    Third Party
       │               │               │
       ▼               ▼               ▼
     fs             auth.js        express
     path           product.js     mongoose
     http           utils.js       bcrypt

                require()
                     │
                     ▼
               Module Loader
                     │
      ┌──────────────┴──────────────┐
      ▼                             ▼
 Execute First Time           Return Cache
```

---

# Quick Revision

```text
Modules

↓

Reusable Code

↓

Built-in

↓

Local

↓

Third Party

↓

require()

↓

module.exports

↓

Caching

↓

Wrapper Function
```

---

# Chapter Summary

* Modules reusable code units hote hain.
* Node.js me Built-in, Local aur Third-party modules hote hain.
* `require()` module ko load karta hai.
* Har module wrapper function ke andar execute hota hai.
* Wrapper function private scope provide karta hai.
* `require()` pehli baar module execute karta hai, uske baad cached version return hota hai.
* Module caching performance improve karti hai aur unnecessary re-execution se bachati hai.

---

