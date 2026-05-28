# JavaScript Strings Notes

# Strings in JavaScript

String:
characters ka sequence hota hai.

JavaScript mein strings:

* single quotes
* double quotes
* backticks

teeno se create kar sakte hain.

---

# String Declaration

```js
let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;
```

---

# String Concatenation

Strings ko join karne ko:

# concatenation

kehte hain.

---

# Using `+`

```js
console.log("hello" + "world");

console.log("hello" + " " + "world");
```

Output:

```js
helloworld
hello world
```

---

# Variables with Concatenation

```js
const name = "harshit";
const repoCount = 50;

console.log(name + repoCount + " value");
```

Output:

```js
harshit50 value
```

---

# Template Literals / String Interpolation

Modern JavaScript mein:

# backticks

prefer karte hain.

---

# WHY?

Readable hote hain.

Variables directly inject kar sakte hain.

---

# Syntax

```js
`${variable}`
```

---

# Example

```js
const name = "harshit";
const repoCount = 50;

console.log(`hello ${name.toUpperCase()} you have ${repoCount} repo`);
```

Output:

```js
hello HARSHIT you have 50 repo
```

---

# Technical Definition

> Template literals allow embedded expressions and multiline strings using backticks.

---

# String Primitive vs String Object

---

# Primitive String

```js
let str = "hello";
```

Datatype:

```js
string
```

---

# String Object

```js
const gameName = new String("pubg");
```

Datatype:

```js
object
```

---

# Check

```js
console.log(typeof "hello");
```

Output:

```js
string
```

---

```js
console.log(typeof new String("hello"));
```

Output:

```js
object
```

---

# Important Point

Normally:
primitive strings use karte hain.

`new String()`
rarely use hota hai.

---

# String Properties and Methods

---

# length

String ki total length return karta hai.

```js
const gameName = "pubg";

console.log(gameName.length);
```

Output:

```js
4
```

---

# Character Access

---

# Using Bracket Notation

```js
console.log(gameName[0]);
```

Output:

```js
p
```

---

# Using `charAt()`

```js
console.log(gameName.charAt(0));
```

Output:

```js
p
```

---

# Difference Between `[]` and `charAt()`

```js
console.log(gameName[100]);
```

Output:

```js
undefined
```

---

```js
console.log(gameName.charAt(100));
```

Output:

```js
""
```

(empty string)

---

# indexOf()

Particular character/string ka:

# first index

return karta hai.

```js
console.log(gameName.indexOf("g"));
```

Output:

```js
3
```

---

# lastIndexOf()

Character ka:

# last occurrence

return karta hai.

```js
console.log(gameName.lastIndexOf("g"));
```

Output:

```js
3
```

---

# String Immutability

Strings:

# immutable

hoti hain.

Matlab:
original string directly modify nahi hoti.

---

# Example

```js
let str = "hello";

str.toUpperCase();

console.log(str);
```

Output:

```js
hello
```

NOT:

```js
HELLO
```

---

# WHY?

Methods:

# new string return

karte hain.

Original string unchanged rehti hai.

---

# Correct Way

```js
str = str.toUpperCase();
```

---

# Technical Definition

> Strings in JavaScript are immutable, meaning their original content cannot be changed after creation.

---

# Prototype Chain

```js
console.log(gameName.__proto__);
```

Output:

```js
String.prototype
```

---

```js
console.log(gameName.__proto__.__proto__);
```

Output:

```js
Object.prototype
```

---

```js
console.log(gameName.__proto__.__proto__.__proto__);
```

Output:

```js
null
```

---

# Prototype Chain Visualization

```text
gameName
   ↓
String.prototype
   ↓
Object.prototype
   ↓
null
```

---

# Meaning

JavaScript:
property/method search:
upar prototype chain mein karta hai.

---

# Example

```js
gameName.toUpperCase()
```

JS internally:
pehle:

```js
gameName
```

mein method search karega.

Agar nahi mila:
toh:

```js
String.prototype
```

mein search karega.

---

# Why `null` at End?

`null`
means:
prototype chain end ho gayi.

Uske upar kuch nahi.

---

# Technical Definition

> A prototype chain is the mechanism by which JavaScript objects inherit properties and methods from other objects.

---

# Autoboxing

Primitive strings:
methods directly store nahi karti.

JavaScript internally:
temporary wrapper object create karta hai.

---

# Example

```js
let str = "hello";

console.log(str.toUpperCase());
```

Internally JS roughly ese behave karta hai:

```js
let temp = new String("hello");

temp.toUpperCase();
```

Fir temporary object remove ho jata hai.

---

# Technical Definition

> Autoboxing is the process where JavaScript temporarily wraps primitive values into object wrappers so methods and properties can be accessed.

---

# Common String Methods

---

# toUpperCase()

String ko uppercase mein convert karta hai.

```js
console.log(gameName.toUpperCase());
```

Output:

```js
PUBG
```

---

# toLowerCase()

String ko lowercase mein convert karta hai.

```js
console.log("HELLO".toLowerCase());
```

Output:

```js
hello
```

---

# slice()

String ka part extract karta hai.

---

# Syntax

```js
string.slice(start, end)
```

---

# IMPORTANT RULE

# start included

# end excluded

---

# Example

```js
console.log(gameName.slice(0,3));
```

Output:

```js
pub
```

---

# Example

```js
console.log(gameName.slice(3));
```

Output:

```js
g
```

---

# Negative Indexing in `slice()`

`slice()`
negative indexes support karta hai.

---

# Example

```js
console.log(gameName.slice(-3));
```

Output:

```js
ubg
```

---

# WHY?

```text
p  u  b  g
0  1  2  3

-4 -3 -2 -1
```

