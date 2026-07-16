# 📘 Chapter 10 : package.json (Deep Dive)

---

# What is package.json?

## 📖 Technical Definition (Interview)

> **package.json is the manifest file of a Node.js project that stores metadata, project configuration, scripts, dependencies, version information, and other details required to manage and run the project.**

---

# 💡 Simple Explanation

Agar koi tumse puche.

> **"package.json kya hai?"**

To simple answer ye hoga.

> **package.json project ki identity aur configuration file hoti hai. Isme project ka naam, version, scripts, dependencies aur project se related important information store hoti hai.**

Isko project ka **Identity Card** ya **Blueprint** bhi bol sakte ho.

---

# Why do we need package.json?

Suppose tumne Smart Cart banaya.

Usme install kiya.

```text
Express

Mongoose

JWT

bcrypt

dotenv

Cloudinary

Multer

Redis
```

Ab project GitHub pe push kar diya.

Dusra developer project clone karta hai.

Question.

Usko kaise pata chalega ki project me kaunsi packages use hui hain?

Agar package.json hi na ho.

To usse manually puchna padega.

😂😂

Isi problem ko solve karta hai.

```text
package.json
```

---

# Real World Example

Suppose.

Tumhari team me 5 developers hain.

Developer A

```bash
npm install express
```

Developer B

```bash
npm install mongoose
```

Developer C project clone karta hai.

Bas.

```bash
npm install
```

Run karega.

Aur npm package.json dekh kar sari dependencies install kar degi.

Isi wajah se package.json bahut important hai.

---

# package.json Lifecycle

```text
npm init

↓

package.json Create

↓

npm install express

↓

dependencies Update

↓

Project Grow

↓

More Packages

↓

package.json Update
```

---

# How is package.json Created?

### Method 1

```bash
npm init
```

Ye interactive mode hai.

Ye questions puchta hai.

```text
Package Name?

Version?

Description?

Author?

License?

Entry Point?
```

---

### Method 2 (Most Common)

```bash
npm init -y
```

Automatically default values ke saath package.json create ho jati hai.

---

# Sample package.json

```json
{
  "name": "smart-cart",

  "version": "1.0.0",

  "description": "E-commerce Backend",

  "main": "server.js",

  "scripts": {
    "start": "node server.js"
  },

  "dependencies": {
    "express": "^5.1.0"
  }
}
```

Ab isko line by line samajhte hain.

---

# 1️⃣ name

```json
"name": "smart-cart"
```

## Purpose

Project ka naam.

Ye npm registry me publish karte waqt bhi use hota hai.

---

## Rules

- Lowercase hona chahiye.
- Spaces allowed nahi.
- Unique hona chahiye agar publish karna ho.

---

# 2️⃣ version

```json
"version":"1.0.0"
```

Current project version.

Ye Semantic Versioning follow karta hai.

(Major, Minor, Patch)

Isko hum next chapter me detail me padhenge.

---

# 3️⃣ description

```json
"description":"E-commerce Backend"
```

Project ka short description.

GitHub aur npm registry me useful hota hai.

---

# 4️⃣ main

```json
"main":"server.js"
```

Ye project ka entry point batata hai.

Question.

Node project start kare to sabse pehle kaunsi file load hogi?

Answer.

```text
server.js
```

Agar tumhari entry file.

```text
app.js
```

hai.

To.

```json
"main":"app.js"
```

---

# 5️⃣ scripts ⭐⭐⭐⭐⭐

Ye placement favourite topic hai.

## 📖 Technical Definition

> **Scripts are custom command aliases that automate repetitive tasks such as starting the server, running tests, building the project, or development workflows.**

---

## 💡 Simple Explanation

Suppose har baar tum likhte ho.

```bash
node server.js
```

Roz.

50 baar.

😂

Kitna boring.

To package.json me shortcut bana do.

```json
"scripts":{

    "start":"node server.js"

}
```

Ab.

```bash
npm start
```

Aur kaam ho gaya.

---

# Multiple Scripts

Example.

