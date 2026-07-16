# JavaScript DOM (Document Object Model) - Complete README (Part 1)

---

# DOM (Document Object Model)

## DOM Kya Hai?

### Normal Language

Jab browser kisi HTML page ko load karta hai toh woh HTML ko directly understand nahi karta. Browser HTML ko ek tree structure mein convert karta hai jise hum DOM (Document Object Model) kehte hain.

JavaScript isi DOM ke through page ke elements ko access, modify, delete aur create kar sakti hai.

Simple words mein:

```text
DOM = HTML Page ka JavaScript Version
```

---

### Technical Language

DOM (Document Object Model) is a programming interface for HTML documents. It represents the document as a tree of nodes and objects so that JavaScript can dynamically access and manipulate the content, structure and styles of the page.

---

## DOM Tree Structure

Example:

```html
<html>
<head>
    <title>DOM</title>
</head>
<body>
    <div>
        <h1>Hello</h1>
        <p>Paragraph</p>
    </div>
</body>
</html>
```

Browser internally:

```text
window
 |
document
 |
html
 |
 |------ head
 |          |
 |          ------ title
 |                     |
 |                     ------ textNode
 |
 ------ body
             |
             ------ div
                       |
                       ------ h1
                       |     |
                       |     ------ textNode
                       |
                       ------ p
                             |
                             ------ textNode
```

---

## Window Object

Browser mein sabse top level object:

```js
window
```

Sab kuch window ke andar hota hai.

```text
window
  |
document
  |
DOM
```

---

## document Object

DOM access karne ka entry point:

```js
document
```

Example:

```js
console.log(document)
```

```js
console.dir(document)
```

---

### console.log(document)

HTML structure dikhata hai.

---

### console.dir(document)

Document ko JavaScript object ki tarah dikhata hai.

Properties aur methods dikhata hai.

---

# SELECTORS

Selectors ka use DOM ke elements ko select karne ke liye hota hai.

---

# getElementById()

## Normal Language

Jab kisi element ke paas unique id ho aur hume usko access karna ho tab hum getElementById() use karte hain.

---

## Technical Language

Returns the element whose id matches the supplied string.

---

## Syntax

```js
document.getElementById("idName")
```

---

## Example

HTML:

```html
<h1 id="title">
    DOM Learning
</h1>
```

JS:

```js
const title =
document.getElementById("title");
```

Output:

```html
<h1 id="title">
    DOM Learning
</h1>
```

---

## Accessing Properties

```js
title.id
```

Output:

```js
"title"
```

---

```js
title.className
```

Output:

```js
"heading"
```

---

## Common Mistake

```js
title.class
```

Output:

```js
undefined
```

Because:

```text
class JavaScript keyword hai.
```

Isliye:

```js
className
```

use karte hain.

---

# querySelector()

## Normal Language

CSS selector ki help se element select karta hai.

Sirf pehla matching element return karta hai.

---

## Technical Language

Returns the first element within the document that matches the specified CSS selector.

---

## Syntax

```js
document.querySelector(selector)
```

---

## Example

```html
<li>One</li>
<li>Two</li>
<li>Three</li>
```

```js
const item =
document.querySelector("li");
```

Output:

```html
<li>One</li>
```

---

## Practice Question

```js
const item =
document.querySelector("li");

console.log(item.innerText);
```

Output:

```js
One
```

---

### Why?

```text
querySelector()
↓
First Matching Element
```

---

## More Examples

### Select by id

```js
document.querySelector("#title")
```

---

### Select by class

```js
document.querySelector(".heading")
```

---

### Select first li

```js
document.querySelector("li")
```

---

# querySelectorAll()

## Normal Language

Saare matching elements return karta hai.

---

## Technical Language

Returns a static NodeList containing all elements matching the selector.

---

## Syntax

```js
document.querySelectorAll(selector)
```

---

## Example

```js
const items =
document.querySelectorAll("li");
```

Output:

```js
NodeList(3)
```

---

## Practice

```js
console.log(items.length)
```

Output:

```js
3
```

---

## Important

Return Type:

```js
NodeList
```

