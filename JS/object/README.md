# JavaScript Objects Complete Notes (Part 1)

# Objects in JavaScript

Object JavaScript ka ek non-primitive (reference type) datatype hai jo key-value pairs ko store karta hai.

Array bhi internally object hi hota hai lekin array indexed collection hota hai jabki object key-value collection hota hai.

---

# Why Objects?

Suppose hume kisi user ki multiple information store karni hai.

Without Object:

```js
const userName = "Harshit";
const age = 20;
const city = "Delhi";
```

Object ke saath:

```js
const user = {
    name:"Harshit",
    age:20,
    city:"Delhi"
}
```

Saari related information ek hi jagah store ho gayi.

---

# Objects are Reference Types

Objects Heap Memory mein store hote hain.

Variables object ko directly store nahi karte.

Variables object ka reference (address) store karte hain.

```text
Stack

user
 |
 |
 ↓

Heap

{
 name:"Harshit"
}
```

Ye concept baad mein references aur shallow/deep copy mein bahut important hoga.

---

# Object Creation

JavaScript mein object create karne ke do common tarike hain.

---

# Method 1 : Object Literal

Most Common

```js
const user = {
    name:"Harshit",
    age:20
}
```

Ye sabse zyada use hone wala syntax hai.

---

# Method 2 : Object Constructor

```js
const user = new Object();

user.name = "Harshit";
user.age = 20;
```

Output:

```js
{
  name:"Harshit",
  age:20
}
```

---

# Object Literal vs Constructor

```js
const obj1 = {};
```

```js
const obj2 = new Object();
```

Dono empty object create karte hain.

Difference sirf syntax ka hai.

---

# Singleton Object

Interview Point

Constructor se banaya gaya object singleton object kehlata hai.

```js
const obj = new Object();
```

Object literal se generally singleton create nahi hota.

```js
const obj = {};
```

---

# Symbol in Objects

Symbol ek unique identifier hota hai.

```js
const mySym = Symbol("mySymbol");
```

---

# Object Literal Example

```js
const obj = {
    name:"Harshit",
    age:20,
    location:"Delhi",
    isStudent:true,
    email:"harshit@example.com"
}
```

---

# Symbol as Object Property

Wrong Way

```js
const mySym = Symbol("mySymbol");

const obj = {
    mySym:"Harshit"
}
```

Yahan:

```js
mySym
```

normal property ban gayi.

---

Check:

```js
console.log(typeof obj.mySym);
```

Output:

```js
string
```

NOT symbol.

---

# Correct Way

```js
const mySym = Symbol("mySymbol");

const obj = {
    [mySym]:"Harshit"
}
```

Square brackets zaroori hain.

---

Access:

```js
console.log(obj[mySym]);
```

Output:

```js
Harshit
```

---

# Property Access

Object properties ko access karne ke do tarike hain.

---

# Dot Notation

```js
console.log(obj.name);
```

Output:

```js
Harshit
```

---

# Bracket Notation

```js
console.log(obj["name"]);
```

Output:

```js
Harshit
```

---

# Dot vs Bracket Notation

## Dot Notation

```js
obj.name
```

Jab property name pehle se pata ho.

---

## Bracket Notation

```js
obj["name"]
```

Jab property dynamic ho.

---

# Property Name with Spaces

```js
const user = {
    "full name":"Harshit Goel"
}
```

Wrong:

```js
user.full name
```

❌ Error

---

Correct:

```js
user["full name"]
```

✅

---

# Dynamic Access

```js
const key = "name";

console.log(user[key]);
```

Internally:

```js
user["name"]
```

ban jata hai.

---

# Important Interview Trap

```js
const user = {
    name:"Harshit"
}

const key = "name";

console.log(user.key);
```

Output:

```js
undefined
```

---

WHY?

JavaScript literally:

```js
user["key"]
```

search karega.

NOT:

```js
user["name"]
```

---

Correct:

```js
console.log(user[key]);
```

Output:

```js
Harshit
```

---

# Add New Property

```js
const user = {
    name:"Harshit"
}

user.city = "Delhi";
```

Output:

```js
{
  name:"Harshit",
  city:"Delhi"
}
```

---

# Update Property

```js
user.city = "Mumbai";
```

Output:

```js
{
  name:"Harshit",
  city:"Mumbai"
}
```

---

# Object.freeze()

Object ko immutable banata hai.

Freeze ke baad:

❌ Add

❌ Delete

❌ Modify

---

Example