```json
"scripts":{

    "start":"node server.js",

    "dev":"nodemon server.js",

    "test":"jest"

}
```

Use.

```bash
npm run dev
```

↓

nodemon start.

---

# 6️⃣ dependencies

```json
"dependencies":{

    "express":"^5.1.0"

}
```

Ye production packages hote hain.

Project run karne ke liye required.

Examples.

- express
- mongoose
- bcrypt
- jsonwebtoken
- multer
- cors

---

# 7️⃣ devDependencies

```json
"devDependencies":{

    "nodemon":"^3.0.0"

}
```

Ye sirf development ke liye hote hain.

Production me required nahi.

Examples.

- nodemon
- eslint
- prettier
- jest

---

# dependencies vs devDependencies

| dependencies | devDependencies   |
| ------------ | ----------------- |
| Production   | Development       |
| Server Run   | Development Tools |
| Express      | Nodemon           |
| Mongoose     | ESLint            |
| JWT          | Prettier          |

---

# 8️⃣ type

Ye hum pehle bhi padh chuke hain.

```json
"type":"module"
```

Matlab.

Project ES Modules use karega.

Default.

```text
CommonJS
```

---

# 9️⃣ author

```json
"author":"Harshit Goel"
```

Project author.

---

# 10️⃣ license

```json
"license":"MIT"
```

Batata hai project kis license ke under publish hua hai.

---

# Internal Working

Suppose.

```bash
npm install express
```

Internally.

```text
npm install

↓

Read package.json

↓

Update dependencies

↓

Download Package

↓

Update package-lock.json

↓

Store in node_modules
```

---

# Real World Example

Smart Cart.

```json
{
  "name": "smart-cart-backend",

  "scripts": {
    "dev": "nodemon server.js",

    "start": "node server.js"
  },

  "dependencies": {
    "express": "^5.1.0",

    "mongoose": "^8.0.0",

    "jsonwebtoken": "^9.0.0",

    "bcrypt": "^5.1.0"
  }
}
```

---

# Best Practices

✅ Project ka meaningful name rakho.

✅ Scripts properly define karo.

✅ Unused dependencies remove karo.

✅ Version maintain karo.

✅ package.json ko GitHub pe commit karo.

---

# ⚠️ Interview Traps

### Question

Does package.json store installed packages?

❌ Wrong.

Yes.

✅ Correct.

Sirf metadata aur dependency information store karta hai.

Actual packages.

↓

node_modules.

---

### Question

Can we create our own scripts?

✅ Yes.

Example.

```json
"scripts":{

"hello":"node app.js"

}
```

Run.

```bash
npm run hello
```

---

### Question

Is package.json mandatory?

Technically.

❌ No.

Practically.

✅ Yes.

Almost every Node.js project uses it.

---

# Common Mistakes

❌ Confusing package.json with package-lock.json.

---

❌ Uploading node_modules but forgetting package.json.

---

❌ Putting nodemon inside dependencies.

↓

Use devDependencies.

---

# Visual Mind Map

```text
                 package.json
                      │
      ┌───────────────┼────────────────┐
      │               │                │
      ▼               ▼                ▼
   Metadata       Scripts       Dependencies
      │               │                │
      ▼               ▼                ▼
 name          npm start        express
 version       npm run dev      mongoose
 author         npm test        bcrypt
 license                        dotenv
                      │
                      ▼
                type = module
```

---

# Quick Revision

```text
package.json

↓

Project Metadata

↓

Scripts

↓

Dependencies

↓

devDependencies

↓

type

↓

main

↓

version
```

---

# Chapter Summary

- package.json project ki metadata aur configuration file hai.
- Ye project information, scripts aur dependencies store karti hai.
- `npm init` ya `npm init -y` se create hoti hai.
- Scripts repetitive commands ko simplify karte hain.
- `dependencies` production packages ke liye hoti hain.
- `devDependencies` sirf development tools ke liye hoti hain.
- `type: "module"` ES Modules enable karta hai.
- Actual packages `node_modules` me store hote hain, package.json me nahi.

---