NOT

```js
Array
```

---

## Check

```js
Array.isArray(items)
```

Output:

```js
false
```

---

## NodeList Features

### forEach Available

```js
items.forEach((item)=>{
    console.log(item.innerText);
})
```

Output:

```text
One
Two
Three
```

---

# getElementsByClassName()

## Normal Language

Class name ke basis par elements return karta hai.

---

## Syntax

```js
document.getElementsByClassName("list")
```

Output:

```js
HTMLCollection
```

---

# getElementsByTagName()

## Normal Language

Tag name ke basis par elements return karta hai.

---

## Example

```js
document.getElementsByTagName("li")
```

Output:

```js
HTMLCollection
```

---

# HTMLCollection vs NodeList

Bahut important interview topic.

---

## NodeList

Source:

```js
querySelectorAll()
```

---

## HTMLCollection

Source:

```js
getElementsByClassName()
```

```js
getElementsByTagName()
```

---

## Difference 1

NodeList:

```js
forEach()
```

available.

---

HTMLCollection:

```js
forEach()
```

available nahi.

---

Example

```js
const temp =
document.getElementsByClassName("list");

temp.forEach(()=>{
})
```

Output:

```js
TypeError
```

---

## Why?

HTMLCollection array nahi hai.

---

## Convert into Array

```js
const arr =
Array.from(temp);
```

Ab:

```js
arr.forEach(()=>{
})
```

works perfectly.

---

# CONTENT APIs

DOM mein content read aur modify karne ke liye use hote hain.

---

# innerText

## Normal Language

Sirf wahi text return karta hai jo user ko screen par visible hai.

---

## Example

HTML:

```html
<h1 id="title">
    DOM Learning
    <span style="display:none">
        Harshit
    </span>
</h1>
```

---

```js
title.innerText
```

Output:

```js
DOM Learning
```

---

## Why?

```text
innerText
↓
Visible Content Only
```

---

# textContent

## Normal Language

Visible aur hidden dono text return karta hai.

---

## Example

```js
title.textContent
```

Output:

```js
DOM Learning Harshit
```

---

## Why?

```text
textContent
↓
DOM ke andar jo text hai sab return karega
```

Chahe visible ho ya hidden.

---

# innerHTML

## Normal Language

Complete HTML return karta hai.

---

## Example

```js
title.innerHTML
```

Output:

```html
DOM Learning
<span style="display:none">
    Harshit
</span>
```

---

## Why?

```text
innerHTML
↓
HTML Structure Return Karta Hai
```

---

# Most Important Difference

## innerText

```text
What USER Sees
```

---

## textContent

```text
What DOM Contains
```

---

## innerHTML

```text
What HTML Contains
```

---

# Practice Question

```js
title.innerText =
"<h2>Harshit</h2>";
```

Output:

```text
<h2>Harshit</h2>
```

---

### Why?

```text
innerText
HTML Parse Nahi Karta
```

---

# Practice Question

```js
title.innerHTML =
"<h2>Harshit</h2>";
```

Output:

Actual:

```html
<h2>Harshit</h2>
```

Heading create ho jayegi.

---

### Why?

```text
innerHTML
HTML Parse Karta Hai
```

---

# ATTRIBUTES

Attributes HTML element ke extra information holders hote hain.

Example:

```html
<h1
 id="title"
 class="heading">
</h1>
```

Yahan:

```text
id
class
```

attributes hain.

---

# getAttribute()

## Normal Language

Kisi attribute ki value read karne ke liye use karte hain.

---

## Syntax

```js
element.getAttribute(attributeName)
```

---

## Example

```js
title.getAttribute("id")
```

Output:

```js
title
```

---

```js
title.getAttribute("class")
```

Output:

```js
heading
```

---

## Attribute Exist Nahi Karta

```js
title.getAttribute("age")
```

Output:

```js
null
```

---

# setAttribute()

## Normal Language

Attribute ki value set ya update karta hai.

---

## Syntax

```js
element.setAttribute(
    attribute,
    value
)
```

---

## Example

```js
title.setAttribute(
    "class",
    "test"
)
```

