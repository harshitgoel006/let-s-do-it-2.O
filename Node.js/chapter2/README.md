# 📘 Chapter 2 : Node.js Architecture

---

# What is Architecture?

## 📖 Technical Definition (Interview)

> **Architecture is the overall design of a software system that describes how different components interact with each other to perform a specific task.**

---

## 💡 Simple Explanation

Simple language me bole to...

Architecture ka matlab hota hai

> **"Koi system internally kaise kaam karta hai aur uske different components ek dusre ke saath kaise interact karte hain."**

Hum Node.js me code likhte hain.

```javascript
fs.readFile("user.txt",...);
```

Question.

Ye line likhne ke baad internally kya hota hai?

JavaScript kaun execute karta hai?

File kaun read karta hai?

Operating System se kaun baat karta hai?

Callback wapas kaun lata hai?

Ye sab milke Node.js Architecture banate hain.

---

# Why do we need to understand Node.js Architecture?

Ye chapter isliye important hai kyunki interviews me directly puchte hain.

Examples:

* Explain Node.js Architecture.
* Explain Request Flow in Node.js.
* Difference between V8 and libuv.
* How does asynchronous programming work in Node.js?
* How does Node.js achieve non-blocking I/O?

Agar architecture samajh gaya...

To ye saare questions automatically solve ho jayenge.

---

# Complete Node.js Architecture

```text
                 JavaScript Code
                        │
                        ▼
                    V8 Engine
            (Compile + Execute JS)
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
     Normal JavaScript          Node.js APIs
(console.log, loops, etc.)   (fs, http, path...)
          │                           │
          ▼                           ▼
     Execute Direct                 libuv
                                        │
                                        ▼
                                Operating System
                                        │
                                        ▼
                           Async Operation Complete
                                        │
                                        ▼
                                  Event Loop
                                        │
                                        ▼
                                   Call Stack
                                        │
                                        ▼
                               V8 Executes Callback
```

---

# Components of Node.js Architecture

Node.js Architecture ke major components ye hain.

```text
1. JavaScript Code

2. V8 Engine

3. Node APIs

4. libuv

5. Operating System

6. Event Loop

7. Worker Pool
```

Ab inhe ek-ek karke samajhte hain.

---

# 1️⃣ JavaScript Code

Ye wo code hai jo developer likhta hai.

Example

```javascript
const fs = require("fs");

fs.readFile("user.txt","utf-8",(err,data)=>{

    console.log(data);

});
```

Ye sirf JavaScript code hai.

Ab is code ko execute kaun karega?

👇

V8 Engine.

---

# 2️⃣ V8 Engine

## 📖 Technical Definition (Interview)

> **V8 is an open-source JavaScript engine developed by Google. It compiles JavaScript into optimized machine code for fast execution.**

---

## 💡 Simple Explanation

V8 ka kaam sirf JavaScript ko execute karna hai.

Ye JavaScript ko samajhta hai.

Usko machine language me convert karta hai.

Aur execute kar deta hai.

Lekin...

⚠️ **V8 asynchronous operations handle nahi karta.**

Ye bahut important line hai.

Interview me aksar puchte hain.

---

## V8 kya kya karta hai?

* JavaScript Parse karta hai.
* Compile karta hai.
* Execute karta hai.
* Memory Manage karta hai.
* Garbage Collection karta hai.

---

## V8 kya nahi karta?

❌ File Read

❌ Database Access

❌ Network Requests

❌ HTTP Requests

❌ Timers

Ye sab kaam baad me **libuv** handle karegi.

---

# 3️⃣ Node.js APIs

Node.js JavaScript ko extra powers deta hai.

Example

```text
fs

http

path

os

crypto

events

stream

buffer

process
```

Ye APIs browser me available nahi hoti.

Ye Node.js provide karta hai.

---

## Example

```javascript
const fs = require("fs");
```

Ye V8 ka feature nahi hai.

Ye Node.js API hai.

---

# 4️⃣ libuv

## 📖 Technical Definition (Interview)

> **libuv is a cross-platform C library that provides asynchronous I/O, an event loop, and a worker thread pool for Node.js.**

---

## 💡 Simple Explanation

