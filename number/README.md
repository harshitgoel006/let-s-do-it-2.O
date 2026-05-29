# JavaScript Numbers and Math Notes

# Numbers in JavaScript

JavaScript mein:

# Number

datatype integers aur floating point numbers dono ko represent karta hai.

---

# Number Declaration

```js
const score = 100;
const balance = 10.23;
```

---

# Technical Note

JavaScript mein alag:

* int
* float
* double

datatype nahi hote.

Sab:

```js
number
```

datatype ke under aate hain.

---

# Number Object

```js
const balance = new Number(100);
```

JavaScript internally Number wrapper object create karke methods provide karta hai.

Example:

```js
balance.toString()
balance.toFixed()
balance.toPrecision()
```

---

# toString()

Number ko string mein convert karta hai.

```js
const balance = 100;

console.log(balance.toString());
```

Output:

```js
"100"
```

---

# Check Datatype

```js
console.log(typeof balance);
```

Output:

```js
number
```

---

```js
console.log(typeof balance.toString());
```

Output:

```js
string
```

---

# toFixed()

Number ko fixed decimal places tak round karta hai.

---

# Syntax

```js
number.toFixed(digits)
```

---

# Example

```js
const balance = 100;

console.log(balance.toFixed(1));
```

Output:

```js
"100.0"
```

---

# Example

```js
const num = 123.456;

console.log(num.toFixed(2));
```

Output:

```js
"123.46"
```

---

# Important

`toFixed()`

# string

return karta hai.

---

# Technical Definition

> The toFixed() method formats a number using fixed-point notation and returns a string.

---

# toPrecision()

Total significant digits control karta hai.

---

# Example

```js
const other = 123.456789;

console.log(other.toPrecision(4));
```

Output:

```js
"123.5"
```

---

# Example

```js
const num = 123.456;

console.log(num.toPrecision(2));
```

Output:

```js
"1.2e+2"
```

---

# WHY?

2 significant digits preserve kar raha hai.

```text
123.456
↓
120
↓
1.2 × 10²
```

---

# Technical Definition

> The toPrecision() method formats a number to a specified length (significant digits).

---

# Difference Between toFixed() and toPrecision()

| toFixed()                                | toPrecision()                            |
| ---------------------------------------- | ---------------------------------------- |
| decimal places count karta hai           | total significant digits count karta hai |
| mostly currency mein use hota hai        | scientific formatting mein useful        |
| decimal ke baad digits control karta hai | total precision control karta hai        |

---

# Example

```js
const num = 123.456;
```

---

```js
console.log(num.toFixed(2));
```

Output:

```js
"123.46"
```

---

```js
console.log(num.toPrecision(2));
```

Output:

```js
"1.2e+2"
```

---

# toLocaleString()

Number ko readable local format mein convert karta hai.

---

# Example

```js
const hundred = 1000000;

console.log(hundred.toLocaleString("en-US"));
```

Output:

```js
1,000,000
```

---

# Indian Format

```js
console.log(hundred.toLocaleString("en-IN"));
```

Output:

```js
10,00,000
```

---

# Real Use Cases

* Currency display
* Banking apps
* E-commerce websites
* Financial dashboards

---

# Technical Definition

> The toLocaleString() method returns a language-sensitive representation of a number.

---

# Floating Point Precision Problem

---

# Example

```js
console.log(0.1 + 0.2);
```

Output:

```js
0.30000000000000004
```

---

# WHY?

Computers:
numbers ko binary format mein store karte hain.

---

# Problem

```js
0.1
```

aur

```js
0.2
```

exact binary representation nahi rakhte.

Approximate values store hoti hain.

---

# Isliye

```js
0.1 + 0.2
```

exact:

```js
0.3
```

nahi banta.

---

# Technical Definition

> JavaScript uses IEEE 754 double-precision floating-point representation for numbers.

---

# Common Fix

```js
const sum = 0.1 + 0.2;

console.log(sum.toFixed(2));
```

Output:

```js
"0.30"
```

---

# Note

`toFixed()`
string return karta hai.

Agar number chahiye:

```js
parseFloat(sum.toFixed(2))
```

---

# Math Object

JavaScript mein mathematical operations ke liye:

```js
Math
```

object available hota hai.

---

# Important Constants

---

# Math.PI

```js
console.log(Math.PI);
```

Output:

```js
3.141592653589793
```

Circle aur trigonometry calculations mein use hota hai.

---

# Math.E

```js
console.log(Math.E);
```

Output:

```js
2.718281828459045
```

Exponential growth aur logarithms mein use hota hai.

---

# Rounding Methods

---

# Math.round()

Nearest integer return karta hai.

```js
console.log(Math.round(4.7));
```

Output:

```js
5
```

---

```js
console.log(Math.round(4.3));
```

Output:

```js
4
```

---

# Interesting Case

```js
console.log(Math.round(-4.5));
```

Output:

```js
-4
```

---

# Math.floor()

Always lower integer return karta hai.

```js
console.log(Math.floor(4.7));
```

Output:

```js
4
```

---

```js
console.log(Math.floor(-4.9));
```

Output:

```js
-5
```

---

# Math.ceil()

Always upper integer return karta hai.

```js
console.log(Math.ceil(4.3));
```

Output:

```js
5
```

---

```js
console.log(Math.ceil(-4.9));
```

Output:

```js
-4
```