Output:

```html
class="test"
```

---

## Very Important

Ye append nahi karta.

Replace karta hai.

---

Before:

```html
class="heading"
```

After:

```js
title.setAttribute(
    "class",
    "test"
)
```

Result:

```html
class="test"
```

NOT

```html
class="heading test"
```

---

# Styling through JavaScript

```js
title.style.backgroundColor =
"green";
```

---

```js
title.style.padding =
"15px";
```

---

```js
title.style.borderRadius =
"5px";
```

---

## Why Camel Case?

CSS:

```css
background-color
```

JS:

```js
backgroundColor
```

because:

```text
hyphen JS variables mein allowed nahi
```

---

# Static vs Live Collection

Ye bahut important concept hai.

---

# Static NodeList

Source:

```js
querySelectorAll()
```

Snapshot leti hai.

---

Example

```js
const items =
document.querySelectorAll("li");
```

Length:

```js
3
```

---

Baad mein:

```js
appendChild(newLi)
```

---

Still:

```js
items.length
```

Output:

```js
3
```

---

Reason:

```text
NodeList Static Hai
```

---

# Live HTMLCollection

Source:

```js
getElementsByTagName()
```

```js
getElementsByClassName()
```

---

Example

```js
const items =
document.getElementsByTagName("li");
```

Length:

```js
2
```

---

Baad mein new li add kiya.

Output:

```js
3
```

---

Reason:

```text
HTMLCollection Live Hai
```

---

# Interview Summary

| Method                 | Return Type    |
| ---------------------- | -------------- |
| getElementById         | Element        |
| querySelector          | First Element  |
| querySelectorAll       | NodeList       |
| getElementsByClassName | HTMLCollection |
| getElementsByTagName   | HTMLCollection |

---

# JavaScript DOM (Document Object Model) - Complete README (Part 2)

---

# DOM Traversal

Traversal ka matlab hai DOM tree mein move karna.

Jaise:

```text
Parent
↓
Child
↓
Sibling
```

DOM mein hume aksar kisi element ke parent, children ya siblings ko access karna padta hai.

---

# children

## Normal Language

Kisi element ke direct child elements return karta hai.

---

## Technical Language

Returns an HTMLCollection containing only the element children of the specified element.

---

## Example

HTML: 

```html
<div class="parent">
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
</div>
```

---

```js
const parent =
document.querySelector(".parent");

console.log(parent.children);
```

Output:

```js
HTMLCollection(3)
```

---

## Length

```js
console.log(
    parent.children.length
);
```

Output:

```js
3
```

---

## Access Specific Child

```js
console.log(
    parent.children[1]
);
```

Output:

```html
<div class="day">
    Tuesday
</div>
```

---

## Loop Through Children

```js
for(
 let i=0;
 i<parent.children.length;
 i++
){
    console.log(
      parent.children[i]
      .innerHTML
    );
}
```

Output:

```text
Monday
Tuesday
Wednesday
```

---

# firstElementChild

First child element return karta hai.

```js
console.log(
 parent.firstElementChild
);
```

Output:

```html
<div class="day">
   Monday
</div>
```

---

## Practice Question

```js
console.log(
 parent.firstElementChild
 .innerHTML
);
```

Output:

```js
Monday
```

---

# lastElementChild

Last child element return karta hai.

```js
console.log(
 parent.lastElementChild
);
```

Output:

```html
<div class="day">
   Wednesday
</div>
```

---

## Practice Question

```js
console.log(
 parent.lastElementChild
 .innerHTML
);
```

Output:

```js
Wednesday
```

---

# parentElement

## Normal Language

Current element ka parent return karta hai.

---

## Example

```js
const dayOne =
document.querySelector(".day");

console.log(
 dayOne.parentElement
);
```

Output:

```html
<div class="parent">
 ...
</div>
```

---

## Practice Question

```js
console.log(
 dayOne.parentElement
 .className
);
```

Output:

```js
parent
```

---

# nextElementSibling

Current element ke baad wala sibling return karta hai.

---

Example:

```js
console.log(
 dayOne.nextElementSibling
);
```

