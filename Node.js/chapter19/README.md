# 📘 Chapter 19 : Directory Operations (`mkdir()`, `readdir()`, `existsSync()`, `stat()`)

---

# What are Directory Operations?

## 📖 Technical Definition (Interview)

> **Directory operations are file system operations that create, read, check, and retrieve information about directories (folders). The Node.js `fs` module provides APIs to manage directories efficiently.**

---

# 💡 Simple Explanation

Abhi tak hum files ke saath kaam kar rahe the.

Lekin real applications me sirf files hi nahi hoti.

Folders bhi create karne padte hain.

Example.

```text
SmartCart

│

├── uploads

├── invoices

├── logs

├── temp

└── backups
```

Ye folders automatically create, read aur manage karne ke liye Directory Operations use hote hain.

---

# Why do we need Directory Operations?

Suppose.

User image upload karta hai.

Question.

Agar.

```text
uploads
```

folder hi nahi hoga.

Image kaha save hogi?

😂

Isi problem ko solve karta hai.

```javascript
fs.mkdir();
```

---

# 1️⃣ fs.mkdir()

## 📖 Technical Definition

> **`fs.mkdir()` is an asynchronous method used to create a new directory.**

---

# Syntax

```javascript
fs.mkdir(path, options, callback);
```

---

# Example

```javascript
const fs = require("fs");

fs.mkdir("uploads", (err) => {
  if (err) {
    console.log(err);

    return;
  }

  console.log("Folder Created");
});
```

---

# Line-by-Line Explanation

### Parameter 1

```javascript
"uploads";
```

Folder ka naam.

---

### Parameter 2

Callback.

Folder create hone ke baad execute hoga.

---

# Output

Before.

```text
project

│

└── app.js
```

After.

```text
project

│

├── app.js

└── uploads
```

Console.

```text
Folder Created
```

---

# What if Folder Already Exists?

Question.

```text
uploads
```

already present hai.

Output.

```text
EEXIST

File already exists
```

Exactly ye humne practically dekha tha.

---

# recursive Option ⭐⭐⭐⭐⭐

Bahut important.

Suppose.

```text
uploads

↓

products

↓

images
```

Ek hi baar me create karna hai.

Example.

```javascript
fs.mkdir(
  "uploads/products/images",

  {
    recursive: true,
  },

  callback,
);
```

Output.

```text
uploads

│

└── products

      │

      └── images
```

Agar beech wale folders nahi hain.

Node automatically create karegi.

---

# Internal Flow

```text
mkdir()

↓

Operating System

↓

Create Directory

↓

Update File System

↓

Callback
```

---

# Real World Example

Smart Cart.

```text
New Seller

↓

Create Folder

↓

uploads/seller123

↓

Store Product Images
```

---

# 2️⃣ fs.readdir()

## 📖 Technical Definition

> **`fs.readdir()` asynchronously reads the contents of a directory and returns the list of files and subdirectories.**

---

# Syntax

```javascript
fs.readdir(path, callback);
```

---

# Example

Suppose.

```text
uploads

│

├── img1.jpg

├── img2.jpg

└── img3.jpg
```

Code.

```javascript
const fs = require("fs");

fs.readdir(
  "uploads",

  (err, files) => {
    console.log(files);
  },
);
```

Output.

```javascript
["img1.jpg", "img2.jpg", "img3.jpg"];
```

Exactly ye output humne predict kiya tha.

---

# Callback Parameters

```javascript
(err, files);
```

`err`

↓

Error.

`files`

↓

Array of names.

---

# Internal Flow

```text
readdir()

↓

Operating System

↓

Read Directory

↓

Create Array

↓

Callback
```

---

# Real World Example

Google Drive.

```text
Open Folder

↓

Read Files

↓

Display Files
```

---

# 3️⃣ fs.existsSync()

## 📖 Technical Definition

> **`fs.existsSync()` synchronously checks whether a file or directory exists and returns a boolean value.**

---

# Syntax

```javascript
fs.existsSync(path);
```

---

# Example

```javascript
const fs = require("fs");

console.log(fs.existsSync("uploads"));
```

Output.

```text
true
```

---

Agar.

```text
abc
```

folder nahi hai.

Output.

```text
false
```

Exactly ye humne MCQ me bhi solve kiya tha.

---

# Why Sync?

Question.

