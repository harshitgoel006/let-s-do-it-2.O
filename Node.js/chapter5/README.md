

# 📘 Chapter 5 : Event Loop

---

# What is Event Loop?

## 📖 Technical Definition (Interview)

> **The Event Loop is a core component of Node.js (implemented by libuv) that continuously monitors asynchronous operations and executes their callbacks when they are ready. It enables Node.js to perform non-blocking I/O using a single main thread.**

---

# 💡 Simple Explanation

Ab tak hum ye padh chuke hain.

* V8 JavaScript execute karta hai.
* libuv asynchronous operations handle karti hai.

Ab question.

Suppose.

```javascript
fs.readFile("user.txt", () => {

    console.log("Done");

});
```

File read ho gayi.

Ab callback execute kaun karega?

👉 **Event Loop**

Simple language me.

> **Event Loop ek manager hai jo continuously check karta rehta hai ki koi asynchronous operation complete hua ya nahi. Agar hua, to uska callback execute karwa deta hai.**

---

# Why do we need Event Loop?

Suppose Event Loop hota hi nahi.

```javascript
fs.readFile("user.txt", () => {

    console.log("Done");

});
```

File read ho gayi.

Callback ready hai.

Question.

Us callback ko execute kaun karega?

😂

Koi nahi.

Isi wajah se Event Loop exist karta hai.

---

# Problem Before Event Loop

Suppose.

```javascript
console.log("Start");

fs.readFile("user.txt", () => {

    console.log("Done");

});

console.log("End");
```

Agar Event Loop na hota.

```text
Start

End

(Program Finished)
```

Callback kabhi execute hi nahi hota.

---

# Event Loop ka Solution

```text
JavaScript

↓

libuv

↓

OS

↓

Operation Complete

↓

Event Loop

↓

Call Stack

↓

V8 Executes Callback
```

---

# Synchronous vs Asynchronous

Ye pehle hum padh chuke hain.

Lekin README me complete hona chahiye.

---

## Synchronous Programming

## 📖 Technical Definition

> **In synchronous programming, tasks are executed sequentially. Each operation must complete before the next operation starts.**

---

### Simple Explanation

Simple language me.

Ek kaam complete hoga.

Fir doosra start hoga.

Example.

```javascript
console.log("A");

console.log("B");

console.log("C");
```

Output

```text
A

B

C
```

Har line wait karegi.

---

## Asynchronous Programming

## 📖 Technical Definition

> **In asynchronous programming, long-running operations are executed without blocking the main thread, allowing other code to continue executing.**

---

### Simple Explanation

Example.

```javascript
console.log("Start");

setTimeout(() => {

    console.log("Timer");

},0);

console.log("End");
```

Output

```text
Start

End

Timer
```

Question.

End pehle kyun print hua?

Kyuki timer asynchronous hai.

Main thread block nahi hua.

---

# Blocking vs Non-Blocking

Bahut important.

Students yahi confuse hote hain.

---

## Blocking

Blocking matlab.

Current thread wait karegi.

Example.

```javascript
fs.readFileSync("user.txt","utf-8");
```

Flow.

```text
JavaScript

↓

Read File

↓

WAIT

↓

Result

↓

Next Line
```

---

## Non Blocking

Example.

```javascript
fs.readFile("user.txt","utf-8",...);
```

Flow.

```text
JavaScript

↓

libuv

↓

Continue Execution

↓

Result

↓

Callback
```

---

# Complete Event Loop Flow

Suppose.

```javascript
console.log("Start");

fs.readFile("user.txt",()=>{

    console.log("Done");

});

console.log("End");
```

Internal Flow.

```text
Main Thread

↓

console.log()

↓

fs.readFile()

↓

libuv

↓

console.log()

↓

Main Thread Empty

↓

File Read Complete

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

V8 Executes Callback
```

Output.

```text
Start

End

Done
```

---

# Event Loop Phases

Node.js Event Loop multiple phases me kaam karta hai.

```text
Timers

↓

Pending Callbacks

↓

Idle / Prepare

↓

Poll

↓

Check

↓

Close Callbacks
```

Ab har phase ko detail me samajhte hain.

---

# 1. Timers Phase

### Purpose

Expired timers execute karta hai.

Examples.

```javascript
setTimeout()

setInterval()
```

Ye callbacks yaha execute hote hain.

---

# 2. Pending Callbacks

Ye kuch system-level I/O callbacks execute karta hai.

Ye phase mostly internal callbacks ke liye hota hai.

Generally day-to-day development me directly use nahi hota.

---

# 3. Idle / Prepare

