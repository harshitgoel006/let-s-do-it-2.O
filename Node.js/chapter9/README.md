

# 📘 Chapter 9 : npm (Node Package Manager)

---

# What is npm?

## 📖 Technical Definition (Interview)

> **npm (Node Package Manager) is the default package manager for Node.js. It is used to install, manage, update, remove, and share JavaScript packages and their dependencies. It also provides access to the world's largest public software registry.**

---

# 💡 Simple Explanation

Suppose tum Smart Cart bana rahe ho.

Tumhe password hash karna hai.

Question.

Kya bcrypt ka pura code khud likhoge?

😂

Obviously nahi.

Already kisi developer ne us problem ka solution bana rakha hai.

Bas us package ko install karo aur use kar lo.

Isi ka naam hai

> **npm**

---

# Why do we need npm?

Suppose tumhe backend me ye sab implement karna hai.

```text
Password Hashing

JWT Authentication

File Upload

Image Upload

Email Sending

Database Connection

Environment Variables
```

Question.

Har baar ye sab scratch se likhoge?

Impossible.

Isi liye npm exist karta hai.

---

# What is a Package?

## 📖 Technical Definition (Interview)

> **A package is a reusable collection of JavaScript code distributed through npm that solves a specific problem or provides additional functionality.**

---

## 💡 Simple Explanation

Package ko simple language me library ya toolkit samajh lo.

Example

```text
express

↓

Server Banana
```

---

```text
mongoose

↓

MongoDB Connect Karna
```

---

```text
bcrypt

↓

Password Hashing
```

---

```text
jsonwebtoken

↓

JWT Authentication
```

---

# What is npm Registry?

## 📖 Technical Definition

> **The npm Registry is an online public database that hosts millions of JavaScript packages which can be downloaded and installed using npm.**

---

## 💡 Simple Explanation

Jab tum likhte ho

```bash
npm install express
```

To npm kya karti hai?

```text
Your Project

↓

npm CLI

↓

npm Registry

↓

Download Package

↓

node_modules

↓

package.json Update

↓

package-lock.json Update
```

Registry ek online storage hai jahan saare packages stored hote hain.

---

# npm Install Flow

Suppose.

```bash
npm install express
```

Internally.

```text
npm install express

↓

npm Registry

↓

Download express

↓

Download express Dependencies

↓

Create node_modules

↓

Update package.json

↓

Generate package-lock.json
```

Ye exact flow interview me pucha ja sakta hai.

---

# Global vs Local Installation

## Local Installation

```bash
npm install express
```

Install hoga.

```text
project

│

├── node_modules

├── package.json

└── package-lock.json
```

Sirf current project ke liye.

---

## Global Installation

```bash
npm install -g nodemon
```

Ye pure system ke liye install hota hai.

Har project me available hota hai.

---

# Local vs Global

| Local               | Global           |
| ------------------- | ---------------- |
| Project Specific    | Entire System    |
| Inside node_modules | Global Location  |
| Used in Most Cases  | Mostly CLI Tools |

---

# Common npm Commands

### Initialize Project

```bash
npm init
```

---

### Quick Initialize

```bash
npm init -y
```

Automatically package.json create.

---

### Install Package

```bash
npm install express
```

---

### Install Specific Version

```bash
npm install express@5.1.0
```

---

### Install Dev Dependency

```bash
npm install --save-dev nodemon
```

---

### Remove Package

```bash
npm uninstall express
```

---

### Update Package

```bash
npm update
```

---

### List Installed Packages

```bash
npm list
```

---

# package.json

## 📖 Technical Definition

> **package.json is the metadata file of a Node.js project that stores project information, scripts, dependencies, version, author, and configuration.**

---

## 💡 Simple Explanation

Ye project ka **identity card** hai.

Isme project ki information hoti hai.

Example.

```json
{
  "name": "smart-cart",
  "version": "1.0.0",
  "scripts": {},
  "dependencies": {}
}
```

---

# Why package.json?

Question.

Tumhare project me

