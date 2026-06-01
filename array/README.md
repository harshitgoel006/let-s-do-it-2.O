# JavaScript Arrays Complete Notes

# Arrays in JavaScript

Array ek special object hota hai jo multiple values ko ek hi variable ke andar store karne ke liye use hota hai.

JavaScript mein arrays:

* Resizable hote hain
* Mixed datatype store kar sakte hain
* Nested arrays support karte hain
* Dynamic hote hain

---

# Array Creation

## Method 1

```js
const myArr = [1,2,3,4,5];
```

## Method 2

```js
const myArr = new Array(1,2,3,4,5);
```

Dono valid hain.

---

# Mixed Datatypes

JavaScript arrays mixed datatypes store kar sakte hain.

```js
const arr = [
   "Harshit",
   20,
   true,
   null
];
```

---

# Nested Arrays

Array ke andar array bhi store kar sakte hain.

```js
const arr = [
   [1,2],
   [3,4]
];
```

Access:

```js
console.log(arr[0][1]);
```

Output:

```js
2
```

---

# Array Indexing

Arrays zero based indexing follow karte hain.

```js
const arr = [10,20,30];
```

Memory:

```text
Index:
0 1 2

Value:
10 20 30
```

---

Access:

```js
console.log(arr[0]);
```

Output:

```js
10
```

---

# Array Length

```js
const arr = [10,20,30];

console.log(arr.length);
```

Output:

```js
3
```

---

# Array References

Array primitive datatype nahi hai.

Array:

```text
Reference Type
```

hai.

Isliye arrays Heap Memory mein store hote hain.

---

Example

```js
let arr1 = [1,2,3];

let arr2 = arr1;
```

Memory:

```text
arr1 ----\
          \
           --> [1,2,3]
          /
arr2 ----/
```

Dono same array ko point kar rahe hain.

---

```js
arr2.push(4);

console.log(arr1);
console.log(arr2);
```

Output:

```js
[1,2,3,4]
[1,2,3,4]
```

---

# Array Comparison

```js
console.log([1,2] === [1,2]);
```

Output:

```js
false
```

Reason:

Dono alag references hain.

---

```js
const arr1 = [1,2];
const arr2 = arr1;

console.log(arr1 === arr2);
```

Output:

```js
true
```

Reason:

Dono same reference hold kar rahe hain.

---

# Array Methods

# push()

Array ke end mein element add karta hai.

```js
const arr = [1,2,3];

arr.push(4);

console.log(arr);
```

Output:

```js
[1,2,3,4]
```

---

# pop()

Array ke end se element remove karta hai.

```js
arr.pop();
```

Output:

```js
[1,2,3]
```

---

# unshift()

Array ke start mein element add karta hai.

```js
arr.unshift(0);
```

Output:

```js
[0,1,2,3]
```

---

# shift()

Array ke start se element remove karta hai.

```js
arr.shift();
```

Output:

```js
[1,2,3]
```

---

# indexOf()

Element ka index return karta hai.

```js
const arr = [10,20,30];

console.log(arr.indexOf(20));
```

Output:

```js
1
```

---

Agar value nahi mili:

```js
console.log(arr.indexOf(100));
```

Output:

```js
-1
```

---

# includes()

Check karta hai value array ke andar hai ya nahi.

```js
console.log(arr.includes(20));
```

Output:

```js
true
```

---

```js
console.log(arr.includes(100));
```

Output:

```js
false
```

---

# join()

Array ko string mein convert karta hai.

```js
const arr = ["a","b","c"];

console.log(arr.join("-"));
```

Output:

```js
a-b-c
```

---

Difference:

```js
const arr = [1,2,3];

console.log(typeof arr);
```

Output:

```js
object
```

---

```js
const result = arr.join();

console.log(typeof result);
```

Output:

```js
string
```

---

# slice()

Array ka ek portion copy karta hai.

Original array ko modify nahi karta.

---

Syntax

```js
array.slice(start,end);
```

Rule:

```text
Start Include
End Exclude
```

---

Example

```js
const arr = [1,2,3,4,5];

console.log(arr.slice(1,4));
```

Output:

```js
[2,3,4]
```

---

Original Array:

```js
[1,2,3,4,5]
```

Same rehta hai.

---

# splice()

Array se elements remove/add karta hai.

Original array ko modify karta hai.

---

Syntax

```js
array.splice(start,count);
```

