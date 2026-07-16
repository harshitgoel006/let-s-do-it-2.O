

# JavaScript Events - Complete Notes

# What Are Events?

## Normal Language

Jab bhi user webpage ke saath interact karta hai aur koi action perform karta hai, us action ko Event kehte hain.

Examples:

```text
Mouse Click
Keyboard Press
Mouse Move
Form Submit
Scroll
Double Click
```

---

## Technical Language

An Event is an action or occurrence recognized by the browser that can be detected and handled by JavaScript.

---

## Examples

```text
Click on Button
↓
Click Event

Press Enter
↓
Keyboard Event

Move Mouse
↓
Mouse Event
```

---

# Why Events Are Important?

JavaScript interactive websites banata hai.

Without Events:

```text
HTML = Structure

CSS = Styling

JavaScript = Dead
```

Events JavaScript ko user interaction se connect karte hain.

---

# Event Driven Programming

JavaScript Event Driven Language hai.

Browser continuously wait karta hai:

```text
User Click Kare
User Type Kare
User Scroll Kare
```

Jab event aata hai:

```text
Event Trigger
↓
Event Handler Execute
```

---

# Event Handler

Event ke response mein jo function execute hota hai usko Event Handler kehte hain.

Example:

```js
function greet(){
    console.log("Hello");
}
```

```js
button.addEventListener(
   "click",
   greet
);
```

Yahan:

```text
greet
↓
Event Handler
```

---

# Event Listener

## Normal Language

Listener browser ko bolta hai:

```text
Agar future mein ye event ho
toh ye function chala dena
```

---

Example

```js
button.addEventListener(
 "click",
 function(){
    console.log("Clicked");
 }
);
```

---

# onclick

Purana method.

Example:

```js
button.onclick = function(){
    console.log("Clicked");
}
```

---

# Internal Working

Browser:

```text
button
|
|---- onclick
```

Sirf ek function rakh sakta hai.

---

# Example

```js
button.onclick = function(){
   console.log("First");
}

button.onclick = function(){
   console.log("Second");
}
```

Output:

```text
Second
```

---

# Why?

Second assignment first ko replace kar deta hai.

---

# addEventListener()

Modern Method.

---

## Syntax

```js
element.addEventListener(
    event,
    callback,
    options
)
```

---

## Example

```js
button.addEventListener(
 "click",
 function(){
    console.log("Clicked");
 }
);
```

---

## Internal Working

Browser:

```text
button
|
|---- Listener1
|---- Listener2
|---- Listener3
```

Multiple listeners allowed.

---

## Example

```js
button.addEventListener(
 "click",
 ()=>{
   console.log("First");
 }
);

button.addEventListener(
 "click",
 ()=>{
   console.log("Second");
 }
);
```

Output:

```text
First
Second
```

---

# onclick vs addEventListener

| onclick      | addEventListener   |
| ------------ | ------------------ |
| One Listener | Multiple Listeners |
| Old Way      | Modern Way         |
| Less Control | More Control       |
| No Capturing | Supports Capturing |

---

# Event Listener Doesn't Execute Function

Most Important Concept.

---

Wrong Understanding:

```js
button.addEventListener(
 "click",
 hello
);
```

Means:

```text
hello execute ho gaya
```

❌

---

Actual:

```text
Future mein click hua
toh hello execute karna
```

✅

---

# Function Reference

```js
button.addEventListener(
 "click",
 hello
);
```

Yahan:

```js
hello
```

execute nahi hua.

Sirf reference diya gaya.

---

# Difference

```js
hello();
```

Output:

```text
Hello
```

Immediate Execution.

---

```js
button.addEventListener(
 "click",
 hello
);
```

Output:

```text
Nothing
```

Listener register hua.

---

# removeEventListener()

Listener remove karta hai.

---

## Syntax

```js
element.removeEventListener(
 event,
 functionReference
)
```

---

# Correct Example

```js
function hello(){
    console.log("Hello");
}

button.addEventListener(
 "click",
 hello
);

button.removeEventListener(
 "click",
 hello
);
```

Output:

```text
Nothing
```

Listener remove ho chuka hai.

---

# Why?

Browser:

Before:

```text
Listeners
|
|---- hello
```

After Remove:

```text
Listeners
|
|---- Empty
```

---

# Common Mistake

```js
button.addEventListener(
 "click",
 ()=>{
    console.log("Hello");
 }
);

button.removeEventListener(
 "click",
 ()=>{
    console.log("Hello");
 }
);
```

---

Question:

Remove hoga?

```text
NO
```

---

# Why?

JavaScript:

```js
()=>{}
```

and

```js
()=>{}
```

Same function nahi maanti.

Different references.

---

# Event Object

Har Event automatically ek object create karta hai.

---

Example

```js
button.addEventListener(
 "click",
 function(e){
    console.log(e);
 }
);
```

---

Yahan:

```js
e
```

↓

```text
Event Object
```

---

Contains:

```text
Event Information
Mouse Information
Keyboard Information
Target Information
```

---

# e.type

Event ka naam.

---

Example

```js
button.addEventListener(
 "click",
 function(e){
    console.log(e.type);
 }
);
```

Output:

```text
click
```

---

# e.target

Actual clicked element.

---

Example

```html
<ul id="images">
   <li>
      <img id="tree">
   </li>
</ul>
```

---

```js
images.addEventListener(
 "click",
 function(e){
    console.log(
      e.target.tagName
    );
 }
);
```

Image click.

Output:

```text
IMG
```

---

# Definition

```text
target
↓
Actual clicked element
```

---

# e.currentTarget

Jis element par listener laga hai.

---

Example

```js
images.addEventListener(
 "click",
 function(e){
    console.log(
      e.currentTarget.tagName
    );
 }
);
```

Output:

```text
UL
```

---

# Difference

## target

```text
Click kaha hua?
```

---

## currentTarget

```text
Listener kaha laga hai?
```

---

# Example

Click:

```text
IMG
```

Listener:

```text
UL
```

---

Output

```js
e.target.tagName
```

↓

```text
IMG
```

---

```js
e.currentTarget.tagName
```

↓

```text
UL
```

---

# Interview Question

```js
e.target === e.currentTarget
```

Kab true?

Answer:

```text
Jab listener aur click
same element par ho
```

---



# preventDefault()

## Normal Language

Browser kuch elements ke saath default actions perform karta hai.

Example:

```text
Link Click
↓
Page Open

Form Submit
↓
Page Refresh

Checkbox Click
↓
Checked
```

Agar hume ye default behavior rokna ho toh:

```js
e.preventDefault()
```

use karte hain.

---

## Technical Language

Prevents the browser's default action associated with an event.

---

## Example 1

```html
<a href="https://google.com" id="google">
   Google
</a>
```

```js
document.getElementById("google")
.addEventListener(
 "click",
 function(e){

    e.preventDefault();

    console.log(
      "Clicked"
    );

 }
);
```

Output:

```text
Clicked
```

Google open nahi hoga.

---

## Why?

Normally:

```text
Click
↓
Browser Default Action
↓
Open Google
```

After preventDefault:

```text
Click
↓
preventDefault()
↓
Default Action Cancel
```

---

# e.defaultPrevented

Check karta hai ki default action prevent hua ya nahi.

```js
e.preventDefault();

console.log(
 e.defaultPrevented
);
```

Output:

```text
true
```

---

# stopPropagation()

## Normal Language

Event parent elements tak travel karta hai.

Agar hume usko beech mein rokna ho:

```js
e.stopPropagation()
```

use karte hain.

---

## Technical Language

Stops further propagation of the current event during capturing and bubbling phases.

---

## Example

```html
<div id="parent">
   <button id="child">
      Click
   </button>
</div>
```

```js
parent.addEventListener(
 "click",
 ()=>{
    console.log("Parent");
 }
);

child.addEventListener(
 "click",
 (e)=>{
    console.log("Child");
    e.stopPropagation();
 }
);
```

Output:

```text
Child
```

---

Without stopPropagation:

```text
Child
Parent
```

---

