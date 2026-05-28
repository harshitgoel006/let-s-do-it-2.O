# JavaScript Stack and Heap Memory Notes

# Memory in JavaScript

JavaScript mein mainly 2 types ki memory hoti hai:

1. Stack Memory
2. Heap Memory

---

# Stack Memory

Stack memory:

* fast hoti hai
* static memory allocation use karti hai
* primitive data types store karti hai  
* jesse ki number, string, symbol, boolean, null etc

---

# Heap Memory

Heap memory:

* dynamic memory allocation use karti hai
* large aur complex data store karti hai
* non-primitive/reference data types store karti hai
* jesse ki object , array, function ,and other refrence datatype

---

# Technical Definition

## Stack Memory

> Stack memory is a memory region used for storing primitive values and function execution contexts in a last-in-first-out (LIFO) manner.

---

## Heap Memory

> Heap memory is a dynamically allocated memory region used for storing objects, arrays, functions, and other reference data types.

---

# Primitive vs Non-Primitive

| Primitive Types | Non-Primitive Types |
| --------------- | ------------------- |
| Number          | Object              |
| String          | Array               |
| Boolean         | Function            |
| Null            | Date                |
| Undefined       | Map/Set             |
| Symbol          | Custom Objects      |
| BigInt          |                     |

---

# Primitive Data Types → Stack Memory

Primitive values:

# copy by value

hote hain.

Matlab:
actual value ki independent copy banti hai.

---

# Example

```js
let myName = "harshit";
let anotherName = myName;

myName = "rohit";

console.log(myName);
console.log(anotherName);
```

Output:

```js
rohit
harshit
```

---

# WHY?

Kyuki:

```js
anotherName
```

me:
actual value copy hui thi.

Reference copy nahi hua tha.

---

# Memory Visualization

```text
STACK

myName ------> "rohit"

anotherName -> "harshit"
```

---

# Important Point

Primitive types:

# independent copies

banate hain.

Ek variable change karne se:
dusra variable affect nahi hota.

---

# Non-Primitive Data Types → Heap Memory

Objects, arrays, functions:

# heap memory

mein store hote hain.

Variables:
actual object store nahi karte.

Variables:

# reference/address

store karte hain.

---

# Example

```js
let myObjOne = {
   name: "harshit",
   age: 25,
   city: "delhi"
};

let myObjTwo = myObjOne;

myObjOne.name = "rohit";

console.log(myObjOne);
console.log(myObjTwo);
```

Output:

```js
{ name: 'rohit', age: 25, city: 'delhi' }
{ name: 'rohit', age: 25, city: 'delhi' }
```

---

# WHY?

Kyuki:

```js
myObjTwo
```

same object ka reference hold kar raha tha.

Dono variables:
same object ko point kar rahe the.

---

# Memory Visualization

```text
STACK

myObjOne ----\
                ---> HEAP
myObjTwo ----/      {
                        name:"rohit",
                        age:25,
                        city:"delhi"
                     }
```

---

# Important Point

Objects:

# copy by reference

hote hain.

---

# Arrays in JavaScript

Arrays bhi internally:

# objects

hote hain.

Isliye:
arrays bhi reference behavior follow karte hain.

---

# Example

```js
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2);
```

Output:

```js
false
```

---

# WHY?

Kyuki:
dono arrays:
different memory locations par create hue.

---

# Memory Visualization

```text
arr1 -> ref101 -> [1,2,3]

arr2 -> ref202 -> [1,2,3]
```

Different references.

---

# Reference Copy Example

```js
let arr1 = [1,2,3];

let arr3 = arr1;

arr1.push(4);

console.log(arr1);
console.log(arr3);
```

Output:

```js
[1,2,3,4]
[1,2,3,4]
```

---

# WHY?

Kyuki:

```js
arr3
```

same array object ko point kar raha tha.

---

# Object Comparison in JavaScript

Objects aur arrays:

# by reference compare

hote hain.

NOT by value.

---

# Example

```js
console.log({} === {});
```

Output:

```js
false
```

---

# WHY?

Har object:
new memory location create karta hai.

---

# Example

```js
let obj1 = {
   name: "Harshit"
};

let obj2 = obj1;

console.log(obj1 === obj2);
```

Output:

```js
true
```

---

# WHY?

Kyuki:
dono same reference ko point kar rahe hain.

---

# Important Interview Point

> Objects and arrays in JavaScript are compared by reference, not by value.

---

# Mutation vs Reassignment

---

# Mutation

Existing object ke andar changes karna.

```js
obj1.name = "Rohit";
```

Same object modify hua.

---

# Reassignment

Completely new object assign karna.

```js
obj1 = {
   name: "Aman"
};
```