---

Example

```js
const arr = [1,2,3,4,5];

console.log(arr.splice(1,3));
```

Output:

```js
[2,3,4]
```

---

Original array:

```js
[1,5]
```

Ban jayega.

---

# slice vs splice

| slice                           | splice                            |
| ------------------------------- | --------------------------------- |
| Original array change nahi hota | Original array change hota        |
| New array return karta hai      | Removed elements return karta hai |
| End index use karta hai         | Count use karta hai               |
| Non-destructive                 | Destructive                       |

---

# Looping Through Arrays

## for loop

```js
const arr = [1,2,3];

for(let i=0;i<arr.length;i++){
   console.log(arr[i]);
}
```

---

## for...of

```js
for(let num of arr){
   console.log(num);
}
```

---

## forEach()

```js
arr.forEach(function(num){
   console.log(num);
});
```

---

# Important

forEach:

```js
const result = arr.forEach(
   num => num*2
);

console.log(result);
```

Output:

```js
undefined
```

---

Technical Definition:

> forEach executes a callback for every element but always returns undefined.

---

# map()

Array ke har element par operation perform karta hai aur ek naya array return karta hai.

```js
const arr = [1,2,3];

const result = arr.map(
   num => num*2
);

console.log(result);
```

Output:

```js
[2,4,6]
```

---

# Arrow Function Return Rules

## Implicit Return

```js
arr.map(num => num*2);
```

Automatic return.

---

## Explicit Return

```js
arr.map(num => {
   return num*2;
});
```

---

## Common Mistake

```js
arr.map(num => {
   num*2;
});
```

Output:

```js
[undefined,undefined,undefined]
```

Reason:

Return missing hai.

# concat()

Do ya usse zyada arrays ko merge karne ke liye use hota hai.

Original arrays change nahi hoti.

---

## Syntax

```js
array1.concat(array2)
```

---

## Example

```js
const m1 = ["thor","loki"];
const m2 = ["ironman","captain america"];

const result = m1.concat(m2);

console.log(result);
```

Output:

```js
["thor","loki","ironman","captain america"]
```

---

## Important

```js
console.log(m1);
```

Output:

```js
["thor","loki"]
```

Original array change nahi hui.

---

## Technical Definition

> concat() method two or more arrays ko merge karke ek naya array return karta hai.

---

# push() vs concat()

## push()

```js
const m1 = ["thor","loki"];
const m2 = ["ironman","captain america"];

m1.push(m2);

console.log(m1);
```

Output:

```js
[
 "thor",
 "loki",
 ["ironman","captain america"]
]
```

---

Notice:

```js
m2
```

poora array as a single element add hua.

---

Access:

```js
console.log(m1[2][0]);
```

Output:

```js
ironman
```

---

## concat()

```js
m1.concat(m2);
```

Output:

```js
[
 "thor",
 "loki",
 "ironman",
 "captain america"
]
```

---

Difference:

| push                                    | concat                          |
| --------------------------------------- | ------------------------------- |
| Array ko single element treat karta hai | Arrays merge karta hai          |
| Original array modify hoti hai          | Original array modify nahi hoti |
| Nested array create kar sakta hai       | Flat merge karta hai            |

---

# Spread Operator (...)

Spread operator iterable ke elements ko individual values mein spread karta hai.

---

## Syntax

```js
...array
```

---

## Example

```js
const m1 = ["thor","loki"];
const m2 = ["ironman","captain america"];

const result = [...m1,...m2];

console.log(result);
```

Output:

```js
[
 "thor",
 "loki",
 "ironman",
 "captain america"
]
```

---

## Internal Working

Without spread:

```js
[m1,m2]
```

Output:

```js
[
 ["thor","loki"],
 ["ironman","captain america"]
]
```

---

With spread:

```js
[...m1,...m2]
```

Output:

```js
[
 "thor",
 "loki",
 "ironman",
 "captain america"
]
```

---

## Technical Definition

> Spread operator iterable ke elements ko unpack karta hai.

---

# Shallow Copy

Bahut important concept.

React aur interviews mein frequently aata hai.

---

## Example

```js
const arr1 = [1,2,3];

const arr2 = [...arr1];
```

---

Memory:

```text
arr1 ---> [1,2,3]

arr2 ---> [1,2,3]
```

Alag arrays.

---

