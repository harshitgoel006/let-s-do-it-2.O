# 📘 Chapter 18 : Appending, Renaming & Deleting Files

---

# Appending Files (`fs.appendFile()`)

## 📖 Technical Definition (Interview)

> **`fs.appendFile()` is an asynchronous method that appends data to the end of an existing file. If the file does not exist, Node.js creates a new file automatically.**

---

# 💡 Simple Explanation

Pichle chapter me humne dekha.

```javascript
fs.writeFile();
```

Problem.

Ye existing data delete kar deta hai.

Question.

Agar hume existing data delete nahi karna ho.

Sirf end me naya data add karna ho.

↓

Use.

```javascript
fs.appendFile();
```

---

# Syntax

```javascript
fs.appendFile(path, data, callback);
```

---

# Example

Suppose.

```text
user.txt

Harshit
```

Code.

```javascript
const fs = require("fs");

fs.appendFile(
  "user.txt",

  "\nGoel",

  (err) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log("Append Completed");
  },
);
```

---

# Line-by-Line Explanation

### Line 1

Import File System module.

---

### Parameter 1

```javascript
"user.txt";
```

Target file.

---

### Parameter 2

```javascript
"\nGoel";
```

Append hone wala data.

`\n`

New line create karega.

---

### Parameter 3

Callback.

Append complete hone ke baad execute hoga.

---

# Output

Before.

```text
Harshit
```

After.

```text
Harshit

Goel
```

Console.

```text
Append Completed
```

---

# What if File Doesn't Exist?

Question.

```text
user.txt
```

hi nahi hai.

Output?

Answer.

Node automatically.

```text
user.txt
```

create karegi.

Usme.

```text
Goel
```

likh degi.

Ye point interview me bahut pucha jata hai.

---

# Internal Flow

```text
appendFile()

↓

libuv

↓

Operating System

↓

Open File

↓

Move Cursor to End

↓

Write Data

↓

Close File

↓

Callback
```

---

# Real World Example

Smart Cart.

```text
Application Logs

↓

User Login

↓

Append

↓

User Logout

↓

Append

↓

Payment Success

↓

Append
```

Har baar purani logs delete nahi karni.

Sirf add karni hoti hain.

---

# Renaming Files (`fs.rename()`)

## 📖 Technical Definition (Interview)

> **`fs.rename()` is an asynchronous method used to rename a file or move it to another location.**

---

# 💡 Simple Explanation

Question.

Agar.

```text
user.txt
```

ka naam.

```text
customer.txt
```

karna ho.

↓

Use.

```javascript
fs.rename();
```

---

# Syntax

```javascript
fs.rename(oldPath, newPath, callback);
```

---

# Example

```javascript
const fs = require("fs");

fs.rename(
  "user.txt",

  "customer.txt",

  (err) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log("Rename Successful");
  },
);
```

---

# Output

Before.

```text
user.txt
```

↓

After.

```text
customer.txt
```

---

# Can rename() Move Files?

Question.

Ye sirf rename karta hai?

❌ Nahi.

Ye move bhi kar sakta hai.

Example.

```javascript
fs.rename(
  "user.txt",

  "./backup/user.txt",

  callback,
);
```

Output.

```text
backup

│

└── user.txt
```

File ka location bhi change ho gaya.

---

# Internal Flow

```text
rename()

↓

Operating System

↓

Change File Name

↓

Update File System

↓

Callback
```

---

# Real World Example

Smart Cart.

```text
temp_upload.jpg

↓

Upload Successful

↓

Rename

↓

product_101.jpg
```

Ya upload ke baad file ko `uploads/` folder me move karna.

---

# Deleting Files (`fs.unlink()`)

## 📖 Technical Definition (Interview)

> **`fs.unlink()` is an asynchronous method used to delete a file from the file system.**

---

# 💡 Simple Explanation

Question.

Agar file permanently delete karni ho.

↓

Use.

```javascript
fs.unlink();
```

---

# Syntax

```javascript
fs.unlink(path, callback);
```

---

# Example

```javascript
const fs = require("fs");

fs.unlink(
  "user.txt",

  (err) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log("File Deleted");
  },
);
```

---

# Output

Before.

```text
project

│

└── user.txt
```

After.

```text
project
```

Console.

```text
File Deleted
```

---

# What if File Doesn't Exist?

Example.

```javascript
fs.unlink(
  "abc.txt",

  (err) => {
    console.log(err);
  },
);
```

Output.

```text
ENOENT

No such file or directory
```

Exactly ye humne practically observe kiya tha.

---

# Internal Flow

```text
unlink()

↓

Operating System

↓

Locate File

↓

Delete Entry

↓

Free Disk Space

↓

Callback
```

---

# appendFile() vs writeFile()

| appendFile()                     | writeFile()                       |
| -------------------------------- | --------------------------------- |
| Existing data preserve karta hai | Existing data overwrite karta hai |
| End me data add karta hai        | Naya content likhta hai           |
| Logs, Reports                    | Configuration, Generated Files    |

---

# rename() vs unlink()

| rename()                     | unlink()                |
| ---------------------------- | ----------------------- |
| File ka naam/location change | File permanently delete |
| Data safe rehta hai          | Data remove ho jata hai |

---

# Real Project Usage (Smart Cart)

### appendFile()

```text
Server Logs

↓

Append New Entry
```

---

### rename()

```text
Temporary Image

↓

Final Product Image
```

---

### unlink()

```text
Cloudinary Upload Complete

↓

Delete Temporary File
```

Ye last wala humne discussion me specifically cover kiya tha.

---

# Best Practices

✅ `appendFile()` logs ke liye use karo.

✅ `writeFile()` tab use karo jab overwrite karna ho.

✅ `unlink()` se pehle ensure karo file ki zarurat nahi hai.

✅ `rename()` me proper path use karo.

---

# ⚠️ Interview Traps

### Question

Can `appendFile()` create a new file?

✅ Yes.

Agar file exist nahi karti.

---

### Question

Does `rename()` only rename files?

❌ No.

Move bhi kar sakta hai.

---

### Question

Can `unlink()` delete folders?

❌ No.

Ye sirf files ke liye hai.

Folder delete karne ke liye `fs.rmdir()` (older) ya `fs.rm()` with appropriate options use kiya jata hai.

---

# Common Mistakes

❌ Using `writeFile()` for logs.

↓

Old logs delete ho jayengi.

---

❌ Calling `unlink()` without error handling.

↓

Crash ho sakta hai.

---

❌ Assuming `rename()` copies file.

↓

Ye rename/move karta hai.

---

# Visual Mind Map

```text
              File Modification

                    │

      ┌─────────────┼─────────────┐

      ▼             ▼             ▼

 appendFile()   rename()     unlink()

      │             │             │

      ▼             ▼             ▼

 Append Data   Rename/Move    Delete File

      │

      ▼

 Preserve Existing Data
```

---

# Quick Revision

```text
appendFile()

↓

Append Data

↓

Create if Missing

----------------

rename()

↓

Rename

↓

Move File

----------------

unlink()

↓

Delete File

↓

Error if Missing
```

---

# Chapter Summary

- `fs.appendFile()` existing file ke end me data add karta hai aur file na ho to create bhi kar sakta hai.
- `fs.rename()` file ka naam change karne ke saath usse move bhi kar sakta hai.
- `fs.unlink()` file permanently delete karta hai.
- `appendFile()` aur `writeFile()` ka behavior alag hota hai; overwrite vs append.
- Har file operation me proper error handling use karna best practice hai.

---