Output:

```html
<div class="day">
   Tuesday
</div>
```

---

## Practice Question

```js
console.log(
 dayOne.nextElementSibling
 .innerHTML
);
```

Output:

```js
Tuesday
```

---

# childNodes

## Most Important Topic

Bahut log children aur childNodes ko same samajhte hain.

Lekin dono alag hain.

---

# children

Sirf elements return karta hai.

Example:

```html
<div>
   <div>Monday</div>
   <div>Tuesday</div>
</div>
```

```js
parent.children
```

Output:

```js
[
 div,
 div
]
```

Length:

```js
2
```

---

# childNodes

Elements + Text Nodes + Comments sab return karta hai.

---

Example

```html
<div>
   <div>Monday</div>
   <div>Tuesday</div>
</div>
```

Browser internally:

```text
parent
│
├── text
├── div
├── text
├── div
├── text
```

---

```js
parent.childNodes
```

Output:

```js
NodeList(5)
```

---

## Practice Question

```js
console.log(
 parent.childNodes.length
);
```

Output:

```js
5
```

---

## Why?

Newlines aur spaces bhi Text Nodes ban jaate hain.

---

# Golden Difference

```text
children
↓
Only Elements
```

```text
childNodes
↓
All Nodes
```

---

# createElement()

## Normal Language

Naya HTML element create karta hai.

---

## Technical Language

Creates an element node.

---

## Syntax

```js
document.createElement(tagName)
```

---

## Example

```js
const div =
document.createElement("div");
```

---

## Important

```text
createElement()
↓
Memory mein create karta hai
```

Screen pe nahi.

---

## Practice Question

```js
const div =
document.createElement("div");

console.log(div);
```

Output:

```html
<div></div>
```

---

## Important

Abhi DOM mein add nahi hua.

Page par nahi dikhega.

---

# createTextNode()

Text node create karta hai.

---

Example: 

```js
const addText =
document.createTextNode(
 "hello"
);
```

---

```js
div.appendChild(addText);
```

Output:

```html
<div>
 hello
</div>
```

---

# appendChild()

## Normal Language

Kisi child node ko parent ke andar add karta hai.

---

## Syntax

```js
parent.appendChild(child)
```

---

## Example

```js
document.body
.appendChild(div);
```

---

## Important

```text
appendChild()
↓
Node Accept Karta Hai
```

---

### Practice Question

```js
document.body
.appendChild("Hello");
```

Output:

```js
TypeError
```

---

## Return Value

```js
const result =
document.body
.appendChild(li);
```

Output:

```html
<li>Java</li>
```

Node return karta hai.

---

# append()

appendChild ka modern version.

---

## Difference

append:

```js
div.append("Hello");
```

Works.

---

appendChild:

```js
div.appendChild("Hello");
```

Error.

---

## Multiple Values

```js
div.append(
 "Hello",
 " ",
 "Harshit"
);
```

Output:

```text
Hello Harshit
```

---

# append vs appendChild

| append                | appendChild            |
| --------------------- | ---------------------- |
| Text accept karta hai | Text accept nahi karta |
| Multiple values       | Single node            |
| Return undefined      | Return appended node   |

---

# Node Movement Trap

```js
const li =
document.createElement("li");

li.innerText = "Java";

document.body
.appendChild(li);

document.body
.appendChild(li);
```

Output:

```text
Java
```

Sirf 1 baar.

---

## Why?

```text
DOM Node
↓
Duplicate nahi hota
Move hota hai
```

---

# remove()

Element khud ko delete karta hai.

---

Example:

```js
document
.querySelector("li")
.remove();
```

---

Before:

```text
JavaScript
Python
Java
```

---

After:

```text
Python
Java
```

---

# removeChild()

Parent child ko delete karta hai.

---

Syntax

```js
parent.removeChild(child)
```

---

Example

```js
ul.removeChild(li);
```

---

# Difference

```text
remove()
↓
Self Delete
```

```text
removeChild()
↓
Parent Deletes Child
```

---

# replaceWith()

Current element ko replace karta hai.