# Event Propagation

Har Event 3 phases se guzarta hai.

```text
1. Capturing Phase
2. Target Phase
3. Bubbling Phase
```

---

# Event Flow Diagram

```text
document
↓
html
↓
body
↓
parent
↓
child
```

User clicks:

```text
child
```

---

# Phase 1 - Capturing Phase

Event top se niche travel karta hai.

```text
document
↓
html
↓
body
↓
parent
↓
child
```

---

# Phase 2 - Target Phase

Actual target execute hota hai.

```text
child
```

---

# Phase 3 - Bubbling Phase

Event niche se upar jata hai.

```text
child
↑
parent
↑
body
↑
html
↑
document
```

---

# Bubbling

Default behavior.

```js
addEventListener(
 "click",
 callback,
 false
);
```

or

```js
addEventListener(
 "click",
 callback
);
```

---

Example

```js
parent.addEventListener(
 "click",
 ()=>{
   console.log("Parent");
 }
);

child.addEventListener(
 "click",
 ()=>{
   console.log("Child");
 }
);
```

Click:

```text
Child
Parent
```

---

# Capturing

```js
addEventListener(
 "click",
 callback,
 true
);
```

---

Example

```js
parent.addEventListener(
 "click",
 ()=>{
   console.log("Parent");
 },
 true
);

child.addEventListener(
 "click",
 ()=>{
   console.log("Child");
 },
 true
);
```

Output:

```text
Parent
Child
```

---

# Bubbling vs Capturing

| Bubbling       | Capturing         |
| -------------- | ----------------- |
| Child → Parent | Parent → Child    |
| Default        | Explicitly Enable |
| false          | true              |

---

# Interview Trap

```js
parent.addEventListener(
 "click",
 ()=>{
   console.log("Parent");
 },
 true
);

child.addEventListener(
 "click",
 ()=>{
   console.log("Child");
 },
 false
);
```

Output:

```text
Parent
Child
```

Reason:

```text
Capturing listeners first
Then target
Then bubbling
```

---

# Event Delegation

## Normal Language

Har child par listener lagane ke bajaye parent par ek listener lagana.

---

## Why?

Bad:

```js
img1.addEventListener(...)
img2.addEventListener(...)
img3.addEventListener(...)
img4.addEventListener(...)
```

---

Good:

```js
parent.addEventListener(...)
```

Ek listener.

Saare children handle.

---

## Example

```html
<ul id="images">
   <li><img id="tree"></li>
   <li><img id="monkey"></li>
</ul>
```

```js
images.addEventListener(
 "click",
 function(e){
    console.log(
      e.target.id
    );
 }
);
```

---

Tree Click:

```text
tree
```

Monkey Click:

```text
monkey
```

---

# target vs currentTarget

## target

```text
Actual clicked element
```

---

## currentTarget

```text
Element on which listener is attached
```

---

Example

Listener:

```text
UL
```

Click:

```text
IMG
```

Output:

```js
e.target.tagName
```

↓

```text
IMG
```

---

```js
e.currentTarget.tagName
```

↓

```text
UL
```

---

# Keyboard Events

---

# keydown

Key press hote hi.

```js
document.addEventListener(
 "keydown",
 function(e){
    console.log(
      e.key
    );
 }
);
```

---

# keyup

Key release hote hi.

```js
document.addEventListener(
 "keyup",
 function(e){
    console.log("Released");
 }
);
```

---

# keypress

Deprecated.

Avoid.

---

# e.key

Actual character.

Example:

Press:

```text
A
```

Output:

```js
A
```

---

Press:

```text
Enter
```

Output:

```js
Enter
```

---

# e.code

Physical keyboard key.

Press:

```text
A
```

Output:

```js
KeyA
```

---

Press:

```text
Shift + A
```

Output:

```js
KeyA
```

Still KeyA.

---

# key vs code

| key              | code                   |
| ---------------- | ---------------------- |
| Actual Character | Physical Key           |
| A                | KeyA                   |
| Enter            | Enter                  |
| Shift            | ShiftLeft / ShiftRight |

