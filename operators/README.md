# JavaScript Operators Notes

# Operators in JavaScript

Operators special symbols hote hain jo values aur variables par operations perform karte hain.

Example:

```js
let a = 10 + 5;
```

Yahan:

```js
+
```

addition operator hai.

---

# Types of Operators

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Unary Operators
* Ternary Operator
* Nullish Coalescing Operator
* Optional Chaining Operator

---

# 1. Arithmetic Operators

Arithmetic operators mathematical calculations perform karte hain.

```js
let a = 4;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

---

# Addition Operator (`+`)

```js
console.log(4 + 4);
```

Output:

```js
8
```

---

# Subtraction Operator (`-`)

```js
console.log(8 - 4);
```

Output:

```js
4
```

---

# Multiplication Operator (`*`)

```js
console.log(4 * 5);
```

Output:

```js
20
```

---

# Division Operator (`/`)

```js
console.log(10 / 2);
```

Output:

```js
5
```

---

# Modulus Operator (`%`)

Remainder return karta hai.

```js
console.log(10 % 3);
```

Output:

```js
1
```

---

# Exponentiation Operator (`**`)

Power calculate karta hai.

```js
console.log(2 ** 3);
```

Output:

```js
8
```

---

# 2. Increment and Decrement Operators

---

# Post Increment (`a++`)

Pehle current value use hoti hai,
uske baad increment hota hai.

```js
let a = 5;

console.log(a++);
console.log(a);
```

Output:

```js
5
6
```

---

# Pre Increment (`++a`)

Pehle increment hota hai,
uske baad value use hoti hai.

```js
let a = 5;

console.log(++a);
```

Output:

```js
6
```

---

# Post Decrement (`a--`)

Pehle value use hoti hai,
uske baad decrement hota hai.

```js
let a = 5;

console.log(a--);
console.log(a);
```

Output:

```js
5
4
```

---

# Pre Decrement (`--a`)

Pehle decrement hota hai,
uske baad value use hoti hai.

```js
let a = 5;

console.log(--a);
```

Output:

```js
4
```

---

# Technical Difference

| Operator | Behavior           |
| -------- | ------------------ |
| `a++`    | Use then increment |
| `++a`    | Increment then use |
| `a--`    | Use then decrement |
| `--a`    | Decrement then use |

---

# 3. Assignment Operators

Assignment operators variable ki value modify karte hain.

---

# Basic Assignment (`=`)

```js
let a = 10;
```

---

# Addition Assignment (`+=`)

```js
let a = 10;

a += 5;

console.log(a);
```

Output:

```js
15
```

Equivalent to:

```js
a = a + 5;
```

---

# Subtraction Assignment (`-=`)

```js
a -= 5;
```

Equivalent to:

```js
a = a - 5;
```

---

# Multiplication Assignment (`*=`)

```js
a *= 2;
```

Equivalent to:

```js
a = a * 2;
```

---

# Division Assignment (`/=`)

```js
a /= 2;
```

Equivalent to:

```js
a = a / 2;
```

---

# Modulus Assignment (`%=`)

```js
a %= 2;
```

Equivalent to:

```js
a = a % 2;
```

---

# Exponentiation Assignment (`**=`)

```js
a **= 2;
```

Equivalent to:

```js
a = a ** 2;
```

---

# 4. Comparison Operators

Comparison operators values compare karte hain aur boolean value return karte hain.

---

# Equal To (`==`)

Value compare karta hai after type coercion.

```js
console.log(5 == "5");
```

Output:

```js
true
```

---

# Strict Equal (`===`)

Value + datatype dono compare karta hai.

```js
console.log(5 === "5");
```

Output:

```js
false
```

---

# Not Equal (`!=`)

Sirf value compare karta hai after coercion.

```js
console.log(5 != "5");
```

Output:

```js
false
```

---

# Strict Not Equal (`!==`)

Value + datatype dono compare karta hai.

```js
console.log(5 !== "5");
```

Output:

```js
true
```

---

# Greater Than (`>`)

```js
console.log(10 > 5);
```

Output:

```js
true
```

---

# Less Than (`<`)

```js
console.log(5 < 10);
```

Output:

```js
true
```

---

# Greater Than Equal (`>=`)

```js
console.log(10 >= 10);
```

Output:

```js
true
```

---

# Less Than Equal (`<=`)

```js
console.log(5 <= 10);
```

Output:

```js
true
```

---

# Technical Definition

> Comparison operators compare two operands and return a boolean value (`true` or `false`).

---

# 5. Logical Operators

Logical operators conditions combine karne ke liye use hote hain.

---

# Logical AND (`&&`)

Basic understanding:
Dono conditions true hongi tabhi true return karega.

---

# Actual JavaScript Behavior

`&&`
returns:

* first falsy value
  OR
* last truthy value

---

# Example

```js
console.log(2 && 3 && 0 && 4);
```

Output:

```js
0
```

---

# WHY?

Step-by-step:

* `2` → truthy
* `3` → truthy
* `0` → falsy

Jaise hi first falsy value mili:
stop.

---

# Another Example

```js
console.log(5 && 10);
```

Output:

```js
10
```

Reason:
Dono truthy hain,
toh last truthy value return hui.

---

# Logical OR (`||`)

Basic understanding:
Dono mein se koi ek condition true ho toh true.

---

# Actual JavaScript Behavior

`||`
returns:

* first truthy value
  OR
* last falsy value

---

# Example

```js
console.log(0 || 10 || 20);
```

Output:

```js
10
```

---

# WHY?

* `0` → falsy
* `10` → truthy

First truthy value milte hi:
stop.

---

# Another Example

```js
console.log(5 || 10);
```

Output:

```js
5
```

Reason:
Pehla operand already truthy hai.

---

# Logical NOT (`!`)

Boolean value ko reverse karta hai.

```js
console.log(!true);
```

Output:

```js
false
```

---

# Double NOT (`!!`)

Kisi bhi value ko explicit boolean mein convert karta hai.

```js
console.log(!!"Harshit");
```

Output:

```js
true
```

---

# Short Circuiting

JavaScript unnecessary expressions execute nahi karta.

---

# Example

```js
console.log(false && true);
```

Output:

```js
false
```

Reason:
Pehla operand already falsy hai.

Toh aage evaluate karne ki zarurat nahi.

---

# Another Example

```js
console.log(true || false);
```

Output:

```js
true
```

Reason:
Pehla operand already truthy hai.

---

# Real Use Case of `&&`

```js
isLoggedIn && console.log("Welcome");
```

Agar:

```js
isLoggedIn
```

truthy hua:
tabhi second expression chalega.

---

# Real Use Case of `||`

```js
const username = input || "Guest";
```

Agar:

```js
input
```

falsy hua:
toh:

```js
"Guest"
```

use hoga.

---

# 6. Nullish Coalescing Operator (`??`)

Modern JavaScript operator.

---

# Problem with `||`

```js
let value = 0;