```js
const user = {
   name:"Harshit"
}

Object.freeze(user);

user.name = "Rohit";

console.log(user.name);
```

Output:

```js
Harshit
```

---

# Technical Definition

Object.freeze() object ko freeze kar deta hai jiske baad uski properties modify, delete ya add nahi ki ja sakti.

---

# Methods Inside Objects

Object ke andar function ko method kehte hain.

```js
const user = {
   name:"Harshit",

   greet:function(){
      console.log("Hello");
   }
}
```

---

Call Method

```js
user.greet();
```

Output:

```js
Hello
```

---

# this Keyword (Basic)

```js
const user = {
   name:"Harshit",

   greet:function(){
      console.log(this.name);
   }
}
```

Output:

```js
Harshit
```

---

# Meaning of this

Object ke andar:

```js
this
```

current object ko refer karta hai.

---

Example

```js
const user = {
   name:"Harshit",
   age:20,

   greet:function(){
      console.log(
         "Hello my name is "
         + this.name
      );
   }
}
```

---

# Function Return Trap

```js
console.log(user.greet());
```

Output:

```js
Hello my name is Harshit

undefined
```

---

WHY?

Function ke andar:

```js
return
```

nahi tha.

Isliye default return value:

```js
undefined
```

aayi.

---

# Nested Objects

Object ke andar object.

```js
const user = {
   name:"Harshit",

   fullName:{
      firstName:"Harshit",
      lastName:"Goel"
   }
}
```

---

Access

```js
console.log(
   user.fullName.firstName
);
```

Output:

```js
Harshit
```

---

# Object Utility Methods

## Object.keys()

Object ki saari keys return karta hai.

```js
const obj = {
   1:"one",
   2:"two",
   3:"three"
}
```

```js
console.log(
   Object.keys(obj)
);
```

Output:

```js
["1","2","3"]
```

---

# Object.values()

Saari values return karta hai.

```js
console.log(
   Object.values(obj)
);
```

Output:

```js
["one","two","three"]
```

---

# Object.entries()

Key-value pairs ko array format mein return karta hai.

```js
console.log(
   Object.entries(obj)
);
```

Output:

```js
[
 ["1","one"],
 ["2","two"],
 ["3","three"]
]
```

---

# Object.hasOwn()

Check karta hai property exist karti hai ya nahi.

```js
console.log(
   Object.hasOwn(obj,"1")
);
```

Output:

```js
true
```

---

```js
console.log(
   Object.hasOwn(obj,"10")
);
```

Output:

```js
false
```

---

# Merging Objects

Multiple objects ko combine karna.

```js
const obj1 = {
   1:"one",
   2:"two"
}

const obj2 = {
   3:"three",
   4:"four"
}
```

---

# Syntax 1

```js
const result = {
   obj1,
   obj2
}
```

Output:

```js
{
   obj1:{...},
   obj2:{...}
}
```

Object ke andar object.

Properties merge nahi hoti.

---

# Syntax 2

```js
const result =
Object.assign(obj1,obj2);
```

Properties merge hoti hain.

⚠️ Original object modify hota hai.

---

# Syntax 3

```js
const result = {
   ...obj1,
   ...obj2
}
```

Most Common.

Recommended.

---

# Syntax 4

```js
const result =
Object.assign(
   {},
   obj1,
   obj2
);
```

Safe version.

Original objects modify nahi hote.

---

# Syntax Comparison

Syntax 1:

```js
{obj1,obj2}
```

Nested object create karta hai.

---

Syntax 2,3,4:

Properties merge karte hain.

```js
{
 1:"one",
 2:"two",
 3:"three",
 4:"four"
}
```

create hota hai.

---

# Array of Objects

Real world mein bahut use hota hai.

```js
const users = [
   {
      name:"Harshit",
      age:20
   },
   {
      name:"Rohit",
      age:22
   }
]
```

---

Access

```js
console.log(
   users[0].name
);
```

Output:

```js
Harshit
```

---

Loop

```js
for(let i=0;i<users.length;i++){
   console.log(
      users[i].name
   );
}
```

Output:

```js
Harshit
Rohit
```

---

# Object Destructuring (Basic)

Object se values extract karne ka modern syntax.

```js
const course = {
   name:"JavaScript",
   instructor:"Harshit"
}
```

Traditional Way

```js
const instructor =
course.instructor;
```

---

Destructuring

```js
const {
   instructor
} = course;
```

---

Output

```js
console.log(instructor);
```

```js
Harshit
```

---

