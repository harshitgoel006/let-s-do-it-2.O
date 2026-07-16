# 📘 Chapter 17 : Reading & Writing Files (`readFile()` & `writeFile()`)

---

# Reading Files in Node.js

## 📖 Technical Definition (Interview)

> **`fs.readFile()` is an asynchronous method that reads the contents of a file without blocking the main thread. The file data is returned through a callback function once the operation is complete.**

---

# 💡 Simple Explanation

Suppose.

Smart Cart me ek file hai.

```text
user.txt

Harshit
```

Ab Node.js ko iska data read karna hai.

Ye kaam karta hai.

```javascript
fs.readFile();
```

---

# Syntax

```javascript
fs.readFile(path, options, callback);
```

---

## Parameters

| Parameter | Purpose                             |
| --------- | ----------------------------------- |
| path      | File ka path                        |
| options   | Encoding ya configuration           |
| callback  | File read hone ke baad execute hoga |

---

# First Example

```javascript
const fs = require("fs");

fs.readFile("user.txt", "utf-8", (err, data) => {
  console.log(data);
});
```

---

# Line-by-Line Explanation

### Line 1

```javascript
const fs = require("fs");
```

Hum Node.js ka built-in File System module import kar rahe hain.

Ab hum file operations perform kar sakte hain.

---

### Line 3

```javascript
fs.readFile(...)
```

Node.js ko bol rahe hain.

> "Ye file background me read karo."

Notice.

Ye immediately file read nahi karta.

Ye request libuv ko de deta hai.

---

### Parameter 1

```javascript
"user.txt";
```

Kaunsi file read karni hai.

Agar file current folder me nahi hai.

To relative ya absolute path bhi de sakte hain.

Example.

```javascript
"./data/user.txt";
```

Ya.

```javascript
path.join(__dirname, "user.txt");
```

---

### Parameter 2

```javascript
"utf-8";
```

Ye bahut important hai.

Ye Node.js ko batata hai.

> "File ko UTF-8 text ki tarah read karo."

Agar encoding nahi doge.

Output.

```javascript
<Buffer 48 61 72 73 68 69 74>
```

Aayega.

Kyuki default me Buffer return hota hai.

---

### Parameter 3

Callback Function.

```javascript
(err, data) => {};
```

Ye callback.

File read complete hone ke baad execute hota hai.

---

# Callback Parameters

## err

Agar koi problem hui.

Ye object contain karega.

Example.

```text
File Not Found

Permission Denied

Invalid Path
```

---

## data

Agar sab successful hua.

To file ka content.

```text
Harshit
```

Is variable me aayega.

---

# Execution Flow

```text
Your Code

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

Callback Execute
```

---

# Example Output

Suppose.

```text
user.txt

Harshit
```

Output.

```text
Harshit
```

---

# Error Handling

Ye bahut important hai.

Production code.

```javascript
const fs = require("fs");

fs.readFile("user.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);

    return;
  }

  console.log(data);
});
```

---

# Why return?

Question.

Ye.

```javascript
return;
```

kyun lagaya?

Agar return nahi lagayenge.

To.

```javascript
console.log(data);
```

Error ke baad bhi execute ho sakta hai.

Best Practice.

Error handle karo.

Return karo.

Fir function stop.

---

# What Happens If File Doesn't Exist?

Example.

```javascript
fs.readFile("abc.txt", "utf-8", (err, data) => {
  console.log(err);
});
```

Output.

```text
Error: ENOENT

No such file or directory
```

Ye exactly humne practical me bhi dekha tha.

---

# Reading Without Encoding

Example.

```javascript
fs.readFile("user.txt", (err, data) => {
  console.log(data);
});
```

Output.

```javascript
<Buffer 48 61 72 73 68 69 74>
```

Question.

Why?

Kyuki Node assume karta hai.

Tum binary data read karna chahte ho.

---

# Writing Files

## 📖 Technical Definition (Interview)

> **`fs.writeFile()` is an asynchronous method that creates a new file or overwrites an existing file with the specified data.**

---

# 💡 Simple Explanation

Question.

Agar file create karni ho.