console.log(value || 10);
```

Output:

```js
10
```

Problem:
`0`
valid value thi,
but falsy hone ki wajah se replace ho gayi.

---

# Solution → `??`

`??`
sirf:

```js
null
undefined
```

check karta hai.

---

# Example

```js
let value = 0;

console.log(value ?? 10);
```

Output:

```js
0
```

---

# Another Example

```js
console.log(null ?? "Default");
```

Output:

```js
Default
```

---

# Difference Between `||` and `??`

| Value | `||` | `??` |
|---|---|---|
| `0` | fallback use karega | `0` return karega |
| `""` | fallback use karega | `""` return karega |
| `false` | fallback use karega | `false` return karega |
| `null` | fallback use karega | fallback use karega |
| `undefined` | fallback use karega | fallback use karega |

---

# Technical Definition

> The nullish coalescing operator (`??`) returns the right-hand operand only when the left-hand operand is `null` or `undefined`.

---

# 7. Optional Chaining (`?.`)

Nested object properties safely access karne ke liye use hota hai.

---

# Problem

```js
const user = {
   name: "Harshit"
};

console.log(user.address.city);
```

❌ Error.

---

# WHY?

```js
user.address
```

undefined hai.

Aur:

```js
undefined.city
```

invalid hai.

---

# Solution

```js
console.log(user?.address?.city);
```

Output:

```js
undefined
```

NO ERROR.

---

# How Optional Chaining Works

Agar:
left side:

```js
null
undefined
```

ho,
toh:
JavaScript further property access stop kar deta hai.

---

# Real World Use Case

```js
const username = user?.profile?.name ?? "Guest";
```

---

# Benefits

* runtime errors avoid hote hain
* API data safely handle hota hai
* nested objects safely access hote hain

---

# Technical Definition

> Optional chaining (`?.`) allows safe access to nested properties without throwing errors if a property is `null` or `undefined`.

---

# 8. Ternary Operator (`? :`)

Conditional expression ka short syntax.

---

# Syntax

```js
condition ? trueValue : falseValue
```

---

# Example

```js
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```js
Adult
```

---

# Important

Ternary:

# expression

hai.

Matlab:
value return karta hai.

---

# Difference Between if-else and Ternary

| if-else      | Ternary                   |
| ------------ | ------------------------- |
| statement    | expression                |
| control flow | value return              |
| larger logic | concise conditional value |

---

# React Example

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

---

# Technical Definition

> The ternary operator is a conditional expression that returns one of two values based on a condition.

---

# 9. Operator Precedence

Operator precedence decide karta hai:

> Kaunsa operator pehle execute hoga.

Exactly maths ke BODMAS jaisa.

---

# Example

```js
console.log(2 + 3 * 4);
```

Output:

```js
14
```

---

# WHY?

Pehle:

```js
3 * 4
```

Then:

```js
2 + 12
```

---

# Parentheses Highest Priority

```js
console.log((2 + 3) * 4);
```

Output:

```js
20
```

---

# Logical Operator Precedence

```js
console.log(true || false && false);
```

Output:

```js
true
```

Reason:

```js
&&
```

ki precedence:

```js
||
```

se higher hai.

---

# Important Rule

Agar precedence confusing lage:

# parentheses use karo.

Readable aur safer hota hai.

---

# Most Important Interview Points

* `&&` returns first falsy or last truthy value
* `||` returns first truthy or last falsy value
* `??` only checks `null` and `undefined`
* Optional chaining prevents runtime errors
* Ternary operator is an expression
* `===` preferred over `==`
* JavaScript uses short circuit evaluation
* Operator precedence affects execution order
