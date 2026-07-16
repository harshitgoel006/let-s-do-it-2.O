# 📘 Chapter 24 : HTTP Module

---

# What is HTTP Module?

## 📖 Technical Definition (Interview)

> **The `http` module is a built-in Node.js module used to create HTTP servers and handle client requests and server responses without using any external framework like Express.**

---

# 💡 Simple Explanation

Suppose browser request bhejta hai.

```text
Browser

↓

http://localhost:5000

↓

Node Server

↓

Response
```

Question.

Browser aur Node communicate kaise karenge?

👉 **HTTP Module**

---

# Why do we need HTTP Module?

Express internally bhi isi HTTP module ke upar built hai.

Flow.

```text
Browser

↓

HTTP Request

↓

Node HTTP Server

↓

Response
```

---

# Import HTTP Module

```javascript
const http = require("http");
```

Built-in module hai.

Install karne ki zarurat nahi.

---

# Creating a Server

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});
```

---

# Line-by-Line Explanation

### `http.createServer()`

Ek HTTP server create karta hai.

---

### `req`

Client ki request.

---

### `res`

Client ko response bhejne ke liye.

---

### `res.end()`

Response complete karke browser ko bhej deta hai.

⚠️ Agar `res.end()` nahi likhoge to browser **loading state me hi rahega**, kyunki response kabhi complete hi nahi hua.

---

# Starting the Server

```javascript
server.listen(5000, () => {
  console.log("Server Running");
});
```

---

# Why `listen()`?

Server ko bolte hain.

> "Port 5000 par incoming requests sunna start karo."

---

# What is a Port?

## 📖 Technical Definition

> **A port is a logical communication endpoint through which a server listens for incoming network requests.**

---

## 💡 Simple Explanation

IP Address = Building

Port = Flat Number

Example.

```text
http://localhost:5000
                 ↑
               Port
```

---

# Complete Flow

```text
Browser

↓

localhost:5000

↓

Server Listening

↓

Request Received

↓

createServer()

↓

Response Sent

↓

Browser Displays Output
```

---

# Handling Routes

```javascript
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/products") {
    res.end("Products Page");
  } else {
    res.statusCode = 404;

    res.end("Not Found");
  }
});
```

---

# Request Object (`req`)

Common Properties.

```javascript
req.url;
```

Current URL.

---

```javascript
req.method;
```

HTTP Method.

(GET, POST, PUT, DELETE)

---

# Response Object (`res`)

Useful Methods.

```javascript
res.statusCode = 200;
```

---

```javascript
res.setHeader("Content-Type", "application/json");
```

---

```javascript
res.end();
```

---

# Sending JSON Response

```javascript
const products = [
  { id: 1, name: "Laptop" },

  { id: 2, name: "Phone" },
];

res.setHeader("Content-Type", "application/json");

res.end(JSON.stringify(products));
```

---

# Why `JSON.stringify()`?

Question.

Why not directly?

```javascript
res.end(products);
```

❌ Wrong.

Reason.

`res.end()` string ya Buffer expect karta hai.

JavaScript object ko JSON string me convert karna padta hai.

---

# Real Project Example

Smart Cart.

```text
GET /products

↓

HTTP Server

↓

Database

↓

Products

↓

JSON Response
```

---

# HTTP Request Lifecycle

```text
Browser

↓

HTTP Request

↓

Node Server

↓

Route Check

↓

Business Logic

↓

Response

↓

Browser
```

---

# Best Practices

- Har request ka response bhejo.
- Proper status codes use karo.
- JSON response ke liye `Content-Type` set karo.
- Route matching clean rakho.

---

# ⚠️ Interview Questions

**Q. Is HTTP module built-in?**

✅ Yes.

---

**Q. Difference between `req` and `res`?**

- `req` → Incoming Request
- `res` → Outgoing Response

---

**Q. Why is `res.end()` mandatory?**

Response complete karne ke liye.

---

**Q. Why `JSON.stringify()`?**

Kyuki `res.end()` directly JavaScript objects send nahi kar sakta.

---

# Quick Revision

```text
HTTP Module

↓

createServer()

↓

listen()

↓

req

↓

res

↓

req.url

↓

req.method

↓

res.end()

↓

JSON.stringify()
```

---

# Chapter Summary

- `http` Node.js ka built-in module hai.
- `createServer()` HTTP server banata hai.
- `listen()` server ko kisi port par start karta hai.
- `req` request ki information deta hai.
- `res` client ko response bhejta hai.
- `res.end()` response complete karta hai.
- JSON response bhejne se pehle `JSON.stringify()` use kiya jata hai.
- Express framework internally isi HTTP module ke upar build kiya gaya hai.

---
