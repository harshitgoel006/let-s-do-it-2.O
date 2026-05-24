# JavaScript Data Types, Type Conversion & Comparison Notes

# JavaScript Data Types

JavaScript mein data types 2 categories mein divide hote hain:

1. Primitive Data Types
2. Non Primitive (Reference) Data Types

---

# Primitive Data Types

Primitive data types immutable hote hain aur copy by value behavior follow karte hain.

## Types

* String
* Number
* Boolean
* null
* undefined
* Symbol
* BigInt

---

# Examples

```js id="jlwm201"
let name = "Harshit"
let age = 18
let isLoggedIn = false
```

---

# Number

JavaScript mein saare normal numbers internally floating point format mein store hote hain.

Safe integer range:

```js id="jlwm202"
-(2^53 - 1) to (2^53 - 1)
```

---

# BigInt

Large integers store karne ke liye use hota hai.

```js id="jlwm203"
let bigNumber = 123456789123456789n
```

---

# Boolean

```js id="jlwm204"
true
false
```

---

# null

## Technical Meaning

> `null` represents an intentional absence of value.

```js id="’wini205"
let user = null;
```

---

# undefined

## Technical Meaning

> `undefined` means variable declare hua hai but usko value assign nahi hui.

```js id="’wini206"
let city;

console.log(city);
```

---

# Symbol

## Technical Meaning

> Symbol is a unique and immutable primitive value.

```js id="’wini207"
const id1 = Symbol("123")
const id2 = Symbol("123")

console.log(id1 === id2);
```

### Output

```js id="’wini208"
false
```

Reason:
Har Symbol unique hota hai.

---

# typeof Operator

Datatype check karne ke liye use hota hai.

```js id="’wini209"
console.log(typeof "Harshit");
```

### Output

```js id="’wini210"
string
```

---

# Weird typeof Behaviors

## typeof null

```js id="’wini211"
console.log(typeof null);
```

### Output

```js id="’wini212"
object
```

Reason:
Old JavaScript bug / legacy behavior.

Actually:
`null` primitive datatype hai.

---

## typeof undefined

```js id="’wini213"
console.log(typeof undefined);
```

### Output

```js id="’wini214"
undefined
```

---

## typeof array

```js id="’wini215"
console.log(typeof []);
```

### Output

```js id="’wini216"
object
```

Reason:
Arrays internally objects hote hain.

---

## typeof function

```js id="’wini217"
console.log(typeof function(){});
```

### Output

```js id="’wini218"
function
```

Functions callable objects hote hain.

---

## typeof NaN

```js id="’wini219"
console.log(typeof NaN);
```

### Output

```js id="’wini220"
number
```

Reason:
`NaN` JavaScript mein invalid number value represent karta hai.

---

# Non Primitive (Reference) Data Types

## Types

* Object
* Array
* Function

Ye copy by reference behavior follow karte hain.

---

# Primitive vs Non Primitive

# Primitive → Copy by Value

Primitive values ki independent copies banti hain.

```js id="’wini221"
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

### Output

```js id="’wini222"
10
20
```

Reason:
Actual value copy hui.

---

# Another Primitive Example

```js id="’wini223"
let firstName = "Harshit";
let secondName = firstName;

secondName = "Goel";

console.log(firstName);
console.log(secondName);
```

### Output

```js id="’wini224"
Harshit
Goel
```

---

# Non Primitive → Copy by Reference

Reference types mein actual object copy nahi hota.

Reference copy hota hai.

```js id="’wini225"
let user1 = {
   name: "Harshit"
}

let user2 = user1;

user2.name = "Goel";

console.log(user1.name);
console.log(user2.name);
```

### Output

```js id="’wini226"
Goel
Goel
```

Reason:
Dono variables same object ko point kar rahe hain.

---

# Array Reference Example

```js id="’wini227"
let arr1 = [1,2,3];

let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);
```

### Output

```js id="’wini228"
[1,2,3,4]
[1,2,3,4]
```

Reason:
Same array reference shared hai.

---

# Stack vs Heap Memory

# Stack Memory

* Primitive values store hoti hain
* Copy by value hota hai
* Fast memory access

---

# Heap Memory

* Objects/arrays/functions store hote hain
* Variables references hold karte hain
* Dynamic memory allocation

---

# Memory Visualization

```js id="’wini229"
let user = {
   name: "Harshit"
}
```

Internally:

```js id="’wini230"
Stack:
user -> reference

Heap:
{ name: "Harshit" }
```

---

# Type Conversion in JavaScript

# Technical Definition

> Type conversion is the process of converting one datatype into another datatype.

---

# Types of Conversion

# 1. Implicit Conversion (Type Coercion)

JavaScript automatically datatype convert karta hai.

```js id="’wini231"
"5" + 1
```

---

# 2. Explicit Conversion

Developer manually datatype convert karta hai.

```js id="’wini232"
Number("33")
```

---

# Number Conversion

```js id="’wini233"
let score = "33";

let value = Number(score);