Agar Node.js ka superhero koi hai...

To wo **libuv** hai.

Ye hi Node.js ko asynchronous banati hai.

Jab bhi tum likhte ho

```javascript
fs.readFile(...)
```

V8 bolta hai

> "Ye mera kaam nahi hai."

Aur kaam libuv ko de deta hai.

---

## libuv kya handle karti hai?

* File System Operations
* Timers
* DNS Resolution
* Event Loop
* Worker Pool
* OS Communication
* Asynchronous I/O

---

# 5️⃣ Operating System

libuv directly hardware se baat nahi karti.

Wo Operating System ke through kaam karwati hai.

Example

```text
fs.readFile()

↓

libuv

↓

Operating System

↓

Hard Disk

↓

Data Read

↓

libuv

↓

Event Loop
```

---

# 6️⃣ Event Loop

Event Loop continuously check karta rehta hai.

Question.

Kya koi asynchronous operation complete hua?

Agar answer "Yes" hai.

To callback ko execute karwa deta hai.

Isi wajah se Node.js asynchronous behavior achieve karti hai.

**(Event Loop ko hum next chapter me in-depth padhenge.)**

---

# 7️⃣ Worker Pool

Ye point bahut important hai.

Worker Pool **Node.js ka nahi hai.**

Ye **libuv ka part hai.**

---

## Worker Pool kya karta hai?

Aise asynchronous tasks jo directly OS efficiently handle nahi kar sakta.

Example

* File System Operations
* Crypto
* Compression
* DNS (kuch cases me)

Unhe Worker Threads me execute karta hai.

---

## Default Size

```text
4 Threads
```

Lekin...

Environment Variable se change kiya ja sakta hai.

```text
UV_THREADPOOL_SIZE
```

---

# ⚠️ Important Interview Point

Har asynchronous operation Worker Pool me nahi jata.

Ye bahut common misconception hai.

Example

Network I/O

Mostly

```text
Operating System
```

handle karta hai.

Worker Pool nahi.

---

# Complete Request Flow

Suppose tumne likha.

```javascript
fs.readFile("user.txt","utf-8",callback);
```

Internally.

```text
JavaScript

↓

V8

↓

Node API (fs)

↓

libuv

↓

Operating System

↓

Read File

↓

libuv

↓

Event Loop

↓

Callback Queue

↓

Call Stack

↓

V8 Executes Callback
```

Ye flow placement interviews me bahut pucha jata hai.

---

# Real World Example

Smart Cart

User profile image read karni hai.

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

Image Read

↓

Event Loop

↓

Callback Execute

↓

Response Send
```

---

# Common Interview Questions

### Q1.

Explain Node.js Architecture.

---

### Q2.

What is the role of V8 Engine?

---

### Q3.

What is the role of libuv?

---

### Q4.

Who handles asynchronous operations in Node.js?

---

### Q5.

Does V8 handle asynchronous operations?

---

### Q6.

Is Worker Pool a part of Node.js or libuv?

---

### Q7.

Does every asynchronous operation go to the Worker Pool?

---

# Common Mistakes

❌ V8 handles async operations.

✅ libuv handles async operations.

---

❌ Worker Pool belongs to Node.js.

✅ Worker Pool belongs to libuv.

---

❌ Every async operation goes to Worker Pool.

✅ Network I/O is mostly handled by the Operating System.

---

❌ V8 reads files.

✅ V8 only executes JavaScript.

---

# Quick Revision

```text
JavaScript
     │
     ▼
V8 Engine
     │
     ▼
Node APIs
     │
     ▼
libuv
     │
     ▼
Operating System
     │
     ▼
Event Loop
     │
     ▼
Callback Execution
```

---

# Chapter Summary

* Architecture batati hai Node.js internally kaise kaam karti hai.
* V8 JavaScript ko parse, compile aur execute karta hai.
* Node.js APIs backend features provide karti hain.
* libuv asynchronous operations ka core component hai.
* Operating System actual I/O operations perform karta hai.
* Event Loop completed asynchronous tasks ke callbacks execute karwata hai.
* Worker Pool libuv ka part hai aur default size 4 threads hota hai.
* Har asynchronous operation Worker Pool me nahi jata.

---