Example: 

```js
const newLi =
document.createElement("li");

newLi.textContent =
"Mojo";

secLang.replaceWith(
 newLi
);
```

---

Before:

```text
JavaScript
Python
Java
```

---

After:

```text
JavaScript
Mojo
Java
```

---

# outerHTML

Poora element replace karta hai.

---

Example

```js
secLangu.outerHTML =
"<li>TypeScript</li>";
```

---

Output:

```text
TypeScript
Mojo
Java
```

---

# classList

Classes manipulate karne ke liye.

---

# add()

```js
title.classList.add(
 "dark"
);
```

---

Before:

```html
class="heading"
```

After:

```html
class="heading dark"
```

---

# remove()

```js
title.classList.remove(
 "heading"
);
```

Output:

```html
class="dark"
```

---

# contains()

```js
title.classList.contains(
 "dark"
);
```

Output:

```js
true
```

or

```js
false
```

---

# toggle()

Most Useful.

Rule:

```text
Class Hai?
↓
Remove
```

```text
Class Nahi Hai?
↓
Add
```

---

Example

```js
title.classList.toggle(
 "dark"
);
```

---

First Time:

```html
class="heading dark"
```

---

Second Time:

```html
class="heading"
```

---

# Difference

## setAttribute

```js
title.setAttribute(
 "class",
 "test"
);
```

Output:

```html
class="test"
```

Replace.

---

## classList.add

```js
title.classList.add(
 "test"
);
```

Output:

```html
class="heading test"
```

Append.

---

# cloneNode()

Element ki copy banata hai.

---

# cloneNode(false)

Sirf element copy.

Children nahi.

---

Example

```html
<div id="box">
   <h1>Hello</h1>
</div>
```

---

```js
const copy =
box.cloneNode(false);
```

Result:

```html
<div id="box"></div>
```

---

# cloneNode(true)

Deep Clone.

Children bhi copy.

---

```js
const copy =
box.cloneNode(true);
```

Result:

```html
<div id="box">
   <h1>Hello</h1>
</div>
```

---

## Practice Question

```js
const copy =
box.cloneNode(true);

console.log(
 copy.innerHTML
);
```

Output:

```html
<h1>Hello</h1>
```

---

# insertBefore()

Reference node ke pehle insert karta hai.

---

Syntax

```js
parent.insertBefore(
 newNode,
 referenceNode
);
```

---

Rule

```text
insertBefore(A,B)
↓
A ko B ke pehle daalo
```

---

Example

```js
ul.insertBefore(
 li,
 three
);
```

---

Before

```text
One
Three
```

After

```text
One
Two
Three
```

---

# Node vs Element

Most Important Interview Topic.

---

## Node

DOM ke andar jo bhi exist karta hai wo node hai.

Examples:

```text
Element
Text
Comment
```

Sab Nodes hain.

---

## Element

HTML Tags.

Examples:

```html
<div></div>
<h1></h1>
<p></p>
```

---

# Golden Line

```text
Every Element is a Node

But Every Node is not an Element
```

---

Example

```html
<h1>Hello</h1>
```

---

`h1`

```text
Element ✅
Node ✅
```

---

`Hello`

```text
Element ❌
Node ✅
```

---

# nodeType

Element Node:

```js
element.nodeType
```

Output:

```js
1
```

---

Text Node:

```js
textNode.nodeType
```

Output:

```js
3
```

---

Comment Node:

```js
comment.nodeType
```

Output:

```js
8
```

---

# dataset

Custom data store karne ke liye use hota hai.

---

HTML

```html
<button
 data-id="101"
>
 Click
</button>
```

---

JS

```js
btn.dataset.id
```

Output:

```js
101
```

---

# Multiple Attributes

```html
<div
 data-user="harshit"
 data-age="20"
></div>
```

---

```js
div.dataset.user
```

Output:

```js
harshit
```

---

```js
div.dataset.age
```

Output:

```js
20
```

---

# Camel Case Rule

HTML

```html
data-user-name
```

JS

```js
dataset.userName
```

---

NOT

```js
dataset.user-name
```

---

