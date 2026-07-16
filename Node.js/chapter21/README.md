# 📘 Chapter 21 : Events & EventEmitter

---

# What are Events?

## 📖 Technical Definition (Interview)

> **An event is an action or occurrence detected by the program. Node.js uses an event-driven architecture where different parts of the application communicate by emitting and listening to events.**

---

# 💡 Simple Explanation

Real life example.

```text
Door Bell

↓

Button Press

↓

Bell Rings
```

Programming me bhi same concept hai.

```text
Event Trigger

↓

Listener

↓

Action Perform
```

Node.js isi concept par kaam karti hai.

---

# Why do we need Events?

Suppose Smart Cart me user order place karta hai.

Uske baad.

```text
Order Placed

↓

Invoice Generate

↓

Email Send

↓

SMS Send

↓

Notification Send

↓

Update Dashboard
```

Agar ye sab manually call karoge.

Code tightly coupled ho jayega.

Better approach.

```text
Order Placed Event

↓

Jo listener register hai

↓

Apna-apna kaam kar lo
```

---

# EventEmitter

Node.js me events ko manage karne ke liye.

```javascript
const EventEmitter = require("events");
```

Ye built-in module use hota hai.

---

# Basic Example

```javascript
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("welcome", () => {
  console.log("Welcome Email Sent");
});

emitter.emit("welcome");
```

### Output

```text
Welcome Email Sent
```

---

# on() vs emit()

### `on()`

Listener register karta hai.

```javascript
emitter.on("login", callback);
```

Matlab.

> Jab login event aaye tab ye callback chalana.

---

### `emit()`

Event trigger karta hai.

```javascript
emitter.emit("login");
```

Matlab.

> Login event fire karo.

---

# Execution Flow

```text
Register Listener

↓

Event Occurs

↓

emit()

↓

Listener Execute
```

---

# Multiple Listeners

Ek event ke multiple listeners ho sakte hain.

```javascript
emitter.on("order", () => console.log("Invoice"));

emitter.on("order", () => console.log("Email"));

emitter.on("order", () => console.log("SMS"));

emitter.emit("order");
```

Output.

```text
Invoice

Email

SMS
```

---

# once()

Agar listener sirf **ek hi baar** chalana ho.

```javascript
emitter.once("login", () => {
  console.log("First Login Bonus");
});
```

Ye sirf first `emit()` par execute hoga.

---

# on() vs once()

| on()                      | once()                           |
| ------------------------- | -------------------------------- |
| Har baar execute          | Sirf ek baar execute             |
| Listener remove nahi hota | Automatically remove ho jata hai |

---

# Passing Data

Events ke saath data bhi bhej sakte hain.

```javascript
emitter.on("user", (name) => {
  console.log(`Welcome ${name}`);
});

emitter.emit("user", "Harshit");
```

Output.

```text
Welcome Harshit
```

---

# Real Project Usage

### Smart Cart

```text
Order Placed

↓

emit("orderPlaced")

↓

Invoice Service

↓

Email Service

↓

Notification Service
```

Sab modules independently kaam karte hain.

---

# Best Practices

- Events tab use karo jab multiple independent tasks trigger karne ho.
- Event names meaningful rakho (`orderPlaced`, `paymentSuccess`).
- Unnecessary events mat banao.

---

# ⚠️ Interview Questions

**Q. EventEmitter built-in hai?**

✅ Yes.

---

**Q. Difference between `on()` and `once()`?**

`on()` → Every time

`once()` → Only first time

---

**Q. `emit()` kya karta hai?**

Listener ko trigger karta hai.

---

# Quick Revision

```text
Event

↓

EventEmitter

↓

on()

↓

emit()

↓

once()

↓

Pass Data
```

---

# Chapter Summary

- Node.js event-driven architecture follow karti hai.
- `EventEmitter` events create aur manage karta hai.
- `on()` listener register karta hai.
- `emit()` event trigger karta hai.
- `once()` sirf ek baar listener execute karta hai.
- Events modules ko loosely coupled banate hain aur real-world applications me extensively use hote hain.