```text
Express

Mongoose

JWT

bcrypt

dotenv
```

sab install hain.

Dusra developer project clone kare.

Usko kaise pata chalega ki kaunsi packages chahiye?

Answer.

package.json.

---

# Important Fields

```json
{
  "name": "",

  "version": "",

  "description": "",

  "main": "",

  "scripts": {},

  "dependencies": {},

  "devDependencies": {},

  "author": "",

  "license": ""
}
```

Har field ka explanation hum next chapter (package.json Deep Dive) me detail me karenge.

---

# package-lock.json

## 📖 Technical Definition

> **package-lock.json records the exact dependency tree and exact versions of every installed package, ensuring consistent installations across different environments.**

---

## 💡 Simple Explanation

Ye project ka **blueprint** hai.

package.json sirf bolta hai.

```text
Express Chahiye
```

package-lock.json bolta hai.

```text
Express 5.1.0

Aur uski ye exact dependencies.

Aur unki exact versions.
```

---

# Why package-lock.json?

Suppose.

Aaj.

```text
Express 5.1.0
```

install kiya.

Kal.

Express

```text
5.2.0
```

release ho gaya.

Question.

Dusre developer ko kaunsa version milega?

👉 **5.1.0**

Kyun?

Kyuki package-lock.json exact dependency tree maintain karta hai.

---

# node_modules

## 📖 Technical Definition

> **node_modules is the directory where npm installs all project dependencies along with their transitive dependencies.**

---

## 💡 Simple Explanation

Ye folder project ka **warehouse** hai.

Yaha actual packages stored hote hain.

```text
node_modules

│

├── express

├── mongoose

├── bcrypt

├── dotenv

└── Hundreds of Dependencies
```

---

# Dependency Tree

Example.

```text
express

│

├── body-parser

├── cookie

├── accepts

└── ...
```

Express akela install nahi hota.

Uski dependencies bhi install hoti hain.

Isi wajah se node_modules bahut bada hota hai.

---

# Real World Example

Smart Cart.

```bash
npm install express mongoose bcrypt jsonwebtoken multer dotenv cors
```

↓

node_modules me

500+ packages

😂

Kyuki har package ki apni dependencies hoti hain.

---

# Best Practices

✅ `node_modules` ko GitHub pe commit mat karo.

✅ `.gitignore` me add karo.

✅ `package-lock.json` commit karo.

✅ Exact versions production me important hoti hain.

---

# ⚠️ Interview Traps

### Question

Can we delete node_modules?

✅ Yes.

`npm install` dobara run karke recreate kar sakte hain.

---

### Question

Should package-lock.json be committed?

✅ Yes.

Production projects me hamesha.

---

### Question

Does npm download only the package you asked for?

❌ No.

Uski dependencies bhi download hoti hain.

---

# Common Mistakes

❌ Uploading node_modules to GitHub.

✅ Ignore using `.gitignore`.

---

❌ Deleting package-lock.json randomly.

✅ Ye deterministic installs ke liye important hai.

---

❌ Thinking package.json stores exact dependency tree.

✅ package-lock.json exact dependency tree store karta hai.

---

# Visual Mind Map

```text
                    npm
                     │
      ┌──────────────┼───────────────┐
      │              │               │
      ▼              ▼               ▼
 Registry      package.json    node_modules
      │              │               │
      ▼              ▼               ▼
 Download      Project Info     Installed Packages
      │
      ▼
 package-lock.json
      │
      ▼
 Exact Dependency Tree
```

---

# Quick Revision

```text
npm

↓

Registry

↓

Install Package

↓

node_modules

↓

package.json

↓

package-lock.json

↓

Dependencies
```

---

# Chapter Summary

* npm Node.js ka default package manager hai.
* npm Registry se packages download hote hain.
* `package.json` project metadata store karta hai.
* `package-lock.json` exact dependency tree maintain karta hai.
* `node_modules` actual installed packages store karta hai.
* `npm install` package ke saath uski dependencies bhi install karta hai.
* `package-lock.json` ko version control me commit karna chahiye.

---