```js
arr2.push(4);

console.log(arr1);
console.log(arr2);
```

Output:

```js
[1,2,3]
[1,2,3,4]
```

---

# Shallow Copy Problem

```js
const arr1 = [[1,2],[3,4]];

const arr2 = [...arr1];

arr2[0][0] = 100;
```

Output:

```js
console.log(arr1);
```

```js
[[100,2],[3,4]]
```

---

```js
console.log(arr2);
```

```js
[[100,2],[3,4]]
```

---

WHY?

Outer array copy hui.

Nested arrays same reference share kar rahi hain.

---

## Technical Definition

> Shallow copy top-level values copy karti hai lekin nested references same rehte hain.

---

# flat()

Nested arrays ko flatten karta hai.

---

## Syntax

```js
array.flat(depth)
```

---

## Example

```js
const arr = [1,2,[3,4]];
```

```js
console.log(arr.flat());
```

Output:

```js
[1,2,3,4]
```

---

## Example

```js
const arr = [1,2,[3,4,[5,6]]];

console.log(arr.flat(2));
```

Output:

```js
[1,2,3,4,5,6]
```

---

## Infinity

```js
arr.flat(Infinity);
```

Saare nested levels flatten ho jayenge.

---

## Technical Definition

> flat() nested arrays ko specified depth tak flatten karta hai.

---

# Array.isArray()

Check karta hai value array hai ya nahi.

---

```js
console.log(Array.isArray([1,2]));
```

Output:

```js
true
```

---

```js
console.log(Array.isArray("hello"));
```

Output:

```js
false
```

---

# Array.from()

Array-like ya iterable object ko array mein convert karta hai.

---

## String Example

```js
console.log(Array.from("hello"));
```

Output:

```js
["h","e","l","l","o"]
```

---

## Set Example

```js
const set = new Set([1,2,3]);

console.log(Array.from(set));
```

Output:

```js
[1,2,3]
```

---

## Object Example

```js
console.log(
   Array.from({name:"Harshit"})
);
```

Output:

```js
[]
```

---

WHY?

Object iterable nahi hai.

Length property bhi nahi hai.

---

## Technical Definition

> Array.from() iterable ya array-like object ko new array mein convert karta hai.

---

# Array.of()

Arguments se array create karta hai.

---

```js
console.log(Array.of(1,2,3));
```

Output:

```js
[1,2,3]
```

---

```js
console.log(Array.of(5));
```

Output:

```js
[5]
```

---

Difference:

```js
new Array(5)
```

Output:

```js
[empty × 5]
```

---

```js
Array.of(5)
```

Output:

```js
[5]
```

---

# find()

Condition satisfy karne wala pehla element return karta hai.

---

```js
const arr = [1,2,3,4,5];

console.log(
   arr.find(num => num > 3)
);
```

Output:

```js
4
```

---

Agar match nahi mila:

```js
undefined
```

return hota hai.

---

## Technical Definition

> find() first matching element return karta hai.

---

# filter()

Condition satisfy karne wale saare elements return karta hai.

---

```js
const arr = [1,2,3,4,5];

console.log(
   arr.filter(num => num > 3)
);
```

Output:

```js
[4,5]
```

---

Match na mile:

```js
[]
```

return hota hai.

---

## Difference

| find                   | filter                 |
| ---------------------- | ---------------------- |
| First match            | All matches            |
| Value return karta hai | Array return karta hai |
| Not found => undefined | Not found => []        |

---

# some()

Check karta hai ki kam se kam ek element condition satisfy karta hai ya nahi.

---

```js
const arr = [1,2,3,4];

console.log(
   arr.some(num => num > 3)
);
```

Output:

```js
true
```

---

## Memory Trick

```text
Some = At least one
```

---

# every()

Check karta hai ki saare elements condition satisfy karte hain ya nahi.

---

```js
const arr = [2,4,6];

console.log(
   arr.every(num => num%2===0)
);
```

Output:

```js
true
```

---

```js
const arr = [2,4,5];

console.log(
   arr.every(num => num%2===0)
);
```

Output:

```js
false
```

---

## Memory Trick

```text
Every = All
```

---

# reduce()

Array ko ek single value mein reduce karta hai.

---

## Syntax

```js
array.reduce(
   (acc,curr)=>{},
   initialValue
)
```

---

## Meaning

### acc

Accumulator

Running result.

---

### curr

Current element.

---

## Example

