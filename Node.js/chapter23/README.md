# 📘 Chapter 23 : Streams

---

# What are Streams?

## 📖 Technical Definition (Interview)

> **Streams are objects in Node.js that process data piece by piece (chunks) instead of loading the entire data into memory at once. They are used to efficiently handle large files, network communication, and real-time data transfer.**

---

# 💡 Simple Explanation

Suppose tumhare paas.

```text id="d1"
5 GB Movie
```

Question.

Kya pura 5 GB RAM me load karna sahi hoga?

❌ Bilkul nahi.

Solution.

```text id="d2"
Chunk 1

↓

Chunk 2

↓

Chunk 3

↓

...

↓

Complete
```

Yahi concept hai **Streams**.

---

# Why do we need Streams?

### Without Streams

```text id="d3"
Huge File

↓

Load Complete File

↓

High RAM Usage

↓

Slow
```

---

### With Streams

```text id="d4"
Huge File

↓

Chunk

↓

Process

↓

Next Chunk

↓

Low Memory Usage
```

---

# Types of Streams

Node.js me 4 types ki streams hoti hain.

```text id="d5"
Readable Stream

Writable Stream

Duplex Stream

Transform Stream
```

Placement ke liye Readable aur Writable sabse important hain.

---

# Readable Stream

Data **read** karne ke liye.

Example.

```javascript id="d6"
const fs = require("fs");

const stream = fs.createReadStream("input.txt");
```

---

# Writable Stream

Data **write** karne ke liye.

```javascript id="d7"
const fs = require("fs");

const stream = fs.createWriteStream("output.txt");
```

---

# Reading a File using Stream

```javascript id="d8"
const fs = require("fs");

const stream = fs.createReadStream("input.txt", "utf-8");

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Completed");
});
```

---

# Events Used

### `data`

Har baar naya chunk aata hai.

---

### `end`

Jab pura file read ho jaye.

---

Exactly yehi humne practically observe kiya tha.

---

# Writing using Stream

```javascript id="d9"
const fs = require("fs");

const writer = fs.createWriteStream("output.txt");

writer.write("Hello ");

writer.write("Harshit");

writer.end();
```

---

# Why `end()`?

Question.

`end()` kyun?

Answer.

Node ko batana padta hai.

> "Ab aur data nahi aayega."

Fir stream properly close ho jati hai.

Ye point humne practical me discuss kiya tha.

---

# pipe() ⭐⭐⭐⭐⭐

Ye interview favourite hai.

```javascript id="d10"
const fs = require("fs");

const reader = fs.createReadStream("input.txt");

const writer = fs.createWriteStream("output.txt");

reader.pipe(writer);
```

---

# Why pipe()?

Without pipe.

```text id="d11"
Read

↓

Store

↓

Write
```

Manual work.

---

With pipe.

```text id="d12"
Read

↓

Pipe

↓

Write
```

Node automatically chunks transfer kar deti hai.

---

# Internal Flow

```text id="d13"
File

↓

Read Stream

↓

Chunk

↓

Pipe

↓

Write Stream

↓

Output File
```

---

# Stream vs Buffer

| Buffer      | Stream         |
| ----------- | -------------- |
| Entire data | Chunk by chunk |
| More Memory | Less Memory    |
| Small Files | Large Files    |

---

# Real Project Usage

### Netflix

```text id="d14"
Movie

↓

Read Stream

↓

Internet

↓

User
```

---

### Smart Cart

```text id="d15"
Large Invoice PDF

↓

Read Stream

↓

Download
```

---

### Cloudinary Upload

```text id="d16"
Image

↓

Read Stream

↓

Cloudinary
```

---

# Best Practices

- Large files ke liye Streams use karo.
- `pipe()` prefer karo instead of manually copying chunks.
- Streams memory efficient hote hain.

---

# ⚠️ Interview Questions

**Q. Why Streams are better than Buffer for large files?**

Kyuki Streams chunk-by-chunk process karti hain aur RAM kam use karti hain.

---

**Q. Difference between Readable and Writable Stream?**

Readable → Read

Writable → Write

---

**Q. Why `pipe()` is preferred?**

Automatic data transfer aur built-in backpressure handling.

---

# Quick Revision

```text id="d17"
Streams

↓

Chunks

↓

Readable

↓

Writable

↓

data Event

↓

end Event

↓

pipe()
```

---

# Chapter Summary

- Streams large data ko chunks me process karti hain.
- Readable Stream data read karti hai.
- Writable Stream data write karti hai.
- `data` event har chunk ke liye fire hota hai.
- `end` event reading complete hone par fire hota hai.
- `pipe()` automatically readable stream ko writable stream se connect kar deta hai.
- Streams large files aur network applications ke liye memory-efficient solution hain.
