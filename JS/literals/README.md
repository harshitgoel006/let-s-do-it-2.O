# JavaScript Literals Notes

JavaScript mein literals ka matlab hota hai:

> Fixed values jo hum directly code mein likhte hain.

Literals variables nahi hote.
Ye actual values hoti hain jo directly source code mein provide ki jaati hain.

Example:

```js id="l1"
let age = 18;
```

Yahan:

* `Number` → datatype
* `18` → number literal

---

# Datatype vs Literal

| Datatype              | Literal            |
| --------------------- | ------------------ |
| Data ki category/type | Actual fixed value |
| Runtime concept       | Source code value  |
| Example: Number       | Example: 10        |

---

# Types of Literals in JavaScript

* Array Literals
* Boolean Literals
* Numeric Literals
* Object Literals
* RegExp Literals
* String Literals
* Template Literals

---

# 1. Array Literals

Array literal:

> Square brackets `[]` ke andar values ka collection.

```js id="l2"
const fruits = ["Apple", "Mango", "Banana"];
```

---

# Important Point

Har baar array literal evaluate hone par:

# new array object create hota hai.

---

# Empty Slots in Arrays

```js id="l3"
const arr = ["Lion", , "Tiger"];
```

Output:

```js id="l4"
[ 'Lion', <1 empty item>, 'Tiger' ]
```

---

# Important

Empty slot:

```js id="l5"
undefined
```

ke exactly equal nahi hota.

---

# Trailing Comma

```js id="l6"
const arr = [1,2,3,];
```

Allowed hai.

---

# 2. Boolean Literals

Boolean literals sirf 2 hote hain:

```js id="l7"
true
false
```

---

# Example

```js id="l8"
let isLoggedIn = true;
```

---

# Important

Primitive booleans:

```js id="l9"
true
false
```

aur:

```js id="l10"
new Boolean()
```

same nahi hote.

---

# 3. Numeric Literals

Numeric literals:

* integers
* decimals
* binary
* octal
* hexadecimal
* BigInt

---

# Decimal Numbers

```js id="l11"
10
25
999
```

---

# Floating Point Numbers

```js id="l12"
3.14
0.99
```

---

# Exponential Form

```js id="l13"
3.1E+2
```

Output:

```js id="l14"
310
```

---

# Binary Literals

```js id="l15"
0b1010
```

Output:

```js id="l16"
10
```

---

# Octal Literals

```js id="l17"
0o12
```

Output:

```js id="l18"
10
```

---

# Hexadecimal Literals

```js id="l19"
0xA
```

Output:

```js id="l20"
10
```

---

# BigInt Literal

```js id="l21"
123456789n
```

`n`
BigInt indicate karta hai.

---

# 4. Object Literals

Object literal:

> Curly braces `{}` ke andar key-value pairs.

```js id="l22"
const user = {
   name: "Harshit",
   age: 21
};
```

---

# Nested Object

```js id="l23"
const car = {
   details: {
      brand: "BMW"
   }
};
```

---

# Property Access

```js id="l24"
console.log(car.details.brand);
```

---

# Special Property Names

```js id="l25"
const obj = {
   "!": "Hello"
};
```

Dot notation:

```js id="l26"
obj.!
```

❌ Invalid

Correct:

```js id="l27"
obj["!"]
```

---

# Computed Properties

```js id="l28"
const key = "age";

const user = {
   [key]: 21
};
```

---

# Object Literal Shorthand

```js id="l29"
const name = "Harshit";

const user = {
   name
};
```

Equivalent to:

```js id="l30"
const user = {
   name: name
};
```

---

# 5. RegExp Literals

Regular expression slash `/ /` ke andar likha jata hai.

```js id="l31"
const re = /ab+c/;
```

---

# 6. String Literals

Strings:
single ya double quotes mein.

```js id="l32"
"Hello"
'World'
```

---

# String Example

```js id="l33"
const name = "Harshit";
```

---

# Escape Characters

## New Line

```js id="l34"
"Hello \n World"
```

---

# Tab

```js id="l35"
"Hello \t World"
```

---

# Double Quotes

```js id="l36"
"He said \"Hello\""
```

---

# Backslash

```js id="l37"
"c:\\temp"
```

---

# Common Escape Characters

| Character | Meaning      |
| --------- | ------------ |
| `\n`      | New Line     |
| `\t`      | Tab          |
| `\\`      | Backslash    |
| `\"`      | Double Quote |
| `\'`      | Single Quote |

---

# String Length

```js id="l38"
console.log("Harshit".length);
```

---

# 7. Template Literals

Backticks `` ` ``
use hote hain.

---

# Basic Example

```js id="l39"
const name = "Harshit";

console.log(`Hello ${name}`);
```

---

# String Interpolation

```js id="l40"
const age = 21;

console.log(`Age is ${age}`);
```

---

# Multiline String

```js id="l41"
const str = `
Hello
World
`;
```

---

# Tagged Template Literals

Advanced concept.

Function ke saath template literals.

```js id="l42"
function test(strings){
   console.log(strings);
}

test`Hello`;
```

---

# Important Difference

| Literal   | Meaning         |
| --------- | --------------- |
| `"Hello"` | String literal  |
| `10`      | Number literal  |
| `true`    | Boolean literal |
| `{}`      | Object literal  |
| `[]`      | Array literal   |

---

# Technical Definition

> A literal is a fixed value written directly into the source code.

---