`-3`
means:
length - 3

---

# Example

```js
let str = "JavaScript";

console.log(str.slice(-5,-1));
```

Output:

```js
crip
```

---

# Internally

```js
slice(5,9)
```

---

# substring()

String ka part extract karta hai.

---

# Syntax

```js
string.substring(start,end)
```

---

# Example

```js
const newString = gameName.substring(0,2);

console.log(newString);
```

Output:

```js
pu
```

---

# Difference Between `slice()` and `substring()`

| slice()                    | substring()                  |
| -------------------------- | ---------------------------- |
| negative indexes allowed   | negative indexes not allowed |
| start > end → empty string | start/end swap ho jate hain  |
| modern/preferred           | older method                 |

---

# Example

## slice

```js
console.log("hello".slice(4,1));
```

Output:

```js
""
```

---

## substring

```js
console.log("hello".substring(4,1));
```

Output:

```js
ell
```

---

# WHY?

substring:
automatically indexes swap karta hai.

---

# replace()

Sirf first occurrence replace karta hai.

```js
console.log(gameName.replace("g","G"));
```

Output:

```js
pubG
```

---

# replaceAll()

Saare occurrences replace karta hai.

```js
console.log("aaa".replaceAll("a","b"));
```

Output:

```js
bbb
```

---

# trim()

Start aur end se whitespace remove karta hai.

Original string modify nahi hoti.

```js
const str = "   Hello World!   ";

const trimmedStr = str.trim();

console.log(trimmedStr);
```

Output:

```js
Hello World!
```

---

# trimStart()

Start se spaces remove karta hai.

```js
console.log(str.trimStart());
```

---

# trimEnd()

End se spaces remove karta hai.

```js
console.log(str.trimEnd());
```

---

# includes()

Check karta hai:
particular substring present hai ya nahi.

---

# Example

```js
const url ="https://www.youtube.com/watch?v=abc123";

console.log(url.includes("youtube"));
```

Output:

```js
true
```

---

# Important

`includes()`

# case-sensitive

hota hai.

---

# startsWith()

Check karta hai:
string kis substring se start hoti hai.

```js
console.log(url.startsWith("https"));
```

Output:

```js
true
```

---

# endsWith()

Check karta hai:
string kis substring se end hoti hai.

```js
console.log(url.endsWith("abc123"));
```

Output:

```js
true
```

---

# split()

String ko:

# array

mein convert karta hai.

---

# Example

```js
const languages = "JavaScript,Python,Java,C++";

const langArray = languages.split(",");

console.log(langArray);
```

Output:

```js
["JavaScript", "Python", "Java", "C++"]
```

---

# Split by Space

```js
const sentence = "Hello World Welcome";

console.log(sentence.split(" "));
```

Output:

```js
["Hello","World","Welcome"]
```

---

# Character Array

```js
const str = "Hello";

console.log(str.split(""));
```

Output:

```js
["H","e","l","l","o"]
```

---

# join()

Array ko string mein convert karta hai.

---

# Example

```js
let arr = ["Java","Script"];

console.log(arr.join(""));
```

Output:

```js
JavaScript
```

---

# Example

```js
console.log(arr.join("-"));
```

Output:

```js
Java-Script
```

---

# concat()

Strings ko join karta hai.

```js
let firstName = "Harshit";
let lastName = "Goel";

console.log(firstName.concat(" ", lastName));
```

Output:

```js
Harshit Goel
```

---

# repeat()

String ko multiple times repeat karta hai.

```js
console.log("ha".repeat(3));
```

Output:

```js
hahaha
```

---

# padStart()

String ke start mein characters add karta hai.

```js
let num = "5";

console.log(num.padStart(3,"0"));
```

Output:

```js
005
```

---

# padEnd()

String ke end mein characters add karta hai.

```js
let str = "Hi";

console.log(str.padEnd(5,"!"));
```

Output:

```js
Hi!!!
```

---

# search()

Pattern/string ka:

# first index

return karta hai.

---

# Example

```js
let str = "I love JavaScript";

console.log(str.search("Java"));
```

Output:

```js
7
```

---

# Regex Support

```js
let str = "abc123";

console.log(str.search(/[0-9]/));
```

Output:

```js
3
```

---

# match()

Pattern match karta hai aur:
matched data return karta hai.

---

# Example

```js
let str = "cat bat rat";

console.log(str.match(/at/g));
```

Output:

```js
["at","at","at"]
```

---

# `/g` Meaning

Global search.

Matlab:
saare matches lao.

---

# localeCompare()

Strings compare karta hai.

Mostly sorting mein use hota hai.

---

# Rules

| Result   | Meaning              |
| -------- | -------------------- |
| negative | first string smaller |
| positive | first string bigger  |
| 0        | both equal           |

---

# Example

```js
console.log("apple".localeCompare("banana"));
```

Output:

```js
negative value
```

---

# Example

```js
console.log("zebra".localeCompare("apple"));
```

Output:

```js
positive value
```

---

# Example

```js
console.log("cat".localeCompare("cat"));
```

Output:

```js
0
```

---

# String Comparison

Strings:

# lexicographically

compare hoti hain.

Matlab:
dictionary order jaisa comparison.

---

# Example

```js
console.log("apple" < "banana");
```

Output:

```js
true
```

---

# Important Interview Points

* Strings are immutable
* `slice()` supports negative indexing
* `substring()` swaps indexes
* Objects inherit methods through prototype chain
* Primitive strings use autoboxing
* `replace()` replaces first occurrence only
* `replaceAll()` replaces all occurrences
* `split()` converts string → array
* `join()` converts array → string
* `includes()` is case-sensitive
* Strings compare lexicographically