---

# Math.trunc()

Decimal part remove kar deta hai.

---

```js
console.log(Math.trunc(4.9));
```

Output:

```js
4
```

---

```js
console.log(Math.trunc(-4.9));
```

Output:

```js
-4
```

---

# Difference

```js
Math.floor(-4.9)
```

Output:

```js
-5
```

---

```js
Math.trunc(-4.9)
```

Output:

```js
-4
```

---

# Math.abs()

Absolute value return karta hai.

---

```js
console.log(Math.abs(-5));
```

Output:

```js
5
```

---

```js
console.log(Math.abs(5));
```

Output:

```js
5
```

---

# Math.sqrt()

Square root return karta hai.

```js
console.log(Math.sqrt(16));
```

Output:

```js
4
```

---

# Math.pow()

Power calculate karta hai.

```js
console.log(Math.pow(2,3));
```

Output:

```js
8
```

---

Modern alternative:

```js
2 ** 3
```

---

# Math.max()

Maximum value return karta hai.

```js
console.log(Math.max(1,5,3));
```

Output:

```js
5
```

---

# Math.min()

Minimum value return karta hai.

```js
console.log(Math.min(1,5,3));
```

Output:

```js
1
```

---

# Math.random()

Random number generate karta hai.

---

# Range

```text
0 <= x < 1
```

---

```js
console.log(Math.random());
```

Output:

```text
0.5738473
```

(random)

---

```js
console.log(Math.random() * 10);
```

Range:

```text
0 <= x < 10
```

---

# Dice Roll Example

```js
Math.floor(Math.random()*6)+1
```

Range:

```text
1 to 6
```

---

# Step-by-Step

```js
Math.random()
```

↓

```text
0.0000 - 0.9999
```

↓

```js
*6
```

↓

```text
0 - 5.9999
```

↓

```js
Math.floor()
```

↓

```text
0 1 2 3 4 5
```

↓

```js
+1
```

↓

```text
1 2 3 4 5 6
```

---

# Generic Formula

Range:

```text
min → max
```

---

```js
Math.floor(
  Math.random() * (max - min + 1)
) + min;
```

---

# Example

10 to 20

```js
Math.floor(
  Math.random() * (20 - 10 + 1)
) + 10;
```

---

# Infinity

---

```js
console.log(1/0);
```

Output:

```js
Infinity
```

---

```js
console.log(-1/0);
```

Output:

```js
-Infinity
```

---

# Technical Definition

> Infinity represents a numeric value greater than any finite number.

---

# NaN (Not a Number)

Represents invalid numeric result.

---

# Example

```js
console.log(Number("abc"));
```

Output:

```js
NaN
```

---

# Weird Fact

```js
console.log(typeof NaN);
```

Output:

```js
number
```

---

# WHY?

Historical JavaScript behavior.

---

# Technical Definition

> NaN represents an invalid numeric result but its datatype is still number.

---

# isNaN()

Pehle conversion karta hai.

Fir check karta hai.

---

# Example

```js
console.log(isNaN("abc"));
```

Internally:

```js
Number("abc")
```

↓

```js
NaN
```

↓

```js
true
```

Output:

```js
true
```

---

# Example

```js
console.log(isNaN("123"));
```

Output:

```js
false
```

---

# Number.isNaN()

Strict version.

Conversion nahi karta.

---

```js
console.log(Number.isNaN("abc"));
```

Output:

```js
false
```

---

```js
console.log(Number.isNaN(NaN));
```

Output:

```js
true
```

---

# Easy Rule

## isNaN()

```text
Convert → Check
```

---

## Number.isNaN()

```text
Check Only
```

---

# Number Conversion

---

# parseInt()

String ko integer mein convert karta hai.

```js
const numStr = "123.45";

console.log(parseInt(numStr));
```

Output:

```js
123
```

---

# parseFloat()

String ko floating number mein convert karta hai.

```js
console.log(parseFloat(numStr));
```

Output:

```js
123.45
```

---

# MAX_SAFE_INTEGER

```js
console.log(Number.MAX_SAFE_INTEGER);
```

Output:

```js
9007199254740991
```

---

Equivalent:

```js
2^53 - 1
```

---

# WHY Important?

Is value ke baad JavaScript Number precision lose kar sakta hai.

---

# Example

```js
let a = Number.MAX_SAFE_INTEGER;

console.log(a + 1);
console.log(a + 2);
```

Output:

```js
9007199254740992
9007199254740992
```

---

# BigInt

Large integers store karne ke liye use hota hai.

---

# Syntax

```js
const big = 123456789123456789123456789n;
```

---

```js
console.log(typeof 10n);
```

Output:

```js
bigint
```

---

# Example

```js
console.log(10n + 5n);
```

Output:

```js
15n
```

---

# Important

```js
10n + 5
```

❌ Error

---

```js
10n + 5n
```

✅ Correct

---

# Important Interview Points

* JavaScript uses IEEE 754 floating point numbers.
* `toFixed()` returns string.
* `toPrecision()` works on significant digits.
* `Math.random()` returns value between 0 and 1.
* `Math.trunc()` removes decimal part.
* `typeof NaN` is `"number"`.
* `isNaN()` performs type coercion.
* `Number.isNaN()` performs strict checking.
* `MAX_SAFE_INTEGER = 2^53 - 1`.
* BigInt is used for very large integers.