---

# Modifier Keys

---

## ctrlKey

```js
e.ctrlKey
```

Returns:

```text
true
false
```

---

## shiftKey

```js
e.shiftKey
```

Returns:

```text
true
false
```

---

## altKey

```js
e.altKey
```

Returns:

```text
true
false
```

---

# Shortcut Example

```js
document.addEventListener(
 "keydown",
 function(e){

   if(
      e.ctrlKey &&
      e.key === "s"
   ){
      e.preventDefault();

      console.log("Save");
   }

 }
);
```

---

# Mouse Events

---

# click

Single click.

```js
button.addEventListener(
 "click",
 ()=>{
    console.log("Click");
 }
);
```

---

# dblclick

Double click.

```js
button.addEventListener(
 "dblclick",
 ()=>{
   console.log("Double");
 }
);
```

---

# mousedown

Mouse button press.

```text
Mouse Down
```

---

# mouseup

Mouse button release.

```text
Mouse Up
```

---

# Event Order

Normal Click:

```text
mousedown
↓
mouseup
↓
click
```

---

# mousemove

Mouse move.

```js
document.addEventListener(
 "mousemove",
 function(e){
    console.log(
      e.clientX,
      e.clientY
    );
 }
);
```

---

# clientX / clientY

Mouse coordinates.

```text
Horizontal Position
Vertical Position
```

---

# mouseenter

Mouse enters element.

Children ignored.

---

Example

```text
Outside
↓
Box
↓
Button
```

Output:

```text
Enter
```

Only once.

---

# mouseleave

Mouse leaves element.

Children ignored.

---

Example

```text
Button
↓
Box
↓
Outside
```

Output:

```text
Leave
```

Only once.

---

# mouseover

Children included.

---

Example

```text
Outside
↓
Box
↓
Button
```

Output:

```text
Over
Over
```

---

# mouseout

Children included.

---

Example

```text
Button
↓
Box
↓
Outside
```

Output:

```text
Out
Out
```

---

# mouseenter vs mouseover

| mouseenter      | mouseover            |
| --------------- | -------------------- |
| Children Ignore | Children Count       |
| Fires Once      | Fires Multiple Times |

---

# mouseleave vs mouseout

| mouseleave      | mouseout             |
| --------------- | -------------------- |
| Children Ignore | Children Count       |
| Fires Once      | Fires Multiple Times |

---

# Real World Example

Image Gallery Remove

```js
document.querySelector(
 '#images'
).addEventListener(
 'click',
 function(e){

   if(
      e.target.tagName
      === 'IMG'
   ){

      let remove =
      e.target.parentNode;

      remove.remove();

   }

 });
```

---

# Why tagName Check?

Without:

```js
e.target.parentNode.remove()
```

User:

```text
LI Click
```

Wrong element remove ho sakta hai.

---

# Interview Traps

## Trap 1

```js
e.target
```

≠

```js
e.currentTarget
```

---

## Trap 2

```js
stopPropagation()
```

Past executed listeners ko undo nahi karta.

---

## Trap 3

```js
addEventListener()
```

Function execute nahi karta.

Sirf register karta hai.

---

## Trap 4

```js
removeEventListener()
```

Exact same function reference maangta hai.

---

## Trap 5

```js
addEventListener(
 "click",
 hello
);

addEventListener(
 "click",
 hello
);
```

Output:

```text
Hello
```

Sirf ek baar.

Duplicate reference add nahi hota.

---

# Quick Revision Sheet

```text
onclick
↓
One Listener

addEventListener
↓
Multiple Listeners

removeEventListener
↓
Remove Listener

preventDefault
↓
Stop Browser Default Action

stopPropagation
↓
Stop Event Travel

target
↓
Actual Clicked Element

currentTarget
↓
Element Having Listener

Bubbling
↓
Child → Parent

Capturing
↓
Parent → Child

Event Delegation
↓
Parent Listener For Children

key
↓
Character

code
↓
Physical Key

mouseenter / mouseleave
↓
Ignore Children

mouseover / mouseout
↓
Include Children
```

---


