
# 📘 Chapter 16 : File System (FS) Module - Introduction & Sync vs Async

---

# What is File System (fs) Module?

## 📖 Technical Definition (Interview)

> **The `fs` (File System) module is a built-in Node.js module that provides an API for interacting with the file system. It allows developers to create, read, write, update, rename, delete, and manage files and directories.**

---

# 💡 Simple Explanation

Ab tak hum JavaScript me sirf variables aur functions ke saath kaam kar rahe the.

Lekin real applications me hume files ke saath bhi kaam karna padta hai.

Examples.

* User ka Resume upload karna
* Product Images save karna
* Logs store karna
* PDF generate karna
* CSV read karna
* Configuration files load karna

Ye sab kaam kaun karega?

👉 **File System Module (`fs`)**

---

# Why do we need FS Module?

Suppose Smart Cart me.

Customer ne.

```text
invoice.pdf
```

download karni hai.

Question.

Node.js bina FS ke ye file kaise read karegi?

😂

Kar hi nahi sakti.

Isi liye FS module exist karta hai.

---

# Is FS Built-in?

Question.

Install karna padega?

```bash
npm install fs
```

❌ Nahi.

Ye built-in module hai.

Bas.

```javascript
const fs = require("fs");
```

Aur ready.

---

# What Can FS Module Do?

```text
FS Module

│

├── Read File

├── Write File

├── Append File

├── Rename File

├── Delete File

├── Create Folder

├── Read Folder

├── File Information

└── Streams
```

Hum ye sab agle chapters me detail me padhenge.

---

# Real World Usage

Smart Cart

```text
User Uploads Product Image

↓

FS Reads Temporary File

↓

Cloudinary Upload

↓

Temporary File Delete
```

---

Netflix

```text
Movie File

↓

Read

↓

Stream

↓

User
```

---

Google Drive

```text
Upload File

↓

Read

↓

Store

↓

Download
```

---

# Sync vs Async ⭐⭐⭐⭐⭐

Ye FS ka sabse important concept hai.

Aur interview ka favourite bhi.

---

## Synchronous Operations

## 📖 Technical Definition

> **Synchronous file operations execute one task at a time and block the main thread until the operation is completed.**

---

## 💡 Simple Explanation

Simple language me.

Node bolegi.

> "Pehle file ka kaam complete hoga."

Uske baad.

> "Agla code execute hoga."

---

Example.

```javascript
console.log("Start");

const data = fs.readFileSync("user.txt","utf-8");

console.log(data);

console.log("End");
```

---

# Execution Flow

```text
Start

↓

Read File

↓

WAIT

↓

File Read Complete

↓

Print Data

↓

End
```

---

Suppose.

File read hone me.

5 Seconds.

Output.

```text
Start

(wait...)

Harshit

End
```

Notice.

Program wait kar raha hai.

---

# Why is it called Blocking?

Kyuki.

Main Thread.

```text
BLOCK
```

ho gayi.

Jab tak file read nahi hogi.

Next line execute nahi hogi.

---

# Asynchronous Operations

## 📖 Technical Definition

> **Asynchronous file operations execute in the background without blocking the main thread. The callback is executed after the operation completes.**

---

## 💡 Simple Explanation

Node bolegi.

> "File read ka kaam background me chalu karo."

Aur.

> "Main tab tak next code execute karta hu."

---

Example.

```javascript
console.log("Start");

fs.readFile("user.txt","utf-8",(err,data)=>{

    console.log(data);

});

console.log("End");
```

---

# Execution Flow

```text
Start

↓

libuv

↓

Continue

↓

End

↓

File Read Complete

↓

Callback

↓

Print Data
```

---

Output.

```text
Start

End

Harshit
```

Exactly ye humne practically bhi observe kiya tha.

---

# Internal Working

