
# 📘 Chapter 14 : Path Module

---

# What is Path Module?

## 📖 Technical Definition (Interview)

> **The `path` module is a built-in Node.js module that provides utilities for working with file and directory paths in a platform-independent way. It allows developers to create, normalize, resolve, parse, and manipulate file system paths safely.**

---

# 💡 Simple Explanation

Suppose tumhare project me ek image hai.

```text
SmartCart

│

├── app.js

├── uploads

│     └── product.jpg
```

Ab agar tumhe `product.jpg` ka path banana hai.

Question.

Kya manually likhoge?

```javascript
const filePath = "uploads/product.jpg";
```

Ho sakta hai.

Lekin Windows me separator hota hai.

```text
\
```

Linux aur macOS me hota hai.

```text
/
```

Ab agar manually path likhoge.

Platform issue aa sakta hai.

Isi problem ko solve karta hai.

👉 **Path Module**

---

# Why do we need Path Module?

Suppose.

Windows.

```text
uploads\images\photo.jpg
```

Linux.

```text
uploads/images/photo.jpg
```

Question.

Har OS ke liye alag code likhoge?

❌ Nahi.

Path module automatically correct separator use karta hai.

---

# Is Path Module Built-in?

Question.

Install karna padega?

```bash
npm install path
```

❌ Nahi.

Ye Node.js ka built-in module hai.

Use.

```javascript
const path = require("path");
```

---

# What Can Path Module Do?

```text
Path Module

│

├── join()

├── resolve()

├── basename()

├── dirname()

├── extname()

├── parse()

├── format()

├── normalize()

└── isAbsolute()
```

Ab sabko detail me dekhte hain.

---

# 1️⃣ path.join() ⭐⭐⭐⭐⭐

## 📖 Technical Definition

> **`path.join()` joins multiple path segments into a single normalized path using the correct platform-specific separator.**

---

## 💡 Simple Explanation

Ye multiple path parts ko safely jodta hai.

Example.

```javascript
const path = require("path");

const filePath = path.join("uploads","images","photo.jpg");

console.log(filePath);
```

Output.

Windows.

```text
uploads\images\photo.jpg
```

Linux.

```text
uploads/images/photo.jpg
```

---

# Why use join()?

Instead of.

```javascript
"uploads/" + "images/" + "photo.jpg"
```

Use.

```javascript
path.join(...)
```

Automatically separator handle karega.

---

# Real World Example

Smart Cart.

```javascript
const imagePath = path.join("uploads","products","shoe.jpg");
```

---

# 2️⃣ path.resolve() ⭐⭐⭐⭐⭐

## 📖 Technical Definition

> **`path.resolve()` resolves a sequence of path segments into an absolute path starting from the current working directory.**

---

## 💡 Simple Explanation

Ye hamesha **absolute path** return karta hai.

Example.

```javascript
console.log(path.resolve("uploads"));
```

Output.

```text
C:\Projects\SmartCart\uploads
```

---

# join() vs resolve()

Ye interview favourite hai.

| join()                               | resolve()                                   |
| ------------------------------------ | ------------------------------------------- |
| Relative Path                        | Absolute Path                               |
| Paths ko join karta hai              | Complete path banata hai                    |
| Current directory include nahi karta | Current working directory include karta hai |

---

# Example

```javascript
path.join("uploads","user.jpg");
```

↓

```text
uploads/user.jpg
```

---

```javascript
path.resolve("uploads","user.jpg");
```

↓

```text
C:\Projects\SmartCart\uploads\user.jpg
```

---

# 3️⃣ path.basename()

## 📖 Technical Definition

> **`path.basename()` returns the last portion of a file path.**

---

Example.

```javascript
console.log(path.basename("/uploads/user.txt"));
```

Output.

```text
user.txt
```

---

# Real World

Cloudinary upload ke baad filename extract karna.

---

# 4️⃣ path.dirname()

## 📖 Technical Definition

> **`path.dirname()` returns the directory name of a given path.**

---

Example.

```javascript
console.log(path.dirname("/uploads/user.txt"));
```

Output.

```text
/uploads
```

---

# 5️⃣ path.extname() ⭐⭐⭐⭐⭐

## 📖 Technical Definition

> **`path.extname()` returns the file extension of a given path.**

---

Example.

```javascript
console.log(path.extname("photo.jpg"));
```