Ye libuv ka internal phase hai.

Developer ka isme koi role nahi hota.

---

# 4. Poll Phase ⭐⭐⭐⭐⭐

Ye Event Loop ka sabse important phase hai.

Yaha.

* File System callbacks
* Network callbacks
* Most I/O callbacks

execute hote hain.

Example.

```javascript
fs.readFile();
```

Callback Poll phase me ready hota hai.

---

# 5. Check Phase

Ye sirf.

```javascript
setImmediate()
```

ke callbacks execute karta hai.

---

# 6. Close Callbacks

Example.

```javascript
socket.on("close",...)
```

Connection close hone wale callbacks.

---

# Event Loop Priority

Ye interview favourite hai.

```text
Current Synchronous Code

↓

process.nextTick()

↓

Promise Microtasks

↓

Timers

↓

Pending Callbacks

↓

Poll

↓

Check

↓

Close
```

---

# process.nextTick() vs Promise

Example.

```javascript
console.log("Start");

setTimeout(()=>console.log("Timer"),0);

setImmediate(()=>console.log("Immediate"));

Promise.resolve().then(()=>{

    console.log("Promise");

});

process.nextTick(()=>{

    console.log("Next Tick");

});

console.log("End");
```

Output.

```text
Start

End

Next Tick

Promise

Immediate

Timer
```

---

# Why?

### Step 1

Synchronous code.

```text
Start

End
```

---

### Step 2

process.nextTick()

Highest priority.

```text
Next Tick
```

---

### Step 3

Promise Microtasks.

```text
Promise
```

---

### Step 4

Event Loop.

Check vs Timers ka order practical scenarios me vary kar sakta hai (especially `setTimeout(0)` aur `setImmediate()` ke beech), kyunki ye context par depend karta hai. **Top-level code me in dono ka order guaranteed nahi hota.** Lekin I/O callback ke andar `setImmediate()` generally pehle execute hota hai. Ye distinction interview me kaafi important hai.

---

# Real World Example

Smart Cart.

Suppose.

User.

```text
Upload Product Image
```

Flow.

```text
React

↓

Node

↓

fs.readFile()

↓

libuv

↓

Operating System

↓

Image Read

↓

Poll Phase

↓

Event Loop

↓

Callback

↓

Upload to Cloudinary

↓

Response
```

---

# Best Practices

✅ CPU intensive work Event Loop pe mat chalao.

✅ Async APIs prefer karo.

✅ `process.nextTick()` ka unnecessary overuse mat karo.

---

# ⚠️ Interview Traps

### Question

Does Event Loop create threads?

❌ Wrong.

Yes.

✅ Correct.

No.

Threads Worker Pool me hote hain.

Event Loop single thread par hi kaam karta hai.

---

### Question

Does Event Loop perform File Reading?

❌ Wrong.

Yes.

✅ Correct.

No.

File Reading libuv + OS karte hain.

Event Loop sirf callback execute karwata hai.

---

# Common Mistakes

❌ Event Loop = libuv

✅ Event Loop libuv ka ek component hai.

---

❌ Event Loop asynchronous work karta hai.

✅ libuv asynchronous work karti hai.

Event Loop callback execution coordinate karta hai.

---

❌ Synchronous code Event Loop me jata hai.

✅ Synchronous code directly Call Stack par execute hota hai.

---

# Visual Mind Map

```text
                    Event Loop
                         │
     ┌───────────────────┼────────────────────┐
     │                   │                    │
     ▼                   ▼                    ▼
 Synchronous        Async Complete       Callback Execute
     │                   │                    │
     ▼                   ▼                    ▼
 Call Stack          Callback Queue      Call Stack
                         │
                         ▼
                 Event Loop Phases
                         │
 ┌────────────┬──────────┼──────────┬───────────┐
 ▼            ▼          ▼          ▼           ▼
Timers     Pending     Poll      Check      Close
```

---

# Quick Revision

```text
Synchronous Code

↓

process.nextTick()

↓

Promise Microtasks

↓

Timers

↓

Pending Callbacks

↓

Poll

↓

Check

↓

Close
```

---

# Chapter Summary

* Event Loop libuv ka core component hai.
* Ye asynchronous callbacks execute karwata hai.
* Synchronous code hamesha pehle execute hota hai.
* `process.nextTick()` ki priority Promise microtasks se bhi upar hoti hai.
* Poll phase me most I/O callbacks process hote hain.
* Event Loop asynchronous work perform nahi karta, sirf uske callbacks coordinate karta hai.
* Node.js single main thread par non-blocking behavior achieve karta hai using libuv + Event Loop.

---