New reference create hua.

---

# Important Difference

| Mutation                    | Reassignment               |
| --------------------------- | -------------------------- |
| Same object modify hota hai | New object assign hota hai |
| Reference same rehta hai    | Reference change hota hai  |

---

# Shallow Copy

Shallow copy mein:

* top-level properties copy hoti hain
* nested objects ka reference same rehta hai

---

# Technical Definition

> A shallow copy copies only the top-level properties, while nested objects are still copied by reference.

---

# Shallow Copy Syntaxes

## 1. Spread Operator

```js
let obj1 = {name:"harshit"};

let obj2 = {...obj1};
```

---

## 2. Object.assign()

```js
let obj1 = {name:"harshit"};

let obj2 = Object.assign({}, obj1);
```

---

# Example

```js
let user1 = {
   name: "Harshit",
   address: {
      city: "Delhi"
   }
};

let user2 = {...user1};

user2.address.city = "Mumbai";

console.log(user1.address.city);
console.log(user2.address.city);
```

Output:

```js
Mumbai
Mumbai
```

---

# WHY?

Kyuki:
nested:

```js
address
```

same reference ko point kar raha tha.

---

# Memory Visualization

```text
user1 -> ref101
user2 -> ref202

ref101.address ----\
                     ---> ref500 -> {city:"Mumbai"}
ref202.address ----/
```

---

# Deep Copy

Deep copy mein:

* top-level properties copy hoti hain
* nested objects bhi independently copy hote hain

---

# Technical Definition

> A deep copy creates completely independent copies of both top-level and nested objects.

---

# Modern Deep Copy

```js
let obj1 = {
   name:"harshit",
   address:{
      city:"delhi"
   }
};

let obj2 = structuredClone(obj1);
```

---

# Example

```js
let user1 = {
   name: "Harshit",
   address: {
      city: "Delhi"
   }
};

let user2 = structuredClone(user1);

user2.address.city = "Mumbai";

console.log(user1.address.city);
console.log(user2.address.city);
```

Output:

```js
Delhi
Mumbai
```

---

# WHY?

Kyuki:
nested object bhi separately copy hua.

---

# Old Deep Copy Method

```js
let obj2 = JSON.parse(JSON.stringify(obj1));
```

---

# Limitations of Old Method

Ye properly copy nahi karta:

* functions
* undefined
* symbols
* dates

Isliye:
modern:

```js
structuredClone()
```

better hai.

---

# Garbage Collection

JavaScript automatically unused memory clean karta hai.

Is process ko:

# garbage collection

kehte hain.

---

# Technical Definition

> Garbage collection is the automatic process of removing objects from memory that are no longer reachable.

---

# Reachable Object

Aisa object:
jisko kisi variable/reference se access kar sakte hain.

---

# Unreachable Object

Aisa object:
jisko koi bhi variable reference nahi kar raha.

---

# Example

```js
let obj1 = {
   name: "harshit"
};

let obj2 = obj1;

obj1 = null;

console.log(obj1);
console.log(obj2);
```

Output:

```js
null
{ name: "harshit" }
```

---

# WHY?

Kyuki:

```js
obj2
```

abhi bhi original object ko point kar raha hai.

Object:
memory se remove nahi hua.

---

# Memory Visualization

```text
STACK

obj1 -> null

obj2 ----------> {
                    name:"harshit"
                 }
```

---

# Garbage Collection Kab Hoga?

Jab:
koi bhi reference object ko point nahi karega.

Example:

```js
let user = {
   name: "Harshit"
};

user = null;
```

Ab:
old object unreachable ho gaya.

Toh:
JavaScript later us memory ko free kar dega.

---

# Object.assign() Method

Object copy aur merge karne ke liye use hota hai.

---

# Copy Example

```js
let obj1 = {
   name: "Harshit"
};

let obj2 = Object.assign({}, obj1);
```

---

# Merge Example

```js
let obj1 = {
   name: "harshit"
};

let obj2 = {
   age: 25
};

let mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj);
```

Output:

```js
{
   name:"harshit",
   age:25
}
```

---

# Merging with Spread Operator

```js
let mergedObj = {
   ...obj1,
   ...obj2
};
```

---

# Important Point

Both:

```js
Object.assign()
```

and:

```js
spread operator
```

perform:

# shallow copy.

---

# Most Important Interview Points

* Primitive types are copied by value
* Objects/arrays/functions are copied by reference
* Objects compare by reference, not by value
* Spread operator performs shallow copy
* `structuredClone()` performs deep copy
* Nested objects remain shared in shallow copy
* Garbage collection removes unreachable objects
* Arrays are objects internally
* Mutation changes the same object
* Reassignment changes the reference