Output.

```text
.jpg
```

---

# Real World Example

File Upload Validation.

```javascript
const ext = path.extname(fileName);

if(ext!==".jpg"){

    console.log("Invalid File");

}
```

---

# 6️⃣ path.normalize()

## 📖 Technical Definition

> **`path.normalize()` normalizes a path by resolving unnecessary separators and relative references such as `.` and `..`.**

---

Example.

```javascript
path.normalize("uploads//images/../photo.jpg");
```

Output.

```text
uploads/photo.jpg
```

---

# Why?

Duplicate slashes aur unnecessary path segments remove karta hai.

---

# 7️⃣ path.parse()

## 📖 Technical Definition

> **`path.parse()` returns an object containing the root, directory, base name, extension, and file name of a path.**

---

Example.

```javascript
console.log(path.parse("uploads/photo.jpg"));
```

Output.

```javascript
{
 root:"",
 dir:"uploads",
 base:"photo.jpg",
 ext:".jpg",
 name:"photo"
}
```

---

# 8️⃣ path.format()

Ye `parse()` ka opposite hai.

Object se path banata hai.

Example.

```javascript
path.format({

dir:"uploads",

base:"photo.jpg"

});
```

Output.

```text
uploads/photo.jpg
```

---

# 9️⃣ path.isAbsolute()

## 📖 Technical Definition

> **`path.isAbsolute()` checks whether a given path is absolute or relative.**

---

Example.

```javascript
path.isAbsolute("uploads");
```

↓

```text
false
```

---

```javascript
path.isAbsolute("C:\\Projects");
```

↓

```text
true
```

---

# Internal Working

```text
Application

↓

Path Module

↓

Normalize

↓

Correct Separator

↓

Operating System

↓

Final Path
```

---

# Real Project Usage (Smart Cart)

```text
Product Image Upload

↓

Multer

↓

path.extname()

↓

Validate Extension

↓

path.join()

↓

Create Upload Path

↓

Store File
```

---

# Best Practices

✅ Manual path concatenation avoid karo.

✅ `path.join()` use karo.

✅ Validation ke liye `path.extname()` use karo.

✅ Absolute paths ke liye `path.resolve()` use karo.

---

# ⚠️ Interview Traps

### Question

Does `path` read files?

❌ Wrong.

Yes.

✅ Correct.

No.

Sirf path manipulate karta hai.

File read/write `fs` karta hai.

---

### Question

Difference between `join()` and `resolve()`?

* `join()` → Relative path create karta hai.
* `resolve()` → Absolute path return karta hai.

---

### Question

Can `path.extname()` validate uploads?

✅ Haan, extension check karne ke liye use hota hai. **Lekin sirf extension par trust mat karo.** Production me MIME type aur content validation bhi karni chahiye.

---

# Common Mistakes

❌ Thinking `path` accesses files.

↓

Ye sirf path manipulate karta hai.

---

❌ Using string concatenation for file paths.

↓

Use `path.join()`.

---

❌ Confusing `join()` and `resolve()`.

↓

`join()` → Relative

`resolve()` → Absolute

---

# Visual Mind Map

```text
                    Path Module
                         │
      ┌──────────────────┼─────────────────────┐
      │                  │                     │
      ▼                  ▼                     ▼
    join()           resolve()            extname()
      │                  │                     │
      ▼                  ▼                     ▼
 Relative Path      Absolute Path      File Extension

Additional

│

├── basename()

├── dirname()

├── normalize()

├── parse()

├── format()

└── isAbsolute()
```

---

# Quick Revision

```text
Path Module

↓

Built-in Module

↓

join()

↓

resolve()

↓

basename()

↓

dirname()

↓

extname()

↓

normalize()

↓

parse()

↓

format()

↓

isAbsolute()
```

---

# Chapter Summary

* `path` ek built-in Node.js module hai jo file paths ke saath safely kaam karne ke liye use hota hai.
* `path.join()` platform-independent relative paths banata hai.
* `path.resolve()` absolute path return karta hai.
* `path.basename()`, `dirname()`, aur `extname()` path ke different parts extract karte hain.
* `path.parse()` path ko object me convert karta hai aur `path.format()` object se path banata hai.
* `path.normalize()` invalid ya messy paths ko clean karta hai.
* `path` sirf path manipulate karta hai, file operations nahi.

---