```js
const arr = [1,2,3,4];

const sum = arr.reduce(
   (acc,curr)=>acc+curr,
   0
);

console.log(sum);
```

Output:

```js
10
```

---

Dry Run:

```text
acc=0

0+1=1
1+2=3
3+3=6
6+4=10
```

---

## Product Example

```js
const arr = [2,3,4];

const result = arr.reduce(
   (acc,curr)=>acc*curr,
   1
);
```

Output:

```js
24
```

---

## Technical Definition

> reduce() array ke multiple values ko ek single value mein reduce karta hai.

---

# findIndex()

Condition satisfy karne wale first element ka index return karta hai.

---

```js
const arr = [1,2,3,4,5];

console.log(
   arr.findIndex(num => num > 3)
);
```

Output:

```js
3
```

---

Match na mile:

```js
-1
```

---

# reverse()

Array ko reverse karta hai.

---

```js
const arr = [1,2,3];

arr.reverse();
```

Output:

```js
[3,2,1]
```

---

## Important

Original array modify hoti hai.

---

# sort()

Array ko sort karta hai.

---

## Important Trap

```js
const arr = [1,10,5,2];

arr.sort();

console.log(arr);
```

Output:

```js
[1,10,2,5]
```

---

WHY?

Default sort string comparison karta hai.

Internally:

```js
["1","10","5","2"]
```

sort hote hain.

---

# Numeric Ascending Sort

```js
arr.sort((a,b)=>a-b);
```

Output:

```js
[1,2,5,10]
```

---

# Numeric Descending Sort

```js
arr.sort((a,b)=>b-a);
```

Output:

```js
[10,5,2,1]
```

---

## Compare Function Rules

### Negative

```text
a b se pehle
```

### Positive

```text
b a se pehle
```

### Zero

```text
order same
```

---

# Array Destructuring

Array values ko variables mein assign karne ka modern syntax.

---

## Basic

```js
const arr = [1,2,3];

const [a,b,c] = arr;
```

Output:

```js
a=1
b=2
c=3
```

---

# Skip Values

```js
const arr = [1,2,3,4];

const [a,,c] = arr;
```

Output:

```js
a=1
c=3
```

---

# Rest Operator

```js
const arr = [1,2,3,4,5];

const [a,b,...rest] = arr;
```

Output:

```js
a=1
b=2
rest=[3,4,5]
```

---

# Default Values

```js
const arr = [1];

const [a,b=100] = arr;
```

Output:

```js
a=1
b=100
```

---

Without default:

```js
const [a,b] = [1];
```

Output:

```js
a=1
b=undefined
```

---

# at()

Index ke through value access karta hai.

Negative index bhi support karta hai.

---

```js
const arr = [10,20,30,40,50];

console.log(arr.at(0));
```

Output:

```js
10
```

---

```js
console.log(arr.at(-1));
```

Output:

```js
50
```

---

```js
console.log(arr.at(-2));
```

Output:

```js
40
```

---

Out of range:

```js
console.log(arr.at(100));
```

Output:

```js
undefined
```

---

# fill()

Array ko specified value se fill karta hai.

Original array modify hoti hai.

---

## Syntax

```js
array.fill(value,start,end)
```

Rule:

```text
Start Include
End Exclude
```

---

## Example

```js
const arr = [1,2,3,4,5];

arr.fill(0);
```

Output:

```js
[0,0,0,0,0]
```

---

## Example

```js
arr.fill(1,2);
```

Output:

```js
[0,0,1,1,1]
```

---

## Example

```js
arr.fill(2,1,4);
```

Output:

```js
[0,2,2,2,1]
```

---

# Important Interview Points

1. Arrays are Reference Types.
2. Arrays are stored in Heap Memory.
3. `typeof []` returns `"object"`.
4. `Array.isArray()` is the correct way to check arrays.
5. `slice()` does not modify original array.
6. `splice()` modifies original array.
7. `forEach()` always returns `undefined`.
8. `map()` returns a new array.
9. `find()` returns first match.
10. `filter()` returns all matches.
11. `some()` means at least one.
12. `every()` means all.
13. Default `sort()` performs string comparison.
14. `reverse()` modifies original array.
15. Spread operator creates a shallow copy.
16. Nested arrays/objects still share references in shallow copy.
17. `at(-1)` is modern way to access last element.
18. `fill()` modifies original array.