# Rename During Destructuring

```js
const {
   instructor:inst
} = course;
```

Output:

```js
console.log(inst);
```

```js
Harshit
```

---

Technical Meaning:

```js
const inst =
course.instructor;
```

ke equivalent hai.

---

# Object References

Objects Reference Types hote hain.

Object ki value directly variable mein store nahi hoti.

Variable sirf object ka reference (address) store karta hai.

---

## Example

```js
const obj1 = {
   name:"Harshit"
};

const obj2 = obj1;
```

Memory:

```text
obj1 ----\
          \
           ---> {
                  name:"Harshit"
                }
          /
obj2 ----/
```

Dono same object ko point kar rahe hain.

---

```js
obj1.name = "Rohit";

console.log(obj1.name);
console.log(obj2.name);
```

Output:

```js
Rohit
Rohit
```

---

WHY?

Dono variables same object ko point kar rahe hain.

Object ek hi hai.

---

# Object Comparison

Interview Favourite

---

## Example 1

```js
const obj1 = {
   name:"Harshit"
};

const obj2 = {
   name:"Harshit"
};

console.log(obj1 === obj2);
```

Output:

```js
false
```

---

WHY?

Memory:

```text
obj1 ---> Address A

obj2 ---> Address B
```

Value same hai.

Reference different hai.

---

## Example 2

```js
const obj1 = {
   name:"Harshit"
};

const obj2 = obj1;

console.log(obj1 === obj2);
```

Output:

```js
true
```

---

WHY?

Dono same address ko point kar rahe hain.

---

# Important Rule

Primitive Datatypes:

```text
Value Compare Hoti Hai
```

Objects / Arrays / Functions:

```text
Reference Compare Hota Hai
```

---

Examples

```js
10 === 10
```

Output:

```js
true
```

---

```js
{} === {}
```

Output:

```js
false
```

---

```js
[] === []
```

Output:

```js
false
```

---

# Shallow Copy

Shallow Copy mein top-level properties copy hoti hain.

Nested objects ka reference same rehta hai.

---

## Spread Operator

```js
const user1 = {
   name:"Harshit"
};

const user2 = {
   ...user1
};
```

---

Memory:

```text
user1 ---> {
             name:"Harshit"
          }

user2 ---> {
             name:"Harshit"
          }
```

Alag objects.

---

```js
user1.name = "Rohit";

console.log(user1.name);
console.log(user2.name);
```

Output:

```js
Rohit
Harshit
```

---

# Shallow Copy Problem

```js
const user1 = {
   name:"Harshit",

   address:{
      city:"Delhi"
   }
};

const user2 = {
   ...user1
};

user2.address.city = "Mumbai";
```

Output:

```js
console.log(user1.address.city);
console.log(user2.address.city);
```

```js
Mumbai
Mumbai
```

---

WHY?

Outer Object copy hua.

Nested object copy nahi hua.

Nested object ka reference same raha.

---

Memory:

```text
user1 -----> {
               name:"Harshit",

               address ----\
                             \
                              ---> {
                                     city:"Delhi"
                                   }
                             /
user2 -----> {
               name:"Harshit",

               address ----/
             }
```

---

# Technical Definition

Shallow Copy:

```text
Top Level Properties Copy
Nested References Shared
```

---

# Deep Copy

Deep Copy mein:

```text
Top Level Properties
+
Nested Objects
+
Nested Arrays
```

sab copy hote hain.

Reference completely different hota hai.

---

# Modern Way

```js
const user2 =
structuredClone(user1);
```

Recommended Method.

---

## Example

```js
const user1 = {
   name:"Harshit",

   address:{
      city:"Delhi"
   }
};

const user2 =
structuredClone(user1);

user2.address.city =
"Mumbai";
```

Output:

```js
console.log(user1.address.city);
console.log(user2.address.city);
```

```js
Delhi
Mumbai
```

---

WHY?

Nested object bhi copy hua.

Reference different hai.

---

# Deep Copy Comparison

```js
const obj1 = {
   name:"Harshit"
};

const obj2 =
structuredClone(obj1);

console.log(obj1 === obj2);
```

Output:

```js
false
```

---

# Old Deep Copy Method

```js
const copy =
JSON.parse(
   JSON.stringify(obj)
);
```

---

Ye bhi deep copy create karta hai.

Lekin kuch limitations hain.

---

# Limitations

Ye properly handle nahi karta:

```js
function(){}
```

```js
undefined
```

```js
Symbol()
```

```js
Date
```

