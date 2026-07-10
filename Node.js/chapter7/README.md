
# 📘 Chapter 7 : CommonJS Module System

---

# What is CommonJS?

## 📖 Technical Definition (Interview)

> **CommonJS is the default module system in Node.js that allows code to be exported and imported using `module.exports`, `exports`, and `require()`. It enables modular programming by allowing files to share functionality.**

---

# 💡 Simple Explanation

Pichle chapter me humne dekha ki project ko chhoti-chhoti files me divide karte hain.

Question.

Ab ek file dusri file ka function kaise use karegi?

Example.

```text
math.js
```

ke andar

```javascript
function add(a,b){

    return a+b;

}
```

Likha hai.

Question.

`app.js`

isse kaise use karegi?

Isi problem ko solve karta hai

> **CommonJS Module System**

---

# Why do we need CommonJS?

Suppose.

Project.

```text
project

│

├── app.js

└── math.js
```

math.js

```javascript
function add(a,b){

    return a+b;

}
```

app.js

```javascript
console.log(add(10,20));
```

Output

```text
ReferenceError

add is not defined
```

😂😂

Reason?

Har file ka apna scope hota hai.

Ek file automatically dusri file ka code access nahi kar sakti.

Isliye

**Export** aur **Import** ka concept introduce hua.

---

# CommonJS Components

CommonJS mainly 3 cheeze provide karta hai.

```text
CommonJS

│

├── module.exports

├── exports

└── require()
```

Ye teeno samajhna placement ke liye mandatory hai.

---

# 1️⃣ module.exports

## 📖 Technical Definition

> **`module.exports` is an object used to expose functions, variables, classes, or objects from a module so that other files can import and use them.**

---

## 💡 Simple Explanation

Simple language me.

Agar kisi file ka code dusri file me use karna hai.

To us code ko **export** karna padega.

Example.

math.js

```javascript
function add(a,b){

    return a+b;

}

module.exports = add;
```

Yaha hum bol rahe hain.

> **Ye function bahar use ho sakta hai.**

---

# Internal Working

```text
math.js

↓

module.exports

↓

Export Object

↓

require()

↓

Another File
```

---

# Real World Example

Smart Cart.

```text
authService.js
```

↓

Export

↓

```text
authController.js
```

↓

Use.

---

# 2️⃣ require()

## 📖 Technical Definition

> **`require()` is a built-in CommonJS function used to load and import exported modules into another file.**

---

## 💡 Simple Explanation

Export kar diya.

Ab use kaise karenge?

```javascript
const add = require("./math");
```

Ye line bol rahi hai.

> **math.js se jo export hua hai usko yaha le aao.**

---

# Complete Example

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

# Internal Flow

```text
require("./math")

↓

Search File

↓

Execute File

↓

module.exports

↓

Return Value

↓

Variable add
```

---

# Relative Path

Ye bahut common interview question hai.

```javascript
require("./math");
```

Question.

Ye

```text
./
```

kyun likhte hain?

Answer.

Ye current folder ko represent karta hai.

---

Example.

```text
project

│

├── app.js

└── math.js
```

Import.

```javascript
require("./math");
```

---

Agar

```text
utils

└── math.js
```

ho.

To.

```javascript
require("./utils/math");
```

---

# What if "./" na likhe?

Example.

```javascript
require("math");
```

Node sochegi.

Ye local module nahi hai.

Ye built-in ya third-party module hoga.

Search karegi.

```text
Built-in

↓

node_modules

↓

Error
```

---

# exports Keyword

Ye interview favourite hai.

Question.

Ye dono same hain?

```javascript
module.exports

exports
```

Answer.

Almost.

Lekin exactly same nahi.

---

Internally.

```javascript
exports = module.exports;
```

Initially dono same object ko point karte hain.

---

Example.

```javascript
exports.add = add;
```

Equivalent.

```javascript
module.exports.add = add;
```

---

# Interview Trap

Ye code.

```javascript
exports = add;
```

😂

Kaam karega?

❌ Nahi.

Reason.

Tumne reference tod diya.

---

Correct.