console.log(value);
```

### Output

```js id="’wini234"
33
```

---

# Invalid Number Conversion

```js id="’wini235"
let score = "33abc";

let value = Number(score);

console.log(value);
```

### Output

```js id="’wini236"
NaN
```

---

# Important Point About NaN

```js id="’wini237"
typeof NaN
```

### Output

```js id="’wini238"
number
```

---

# null Conversion

```js id="’wini239"
console.log(Number(null));
```

### Output

```js id="’wini240"
0
```

---

# undefined Conversion

```js id="’wini241"
console.log(Number(undefined));
```

### Output

```js id="’wini242"
NaN
```

---

# Boolean Conversion

```js id="’wini243"
console.log(Boolean(1));
console.log(Boolean(0));
```

### Output

```js id="’wini244"
true
false
```

---

# String Boolean Conversion

```js id="’wini245"
console.log(Boolean("Harshit"));
console.log(Boolean(""));
```

### Output

```js id="’wini246"
true
false
```

---

# Common Boolean Conversion Rules

| Value     | Boolean Result |
| --------- | -------------- |
| 1         | true           |
| 0         | false          |
| "Harshit" | true           |
| ""        | false          |
| null      | false          |
| undefined | false          |
| NaN       | false          |

---

# Falsy Values

```js id="’wini247"
false
0
-0
0n
""
null
undefined
NaN
```

Baaki almost sab truthy hote hain.

---

# String Conversion

```js id="’wini248"
console.log(String(33));
```

### Output

```js id="’wini249"
"33"
```

Datatype:

```js id="’wini250"
string
```

---

# Operations in JavaScript

```js id="’wini251"
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);
```

---

# String Concatenation

```js id="’wini252"
let str1 = "H"
let str2 = " G"

let str3 = str1 + str2;

console.log(str3);
```

---

# Type Coercion Examples

```js id="’wini253"
console.log("1" + 2);
```

### Output

```js id="’wini254"
12
```

---

```js id="’wini255"
console.log(1 + "2");
```

### Output

```js id="’wini256"
12
```

---

```js id="’wini257"
console.log(1 + 1 + "2");
```

### Output

```js id="’wini258"
22
```

Reason:
Left to right evaluation.

---

```js id="’wini259"
console.log("1" + 2 + 2);
```

### Output

```js id="’wini260"
122
```

Reason:
String aane ke baad concatenation start ho gaya.

---

# Unary Plus Operator

```js id="’wini261"
console.log(+"");
```

### Output

```js id="’wini262"
0
```

Reason:
Unary plus string ko number mein convert karta hai.

---

# Comparison Operators

```js id="’wini263"
console.log("2" > 1);
```

### Output

```js id="’wini264"
true
```

Reason:
String `"2"` number mein convert hua.

---

```js id="’wini265"
console.log("02" > 1);
```

### Output

```js id="’wini266"
true
```

---

# String Comparison

```js id="’wini267"
console.log("24" > "5");
```

### Output

```js id="’wini268"
false
```

Reason:
String comparison lexicographically hota hai.

Character-by-character Unicode comparison hota hai.

---

# null Comparison Weirdness

```js id="’wini269"
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
```

### Output

```js id="’wini270"
false
false
true
```

---

# Reason

Equality (`==`) aur comparison (`> < >= <=`) internally different algorithms use karte hain.

Comparison:
`null` ko `0` mein convert karta hai.

Isliye:

```js id="’wini271"
null >= 0
```

true deta hai.

---

# undefined Comparison

```js id="’wini272"
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);
```

### Output

```js id="’wini273"
false
false
false
```

---

# Equality Operators

# Loose Equality (`==`)

* Type coercion karta hai
* Datatype convert karta hai

```js id="’wini274"
console.log("2" == 2);
```

### Output

```js id="’wini275"
true
```

---

# Strict Equality (`===`)

* Datatype convert nahi karta
* Value + datatype dono compare karta hai

```js id="’wini276"
console.log("2" === 2);
```

### Output

```js id="’wini277"
false
```

---

# Important Equality Examples

```js id="’wini278"
console.log(false == 0);
```

### Output

```js id="’wini279"
true
```

---

```js id="’wini280"
console.log("" == 0);
```

### Output

```js id="’wini281"
true
```

---

```js id="’wini282"
console.log([] == 0);
```

### Output

```js id="’wini283"
true
```

Reason:
JavaScript implicit coercion karta hai.

---

# null vs undefined

```js id="’wini284"
console.log(null == undefined);
```

### Output

```js id="’wini285"
true
```

Reason:
Loose equality special coercion rules follow karti hai.

---

```js id="’wini286"
console.log(null === undefined);
```

### Output

```js id="’wini287"
false
```

Reason:
Datatypes different hain.

---

# Best Practice

## Always Prefer

```js id="’wini288"
===
```

instead of:

```js id="’wini289"
==
```

Kyuki:

* safer hai
* unexpected coercion avoid hoti hai
* predictable behavior milta hai
