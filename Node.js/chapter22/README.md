# 📘 Chapter 22 : Buffer

---

# What is Buffer?

## 📖 Technical Definition (Interview)

> **A Buffer is a built-in Node.js object used to store and manipulate raw binary data. It is mainly used when working with files, streams, TCP sockets, and binary protocols.**

---

# 💡 Simple Explanation

JavaScript normally **text** ke saath kaam karti hai.

Lekin computer ke andar sab kuch.

```text
0s and 1s (Binary)
```

ke form me hota hai.

Node.js us binary data ko temporarily store karne ke liye **Buffer** use karti hai.

---

# Why do we need Buffer?

Suppose.

```text
Image

Video

PDF

Audio

ZIP File
```

Ye UTF-8 text nahi hain.

Inhe binary form me handle karna padta hai.

Isi liye Buffer use hota hai.

---

# Is Buffer Built-in?

✅ Haan.

Import karne ki zarurat nahi.

```javascript
const buf = Buffer.from("Harshit");
```

---

# Creating Buffers

### 1. From String

```javascript
const buf = Buffer.from("Harshit");

console.log(buf);
```

Output.

```text
<Buffer 48 61 72 73 68 69 74>
```

---

### 2. Empty Buffer

```javascript
const buf = Buffer.alloc(5);

console.log(buf);
```

Output.

```text
<Buffer 00 00 00 00 00>
```

Ye exactly wahi hai jo humne practically dekha tha.

---

# Converting Buffer to String

```javascript
const buf = Buffer.from("Harshit");

console.log(buf.toString());
```

Output.

```text
Harshit
```

---

# Why Buffer?

Suppose.

100 MB ki video hai.

Question.

Ek hi baar RAM me load karna sahi hai?

❌ Nahi.

Pehle Buffer me chunks aayenge.

Phir process honge.

Isi wajah se Buffer aur Streams saath me kaam karte hain.

---

# Real Project Usage

### Smart Cart

```text
User Uploads Image

↓

Buffer

↓

Cloudinary

↓

Response
```

---

### WhatsApp

```text
Image Received

↓

Buffer

↓

Display
```

---

### Netflix

```text
Video Chunks

↓

Buffer

↓

Play Video
```

---

# Buffer vs String

| Buffer           | String         |
| ---------------- | -------------- |
| Binary Data      | Text Data      |
| Faster for Files | Human Readable |
| Used in Streams  | Used in UI     |

---

# Best Practices

- Binary files ke liye Buffer use hota hai.
- Agar text chahiye to `.toString()` use karo.
- Large files ke liye Buffer + Streams best combination hai.

---

# ⚠️ Interview Questions

**Q. Is Buffer global?**

✅ Yes.

---

**Q. Difference between `Buffer.from()` and `Buffer.alloc()`?**

- `Buffer.from()` → Existing data se buffer banata hai.
- `Buffer.alloc()` → Fixed-size empty buffer create karta hai.

---

**Q. Why does `fs.readFile()` return Buffer without encoding?**

Kyuki Node assume karti hai ki tum binary data read karna chahte ho.

---

# Quick Revision

```text
Buffer

↓

Binary Data

↓

Buffer.from()

↓

Buffer.alloc()

↓

toString()

↓

Files

↓

Streams
```

---

# Chapter Summary

- Buffer Node.js ka built-in global object hai.
- Ye binary data store aur process karta hai.
- `Buffer.from()` existing data se buffer banata hai.
- `Buffer.alloc()` empty fixed-size buffer create karta hai.
- Encoding na dene par `fs.readFile()` Buffer return karta hai.
- Buffer mainly files, streams, networking aur binary data ke saath use hota hai.