```javascript
module.exports = add;
```

Ya.

```javascript
exports.add = add;
```

---

# Named Export

Example.

```javascript
function add(){}

function sub(){}

module.exports = {

    add,

    sub

};
```

Import.

```javascript
const math = require("./math");

math.add();

math.sub();
```

---

# Module Caching ⭐⭐⭐⭐⭐

Ye humne previous chapter me dekha.

Ab implementation samajhte hain.

math.js

```javascript
console.log("Module Loaded");

module.exports = {};
```

app.js

```javascript
require("./math");

require("./math");

require("./math");
```

Output.

```text
Module Loaded
```

Sirf.

Ek baar.

---

# Why?

Flow.

```text
First require

↓

Load Module

↓

Execute

↓

Cache

↓

Return
```

Second.

```text
Already Cached?

↓

Yes

↓

Return Cache
```

No execution.

---

# Why Caching?

Suppose.

```text
db.js
```

Database connection bana raha hai.

Agar cache na ho.

Har file.

```javascript
require("./db");
```

karegi.

Aur.

100 database connections ban jayenge.

😂

Caching isi problem ko solve karti hai.

---

# Module Wrapper Function ⭐⭐⭐⭐⭐

Internally.

Har file.

```javascript
(function(exports,require,module,__filename,__dirname){

    // Your Code

});
```

me wrap hoti hai.

---

# Why Wrapper Function?

## 1.

Private Scope.

---

## 2.

exports available.

---

## 3.

require available.

---

## 4.

module available.

---

## 5.

__dirname available.

---

## 6.

__filename available.

---

# __dirname

Current directory ka absolute path.

Example.

```javascript
console.log(__dirname);
```

Output.

```text
C:\Projects\Node
```

---

# __filename

Current file ka absolute path.

Example.

```javascript
console.log(__filename);
```

Output.

```text
C:\Projects\Node\app.js
```

---

# Complete require() Flow

```text
require()

↓

Resolve Path

↓

Check Cache

│

├── Found

│      ↓

│   Return

│

└── Not Found

       ↓

Read File

↓

Wrap Module

↓

Execute

↓

module.exports

↓

Store Cache

↓

Return exports
```

---

# Real World Example

Smart Cart

```text
JWT Utils

↓

module.exports

↓

Auth Middleware

↓

require()

↓

JWT Verification
```

---

# Best Practices

✅ One module → One responsibility.

✅ Use meaningful names.

✅ Avoid circular dependencies.

✅ Export only required things.

---

# ⚠️ Interview Traps

### Question

Difference between exports and module.exports?

---

### Question

Will require() execute module every time?

---

### Question

Why do we use "./" ?

---

### Question

Why Wrapper Function?

---

# Common Mistakes

❌ exports = function(){}

✅ module.exports = function(){}

---

❌ require("math")

(Local Module)

✅ require("./math")

---

❌ require() executes every time.

✅ Only first time.

---

# Visual Mind Map

```text
                  CommonJS
                      │
      ┌───────────────┼────────────────┐
      │               │                │
      ▼               ▼                ▼
 module.exports    require()       exports
      │               │                │
      ▼               ▼                ▼
 Export Code     Import Code     Alias Object
                      │
                      ▼
                 Module Cache
                      │
                      ▼
              Wrapper Function
                      │
       ┌──────────────┼───────────────┐
       ▼              ▼               ▼
   __dirname     __filename      Private Scope
```

---

# Quick Revision

```text
CommonJS

↓

module.exports

↓

require()

↓

exports

↓

Module Cache

↓

Wrapper Function

↓

__dirname

↓

__filename
```

---

# Chapter Summary

* CommonJS Node.js ka default module system hai.
* `module.exports` se code export hota hai.
* `require()` exported code import karta hai.
* `exports` ek shortcut hai, lekin `module.exports` ka replacement nahi.
* `require()` sirf pehli baar module execute karta hai, uske baad cached version return karta hai.
* Har module wrapper function ke andar execute hota hai.
* `__dirname` aur `__filename` wrapper function ki wajah se available hote hain.

---

