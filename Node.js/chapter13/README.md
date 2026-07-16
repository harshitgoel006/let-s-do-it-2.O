# 📘 Chapter 13 : Process Module

---

# What is Process Module?

## 📖 Technical Definition (Interview)

> **The `process` module is a built-in global object in Node.js that provides information and control over the current Node.js process. It allows developers to access command-line arguments, environment variables, process information, exit the process, and interact with the operating system.**

---

# 💡 Simple Explanation

Jab bhi tum Node.js program run karte ho.

Example.

```bash
node app.js
```

Actually kya hota hai?

Operating System ek **new process** create karta hai.

Us process ke andar tumhara Node.js program execute hota hai.

Us running process ki information aur control dene ke liye Node.js provide karta hai.

> **process object**

---

# Why do we need Process Module?

Suppose tum application run kar rahe ho.

Tumhe jaana hai.

* Program kis folder se run hua?
* Command line se kya arguments aaye?
* Environment Variables kya hain?
* Current Process ka PID kya hai?
* Program manually terminate kaise kare?

Ye sab kaam process object se hote hain.

---

# Is process imported?

Ye bahut common interview question hai.

Question.

```javascript
const process = require("process");
```

Likhenge?

❌ Nahi.

Reason.

`process` ek **Global Object** hai.

Direct use kar sakte ho.

```javascript
console.log(process);
```

---

# Process Object Overview

```text
process

│

├── argv

├── env

├── exit()

├── cwd()

├── pid

├── platform

├── version

└── memoryUsage()
```

---

# 1️⃣ process.argv ⭐⭐⭐⭐⭐

## 📖 Technical Definition

> **`process.argv` is an array containing the command-line arguments passed when starting the Node.js process.**

---

## 💡 Simple Explanation

Suppose.

```bash
node app.js Harshit Goel
```

Question.

Ye

```text
Harshit

Goel
```

program ke andar kaise aayega?

Answer.

```javascript
process.argv
```

---

# Example

```javascript
console.log(process.argv);
```

Run.

```bash
node app.js Harshit Goel
```

Output.

```javascript
[
'/usr/bin/node',

'/project/app.js',

'Harshit',

'Goel'
]
```

---

# Why first two values?

Humne discussion me bhi cover kiya tha.

```text
Index 0

↓

Node Executable Path

Index 1

↓

Current Script Path

Index 2 onwards

↓

User Arguments
```

---

# Practical Example

```javascript
const name = process.argv[2];

console.log(`Hello ${name}`);
```

Run.

```bash
node app.js Harshit
```

Output.

```text
Hello Harshit
```

---

# Real World Example

CLI Tools.

Example.

```bash
node createUser.js Harshit admin
```

Arguments.

```text
Harshit

admin
```

Create User.

---

# 2️⃣ process.env ⭐⭐⭐⭐⭐

## 📖 Technical Definition

> **`process.env` is an object containing the environment variables available to the current Node.js process.**

---

# 💡 Simple Explanation

Suppose.

Tumhare paas.

```text
MongoDB Password

JWT Secret

Cloudinary Secret

API Keys
```

Hain.

Question.

Kya ye sab code ke andar likhna safe hai?

❌ Bilkul nahi.

Solution.

Environment Variables.

---

# Example

```javascript
console.log(process.env.PORT);
```

Ya.

```javascript
console.log(process.env.JWT_SECRET);
```

---

# Real World

Smart Cart.

```env
PORT=5000

JWT_SECRET=abcdef123

MONGO_URI=...
```

Node.

```javascript
const port = process.env.PORT;
```

---

# Why Environment Variables?

Without `.env`

```javascript
const password = "mysecretpassword";
```

❌ Security Risk.

With `.env`

```javascript
process.env.DB_PASSWORD
```

✅ Better Practice.

---

# 3️⃣ process.exit()

## 📖 Technical Definition

> **`process.exit()` immediately terminates the current Node.js process.**

---

# 💡 Simple Explanation

Kabhi-kabhi hume program ko manually band karna hota hai.

Uske liye.

```javascript
process.exit();
```

---

# Example

```javascript
console.log("Hello");

process.exit();

console.log("World");
```