```text
JavaScript

↓

fs.readFile()

↓

Node API

↓

libuv

↓

Operating System

↓

Read File

↓

Event Loop

↓

Callback Queue

↓

Call Stack

↓

Callback Execute
```

Ye pura flow tumhe Event Loop chapter se connect karna chahiye.

---

# Sync vs Async Comparison

| Synchronous      | Asynchronous            |
| ---------------- | ----------------------- |
| Blocking         | Non-Blocking            |
| Wait karta hai   | Wait nahi karta         |
| Simple Flow      | Callback/Promise Based  |
| Small Scripts    | Production Applications |
| `readFileSync()` | `readFile()`            |

---

# When Should We Use Sync?

Ye bhi interview question hai.

Use Sync when.

* Configuration load karni ho startup pe.
* Small utility scripts.
* Build tools.
* CLI scripts.

---

# When Should We Use Async?

Production.

Almost.

Always.

Examples.

* API Server
* File Upload
* Database Queries
* Streaming
* Authentication

Reason.

Server block nahi hota.

---

# Why Async is Better?

Suppose.

100 users.

Ek hi time pe.

Profile picture upload karte hain.

Agar Sync use karoge.

```text
User 1

↓

Wait

↓

User 2

↓

Wait

↓

User 3

↓

Wait
```

😂😂😂

Server slow.

---

Async.

```text
User 1

↓

Background

──────────────

User 2

↓

Background

──────────────

User 3

↓

Background
```

Server responsive.

---

# Real Project Usage

Smart Cart.

Login API.

```text
Request

↓

Read JWT Secret

↓

Read User

↓

Database

↓

Response
```

Yaha.

Har operation async hota hai.

Isi wajah se ek hi time pe hazaro users login kar sakte hain.

---

# Best Practices

✅ Production me async APIs prefer karo.

✅ Sync APIs startup configuration tak limit rakho.

✅ Long-running sync operations avoid karo.

---

# ⚠️ Interview Traps

### Question

Is `readFileSync()` faster?

❌ Wrong.

Yes.

✅ Correct.

Not necessarily.

Wo sirf blocking hai.

Performance aur responsiveness context par depend karti hai.

---

### Question

Why is async preferred?

↓

Main thread block nahi hoti.

---

### Question

Does async mean multiple JavaScript threads?

❌ Wrong.

Yes.

✅ Correct.

No.

JavaScript ka main thread single hi rehta hai.

Async behavior libuv aur Event Loop ki wajah se achieve hota hai.

---

# Common Mistakes

❌ Thinking async means parallel JavaScript execution.

↓

JavaScript single-threaded hi rehti hai.

---

❌ Using Sync APIs inside request handlers.

↓

Server block ho sakta hai.

---

❌ Thinking callbacks execute immediately.

↓

Operation complete hone ke baad Event Loop callback execute karwati hai.

---

# Visual Mind Map

```text
                 File System (fs)

                       │

          ┌────────────┼────────────┐

          ▼                         ▼

   Synchronous                Asynchronous

          │                         │

          ▼                         ▼

      Blocking              Non-Blocking

          │                         │

          ▼                         ▼

 readFileSync()             readFile()

          │                         │

          ▼                         ▼

     Wait                  Callback
```

---

# Quick Revision

```text
FS Module

↓

Built-in

↓

Read Files

↓

Write Files

↓

Sync

↓

Blocking

↓

Async

↓

Non-Blocking

↓

libuv

↓

Event Loop
```

---

# Chapter Summary

* `fs` Node.js ka built-in File System module hai.
* Ye files aur directories ke saath interact karne ke liye use hota hai.
* `readFileSync()` synchronous aur blocking hota hai.
* `readFile()` asynchronous aur non-blocking hota hai.
* Production applications me asynchronous APIs prefer ki jaati hain.
* Async operations ka execution libuv aur Event Loop ke through hota hai.
* Sync aur Async ka difference sirf syntax nahi, balki application performance aur scalability par bhi impact karta hai.

---