```js
Map
```

```js
Set
```

---

Modern Recommendation:

```js
structuredClone()
```

---

# Optional Chaining (?.)

Modern JavaScript ka bahut important feature.

React mein daily use hota hai.

---

Problem:

```js
const user = {
   name:"Harshit"
};

console.log(
   user.address.city
);
```

Output:

```js
TypeError
```

---

WHY?

```js
user.address
```

↓

```js
undefined
```

---

Ab:

```js
undefined.city
```

Error.

---

# Solution

```js
console.log(
   user?.address?.city
);
```

Output:

```js
undefined
```

---

Error nahi aayega.

---

# Meaning

Optional Chaining:

```js
?.
```

bolta hai:

```text
Property Exist Hai?
↓
Yes -> Continue

No
↓
undefined Return Kar Do
```

---

## Example

```js
const user = {
   address:{
      city:"Delhi"
   }
};

console.log(
   user?.address?.city
);
```

Output:

```js
Delhi
```

---

## Example

```js
const user = null;

console.log(
   user?.name
);
```

Output:

```js
undefined
```

---

# delete Operator

Object ki property delete karne ke liye.

---

```js
const user = {
   name:"Harshit"
};

delete user.name;

console.log(user);
```

Output:

```js
{}
```

---

## Return Value

delete boolean return karta hai.

---

Successfully Delete:

```js
true
```

---

Delete Failed:

```js
false
```

---

## Example

```js
const user = {
   name:"Harshit"
};

console.log(
   delete user.name
);
```

Output:

```js
true
```

---

## After Delete

```js
console.log(user.name);
```

Output:

```js
undefined
```

---

# Important

delete mainly:

```text
Object Properties
```

ke liye use hota hai.

---

Variables ke liye use nahi karte.

```js
let x = 10;

delete x;
```

Output:

```js
false
```

---

# Object.seal()

freeze() ka chhota bhai 😎

---

# Object.freeze()

Freeze ke baad:

❌ Add

❌ Delete

❌ Modify

---

Example

```js
const user = {
   name:"Harshit"
};

Object.freeze(user);

user.name = "Rohit";

console.log(user.name);
```

Output:

```js
Harshit
```

---

# Object.seal()

Seal ke baad:

❌ Add

❌ Delete

✅ Modify Existing Property

---

Example

```js
const user = {
   name:"Harshit"
};

Object.seal(user);

user.name = "Rohit";

console.log(user.name);
```

Output:

```js
Rohit
```

---

## Example

```js
const user = {
   name:"Harshit"
};

Object.seal(user);

user.age = 20;

console.log(user);
```

Output:

```js
{
   name:"Harshit"
}
```

---

Age property add nahi hogi.

---

# Freeze vs Seal

| Feature                  | freeze() | seal() |
| ------------------------ | -------- | ------ |
| Add Property             | ❌        | ❌      |
| Delete Property          | ❌        | ❌      |
| Modify Existing Property | ❌        | ✅      |

---

# for...in Loop

Object iterate karne ke liye.

---

```js
const course = {
   name:"JavaScript",
   duration:"3 Months",
   price:1000
};

for(let key in course){
   console.log(key);
}
```

Output:

```js
name
duration
price
```

---

for...in:

```text
Keys Return Karta Hai
```

---

# Values Access

```js
for(let key in course){
   console.log(
      course[key]
   );
}
```

Output:

```js
JavaScript
3 Months
1000
```

---

# Important Trap

```js
for(let key in course){
   console.log(course.key);
}
```

Output:

```js
undefined
undefined
undefined
```

---

WHY?

JavaScript literally:

```js
course["key"]
```

search karta hai.

NOT:

```js
course[key]
```

---

Correct:

```js
course[key]
```

---

# Advanced Destructuring

## Default Values

```js
const user = {
   name:"Harshit"
};

const {
   city = "Delhi"
} = user;

console.log(city);
```

Output:

```js
Delhi
```

---

Default value tabhi use hoti hai jab property:

```js
undefined
```

ho.

---

# Rename

```js
const {
   name:userName
} = user;
```

Equivalent:

```js
const userName =
user.name;
```

---

# Nested Destructuring

```js
const user = {
   address:{
      city:"Delhi"
   }
};

const {
   address:{
      city
   }
} = user;

console.log(city);
```

Output:

```js
Delhi
```

---

# Nested Destructuring + Rename

```js
const {
   address:{
      city:userCity
   }
} = user;
```

Output:

```js
Delhi
```

---

