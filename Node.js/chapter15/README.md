
# 📘 Chapter 15 : __dirname vs __filename vs process.cwd()

---

# Why do we need this chapter?

Ye interview me bahut pucha jata hai.

Aur beginners sabse zyada isi me confuse hote hain.

Questions.

> __dirname kya hai?

> process.cwd() kya hai?

> resolve() aur __dirname same hain?

> join() kab use kare?

Ye chapter in sab confusion ko permanently clear karega.

---

# Project Structure

Suppose.

```text
SmartCart

│

├── app.js

│

├── uploads

│      └── image.jpg

│

└── utils

       └── math.js
```

Hum isi project ko throughout use karenge.

---

# 1️⃣ __dirname

## 📖 Technical Definition (Interview)

> **`__dirname` is a CommonJS global variable that returns the absolute path of the directory containing the current module (current file).**

---

## 💡 Simple Explanation

Ye hamesha batata hai.

> **Current file kis folder ke andar hai.**

Example.

Suppose.

```text
SmartCart

│

└── utils

      └── math.js
```

math.js

```javascript
console.log(__dirname);
```

Output.

```text
C:\Projects\SmartCart\utils
```

Notice.

File ka folder.

---

# Real World

Suppose.

```text
utils

↓

math.js
```

ko.

```text
uploads
```

folder access karna hai.

Use.

```javascript
path.join(__dirname,"../uploads")
```

---

# 2️⃣ __filename

## 📖 Technical Definition

> **`__filename` is a CommonJS global variable that returns the absolute path of the current file.**

---

Example.

```javascript
console.log(__filename);
```

Output.

```text
C:\Projects\SmartCart\utils\math.js
```

Difference.

```text
__dirname

↓

Folder

---------------

__filename

↓

Complete File Path
```

---

# 3️⃣ process.cwd()

## 📖 Technical Definition

> **`process.cwd()` returns the current working directory from which the Node.js process was started.**

---

## 💡 Simple Explanation

Ye batata hai.

Program kaha se run hua.

Suppose.

```bash
node app.js
```

Run kiya.

Output.

```javascript
console.log(process.cwd());
```

↓

```text
C:\Projects\SmartCart
```

---

# Most Important Difference

Suppose.

Tum.

```bash
node utils/math.js
```

run karte ho.

Question.

Output kya hoga?

---

## __dirname

```text
C:\Projects\SmartCart\utils
```

---

## process.cwd()

```text
C:\Projects\SmartCart
```

Notice.

Different.

---

# Why?

`__dirname`

↓

Current file dekhta hai.

---

`process.cwd()`

↓

Program kaha se execute hua.

---

# Visual Diagram

```text
SmartCart

│

├── app.js

│

└── utils

      └── math.js
```

Run.

```bash
node utils/math.js
```

↓

```text
process.cwd()

↓

SmartCart

---------------------

__dirname

↓

utils
```

---

# Comparison Table

| Feature                       | __dirname      | __filename   | process.cwd()     |
| ----------------------------- | -------------- | ------------ | ----------------- |
| Returns                       | Current Folder | Current File | Working Directory |
| Absolute Path                 | ✅              | ✅            | ✅                 |
| Depends on Current File       | ✅              | ✅            | ❌                 |
| Depends on Execution Location | ❌              | ❌            | ✅                 |

---

# join() with __dirname

Example.

```javascript
const path = require("path");

const image = path.join(__dirname,"uploads","photo.jpg");
```

Output.

```text
C:\Projects\SmartCart\uploads\photo.jpg
```

---

# resolve() with __dirname

Example.

```javascript
const image = path.resolve(__dirname,"uploads","photo.jpg");
```

Output.

Same.

```text
C:\Projects\SmartCart\uploads\photo.jpg
```

---

# join vs resolve

Ye hum padh chuke hain.

Yaha quick revision.

| join                             | resolve                                                                 |
| -------------------------------- | ----------------------------------------------------------------------- |
| Relative Path Join               | Absolute Path                                                           |
| Current Directory nahi add karta | Current Working Directory se resolve karta hai agar absolute base na do |
| Mostly path banana               | Absolute path banana                                                    |

---

# Real Project Example

Smart Cart.

Image Upload.

```javascript
const uploadPath = path.join(

__dirname,

"uploads",

"products"

);
```

Ye har OS pe sahi chalega.

---

# Best Practices

✅ File paths ke liye `__dirname` use karo.

✅ User ke current execution folder ke liye `process.cwd()` use karo.

✅ Manual path concatenate mat karo.

---

# ⚠️ Interview Traps

### Question

Is `process.cwd()` same as `__dirname`?

❌ Wrong.

Yes.

✅ Correct.

No.

---

### Question

Can `__dirname` change if we run Node from another folder?

❌ Yes.

✅ No.

Current file ka path hamesha same rahega.

---

### Question

Which one changes based on where the command is executed?

✅ `process.cwd()`

---

# Common Mistakes

❌ Thinking `__dirname` is project root.

↓

Current file ka folder hai.

---

❌ Using `process.cwd()` everywhere.

↓

Kabhi-kabhi incorrect paths ban sakte hain.

---

# Visual Mind Map

```text
            Path Helpers

                  │

      ┌───────────┼────────────┐

      ▼           ▼            ▼

 __dirname   __filename   process.cwd()

      │           │            │

      ▼           ▼            ▼

 Folder      Current File   Working Directory

                  │

                  ▼

          path.join()

                  │

                  ▼

          Platform Safe Paths
```

---

# Quick Revision

```text
__dirname

↓

Current Folder

↓

__filename

↓

Current File

↓

process.cwd()

↓

Execution Folder

↓

join()

↓

Safe Paths

↓

resolve()

↓

Absolute Paths
```

---

# Chapter Summary

* `__dirname` current file ka folder return karta hai.
* `__filename` current file ka complete path return karta hai.
* `process.cwd()` current working directory return karta hai.
* `__dirname` aur `process.cwd()` same nahi hote.
* `path.join()` aur `path.resolve()` ke saath inka combination production projects me bahut use hota hai.
* File operations me generally `__dirname` zyada reliable hota hai.

---
