# 📘 Chapter 8 : ES Modules (ECMAScript Modules)

---

# What are ES Modules?

## 📖 Technical Definition (Interview)

> **ES Modules (ECMAScript Modules) are the standard JavaScript module system introduced in ECMAScript 2015 (ES6). They use the `import` and `export` keywords to share functionality between different modules and are supported by modern browsers and Node.js.**

---

# 💡 Simple Explanation

Abhi tak hum Node.js me use kar rahe the.

```javascript
const fs = require("fs");

module.exports = add;
```

Ye tha

> **CommonJS Module System**

Lekin JavaScript language evolve hui.

Aur ES6 ke saath ek naya standard introduce hua.

Uska naam hai

> **ES Modules (ESM)**

Ab export aur import ka syntax change ho gaya.

---

# Why were ES Modules introduced?

Question.

Agar CommonJS already tha.

To naya module system kyun banaya?

Reason.

CommonJS sirf Node.js ke liye bana tha.

Browser me standard module system nahi tha.

JavaScript community chahti thi.

Ek hi standard ho.

Jo

- Browser me bhi chale.
- Node.js me bhi chale.
- Future-proof ho.

Isi liye

**ES Modules** aaye.

---

# CommonJS vs ES Modules

| CommonJS                 | ES Modules                   |
| ------------------------ | ---------------------------- |
| `require()`              | `import`                     |
| `module.exports`         | `export`                     |
| Default in older Node.js | Official JavaScript Standard |
| Loaded Synchronously     | Statically Analyzed          |
| Mostly Node.js           | Browser + Node.js            |

---

# Enabling ES Modules in Node.js

By default Node.js CommonJS use karti hai.

Agar ES Modules use karni hain.

To

```json
package.json
```

me ye add karna padega.

```json
{
  "type": "module"
}
```

---

# Why?

Ye Node.js ko batata hai.

> "Ab is project me `import` aur `export` syntax use hoga."

Agar ye line nahi likhoge.

Aur likh diya.

```javascript
import fs from "fs";
```

To.

```text
SyntaxError
```

aa jayega.

---

# Export

## 📖 Technical Definition

> **The `export` keyword is used to expose variables, functions, classes, or objects from a module so that they can be imported into another module.**

---

# Named Export

Example.

math.js

```javascript
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}
```

---

Import.

```javascript
import { add, sub } from "./math.js";

console.log(add(10, 20));
```

Output.

```text
30
```

---

# Why Curly Braces?

Question.

```javascript
import { add }
```

me

```text
{}
```

kyun lagte hain?

Kyuki.

Named export me multiple exports ho sakte hain.

Node ko exactly batana padta hai.

Kaunsa function import karna hai.

---

# Default Export

## 📖 Technical Definition

> **A default export allows a module to export a single primary value that can be imported without using curly braces.**

---

Example.

```javascript
export default function add(a, b) {
  return a + b;
}
```

Import.

```javascript
import add from "./math.js";
```

Notice.

Curly braces nahi.

---

# Why Default Export?

Suppose file me sirf ek hi main functionality hai.

Example.

```text
AuthService
```

To.

```javascript
export default AuthService;
```

zyada clean lagta hai.

---

# Multiple Default Export?

Question.

Ye chalega?

```javascript
export default add;

export default sub;
```

❌ Nahi.

Sirf.

Ek.

---

# Exporting Multiple Values

Example.

```javascript
function add() {}

function sub() {}

export { add, sub };
```

---

Import.

```javascript
import { add, sub } from "./math.js";
```

---

# Default + Named Together

Example.

```javascript
export default add;

export const PI = 3.14;

export function sub() {}
```

Import.

```javascript
import add, { PI, sub } from "./math.js";
```

---

# Internal Working

```text
math.js

↓

export

↓

Module Graph

↓

import

↓

Another File
```

---

# CommonJS vs ES Modules Syntax

## CommonJS

```javascript
const math = require("./math");

module.exports = math;
```

---

## ES Modules

```javascript
import math from "./math.js";

export default math;
```

---

# File Extension

Ye interview favourite hai.

Question.

ES Modules me.

```javascript
import add from "./math";
```

Chalega?

❌ Usually nahi.

Correct.

```javascript
import add from "./math.js";
```

Reason.

Node.js ESM loader explicit file extension expect karta hai.

---

# Real World Example

Smart Cart

```text
services

↓

AuthService.js

↓

export default

↓

controllers

↓

import AuthService
```

---

# Advantages of ES Modules

✅ Official JavaScript Standard

✅ Better Static Analysis

✅ Tree Shaking Support

✅ Browser Compatible

✅ Better Tooling

✅ Future Ready

---

# Best Practices

✅ New projects me ES Modules prefer karo.

✅ Default export tab use karo jab module ka ek hi primary purpose ho.

✅ Named export tab use karo jab multiple reusable functions ho.

---

# ⚠️ Interview Traps

### Question

Can a file have multiple default exports?

❌ Wrong.

Yes.

✅ Correct.

No.

---

### Question

Why do named imports require curly braces?

---

### Question

Why do we write `"type": "module"`?

---

### Question

Can ES Modules run without `.js` extension?

---

# Common Mistakes

❌ Forgetting `"type":"module"`.

↓

Syntax Error.

---

❌

```javascript
import add from "./math";
```

↓

Prefer.

```javascript
import add from "./math.js";
```

---

❌ Multiple default exports.

↓

Invalid.

---

# Visual Mind Map

```text
                ES Modules
                     │
      ┌──────────────┼──────────────┐
      │              │              │
      ▼              ▼              ▼
    export      export default     import
      │              │              │
      ▼              ▼              ▼
 Named Export    Single Export   Import Module
                     │
                     ▼
              package.json
                     │
                     ▼
              type = module
```

---

# Quick Revision

```text
ES Modules

↓

import

↓

export

↓

default export

↓

named export

↓

type = module

↓

Official JS Standard
```

---

# Chapter Summary

- ES Modules JavaScript ka official module system hai.
- `import` aur `export` keywords use hote hain.
- Named exports ke liye curly braces use hote hain.
- Default export bina curly braces import hota hai.
- Ek file me sirf ek default export ho sakta hai.
- Node.js me ES Modules use karne ke liye `package.json` me `"type": "module"` set karna hota hai.
- ES Modules modern JavaScript development ka recommended module system hai.

---

### CommonJS vs ES Modules

| Feature         | CommonJS         | ES Modules                   |
| --------------- | ---------------- | ---------------------------- |
| Import          | `require()`      | `import`                     |
| Export          | `module.exports` | `export`                     |
| Default in Node | ✅               | ❌ (`type: module` required) |
| Browser Support | ❌               | ✅                           |
| Static Analysis | ❌               | ✅                           |
| Tree Shaking    | ❌               | ✅                           |

Ye comparison tables revision ke time bahut kaam aayengi aur interview me differences yaad rakhna easy ho jayega. 💯