Output.

```text
Hello
```

Question.

World kyun print nahi hua?

Kyunki process terminate ho chuka tha.

---

# Exit Codes

Example.

```javascript
process.exit(0);
```

Matlab.

```text
Success
```

---

```javascript
process.exit(1);
```

Matlab.

```text
Something went wrong.
```

---

# 4️⃣ process.cwd()

## 📖 Technical Definition

> **`process.cwd()` returns the current working directory from which the Node.js process was started.**

---

Example.

```javascript
console.log(process.cwd());
```

Output.

```text
C:\Projects\SmartCart
```

---

# cwd() vs __dirname

Ye interview favourite hai.

| process.cwd()            | __dirname              |
| ------------------------ | ---------------------- |
| Jahan se program run hua | Current file ka folder |
| Change ho sakta hai      | Fixed hota hai         |

---

# Example

```text
Project

│

├── app.js

└── utils

    └── math.js
```

Agar project root se run karoge.

```bash
node utils/math.js
```

`process.cwd()`

↓

Project Root.

`__dirname`

↓

utils Folder.

---

# 5️⃣ process.pid

Current Process ID.

Example.

```javascript
console.log(process.pid);
```

Output.

```text
14520
```

Har process ka unique PID hota hai.

---

# 6️⃣ process.platform

Current Operating System.

```javascript
console.log(process.platform);
```

Possible Output.

```text
win32

linux

darwin
```

---

# 7️⃣ process.version

Current Node.js Version.

```javascript
console.log(process.version);
```

Output.

```text
v24.5.0
```

---

# 8️⃣ process.memoryUsage()

Current memory usage.

Example.

```javascript
console.log(process.memoryUsage());
```

Output.

```javascript
{
  rss: ...,

  heapUsed: ...,

  heapTotal: ...
}
```

Production me monitoring ke liye useful.

---

# Internal Working

```text
Operating System

↓

Creates Process

↓

Node Runtime Starts

↓

Global process Object

↓

Your JavaScript Code
```

---

# Real World Example

Smart Cart Startup.

```text
Read PORT

↓

Read JWT Secret

↓

Read Mongo URI

↓

Connect Database

↓

Start Server
```

Ye sab.

```javascript
process.env
```

ki help se hota hai.

---

# Best Practices

✅ Secrets ko `.env` me rakho.

✅ `process.exit()` sirf jab genuinely required ho tab use karo.

✅ Command-line arguments validate karo.

---

# ⚠️ Interview Traps

### Question

Do we need to import `process`?

❌ Yes.

✅ No.

Global Object hai.

---

### Question

Does `process.argv` return an object?

❌ Yes.

✅ No.

Array return karta hai.

---

### Question

Can `process.exit()` execute remaining code?

❌ Yes.

✅ No.

Immediately process terminate ho jata hai.

---

# Common Mistakes

❌ Hardcoding secrets.

↓

Use `process.env`.

---

❌ Accessing wrong index in `process.argv`.

↓

User arguments index 2 se start hote hain.

---

❌ Assuming `process.cwd()` aur `__dirname` same hote hain.

↓

Dono ka purpose alag hai.

---

# Visual Mind Map

```text
                 process
                    │
     ┌──────────────┼───────────────┐
     │              │               │
     ▼              ▼               ▼
   argv           env           exit()
     │              │               │
     ▼              ▼               ▼
CLI Args      Environment      Terminate
                              Process

Additional

│

├── cwd()

├── pid

├── platform

├── version

└── memoryUsage()
```

---

# Quick Revision

```text
process

↓

Global Object

↓

argv

↓

env

↓

exit()

↓

cwd()

↓

pid

↓

platform

↓

version
```

---

# Chapter Summary

* `process` Node.js ka built-in global object hai.
* `process.argv` command-line arguments return karta hai.
* `process.env` environment variables access karne ke liye use hota hai.
* `process.exit()` current process terminate karta hai.
* `process.cwd()` current working directory return karta hai.
* `process.pid`, `process.platform`, `process.version` aur `process.memoryUsage()` runtime information provide karte hain.
* Sensitive information ko code me hardcode karne ke bajay `process.env` use karna best practice hai.

---