Ya existing file me naya content likhna ho.

Kaunsa function?

↓

```javascript
fs.writeFile();
```

---

# Syntax

```javascript
fs.writeFile(path, data, callback);
```

---

# Example

```javascript
const fs = require("fs");

fs.writeFile(
  "user.txt",

  "Hello Harshit",

  (err) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log("File Written");
  },
);
```

---

# Line-by-Line Explanation

### Line 1

Import FS module.

---

### Line 3

```javascript
fs.writeFile();
```

Node ko bol rahe hain.

> File me data likho.

---

### Parameter 1

```javascript
"user.txt";
```

File Name.

Agar file exist nahi karti.

↓

Automatically create.

---

### Parameter 2

```javascript
"Hello Harshit";
```

Ye content file me write hoga.

---

### Parameter 3

Callback.

Write complete hone ke baad execute.

---

# Output

Console.

```text
File Written
```

File.

```text
Hello Harshit
```

---

# Existing File?

Question.

Suppose.

```text
user.txt

Harshit
```

Already hai.

Ab.

```javascript
fs.writeFile(

"user.txt",

"Goel",

...
);
```

Output.

```text
Goel
```

Question.

Harshit kaha gaya?

😂

Delete.

---

# Why?

`writeFile()` **overwrite** karta hai.

Append nahi.

Isi wajah se.

Old data replace ho jata hai.

---

# Internal Working

```text
writeFile()

↓

libuv

↓

Operating System

↓

Create / Overwrite File

↓

Event Loop

↓

Callback
```

---

# readFile() vs writeFile()

| readFile()         | writeFile()           |
| ------------------ | --------------------- |
| File Read          | File Write            |
| Existing Data Read | Existing Data Replace |
| Returns Data       | Returns Success/Error |
| Async              | Async                 |

---

# Real Project Usage (Smart Cart)

### Read

```text
Read HTML Email Template

↓

Modify User Name

↓

Send Email
```

---

### Write

```text
Generate Invoice

↓

Write PDF

↓

Download
```

---

# Best Practices

✅ Always handle `err`.

✅ Use UTF-8 when reading text files.

✅ Don't use `writeFile()` if you want to preserve existing content.

✅ Use `path.join(__dirname, ...)` instead of hardcoded paths in production.

---

# ⚠️ Interview Traps

### Question

Can `writeFile()` create a file if it doesn't exist?

✅ Yes.

---

### Question

Does `writeFile()` append data?

❌ No.

Overwrite karta hai.

---

### Question

What happens if encoding is not provided to `readFile()`?

↓

Buffer return hota hai.

---

### Question

Why does `readFile()` return `err` first?

↓

Node.js callback convention.

**Error-First Callback Pattern.**

---

# Common Mistakes

❌ Forgetting error handling.

↓

Always check `err`.

---

❌ Expecting `writeFile()` to append.

↓

Use `appendFile()`.

---

❌ Forgetting encoding.

↓

Buffer milega.

---

# Visual Mind Map

```text
                File Operations

                      │

          ┌───────────┴────────────┐

          ▼                        ▼

      readFile()             writeFile()

          │                        │

          ▼                        ▼

   Read Existing File      Create / Overwrite

          │                        │

          ▼                        ▼

      Callback               Callback

          │

          ▼

     Error First Pattern
```

---

# Quick Revision

```text
readFile()

↓

Read File

↓

UTF-8

↓

Callback

↓

Error First

-------------------

writeFile()

↓

Create File

↓

Overwrite

↓

Callback
```

---

# Chapter Summary

- `fs.readFile()` asynchronously file read karta hai.
- Encoding `"utf-8"` dene par string return hoti hai, warna `Buffer` milta hai.
- Callback me pehla parameter `err` aur doosra `data` hota hai.
- `fs.writeFile()` file create karta hai ya existing file ko overwrite karta hai.
- `writeFile()` existing content preserve nahi karta.
- Error handling production code ka mandatory part hai.
- `readFile()` aur `writeFile()` dono asynchronous APIs hain aur libuv + Event Loop ke through execute hoti hain.

---