Async version kyun nahi?

Historically `exists()` naam ka asynchronous API tha, lekin usse avoid karne ki recommendation di gayi aur aaj commonly `existsSync()` ya direct operation + error handling use ki jati hai.

Production me aksar better approach hoti hai:

> Direct operation karo aur error handle karo (TOCTOU issues avoid hote hain).

---

# Real World Example

```javascript
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}
```

Server start hone se pehle upload folder ensure karna.

---

# 4️⃣ fs.stat()

## 📖 Technical Definition

> **`fs.stat()` retrieves metadata and information about a file or directory.**

---

# Example

```javascript
const fs = require("fs");

fs.stat(
  "user.txt",

  (err, stats) => {
    console.log(stats);
  },
);
```

Output.

```javascript
Stats {

size:20,

birthtime:...

mtime:...

...
}
```

---

# Why stat()?

Question.

File ka size.

Creation Date.

Modification Date.

Ye sab kaise pata chalega?

↓

`fs.stat()`

---

# Important Methods

## isFile()

Example.

```javascript
stats.isFile();
```

Output.

```text
true
```

Agar file hai.

---

## isDirectory()

Example.

```javascript
stats.isDirectory();
```

Output.

```text
false
```

Agar file hai.

Directory hogi.

↓

```text
true
```

---

# Real World Example

Suppose.

User ne path diya.

Question.

Ye file hai ya folder?

↓

`stat()`

↓

`isFile()`

↓

Decision.

---

# Internal Working

```text
stat()

↓

Operating System

↓

Read Metadata

↓

Stats Object

↓

Callback
```

---

# Complete Comparison

| Function       | Purpose                 |
| -------------- | ----------------------- |
| `mkdir()`      | Folder Create           |
| `readdir()`    | Folder Read             |
| `existsSync()` | Existence Check         |
| `stat()`       | File/Folder Information |

---

# Real Project Usage (Smart Cart)

```text
Server Start

↓

Check uploads Folder

↓

existsSync()

↓

Not Found

↓

mkdir()

↓

Image Upload

↓

readdir()

↓

Show Gallery

↓

stat()

↓

Validate File
```

---

# Best Practices

✅ `recursive: true` use karo jab nested folders create karne ho.

✅ `stat()` use karke validate karo ki path file hai ya folder.

✅ `existsSync()` ka overuse mat karo; production me direct operation + error handling prefer karo.

---

# ⚠️ Interview Traps

### Question

Can `mkdir()` create nested folders?

✅ Yes.

Using.

```javascript
{
  recursive: true;
}
```

---

### Question

Does `readdir()` return file contents?

❌ No.

Sirf names return karta hai.

---

### Question

Can `existsSync()` tell whether the path is a file or directory?

❌ No.

Bas existence batata hai.

Uske liye.

↓

`stat()`

---

### Question

What does `stat()` return?

↓

Stats Object.

---

# Common Mistakes

❌ Thinking `readdir()` reads file data.

↓

Sirf names.

---

❌ Assuming `existsSync()` distinguishes files and folders.

↓

Use `stat()`.

---

❌ Forgetting `recursive:true` for nested folders.

↓

Intermediate directories create nahi hongi.

---

# Visual Mind Map

```text
             Directory Operations

                    │

      ┌─────────────┼─────────────┐

      ▼             ▼             ▼

   mkdir()      readdir()      stat()

      │             │             │

      ▼             ▼             ▼

 Create Folder   Read Names   File Metadata

                    │

                    ▼

              existsSync()

                    │

                    ▼

            Exists or Not?
```

---

# Quick Revision

```text
mkdir()

↓

Create Folder

↓

recursive:true

----------------

readdir()

↓

Read Folder

↓

Array

----------------

existsSync()

↓

Boolean

----------------

stat()

↓

Metadata

↓

isFile()

↓

isDirectory()
```

---

# Chapter Summary

- `fs.mkdir()` folders create karta hai aur `recursive: true` nested folders create kar sakta hai.
- `fs.readdir()` directory ke andar ki files aur folders ke names return karta hai.
- `fs.existsSync()` sirf existence check karta hai.
- `fs.stat()` metadata return karta hai aur `isFile()` / `isDirectory()` jaise methods provide karta hai.
- Production me directory operations file uploads, logs aur storage management me bahut common hote hain.

---
