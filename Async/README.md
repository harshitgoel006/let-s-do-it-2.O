# Asynchronous JavaScript

## What is JavaScript?

JavaScript is a high-level, interpreted, dynamically typed, single-threaded programming language used to make web pages interactive.

Initially JavaScript was only used inside browsers, but today it is used in:

- Frontend Development
- Backend Development (Node.js)
- Mobile Applications
- Desktop Applications
- Games
- IoT
- Machine Learning

---

## Why Do We Need Asynchronous JavaScript?

Imagine you open Instagram.

At the same time the browser has to:

- Load Posts
- Load Stories
- Load Notifications
- Handle User Clicks
- Play Animations
- Fetch Data from Server

If JavaScript waited for one task to complete before starting another task, the browser would freeze and the user experience would become very poor.

To solve this problem JavaScript uses **Asynchronous Programming**.

> **Important**
>
> JavaScript itself is synchronous.
>
> Asynchronous behaviour is achieved using the Browser Runtime.

---

## Synchronous Programming

### Definition

Synchronous programming means one task executes completely before the next task starts.

### Example

```js
console.log("A");
console.log("B");
console.log("C");
```

Output

```
A
B
C
```

Execution Flow

```
A
↓
B
↓
C
```

### Characteristics

- Executes line by line
- Sequential execution
- Predictable output
- Easy to understand

---

## Asynchronous Programming

### Definition

Asynchronous programming allows long-running tasks to execute without blocking the main execution flow.

### Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
```

Output

```
Start
End
Hello
```

### Why?

`setTimeout()` is not executed by JavaScript.

It is handled by the Browser Runtime.

(We'll understand this in detail later.)

---

## JavaScript is Single Threaded

JavaScript executes code using only one **Call Stack**.

This means only one instruction can execute at any given time.

Example

```js
console.log("A");
console.log("B");
console.log("C");
```

Output

```
A
B
C
```

Output can never be

```
A
C
B
```

because JavaScript executes one statement at a time.

---

## Important Points

- JavaScript is Single Threaded.
- JavaScript is Synchronous by default.
- JavaScript executes one statement at a time.
- Async behaviour is achieved using Browser APIs.

---

## Interview Notes

**Q. Is JavaScript synchronous or asynchronous?**

JavaScript is synchronous by default.

Async behaviour is provided by the Browser Runtime.

---

**Q. Why is JavaScript called single-threaded?**

Because JavaScript executes code using a single Call Stack.

Only one function can execute at a time.

---

## Common Mistakes

❌ JavaScript is an asynchronous language.

✔ Correct

JavaScript is synchronous by default.

Browser provides asynchronous capabilities.

---

# JavaScript Execution Model

JavaScript follows a **Synchronous Execution Model**.

This means JavaScript executes one statement at a time in the same order in which it appears.

Execution Flow

```
Statement 1
      ↓
Statement 2
      ↓
Statement 3
      ↓
Statement 4
```

JavaScript never jumps randomly between statements.

It always follows the execution order unless asynchronous behaviour is introduced.

---

# Execution Context

## Definition

Execution Context is the environment in which JavaScript code executes.

It contains everything required to execute the current piece of code.

Whenever JavaScript executes code, it creates an Execution Context.

Without an Execution Context, JavaScript cannot execute any code.

---

## Normal Explanation

Suppose you are writing an exam.

Before writing,

you need

- Question Paper
- Answer Sheet
- Pen
- Desk

Only after getting all these things can you start writing.

Similarly,

before JavaScript executes any code,

it creates an environment containing everything required for execution.

That environment is called the **Execution Context**.

---

# Types of Execution Context

JavaScript mainly creates two types of Execution Context.

## 1. Global Execution Context (GEC)

Created only once.

It is created whenever a JavaScript file starts executing.

Everything starts from here.

Example

```js
console.log("Hello");

let a = 10;

function greet() {
  console.log("Hi");
}

greet();
```

Before executing even the first line,

JavaScript creates the Global Execution Context.

---

## 2. Function Execution Context (FEC)

Whenever a function is called,

JavaScript creates a new Execution Context for that function.

Example

```js
function greet() {
  console.log("Hello");
}

greet();
```

Execution

```
Global Execution Context

        ↓

Call greet()

        ↓

Create Function Execution Context

        ↓

Execute Function

        ↓

Destroy Function Execution Context
```

Every function call gets its own Execution Context.

---

# Execution Context Lifecycle

Every Execution Context goes through two phases.

```
Creation Phase

↓

Execution Phase
```

---

## 1. Creation Phase

During this phase JavaScript prepares everything required before execution.

It

- Allocates memory for variables.
- Allocates memory for functions.
- Creates the scope.
- Sets up the `this` keyword.

No code is executed during this phase.

Only memory allocation happens.

---

## 2. Execution Phase

Now JavaScript starts executing the code line by line.

Assignments happen.

Functions execute.

Expressions are evaluated.

Console statements run.

---

# Example

```js
let a = 10;

function greet() {
  console.log("Hello");
}

greet();
```

Creation Phase

```
Memory Allocation

↓

a = undefined

↓

greet() stored in memory
```

Execution Phase

```
a = 10

↓

greet()

↓

Hello
```

---

# JavaScript Executes One Line at a Time

Example

```js
console.log("A");

console.log("B");

console.log("C");
```

Execution

```
A

↓

B

↓

C
```

JavaScript cannot execute

```
A

↓

C

↓

B
```

because JavaScript uses only one Call Stack.

---

# Blocking Code

## Definition

Blocking Code blocks the execution of the remaining program until the current task finishes.

---

## Normal Explanation

Suppose one task takes 10 seconds.

During those 10 seconds,

nothing else executes.

The entire program waits.

This is Blocking Code.

---

## Example

```text
Read Large File Synchronously

↓

Wait...

↓

Wait...

↓

Continue Execution
```

Everything waits until the file is completely read.

---

# Non-Blocking Code

## Definition

Non-Blocking Code allows the remaining program to continue executing while the long-running task executes separately.

---

## Normal Explanation

Instead of waiting,

JavaScript gives that task to the Browser.

Meanwhile,

JavaScript continues executing the remaining code.

---

## Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 3000);

console.log("End");
```

Output

```
Start

End

Hello
```

The timer doesn't block JavaScript.

JavaScript immediately continues executing the next statement.

---

# Blocking vs Non-Blocking

| Blocking                | Non-Blocking             |
| ----------------------- | ------------------------ |
| Stops program execution | Doesn't stop execution   |
| Remaining code waits    | Remaining code continues |
| Slower user experience  | Better user experience   |
| Synchronous             | Asynchronous             |

---

# Important Note

JavaScript itself is synchronous.

The asynchronous behaviour comes from the Browser Runtime.

JavaScript never creates another thread.

Instead,

it delegates long-running tasks to the Browser.

---

# Interview Notes

### Q. What is an Execution Context?

Execution Context is the environment where JavaScript code executes.

---

### Q. How many Execution Contexts are there?

- Global Execution Context
- Function Execution Context

---

### Q. What are the two phases of an Execution Context?

- Creation Phase
- Execution Phase

---

### Q. Difference between Blocking and Non-Blocking Code?

Blocking Code stops the execution of the remaining program.

Non-Blocking Code allows the remaining program to continue executing while the long-running task is handled separately.

---

# Common Mistakes

❌ JavaScript executes multiple statements simultaneously.

✔ JavaScript executes one statement at a time.

---

❌ Asynchronous means JavaScript becomes multi-threaded.

✔ JavaScript remains single-threaded.

The Browser handles asynchronous operations.

---

# JavaScript Runtime

JavaScript alone cannot perform asynchronous operations.

It needs a complete environment to execute code and perform tasks like:

- Timers
- API Requests
- DOM Manipulation
- Events
- Local Storage

This complete environment is called the **JavaScript Runtime**.

---

## Definition

A JavaScript Runtime is the environment where JavaScript code executes.

It contains multiple components that work together to execute JavaScript code and handle asynchronous operations.

---

## Normal Explanation

Suppose you hire an employee.

Can the employee work without

- Office
- Computer
- Internet
- Electricity

No.

Similarly,

JavaScript also needs an environment to execute.

That environment is called the **JavaScript Runtime**.

---

## Browser Runtime Architecture

```text
+------------------------------------------------------+
| Browser                                              |
|                                                      |
|  +----------------------+                            |
|  | V8 Engine            |                            |
|  |----------------------|                            |
|  | Call Stack           |                            |
|  | Heap Memory          |                            |
|  +----------------------+                            |
|                                                      |
|  +----------------------+                            |
|  | Browser APIs         |                            |
|  |----------------------|                            |
|  | setTimeout()         |                            |
|  | setInterval()        |                            |
|  | fetch()              |                            |
|  | XMLHttpRequest()     |                            |
|  | DOM APIs             |                            |
|  +----------------------+                            |
|                                                      |
| Callback Queue                                       |
| Microtask Queue                                      |
| Event Loop                                           |
+------------------------------------------------------+
```

All these components work together to execute asynchronous JavaScript.

---

# Components of JavaScript Runtime

| Component       | Responsibility                                      |
| --------------- | --------------------------------------------------- |
| V8 Engine       | Executes JavaScript Code                            |
| Call Stack      | Executes Functions                                  |
| Heap Memory     | Stores Objects                                      |
| Browser APIs    | Handles asynchronous operations                     |
| Callback Queue  | Stores callback functions                           |
| Microtask Queue | Stores Promise callbacks                            |
| Event Loop      | Coordinates execution between queues and Call Stack |

---

# V8 Engine

## What is V8?

V8 is Google's JavaScript Engine.

Its job is simple:

- Execute JavaScript Code
- Manage Memory
- Execute Functions

Chrome uses V8.

Node.js also uses V8.

---

## Important Point

Many beginners think

```
setTimeout()


belongs to JavaScript.

❌ Wrong.

It belongs to the Browser.

Similarly,

```

fetch()

DOM

XMLHttpRequest()

````

are also Browser APIs.

V8 does **not** provide these APIs.

Its job is only to execute JavaScript code.

---

## Responsibilities of V8

V8 mainly manages:

* Call Stack
* Heap Memory

That's all you need to know for Async JavaScript.

---

# Browser APIs (Introduction)

When JavaScript encounters a long-running task like

```javascript
setTimeout(() => {

    console.log("Hello");

},3000);
````

JavaScript **does not execute the timer itself.**

Instead,

it hands the timer to the Browser.

The Browser starts the timer.

Meanwhile,

JavaScript continues executing the remaining code.

When the timer finishes,

the Browser sends the callback for execution.

We'll study this complete process later.

---

# Why Do We Need Browser APIs?

Imagine this code

```javascript
console.log("Start");

fetch("/users");

console.log("End");
```

Suppose the server takes **5 seconds** to respond.

If JavaScript itself waited,

the output would be

```
Start

(wait 5 seconds)

End
```

The browser would freeze.

Instead,

Browser handles the network request separately.

JavaScript immediately continues.

Actual output

```
Start

End

(after response arrives)

Data
```

This is why Browser APIs exist.

---

# Complete Async Flow

Every asynchronous operation follows the same lifecycle.

```
JavaScript executes code

↓

Long-running task found

↓

Task handed over to Browser API

↓

JavaScript continues executing remaining code

↓

Browser completes the task

↓

Callback enters Queue

↓

Event Loop checks Call Stack

↓

Callback moves to Call Stack

↓

Callback executes
```

This flow explains almost every asynchronous operation in JavaScript.

Whether it's

- setTimeout()
- fetch()
- XMLHttpRequest()
- DOM Events

everything follows this lifecycle.

---

# Important Points

- JavaScript executes code.
- Browser performs asynchronous operations.
- Browser and JavaScript work together.
- JavaScript never waits for timers.
- JavaScript never waits for network requests.
- Browser handles them independently.

---

# Interview Notes

### Q. What is JavaScript Runtime?

JavaScript Runtime is the complete environment where JavaScript code executes.

It contains the JavaScript Engine, Browser APIs, Event Loop and Queues.

---

### Q. What is V8?

V8 is Google's JavaScript Engine used in Chrome and Node.js.

Its responsibility is to execute JavaScript code.

---

### Q. Does V8 provide setTimeout()?

No.

setTimeout() is a Browser API.

---

### Q. Does JavaScript perform asynchronous work?

No.

JavaScript executes synchronous code.

The Browser performs asynchronous work.

---

# Common Mistakes

❌ Browser and V8 are the same.

✔ V8 is only one component inside the Browser Runtime.

---

❌ fetch() is a JavaScript feature.

✔ fetch() is a Browser API.

---

❌ JavaScript waits for timers.

✔ Browser waits for timers.

JavaScript continues executing the remaining code.

---

# Browser APIs (Web APIs)

Before understanding Event Loop, Callback Queue and Promises, we first need to understand **Browser APIs**, because without Browser APIs asynchronous JavaScript is impossible.

---

## What are Browser APIs?

Browser APIs are features provided by the **Browser**, not by JavaScript.

These APIs allow JavaScript to perform tasks that take time without blocking the execution of the remaining code.

---

## Normal Explanation

Imagine JavaScript is working continuously.

Suddenly it encounters

```javascript
setTimeout(() => {
  console.log("Hello");
}, 3000);
```

JavaScript says,

> "I don't know how to count 3 seconds."

So instead of handling it itself,

it gives this task to the Browser.

The Browser starts the timer,

while JavaScript continues executing the remaining code.

---

## Important Point

Many beginners think

```javascript
setTimeout();
```

belongs to JavaScript.

❌ Wrong.

It is provided by the Browser.

Similarly,

- fetch()
- XMLHttpRequest()
- DOM APIs
- Geolocation
- Local Storage
- Session Storage

are all Browser APIs.

---

## Why Do Browser APIs Exist?

Suppose JavaScript itself handled timers.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 5000);

console.log("End");
```

If JavaScript waited for 5 seconds,

execution would become

```
Start

(wait 5 seconds)

Hello

End
```

The browser would freeze.

Instead,

Browser handles the timer separately.

JavaScript immediately executes the next statement.

Actual Output

```
Start

End

(after 5 seconds)

Hello
```

This makes applications much faster and more responsive.

---

## Common Browser APIs

### 1. setTimeout()

Executes a callback function after a specified delay.

```javascript
setTimeout(() => {
  console.log("Hello");
}, 2000);
```

---

### 2. setInterval()

Executes a callback repeatedly after a fixed interval.

```javascript
setInterval(() => {
  console.log("Hello");
}, 1000);
```

---

### 3. fetch()

Used to make HTTP requests.

```javascript
fetch("/users");
```

Returns a Promise.

---

### 4. XMLHttpRequest()

Older way of making HTTP requests.

```javascript
const xhr = new XMLHttpRequest();
```

---

### 5. DOM APIs

Used to interact with HTML elements.

```javascript
document.querySelector("button");
```

---

### 6. Event Listeners

Browser waits for user interaction.

```javascript
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

---

### 7. Local Storage

Stores data permanently inside the browser.

```javascript
localStorage.setItem("name", "Harshit");
```

---

## Browser APIs are Asynchronous

Almost every Browser API works independently.

Example

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");
```

Execution

```
JavaScript

↓

A

↓

Browser gets timer

↓

JavaScript prints C

↓

Browser completes timer

↓

Callback executes
```

Output

```
A
C
B
```

---

## Browser APIs don't execute JavaScript

Very Important

Browser APIs **do not execute callbacks directly.**

Instead,

they only complete the task.

After completion,

they send the callback to a Queue.

From there,

Event Loop decides when the callback should execute.

We'll study this complete process in the next chapter.

---

## Interview Notes

### Q. What are Browser APIs?

Browser APIs are features provided by the browser that allow JavaScript to perform asynchronous operations.

---

### Q. Does JavaScript provide setTimeout()?

No.

The Browser provides setTimeout().

---

### Q. Does fetch() belong to JavaScript?

No.

fetch() is a Browser API.

(Node.js provides its own implementation.)

---

### Q. Can Browser APIs execute JavaScript code directly?

No.

They only complete the task and place the callback into the appropriate queue.

---

## Common Mistakes

❌ Browser API executes callback directly.

✔ Wrong.

Browser API sends callback to Queue.

Event Loop later moves it to the Call Stack.

---

❌ setTimeout() is part of JavaScript.

✔ Wrong.

It is part of the Browser Runtime.

---

## Summary

- Browser APIs are provided by the Browser.
- JavaScript delegates long-running tasks to Browser APIs.
- Browser APIs work independently.
- After completing a task, Browser APIs send callbacks to a Queue.
- Event Loop decides when those callbacks execute.

# Callback Queue (Macrotask Queue)

After understanding Browser APIs, the next question is:

> **When the Browser finishes a task, where does it send the callback?**

The answer is:

**Callback Queue**.

---

## What is Callback Queue?

### Definition

The Callback Queue is a queue that stores callback functions received from Browser APIs after their task is completed.

It is also called the **Macrotask Queue**.

---

## Normal Explanation

Suppose JavaScript gives a timer to the Browser.

```js
setTimeout(() => {
  console.log("Hello");
}, 3000);
```

The Browser starts the timer.

After 3 seconds,

the Browser **doesn't execute the callback directly**.

Instead,

it places the callback inside the Callback Queue.

```
Browser

↓

Timer Completed

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

Execute
```

---

## Why Do We Need Callback Queue?

Imagine there was no Callback Queue.

Browser completes the timer.

Now suppose JavaScript is still executing another function.

Can Browser directly interrupt JavaScript?

No.

JavaScript is single-threaded.

Only one function can execute at a time.

So Browser stores callbacks inside a Queue.

Later,

when JavaScript becomes free,

the callback executes.

---

## Why is it called a Queue?

Because it follows **FIFO (First In First Out).**

The callback that enters first,

gets executed first.

Example

```js
setTimeout(() => {
  console.log("A");
}, 1000);

setTimeout(() => {
  console.log("B");
}, 1000);
```

After 1 second

Queue

```
Front

↓

A

↓

B

↓

Rear
```

Output

```
A

B
```

---

# Flow of Callback Queue

```
JavaScript

↓

setTimeout()

↓

Browser API

↓

Timer Starts

↓

Timer Completes

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

Execute Callback
```

---

## Example 1

```js
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
```

Execution

```
console.log("Start")

↓

Start

↓

setTimeout()

↓

Browser

↓

console.log("End")

↓

End

↓

(after 2 sec)

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

Hello
```

Output

```
Start

End

Hello
```

---

# Browser Never Pushes Directly to Call Stack

This is a very important rule.

❌ Wrong

```
Browser

↓

Call Stack
```

✔ Correct

```
Browser

↓

Callback Queue

↓

Event Loop

↓

Call Stack
```

The Browser **always** sends callback functions to a Queue first.

---

# Browser APIs That Use Callback Queue

Examples

- setTimeout()
- setInterval()
- DOM Events
- XMLHttpRequest
- Message Events

These APIs send callbacks to the Callback Queue after completion.

---

# Callback Queue Doesn't Execute Anything

Another common misconception.

The Callback Queue only stores callback functions.

It never executes them.

Execution is done only by the **Call Stack**.

---

# Important Points

- Callback Queue stores callbacks.
- Browser pushes callbacks into Callback Queue.
- Callback Queue follows FIFO.
- Callback Queue cannot execute JavaScript.
- Event Loop moves callbacks from Queue to Call Stack.

---

# Microtask Queue

JavaScript has another queue called the **Microtask Queue**.

It has **higher priority** than the Callback Queue.

---

## What is Microtask Queue?

### Definition

The Microtask Queue stores callback functions created by Promises.

Examples

- `.then()`
- `.catch()`
- `.finally()`
- `queueMicrotask()`

---

## Normal Explanation

Suppose two callbacks are waiting.

One comes from

```js
setTimeout();
```

Another comes from

```js
Promise.then();
```

Which one should execute first?

JavaScript says

> Promise callback is more important.

Therefore,

Promise callbacks go into the **Microtask Queue**.

---

## Browser APIs vs Microtask Queue

```
setTimeout()

↓

Callback Queue
```

```
Promise.then()

↓

Microtask Queue
```

Different queues.

Different priorities.

---

## Why is Microtask Queue Needed?

Promises are used everywhere.

Examples

- fetch()
- async/await
- Database requests
- API requests

If Promise callbacks waited behind timers,

applications would become slower.

Therefore,

JavaScript gives Promises higher priority.

---

## Example

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Output

```
A

D

C

B
```

Why?

Because

```
Promise

↓

Microtask Queue

↓

Higher Priority
```

```
setTimeout

↓

Callback Queue

↓

Lower Priority
```

---

## Queue Comparison

| Callback Queue | Microtask Queue   |
| -------------- | ----------------- |
| setTimeout()   | Promise.then()    |
| setInterval()  | Promise.catch()   |
| DOM Events     | Promise.finally() |
| XMLHttpRequest | queueMicrotask()  |
| Lower Priority | Higher Priority   |

---

## Important Rule

Whenever the Call Stack becomes empty,

JavaScript first checks

```
Microtask Queue
```

If it contains callbacks,

JavaScript executes **all of them**.

Only after that

it checks the Callback Queue.

---

## Interview Notes

### Q. What is Callback Queue?

Stores callback functions coming from Browser APIs.

---

### Q. What is Microtask Queue?

Stores Promise callbacks.

---

### Q. Which queue has higher priority?

Microtask Queue.

---

### Q. Does Callback Queue execute callbacks?

No.

It only stores them.

Execution always happens inside the Call Stack.

---

## Common Mistakes

❌ Promise callbacks go to Callback Queue.

✔ Wrong.

Promise callbacks go to the Microtask Queue.

---

❌ Browser directly executes callback functions.

✔ Wrong.

Browser places callbacks into a Queue.

Event Loop later moves them to the Call Stack.

---

## Summary

- Callback Queue stores callbacks from Browser APIs.
- Microtask Queue stores Promise callbacks.
- Callback Queue has lower priority.
- Microtask Queue has higher priority.
- Neither queue executes JavaScript.
- Execution always happens inside the Call Stack.

# Event Loop

The Event Loop is one of the most important concepts in JavaScript.

Most interview questions related to Async JavaScript are based on the Event Loop.

If you understand the Event Loop properly, concepts like

- setTimeout()
- Promise
- Fetch
- async/await

become much easier.

---

## What is Event Loop?

### Definition

The Event Loop is a mechanism that continuously checks whether the Call Stack is empty.

If the Call Stack becomes empty, it moves callbacks from the appropriate Queue to the Call Stack for execution.

---

## Normal Explanation

Think of the Event Loop as a **Manager**.

The manager keeps checking

> "Is JavaScript free now?"

If the answer is **No**

```
Wait...
```

If the answer is **Yes**

```
Take the next callback

↓

Send it to Call Stack

↓

Execute
```

The Event Loop itself **never executes code**.

Its only job is to move callbacks from queues to the Call Stack.

---

# Why Do We Need Event Loop?

Suppose Browser finishes a timer.

```
setTimeout()

↓

Completed
```

Now what?

Should Browser directly execute JavaScript?

No.

JavaScript may already be executing another function.

Since JavaScript is single-threaded,

only one function can execute at a time.

Therefore,

the Browser places the callback inside a Queue,

and the Event Loop waits until JavaScript becomes free.

---

# Event Loop Flow

```
JavaScript Code

↓

Call Stack

↓

Long Running Task

↓

Browser API

↓

Task Completes

↓

Queue

↓

Event Loop

↓

Call Stack

↓

Execute Callback
```

Every asynchronous operation follows this flow.

---

# Responsibilities of Event Loop

- Continuously checks the Call Stack.
- Checks whether the Call Stack is empty.
- Gives priority to the Microtask Queue.
- Moves callbacks to the Call Stack.
- Never executes JavaScript itself.

---

# Event Loop Algorithm

The Event Loop continuously follows this algorithm.

```
Start

↓

Is Call Stack Empty?

↓

No

↓

Keep Waiting

↓

Yes

↓

Is Microtask Queue Empty?

↓

No

↓

Execute ALL Microtasks

↓

Check Microtask Queue Again

↓

Empty?

↓

Yes

↓

Take ONE Callback from Callback Queue

↓

Execute

↓

Repeat
```

This algorithm runs continuously while the JavaScript program is running.

---

# Golden Rules

## Rule 1

JavaScript always executes synchronous code first.

---

## Rule 2

Microtask Queue has higher priority than Callback Queue.

---

## Rule 3

All Microtasks execute before the next Callback Queue task.

This is the most important rule.

---

# Example 1

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

---

## Dry Run

### Step 1

```
console.log("A")
```

Output

```
A
```

---

### Step 2

```
setTimeout()
```

Browser starts timer.

Callback is **NOT** executed immediately.

---

### Step 3

```
Promise.then()
```

Promise callback goes to

```
Microtask Queue
```

---

### Step 4

```
console.log("D")
```

Output

```
A
D
```

---

Call Stack becomes empty.

Event Loop starts working.

First

```
Microtask Queue

↓

C
```

Output

```
A
D
C


Now

```

Callback Queue

↓

B

```

Output

```

A
D
C
B

```

---

# Final Output

```

A
D
C
B

````

---

# Example 2

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
},0);

Promise.resolve().then(() => {
    console.log("3");
});

Promise.resolve().then(() => {
    console.log("4");
});

console.log("5");
````

---

## Dry Run

Synchronous Code

```
1

↓

5
```

Microtask Queue

```
3

↓

4
```

Callback Queue

```
2
```

Final Output

```
1
5
3
4
2
```

---

# Example 3

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");

  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");
```

Output

```
1
5
4
2
3
```

---

## Why?

```
1

↓

5

↓

Microtask Queue

↓

4

↓

Callback Queue

↓

2

↓

Inside Timer

↓

Promise

↓

Microtask Queue

↓

3
```

After every Callback (Macrotask),

JavaScript again checks the Microtask Queue.

---

# Important Rule

Suppose Callback Queue contains

```
Timer 1

Timer 2
```

and Timer 1 creates a Promise.

Execution becomes

```
Timer 1

↓

ALL Microtasks

↓

Timer 2
```

NOT

```
Timer 1

↓

Timer 2

↓

Promise
```

This is one of the most common interview questions.

---

# Complete Event Loop Flow

```
Synchronous Code

↓

Call Stack Empty

↓

Execute ALL Microtasks

↓

Execute ONE Callback Queue Task

↓

Again Execute ALL Microtasks

↓

Next Callback Queue Task

↓

Repeat
```

Remember this sequence.

Almost every Event Loop interview question follows this rule.

---

# Event Loop vs Browser

| Browser                 | Event Loop                   |
| ----------------------- | ---------------------------- |
| Performs Timer          | Doesn't perform Timer        |
| Performs Fetch          | Doesn't perform Fetch        |
| Performs DOM Events     | Doesn't perform DOM Events   |
| Sends callback to Queue | Moves callback to Call Stack |

---

# Common Interview Questions

### Q. Who executes JavaScript?

Call Stack.

---

### Q. Who executes asynchronous tasks?

Browser APIs.

---

### Q. Who checks whether the Call Stack is empty?

Event Loop.

---

### Q. Which Queue gets priority?

Microtask Queue.

---

### Q. Does Event Loop execute JavaScript?

No.

It only moves callbacks from queues to the Call Stack.

---

### Q. Why does Promise execute before setTimeout?

Because Promise callbacks go into the **Microtask Queue**.

Microtask Queue has higher priority than Callback Queue.

---

# Common Mistakes

❌ Event Loop executes JavaScript.

✔ Wrong.

Call Stack executes JavaScript.

---

❌ Browser executes Promise callbacks.

✔ Wrong.

Promise callbacks execute only after Event Loop moves them to the Call Stack.

---

❌ setTimeout(0) executes immediately.

✔ Wrong.

Even with 0 ms delay,

the callback must

- Wait for the timer.
- Enter Callback Queue.
- Wait until the Call Stack becomes empty.
- Wait for all Microtasks to complete.

Only then does it execute.

---

# Quick Revision

```
JavaScript executes synchronous code.

↓

Long task found.

↓

Browser API handles it.

↓

Task completes.

↓

Callback enters Queue.

↓

Event Loop checks Call Stack.

↓

Microtask Queue first.

↓

Callback Queue second.

↓

Callback executes.
```

---

# Summary

- Event Loop is the coordinator of Async JavaScript.
- It continuously checks whether the Call Stack is empty.
- It gives priority to the Microtask Queue.
- It moves callbacks from queues to the Call Stack.
- It never executes JavaScript directly.
- The Call Stack is the only place where JavaScript code actually executes.

# HTTP (HyperText Transfer Protocol)

Before learning APIs, Fetch, and XMLHttpRequest, we must first understand **HTTP**, because every API request we make uses the HTTP protocol.

---

# What is HTTP?

## Definition

HTTP (HyperText Transfer Protocol) is a communication protocol that allows a **Client** and a **Server** to communicate with each other.

It defines **how a request is sent** and **how a response is returned**.

---

## Normal Explanation

Suppose you open YouTube.

You type

```
youtube.com
```

and press Enter.

Your browser asks the YouTube server

```
"Please send me the homepage."
```

This request is sent using **HTTP**.

The server processes the request and sends back the response using **HTTP**.

---

# What is a Protocol?

A protocol is simply a **set of rules**.

Just like traffic rules tell vehicles how to drive,

HTTP tells the Client and Server

- How to communicate
- How to send requests
- How to send responses
- Which format to follow

Without a protocol,

both sides would not understand each other.

---

# Client and Server

## Client

The client is the application that requests data.

Examples

- Browser
- Mobile App
- React Application
- Postman

---

## Server

The server stores data and processes requests.

Examples

- Node.js Server
- Express Server
- Spring Boot
- Django
- PHP

---

# Communication Flow

```
        Client

           │

           │ Request

           ▼

        Server

           │

           │ Response

           ▼

        Client
```

---

# Real Life Analogy

Imagine you visit a restaurant.

You are the **Client**.

The Kitchen is the **Server**.

The Waiter is the **API**.

```
Customer

↓

Waiter

↓

Kitchen

↓

Waiter

↓

Customer
```

Customer never directly talks to the Kitchen.

Similarly,

The Browser never directly accesses the Database.

Everything goes through the Server.

---

# Request

A Request is a message sent by the Client to the Server asking for some resource.

Examples

- Login
- Register
- Get Products
- Get Users
- Place Order

Every one of these actions sends an HTTP Request.

---

# Response

A Response is the message sent back by the Server after processing the request.

The response may contain

- Data
- Status Code
- Headers
- Error Message

Example

```
Request

↓

GET /users

↓

Response

↓

200 OK

↓

Users Data
```

---

# Components of an HTTP Request

Every request mainly contains:

- URL
- HTTP Method
- Headers
- Body (Optional)

Example

```
POST /login

Headers

Authorization

Content-Type

Body

{
   "email":"abc@gmail.com",
   "password":"123456"
}
```

---

# Components of an HTTP Response

A response mainly contains:

- Status Code
- Headers
- Response Body

Example

```
Status

200 OK

Headers

Content-Type

application/json

Body

{
    "success":true
}
```

---

# HTTP Methods

HTTP provides different methods depending on what operation we want to perform.

---

## GET

Used to retrieve data from the server.

Example

```
Get all users

Get products

Get profile
```

Example

```http
GET /users
```

GET requests generally **do not contain a Body**.

---

## POST

Used to send new data to the server.

Examples

- Register
- Login
- Add Product
- Create Order

```http
POST /users
```

POST requests usually contain a Request Body.

---

## PUT

Used to completely update existing data.

Example

```
Update User

Update Product
```

```http
PUT /users/1
```

---

## PATCH

Used to partially update data.

Suppose

Only email needs updating.

Instead of replacing the whole user,

PATCH updates only the required field.

```http
PATCH /users/1
```

---

## DELETE

Used to delete existing data.

```http
DELETE /users/1
```

---

# HTTP Status Codes

The server tells the client whether the request was successful using **Status Codes**.

---

## 2xx → Success

```
200 OK

201 Created

204 No Content
```

---

## 3xx → Redirection

```
301 Moved Permanently

302 Found
```

---

## 4xx → Client Error

```
400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found
```

These errors usually happen because the client sent an invalid request.

---

## 5xx → Server Error

```
500 Internal Server Error

502 Bad Gateway

503 Service Unavailable
```

These errors occur on the server.

---

# Request → Response Lifecycle

```
Client

↓

Creates Request

↓

HTTP

↓

Server

↓

Processes Request

↓

Creates Response

↓

HTTP

↓

Client
```

Every API call follows this lifecycle.

---

# Important Points

- HTTP is a communication protocol.
- Browser acts as the Client.
- Backend acts as the Server.
- Client sends Requests.
- Server sends Responses.
- APIs use HTTP for communication.

---

# Interview Notes

### Q. What is HTTP?

HTTP is a communication protocol used between Client and Server.

---

### Q. What is the difference between Client and Server?

Client requests data.

Server processes the request and returns the response.

---

### Q. Which HTTP Method is used to fetch data?

GET

---

### Q. Which HTTP Method is used to create new data?

POST

---

### Q. Difference between PUT and PATCH?

PUT replaces the complete resource.

PATCH updates only specific fields.

---

### Q. What does 404 mean?

Resource Not Found.

---

### Q. What does 500 mean?

Internal Server Error.

---

# Common Mistakes

❌ API and HTTP are the same.

✔ Wrong.

HTTP is a protocol.

API is an interface that uses HTTP for communication.

---

❌ GET requests always contain a Body.

✔ Wrong.

GET requests generally do not have a Request Body.

---

# Summary

- HTTP is a communication protocol.
- Client sends Requests.
- Server returns Responses.
- APIs communicate using HTTP.
- Different HTTP Methods are used for different operations.
- Status Codes indicate whether a request succeeded or failed.

---

# APIs (Application Programming Interface)

## What is an API?

An API (Application Programming Interface) acts as a bridge between the Client and the Server.

It allows two different software systems to communicate with each other without knowing each other's internal implementation.

---

## Normal Explanation

Think of an API as a **Waiter** in a restaurant.

```
Customer

↓

Waiter (API)

↓

Kitchen

↓

Waiter

↓

Customer
```

The waiter takes your order to the kitchen and brings the food back.

Similarly,

The API takes the Client's request to the Server and returns the Server's response back to the Client.

The Client never directly accesses the Database.

---

## Why Do We Need APIs?

Without APIs,

every application would need direct access to the Database.

This would be

- Unsafe
- Difficult to manage
- Less secure

APIs provide a secure and controlled way to access data.

---

## API Flow

```
Client

↓

API Request

↓

Server

↓

Database

↓

Server

↓

API Response

↓

Client
```

---

## Types of APIs (Basic)

- REST API (Most Common)
- GraphQL API
- SOAP API

For this handbook, we'll mainly use **REST APIs**.

---

## Summary

- API is an interface between Client and Server.
- API uses HTTP for communication.
- APIs improve security and organization.
- Client never directly communicates with the Database.

# XMLHttpRequest (XHR)

Before the Fetch API was introduced, JavaScript used **XMLHttpRequest (XHR)** to communicate with servers.

Even today, many legacy projects still use XHR, so understanding it is important.

---

# What is XMLHttpRequest?

## Definition

XMLHttpRequest (XHR) is a Browser API that allows JavaScript to send HTTP requests and receive responses asynchronously without refreshing the web page.

---

## Normal Explanation

Suppose your application needs user data.

Instead of refreshing the entire page,

JavaScript can silently send a request to the server,

receive the data,

and update only the required part of the page.

This is exactly what XHR does.

---

# Creating an XHR Object

```javascript
const xhr = new XMLHttpRequest();
```

This creates an XHR object.

Nothing happens yet.

No request is sent.

---

# open()

## Definition

The `open()` method configures the request.

It tells the browser

- Which HTTP Method to use
- Which URL to send the request to
- Whether the request should be asynchronous

Syntax

```javascript
xhr.open(method, url, async);
```

Example

```javascript
xhr.open("GET", "https://api.github.com/users/octocat");
```

---

## Parameters

### Method

Examples

```
GET

POST

PUT

PATCH

DELETE
```

---

### URL

The server endpoint.

Example

```javascript
"https://api.github.com/users/octocat";
```

---

### Async

Usually

```javascript
true;
```

This means

Perform the request asynchronously.

Example

```javascript
xhr.open("GET", url, true);
```

---

## Important Point

`open()` **does not send the request.**

It only configures it.

---

# send()

## Definition

The `send()` method actually sends the request to the server.

Example

```javascript
xhr.send();
```

Now the browser starts communicating with the server.

---

## Flow

```
new XMLHttpRequest()

↓

open()

↓

send()

↓

Request Sent

↓

Server Processes Request

↓

Response Received
```

---

# How Does XHR Work?

```
JavaScript

↓

Create XHR Object

↓

Configure Request

↓

Browser sends HTTP Request

↓

Server

↓

Response

↓

Browser receives response

↓

JavaScript processes response
```

---

# readyState

XHR changes its state while communicating with the server.

The current state is stored inside

```javascript
xhr.readyState;
```

---

# readyState Values

## 0 → UNSENT

Request has been created.

`open()` has not been called yet.

Example

```javascript
const xhr = new XMLHttpRequest();
```

State

```
0
```

---

## 1 → OPENED

`open()` has been called.

Request is configured.

Request has **not** been sent yet.

Example

```javascript
xhr.open("GET", url);
```

State

```
1
```

---

## 2 → HEADERS_RECEIVED

The request has reached the server.

The server has started responding.

Response headers have been received.

Response body is still loading.

---

## 3 → LOADING

The browser is receiving the response body.

Data is still coming.

Response is incomplete.

---

## 4 → DONE

Everything is complete.

- Response received
- Headers received
- Body received

Now JavaScript can safely access the response.

---

# Summary Table

| readyState | Meaning            |
| ---------- | ------------------ |
| 0          | Request Created    |
| 1          | Request Configured |
| 2          | Headers Received   |
| 3          | Loading Response   |
| 4          | Request Completed  |

---

# onreadystatechange

Whenever `readyState` changes,

this event executes.

Example

```javascript
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
};
```

Every time the state changes,

this function runs.

---

# Why Do We Use onreadystatechange?

Suppose the response takes 3 seconds.

JavaScript needs a way to know

"When is the response ready?"

This event solves that problem.

Whenever the state changes,

JavaScript gets notified.

---

# Why Do We Check readyState == 4?

Example

```javascript
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
  }
};
```

Because before state 4,

the response is incomplete.

Trying to read the response too early may result in incomplete data.

---

# status

The status property tells whether the request was successful.

Example

```javascript
console.log(xhr.status);
```

Possible Values

```
200

201

404

500
```

---

## Best Practice

```javascript
if (xhr.readyState === 4 && xhr.status === 200) {
  console.log("Success");
}
```

Always check both

- readyState
- status

---

# responseText

Returns the response as a String.

Example

```javascript
console.log(xhr.responseText);
```

Output

```text
{
   "name":"Harshit"
}
```

Notice

This is a **String**.

Not an Object.

---

# Converting JSON String into Object

Example

```javascript
const data = JSON.parse(xhr.responseText);

console.log(data);
```

Now

```javascript
data.name;
```

works.

---

# Complete Example

```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/octocat");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      console.log(data.login);
      console.log(data.followers);
    }
  }
};

xhr.send();
```

---

# Complete XHR Flow

```
Create XHR Object

↓

open()

↓

send()

↓

Browser sends Request

↓

Server receives Request

↓

Server processes Request

↓

Response Sent

↓

readyState Changes

↓

onreadystatechange

↓

readyState == 4

↓

status == 200

↓

responseText

↓

JSON.parse()

↓

JavaScript Object
```

---

# XHR vs Fetch

| XMLHttpRequest  | Fetch           |
| --------------- | --------------- |
| Older API       | Modern API      |
| Callback Based  | Promise Based   |
| More Code       | Cleaner Code    |
| Harder to Read  | Easy to Read    |
| Legacy Projects | Modern Projects |

---

# Interview Notes

### Q. What is XMLHttpRequest?

A Browser API used to send HTTP requests asynchronously.

---

### Q. Does `open()` send the request?

No.

It only configures the request.

---

### Q. Which method actually sends the request?

`send()`

---

### Q. Why do we use `onreadystatechange`?

To detect whenever the request state changes.

---

### Q. Why should we check `readyState === 4`?

Because only then is the response completely received.

---

### Q. Why should we check `status === 200`?

To ensure the request was successful.

---

### Q. Why do we use `JSON.parse()`?

Because `responseText` is returned as a String.

`JSON.parse()` converts it into a JavaScript Object.

---

# Common Mistakes

❌ `open()` sends the request.

✔ Wrong.

`open()` only configures the request.

---

❌ `responseText` is already an Object.

✔ Wrong.

It is a String.

Use `JSON.parse()`.

---

❌ Read response before `readyState == 4`.

✔ Wrong.

Always wait until the request is complete.

---

# Summary

- XHR is a Browser API.
- `new XMLHttpRequest()` creates the object.
- `open()` configures the request.
- `send()` sends the request.
- `readyState` tracks the request lifecycle.
- `onreadystatechange` is triggered whenever the state changes.
- `responseText` returns a String.
- `JSON.parse()` converts the response into a JavaScript Object.
- Fetch API is the modern replacement for XHR.

# setTimeout()

## What is setTimeout()?

`setTimeout()` is a **Browser API** that executes a callback function **once** after a specified delay.

> **Important**
>
> `setTimeout()` is **NOT** a part of JavaScript.
>
> It is provided by the **Browser Runtime (Web API).**

---

## Syntax

```javascript
setTimeout(callback, delay);
```

### Parameters

### callback

The function that should execute after the delay.

### delay

Time in milliseconds (ms).

```
1000 ms = 1 second
2000 ms = 2 seconds
5000 ms = 5 seconds
```

---

## Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
```

Output

```
Start
End
Hello
```

---

## Internal Working

Consider the following code:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
```

Execution Flow

```
JavaScript starts execution

↓

console.log("Start")

↓

Output

Start

↓

setTimeout()

↓

Browser API receives timer

↓

Timer starts (2 sec)

↓

JavaScript DOES NOT WAIT

↓

console.log("End")

↓

Output

End

↓

Call Stack becomes empty

↓

After 2 sec Browser completes timer

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

console.log("Hello")
```

Final Output

```
Start
End
Hello
```

---

## Important Point

Many beginners think

```
JavaScript waits for 2 seconds.
```

❌ Wrong.

JavaScript never waits.

The Browser waits.

JavaScript immediately continues executing the remaining code.

---

## Delay Does NOT Mean Exact Execution Time

Very Important Interview Question.

Suppose

```javascript
setTimeout(() => {
  console.log("Hello");
}, 2000);
```

Does this guarantee execution exactly after 2 seconds?

**No.**

It only guarantees that the callback **will not execute before 2 seconds.**

It may execute later if

- Call Stack is busy
- Other synchronous code is executing

Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 0);

for (let i = 0; i < 1000000000; i++) {}

console.log("End");
```

Output

```
Start
End
Hello
```

Even though delay is **0 ms**, JavaScript first completes the loop.

---

## setTimeout(0)

Many developers think

```javascript
setTimeout(callback, 0);
```

means

```
Execute Immediately.
```

❌ Wrong.

Correct behaviour

```
Current Synchronous Code

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

Execute Callback
```

Even with **0 ms delay**, the callback waits until

- Current synchronous code finishes
- Call Stack becomes empty
- Microtask Queue becomes empty

Only then it executes.

---

## Important Points

- Executes callback only once.
- Browser API.
- Non-blocking.
- Delay is minimum waiting time.
- Callback executes only when Call Stack becomes empty.

---

# clearTimeout()

## What is clearTimeout()?

`clearTimeout()` is used to cancel a timer created using `setTimeout()` before it executes.

---

## Syntax

```javascript
clearTimeout(timerId);
```

---

## Why Does setTimeout Return a Value?

Example

```javascript
const id = setTimeout(() => {
  console.log("Hello");
}, 5000);
```

`setTimeout()` returns a **Timer ID**.

Example

```javascript
console.log(id);
```

Output may look like

```
1
```

or

```
5
```

or

```
Timeout {...}
```

depending on the environment.

This Timer ID uniquely identifies that timer.

---

## Example

```javascript
const id = setTimeout(() => {
  console.log("Hello");
}, 5000);

clearTimeout(id);
```

Output

```
Nothing
```

Because the timer was cancelled before completion.

---

## Internal Working

```
setTimeout()

↓

Browser creates Timer

↓

Timer ID returned

↓

clearTimeout(id)

↓

Browser removes Timer

↓

Callback never enters Callback Queue
```

Notice

The callback never reaches the Callback Queue.

---

## Why Same Timer ID is Required?

Suppose

```javascript
const id = setTimeout(...);

clearTimeout(id);
```

Browser knows exactly which timer should be removed.

Without the correct Timer ID,

Browser cannot identify the timer.

---

## Important Points

- Cancels pending timers.
- Requires the Timer ID returned by `setTimeout()`.
- If timer has already executed, `clearTimeout()` has no effect.

---

# setInterval()

## What is setInterval()?

`setInterval()` is a Browser API that executes a callback function repeatedly after a fixed interval.

---

## Syntax

```javascript
setInterval(callback, delay);
```

---

## Example

```javascript
setInterval(() => {
  console.log("Hello");
}, 1000);
```

Output

```
Hello
Hello
Hello
Hello
...
```

The callback keeps executing every second until stopped.

---

## Internal Working

```
JavaScript

↓

setInterval()

↓

Browser API

↓

Start Timer

↓

1 sec completed

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

Execute Callback

↓

Timer starts again

↓

Repeat
```

Unlike `setTimeout()`, the timer is **not removed automatically**.

It keeps repeating.

---

## Difference Between setTimeout() and setInterval()

| setTimeout()                | setInterval()                 |
| --------------------------- | ----------------------------- |
| Executes once               | Executes repeatedly           |
| Timer removed automatically | Timer continues until cleared |
| Used for one-time tasks     | Used for repeated tasks       |

---

## Important Points

- Executes repeatedly.
- Browser API.
- Non-blocking.
- Continues forever unless stopped.

---

# clearInterval()

## What is clearInterval()?

`clearInterval()` stops an interval created using `setInterval()`.

---

## Syntax

```javascript
clearInterval(intervalId);
```

---

## Example

```javascript
const id = setInterval(() => {
  console.log("Hello");
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 5000);
```

Output

```
Hello
Hello
Hello
Hello
Hello
```

After approximately 5 seconds,

the interval stops.

---

## Internal Working

```
setInterval()

↓

Browser creates repeating timer

↓

Interval ID returned

↓

clearInterval(id)

↓

Browser removes repeating timer

↓

No more callbacks
```

---

## Important Points

- Stops repeated execution.
- Requires Interval ID.
- Commonly used in clocks, timers, games and animations.

---

# setTimeout() vs setInterval()

| setTimeout()          | setInterval()                    |
| --------------------- | -------------------------------- |
| Executes once         | Executes repeatedly              |
| One callback          | Infinite callbacks until stopped |
| Removed automatically | Must be cleared manually         |
| clearTimeout()        | clearInterval()                  |

---

# Interview Notes

### Q. Is setTimeout() part of JavaScript?

No.

It is a Browser API.

---

### Q. Does setTimeout() guarantee execution after exactly the specified delay?

No.

It guarantees **minimum delay**, not exact execution time.

---

### Q. Why does setTimeout() return a value?

It returns a Timer ID so that the timer can be cancelled later using `clearTimeout()`.

---

### Q. Difference between setTimeout() and setInterval()?

`setTimeout()` executes once.

`setInterval()` executes repeatedly.

---

### Q. Why do we use clearInterval()?

To stop repeated execution.

---

# Common Mistakes

❌ setTimeout() pauses JavaScript.

✔ Wrong.

Browser handles the timer.

JavaScript continues executing.

---

❌ setTimeout(0) executes immediately.

✔ Wrong.

It executes only after the current synchronous code and all pending microtasks complete.

---

❌ clearTimeout() works without Timer ID.

✔ Wrong.

Timer ID is required.

---

# Summary

- `setTimeout()` executes a callback once after a minimum delay.
- `clearTimeout()` cancels a pending timeout.
- `setInterval()` executes a callback repeatedly.
- `clearInterval()` stops the repeating interval.
- All four are Browser APIs, not JavaScript features.
- Timers never execute directly; they go through the Browser → Queue → Event Loop → Call Stack flow.

# Callback Functions

Before understanding Promises, we must first understand **Callbacks**, because Promises were introduced to solve the problems created by Callbacks.

---

# What is a Callback Function?

## Definition

A Callback Function is a function that is passed as an argument to another function and is executed later.

---

## Normal Explanation

Suppose you tell your friend

> "Market jao aur doodh lekar aana. Wapas aake mujhe call karna."

Your friend doesn't call immediately.

He first completes the task.

Then he calls you.

That "call later" is exactly what a Callback Function does.

---

## Example

```javascript
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Harshit");
}

processUser(greet);
```

Output

```
Hello Harshit
```

Notice

We are passing

```javascript
greet;
```

NOT

```javascript
greet();
```

because we want another function to decide **when** it should execute.

---

# Callback vs Function Call

Very Important Interview Question.

Example

```javascript
greet();
```

Here,

the function executes immediately.

---

Example

```javascript
processUser(greet);
```

Here,

the function is only passed.

Execution happens later.

---

# Why Do We Use Callbacks?

Callbacks are useful when a task takes time.

Examples

- Timer
- API Request
- Reading File
- Database Query
- Button Click

We don't know exactly when these tasks will finish.

So instead of waiting,

we pass a callback.

When the task completes,

the callback executes.

---

# Example with setTimeout()

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 2000);

console.log("End");
```

Output

```
Start
End
Hello
```

The function

```javascript
() => {
  console.log("Hello");
};
```

is a Callback Function.

Browser executes it later.

---

# Example with Event Listener

```javascript
button.addEventListener("click", () => {
  console.log("Button Clicked");
});
```

The callback executes only when the user clicks the button.

---

# Advantages of Callbacks

- Asynchronous Programming
- Event Handling
- Timers
- Reusability
- Flexibility

Callbacks allow JavaScript to execute code later when required.

---

# Problems with Callbacks

Callbacks work well for simple tasks.

But what if we have multiple asynchronous operations?

Example

```
Login

↓

Get User

↓

Get Orders

↓

Payment

↓

Send Email
```

Each step depends on the previous one.

Using callbacks,

the code becomes deeply nested.

This leads to **Callback Hell**.

---

# Callback Hell

## Definition

Callback Hell is a situation where multiple nested callbacks make the code difficult to read, understand and maintain.

It is also called the **Pyramid of Doom**.

---

## Example

```javascript
login(function () {
  getUser(function () {
    getOrders(function () {
      makePayment(function () {
        sendEmail(function () {
          console.log("Done");
        });
      });
    });
  });
});
```

Notice how every callback is nested inside another callback.

As the application grows,

the code becomes harder to understand.

---

## Why is it Called Pyramid of Doom?

Because the code keeps moving towards the right side.

Example

```
Task

   ↓

      Task

          ↓

              Task

                  ↓

                      Task

                          ↓

                              Task
```

The code starts looking like a pyramid.

---

# Problems of Callback Hell

- Difficult to Read
- Difficult to Debug
- Difficult to Maintain
- Difficult Error Handling
- Deep Nesting
- Code becomes messy

---

# Inversion of Control

This is one of the biggest problems with callbacks.

---

## What is Inversion of Control?

When we pass a callback to another function,

we lose control over **when**, **whether**, and **how many times** that callback will execute.

---

## Normal Explanation

Suppose you order food from Swiggy.

You give your phone number.

Now,

you trust Swiggy to call you when the order arrives.

You no longer control

- when they call,
- whether they call,
- or how many times they call.

You have handed over control.

This is called **Inversion of Control**.

---

## JavaScript Example

```javascript
apiCall(function () {
  console.log("Success");
});
```

Here,

you trust `apiCall()` to execute your callback correctly.

Questions arise:

- Will it execute?
- Will it execute only once?
- Will it execute twice?
- Will it forget to execute?

You don't know.

You have lost control.

---

# Why Callback Hell Was a Problem

As applications became larger,

callbacks introduced two major issues:

1. Callback Hell (Deep Nesting)
2. Inversion of Control (Loss of Trust)

JavaScript needed a better solution.

That solution was **Promises**.

---

# Interview Notes

### Q. What is a Callback Function?

A function passed as an argument to another function that is executed later.

---

### Q. What is Callback Hell?

A situation where multiple nested callbacks make the code difficult to read and maintain.

---

### Q. What is the Pyramid of Doom?

Another name for Callback Hell because nested callbacks form a pyramid-like structure.

---

### Q. What is Inversion of Control?

Giving control of your callback to another function, which decides when and how it executes.

---

### Q. Why were Promises introduced?

Promises were introduced to solve:

- Callback Hell
- Inversion of Control

---

# Common Mistakes

❌ Callback Hell means callbacks are bad.

✔ Wrong.

Callbacks are useful.

The problem occurs only when many callbacks become deeply nested.

---

❌ Every callback causes Callback Hell.

✔ Wrong.

Simple callbacks are completely fine.

Only excessive nesting creates Callback Hell.

---

# Summary

- A Callback Function is passed to another function and executes later.
- Callbacks are heavily used in asynchronous programming.
- Multiple nested callbacks create Callback Hell.
- Callback Hell leads to unreadable and difficult-to-maintain code.
- Passing callbacks to another function results in Inversion of Control.
- Promises were introduced to solve these problems.

# Promise

Promises were introduced in **ES6 (ECMAScript 2015)** to solve the problems created by Callbacks.

They make asynchronous code easier to read, maintain and handle.

---

# What is a Promise?

## Definition

A Promise is an object that represents the **eventual completion (success)** or **failure** of an asynchronous operation.

In simple words,

A Promise is a **placeholder for a future value**.

---

## Normal Explanation

Suppose your friend says

> "Kal tak ₹1000 de dunga."

Right now,

you don't have the money.

But you have a **promise** that you'll either

- Receive ₹1000 tomorrow
- Or your friend will refuse

Until tomorrow,

the result is unknown.

Exactly this is how JavaScript Promises work.

---

## Why Do We Need Promises?

Callbacks introduced two major problems

- Callback Hell
- Inversion of Control

Promises solve both problems by

- Flattening the code
- Giving control back to the developer
- Providing proper error handling
- Making asynchronous code readable

---

# Promise Syntax

```javascript
const promise = new Promise((resolve, reject) => {});
```

Let's understand every part of this syntax.

---

# Promise Constructor

```javascript
new Promise(...)
```

`Promise` is a built-in JavaScript class.

Whenever we write

```javascript
new Promise(...)
```

JavaScript creates a Promise Object.

This object internally stores

- Current State
- Result
- Callback Handlers

Initially

```
State

↓

Pending
```

---

# Executor Function

Example

```javascript
const promise = new Promise((resolve, reject) => {
  console.log("Inside Promise");
});
```

Output

```
Inside Promise
```

Notice

We never called the function manually.

Still,

it executed immediately.

---

## Why?

When we create a Promise,

the Promise Constructor automatically executes the Executor Function.

```
new Promise()

↓

Promise Object Created

↓

Executor Function Executes Immediately
```

You never have to call it yourself.

---

# Important Rule

The Executor Function executes **immediately**.

It is synchronous.

Many beginners think

```
Promise executes later.
```

Wrong.

Only the `.then()` callback executes later.

The Executor Function executes immediately.

---

# resolve() and reject()

When the Executor Function executes,

JavaScript automatically provides two functions.

```javascript
resolve;

reject;
```

You do not create them.

JavaScript creates them internally.

Example

```javascript
new Promise((resolve, reject) => {});
```

Here,

`resolve` and `reject` are automatically provided by the Promise Constructor.

---

# What does resolve() do?

`resolve()` marks the Promise as **successful**.

Example

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

Internally

```
Pending

↓

Fulfilled

↓

Result Stored

↓

"Success"
```

The Promise is now fulfilled.

---

# What does reject() do?

`reject()` marks the Promise as **failed**.

Example

```javascript
const promise = new Promise((resolve, reject) => {
  reject("Error");
});
```

Internally

```
Pending

↓

Rejected

↓

Reason Stored

↓

"Error"
```

---

# Promise States

Every Promise has only three states.

```
Pending

↓

Fulfilled

or

Rejected
```

---

## 1. Pending

The asynchronous task is still running.

Result is not available yet.

Example

```
Fetching Data...

↓

Pending
```

---

## 2. Fulfilled

The task completed successfully.

Example

```
API Success

↓

Fulfilled
```

---

## 3. Rejected

The task failed.

Example

```
Network Error

↓

Rejected
```

---

# State Transition

A Promise changes state only once.

```
Pending

↓

Fulfilled
```

OR

```
Pending

↓

Rejected
```

Never

```
Fulfilled

↓

Rejected
```

Never

```
Rejected

↓

Fulfilled
```

Once settled,

the state cannot change.

---

# Example

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Done");

  reject("Error");
});
```

Output

```
Done
```

The `reject()` is ignored.

Why?

Because a Promise settles only once.

---

# Does resolve() stop function execution?

No.

This is one of the biggest misconceptions.

Example

```javascript
new Promise((resolve, reject) => {
  console.log("A");

  resolve();

  console.log("B");
});
```

Output

```
A
B
```

Many beginners expect

```
A
```

Only.

Wrong.

---

## Why?

`resolve()` only changes the Promise State.

It does **not** stop JavaScript execution.

Execution continues normally.

If you want to stop execution,

use

```javascript
return resolve();
```

---

# return resolve()

Example

```javascript
new Promise((resolve) => {
  console.log("A");

  return resolve();

  console.log("B");
});
```

Output

```
A
```

Now

```
B
```

never executes,

because

`return`

terminates the function.

---

# Promise Object

Example

```javascript
const promise = new Promise(() => {});
```

Question

What is stored inside `promise`?

Answer

A Promise Object.

Example

```javascript
console.log(promise);
```

Output

```
Promise { <pending> }
```

Initially every Promise starts in the Pending state.

---

# Internal Flow

```
new Promise()

↓

Promise Object Created

↓

State = Pending

↓

Executor Function Executes

↓

resolve()

↓

Fulfilled

OR

↓

reject()

↓

Rejected
```

---

# Important Points

- Promise is an Object.
- Executor Function executes immediately.
- resolve() marks Promise as fulfilled.
- reject() marks Promise as rejected.
- resolve() does not stop execution.
- Promise State changes only once.

---

# Interview Notes

### Q. What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

---

### Q. What are the three Promise states?

- Pending
- Fulfilled
- Rejected

---

### Q. Does the Executor Function execute automatically?

Yes.

It executes immediately when the Promise is created.

---

### Q. Does resolve() stop execution?

No.

It only changes the Promise state.

---

### Q. How can we stop execution after resolve()?

Use

```javascript
return resolve();
```

---

### Q. Can a Promise change state twice?

No.

A Promise settles only once.

---

# Common Mistakes

❌ Promise executes later.

✔ Wrong.

Only `.then()` executes later.

The Executor Function executes immediately.

---

❌ resolve() stops the function.

✔ Wrong.

Execution continues unless `return` is used.

---

❌ A Promise can be fulfilled and rejected.

✔ Wrong.

Only the first state change is considered.

---

# Summary

- Promise is a JavaScript object.
- Every Promise starts in the Pending state.
- The Executor Function executes immediately.
- JavaScript provides `resolve()` and `reject()` automatically.
- `resolve()` marks success.
- `reject()` marks failure.
- A Promise settles only once.
- `resolve()` does not stop execution.

# Promise Internal Working

Till now we know

```javascript
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

But internally JavaScript does much more than simply changing the state.

Let's understand what actually happens.

---

# Step 1 : Promise Object is Created

```javascript
const promise = new Promise((resolve, reject) => {});
```

As soon as JavaScript sees

```javascript
new Promise(...)
```

it creates a Promise Object.

Initially

```
Promise

↓

State = Pending

Result = undefined
```

Nothing has completed yet.

---

# Step 2 : Executor Function Executes Immediately

Example

```javascript
new Promise((resolve) => {
  console.log("Inside");
});
```

Output

```
Inside
```

The Executor Function is synchronous.

It runs immediately after the Promise Object is created.

Flow

```
new Promise()

↓

Promise Created

↓

Executor Function Executes
```

---

# Step 3 : resolve() is Called

Example

```javascript
new Promise((resolve) => {
  resolve("Hello");
});
```

Many beginners think

```
resolve()

↓

then()
```

directly executes.

❌ Wrong.

---

## What Does resolve() Actually Do?

Internally,

`resolve()` performs three tasks.

### 1. Changes Promise State

```
Pending

↓

Fulfilled
```

---

### 2. Stores the Result

```
Result

↓

"Hello"
```

The Promise Object now remembers this value.

---

### 3. Schedules .then() Callback

If any `.then()` callback is attached,

JavaScript schedules it in the **Microtask Queue**.

Notice

`resolve()` itself **does not execute** the callback.

It only schedules it.

---

# Visual Flow

```
resolve("Hello")

↓

Promise State

↓

Fulfilled

↓

Store Result

↓

Schedule .then()

↓

Microtask Queue
```

---

# Why Doesn't .then() Execute Immediately?

Example

```javascript
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");
```

Output

```
A

C

B
```

Question

Why?

Because JavaScript first finishes all synchronous code.

Only after the Call Stack becomes empty,

the Event Loop moves the `.then()` callback from the Microtask Queue to the Call Stack.

---

# Complete Flow

```
Promise.resolve()

↓

Promise Fulfilled

↓

.then() callback

↓

Microtask Queue

↓

Call Stack Empty?

↓

Yes

↓

Event Loop

↓

Call Stack

↓

Execute Callback
```

---

# Example

```javascript
console.log("Start");

const promise = new Promise((resolve) => {
  resolve("Done");
});

promise.then((value) => {
  console.log(value);
});

console.log("End");
```

Execution

```
Start

↓

Promise Created

↓

Executor Executes

↓

resolve()

↓

State = Fulfilled

↓

Result Stored

↓

.then()

↓

Microtask Queue

↓

End

↓

Call Stack Empty

↓

Event Loop

↓

Execute .then()

↓

Done
```

Output

```
Start

End

Done
```

---

# Promise Object Internally

Conceptually,

a Promise Object stores something like this.

```
Promise

{

State

Result

Success Callbacks

Failure Callbacks

}
```

For example

```
Promise

{

State : Fulfilled

Result : "Hello"

Success Callbacks : [...]

Failure Callbacks : [...]

}
```

> Note:
> This is a conceptual representation to understand how Promises work. JavaScript engines use their own internal implementation.

---

# Promise.resolve()

JavaScript provides a shortcut.

Instead of

```javascript
new Promise((resolve) => {
  resolve(10);
});
```

we can simply write

```javascript
Promise.resolve(10);
```

Both create an already fulfilled Promise.

---

# Promise.reject()

Similarly

Instead of

```javascript
new Promise((resolve, reject) => {
  reject("Error");
});
```

we can write

```javascript
Promise.reject("Error");
```

This creates an already rejected Promise.

---

# Promise.resolve() vs resolve()

Many students get confused here.

### resolve()

Used **inside** the Promise Executor Function.

Example

```javascript
new Promise((resolve) => {
  resolve("Hello");
});
```

---

### Promise.resolve()

Used **outside** to directly create a fulfilled Promise.

Example

```javascript
Promise.resolve("Hello");
```

---

# Promise.reject() vs reject()

Same difference.

`reject()` is provided inside the Executor Function.

`Promise.reject()` directly creates a rejected Promise.

---

# Important Points

- Promise Object is created first.
- Executor Function executes immediately.
- resolve() changes the Promise state.
- resolve() stores the result.
- resolve() schedules the `.then()` callback.
- `.then()` never executes immediately.
- Promise callbacks always go to the Microtask Queue.

---

# Interview Notes

### Q. Does resolve() execute the .then() callback?

No.

It only schedules it.

The callback executes later through the Microtask Queue.

---

### Q. Why does .then() execute after synchronous code?

Because Promise callbacks are Microtasks.

Microtasks execute only after the current synchronous code completes.

---

### Q. What is the difference between resolve() and Promise.resolve()?

`resolve()` changes the state of the current Promise.

`Promise.resolve()` creates a new fulfilled Promise.

---

### Q. Where does .then() callback go?

Microtask Queue.

---

# Common Mistakes

❌ resolve() immediately executes .then().

✔ Wrong.

It only schedules the callback.

---

❌ Promise.resolve() and resolve() are the same.

✔ Wrong.

They are related, but they are used in different contexts.

---

# Summary

- Promise Object is created first.
- Executor Function runs immediately.
- resolve() changes the Promise state and stores the result.
- `.then()` callbacks are scheduled in the Microtask Queue.
- Promise callbacks execute only after synchronous code finishes.
- `Promise.resolve()` and `Promise.reject()` are shortcut methods for creating settled Promises.

# .then()

After a Promise is fulfilled, we usually want to perform some action using the result.

This is where `.then()` comes into the picture.

---

# What is .then()?

## Definition

`.then()` is a Promise method used to execute a callback function when the Promise is successfully fulfilled.

---

## Syntax

```javascript
promise.then(onFulfilled);
```

Example

```javascript
Promise.resolve("Hello").then((value) => {
  console.log(value);
});
```

Output

```
Hello
```

---

# Normal Explanation

Suppose you ordered food online.

You don't know exactly when it will arrive.

So instead of checking every second,

you tell the delivery partner

> "When the food arrives, call me."

Similarly,

`.then()` means

> "When this Promise becomes successful, execute this callback."

---

# Flow

```
Promise Created

↓

Pending

↓

resolve()

↓

Fulfilled

↓

.then()

↓

Microtask Queue

↓

Event Loop

↓

Call Stack

↓

Execute Callback
```

---

# Example 1

```javascript
const promise = new Promise((resolve) => {
  resolve("JavaScript");
});

promise.then((data) => {
  console.log(data);
});
```

Output

```
JavaScript
```

---

# Where does "data" come from?

Question

```javascript
promise.then((data) => {});
```

Who passes

```
data
```

to the callback?

Answer

JavaScript automatically passes the value stored by `resolve()`.

Example

```javascript
resolve("Hello");
```

Later

```javascript
.then((data)=>{

    console.log(data);

});
```

Internally

```
resolve("Hello")

↓

Promise stores

"Hello"

↓

.then()

↓

JavaScript passes

↓

data = "Hello"
```

So

```
data

↓

Hello
```

---

# Example

```javascript
Promise.resolve(100)

  .then((value) => {
    console.log(value);
  });
```

Output

```
100
```

JavaScript automatically passes

```
100
```

to

```
value
```

---

# .then() Does Not Execute Immediately

Example

```javascript
console.log("A");

Promise.resolve("Hello")

  .then((value) => {
    console.log(value);
  });

console.log("B");
```

Output

```
A

B

Hello
```

---

## Why?

Because

```
.then()

↓

Microtask Queue
```

The callback executes only after synchronous code finishes.

---

# Multiple .then()

Example

```javascript
Promise.resolve(10)

  .then((value) => {
    console.log(value);
  })

  .then(() => {
    console.log("Done");
  });
```

Output

```
10

Done
```

Each `.then()` waits for the previous one to finish.

---

# What Does .then() Return?

This is one of the most important interview questions.

Answer

`.then()` **always returns a new Promise.**

Example

```javascript
const p = Promise.resolve(10);

const result = p.then((value) => {
  return value;
});

console.log(result);
```

Output

```
Promise { <pending> }
```

Initially,

the new Promise is pending.

After the callback finishes,

it becomes fulfilled.

---

# Why Does .then() Return a Promise?

Suppose it returned a normal value.

Then this would not work.

```javascript
Promise.resolve(10)

.then(...)

.then(...)

.then(...);
```

Promise Chaining would become impossible.

Therefore,

every `.then()` returns a new Promise.

---

# Internal Flow

```
Promise

↓

.then()

↓

Create New Promise

↓

Execute Callback

↓

Callback Returns Value

↓

Resolve New Promise

↓

Next .then()
```

This is exactly how Promise Chaining works.

---

# Returning a Normal Value

Example

```javascript
Promise.resolve(10)

  .then((value) => {
    return value * 2;
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
20
```

---

## Internal Working

```
First Promise

↓

10

↓

return 20

↓

New Promise

↓

20

↓

Second then()
```

The returned value automatically becomes the value of the next Promise.

---

# Returning Nothing

Example

```javascript
Promise.resolve(10)

  .then((value) => {
    console.log(value);
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
10

undefined
```

---

## Why?

First `.then()` didn't return anything.

In JavaScript,

every function without a return statement automatically returns

```
undefined
```

So the next Promise resolves with

```
undefined
```

---

# Returning Another Promise

Example

```javascript
Promise.resolve(10)

  .then((value) => {
    return Promise.resolve(value * 2);
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
20
```

---

## Internal Working

Suppose

```javascript
return Promise.resolve(20);
```

JavaScript **waits** for that returned Promise to settle.

Only after it becomes fulfilled,

the next `.then()` executes.

Flow

```
Promise

↓

.then()

↓

Return Promise

↓

Wait

↓

Promise Fulfilled

↓

Next .then()
```

This is why Promise Chaining works even with asynchronous operations.

---

# Important Rules

### Rule 1

`.then()` executes only after the Promise is fulfilled.

---

### Rule 2

`.then()` callback always goes to the Microtask Queue.

---

### Rule 3

`.then()` always returns a new Promise.

---

### Rule 4

Whatever you return from `.then()`

becomes the value of the next Promise.

---

### Rule 5

If nothing is returned,

the next Promise resolves with

```
undefined
```

---

# Interview Notes

### Q. When does `.then()` execute?

After the Promise is fulfilled.

---

### Q. Does `.then()` execute immediately?

No.

It executes through the Microtask Queue.

---

### Q. What does `.then()` return?

A new Promise.

---

### Q. Where does the callback parameter get its value?

From the value passed to `resolve()`.

---

### Q. What happens if we don't return anything?

The next Promise resolves with

```
undefined
```

---

### Q. Can we return another Promise from `.then()`?

Yes.

The next `.then()` waits until that Promise settles.

---

# Common Mistakes

❌ `.then()` returns a normal value.

✔ Wrong.

It always returns a new Promise.

---

❌ `.then()` executes immediately.

✔ Wrong.

It executes through the Microtask Queue.

---

❌ The callback parameter is created by the developer.

✔ Wrong.

JavaScript automatically passes the resolved value.

---

# Summary

- `.then()` runs after a Promise is fulfilled.
- The callback receives the value passed to `resolve()`.
- `.then()` callbacks are placed in the Microtask Queue.
- `.then()` always returns a new Promise.
- Returning a value passes it to the next `.then()`.
- Returning another Promise makes the next `.then()` wait until that Promise settles.

# .catch()

Promises are not always successful.

Sometimes

- Network Request fails
- Server returns an error
- Invalid data is received
- We manually reject the Promise

To handle such situations, JavaScript provides **`.catch()`**.

---

# What is .catch()?

## Definition

`.catch()` is a Promise method used to handle rejected Promises or any error that occurs in the Promise chain.

---

## Syntax

```javascript
promise.catch(onRejected);
```

Example

```javascript
Promise.reject("Something went wrong")

  .catch((error) => {
    console.log(error);
  });
```

Output

```
Something went wrong
```

---

# Normal Explanation

Suppose you ordered food.

There are two possibilities.

```
Food Delivered

↓

.then()
```

OR

```
Restaurant Closed

↓

.catch()
```

If something goes wrong,

`.catch()` handles it.

---

# reject()

Example

```javascript
const promise = new Promise((resolve, reject) => {
  reject("Network Error");
});

promise.catch((error) => {
  console.log(error);
});
```

Output

```
Network Error
```

---

# How Does .catch() Work?

Flow

```
Promise

↓

Rejected

↓

.catch()

↓

Microtask Queue

↓

Event Loop

↓

Call Stack

↓

Execute Callback
```

Just like `.then()`,

`.catch()` callback also goes into the **Microtask Queue**.

---

# Example

```javascript
console.log("Start");

Promise.reject("Error")

  .catch((err) => {
    console.log(err);
  });

console.log("End");
```

Output

```
Start

End

Error
```

Why?

Because `.catch()` also executes asynchronously through the Microtask Queue.

---

# Errors inside .then()

Example

```javascript
Promise.resolve()

  .then(() => {
    throw new Error("Oops");
  })

  .catch((err) => {
    console.log(err.message);
  });
```

Output

```
Oops
```

---

## Why?

When an error is thrown inside `.then()`,

JavaScript automatically converts it into a rejected Promise.

Internally,

```javascript
throw new Error("Oops");
```

acts like

```javascript
return Promise.reject(new Error("Oops"));
```

That's why `.catch()` receives it.

---

# Error Propagation

One of the biggest advantages of Promises is **Error Propagation**.

Example

```javascript
Promise.resolve()

  .then(() => {
    console.log("Step 1");
  })

  .then(() => {
    throw new Error("Failed");
  })

  .then(() => {
    console.log("Step 3");
  })

  .catch((err) => {
    console.log(err.message);
  });
```

Output

```
Step 1

Failed
```

Notice

The third `.then()` never executes.

As soon as an error occurs,

JavaScript skips all remaining `.then()` blocks

and jumps directly to `.catch()`.

---

# Flow

```
Promise

↓

.then()

↓

.then()

↓

Error

↓

Skip Remaining .then()

↓

.catch()
```

---

# Can .catch() Recover the Chain?

Yes.

Example

```javascript
Promise.reject("Error")

  .catch(() => {
    console.log("Recovered");

    return 100;
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
Recovered

100
```

---

## Why?

`.catch()` also returns a Promise.

If it returns a normal value,

the Promise becomes fulfilled again.

Flow

```
Rejected Promise

↓

.catch()

↓

return 100

↓

New Fulfilled Promise

↓

.then()
```

This is called **Recovery**.

---

# What if .catch() Throws Another Error?

Example

```javascript
Promise.reject("Error")

  .catch(() => {
    throw new Error("Another Error");
  })

  .catch((err) => {
    console.log(err.message);
  });
```

Output

```
Another Error
```

The second `.catch()` handles the new error.

---

# .then(success, failure)

JavaScript also allows

```javascript
promise.then(successCallback, errorCallback);
```

Example

```javascript
Promise.reject("Error")

  .then(
    () => {
      console.log("Success");
    },

    (err) => {
      console.log(err);
    },
  );
```

Output

```
Error
```

Although valid,

this style is rarely used.

Using `.catch()` is cleaner and more readable.

---

# Important Rules

### Rule 1

`.catch()` executes only when the Promise is rejected.

---

### Rule 2

Errors thrown inside `.then()` automatically move to `.catch()`.

---

### Rule 3

`.catch()` also returns a new Promise.

---

### Rule 4

Returning a value inside `.catch()` recovers the Promise chain.

---

### Rule 5

Throwing another error inside `.catch()` creates another rejected Promise.

---

# Interview Notes

### Q. Does `.catch()` handle only `reject()`?

No.

It also handles errors thrown inside `.then()`.

---

### Q. Where does `.catch()` callback execute?

Inside the Microtask Queue.

---

### Q. Can `.catch()` recover the Promise chain?

Yes.

Returning a value from `.catch()` creates a fulfilled Promise.

---

### Q. What happens after an error occurs inside `.then()`?

All remaining `.then()` blocks are skipped.

Control directly moves to `.catch()`.

---

# Common Mistakes

❌ `.catch()` handles only `reject()`.

✔ Wrong.

It also handles exceptions thrown inside `.then()`.

---

❌ Promise chain always stops after `.catch()`.

✔ Wrong.

If `.catch()` returns a value,

the chain continues normally.

---

# Summary

- `.catch()` handles rejected Promises.
- It also handles errors thrown inside `.then()`.
- Errors automatically propagate to the nearest `.catch()`.
- `.catch()` returns a new Promise.
- Returning a value from `.catch()` recovers the Promise chain.
- `.catch()` callbacks execute through the Microtask Queue.

# .finally()

While working with Promises, sometimes we have some code that should execute **regardless of whether the Promise succeeds or fails.**

Examples

- Hide Loading Spinner
- Close Database Connection
- Stop Loader
- Release Resources
- Cleanup Code

For such situations, JavaScript provides **`.finally()`**.

---

# What is .finally()?

## Definition

`.finally()` is a Promise method that executes a callback after a Promise settles, whether it is **Fulfilled** or **Rejected**.

---

## Syntax

```javascript
promise.finally(callback);
```

---

## Normal Explanation

Imagine you're downloading a file.

Whether

- Download succeeds
- Download fails

you still want to hide the loading spinner.

Instead of writing the same code in both `.then()` and `.catch()`,

we simply use

```javascript
.finally()
```

---

# Example 1

```javascript
Promise.resolve("Success")

  .finally(() => {
    console.log("Finished");
  });
```

Output

```
Finished
```

---

# Example 2

```javascript
Promise.reject("Error")

  .finally(() => {
    console.log("Finished");
  });
```

Output

```
Finished
```

Notice

`.finally()` runs in **both** cases.

---

# Success Flow

```
Promise

↓

Fulfilled

↓

.then()

↓

.finally()
```

---

# Failure Flow

```
Promise

↓

Rejected

↓

.catch()

↓

.finally()
```

---

# Why Do We Need .finally()?

Without `.finally()`

```javascript
fetchData()
  .then(() => {
    hideLoader();
  })

  .catch(() => {
    hideLoader();
  });
```

The same code is repeated twice.

Using `.finally()`

```javascript
fetchData().finally(() => {
  hideLoader();
});
```

Cleaner and easier to maintain.

---

# Does .finally() Receive the Result?

No.

Example

```javascript
Promise.resolve("Hello")

  .finally((value) => {
    console.log(value);
  });
```

Output

```
undefined
```

Unlike `.then()` and `.catch()`,

`.finally()` **does not receive**

- resolved value
- rejected reason

Its only job is cleanup.

---

# Why Doesn't finally() Receive Data?

Because it should behave the same in both cases.

Imagine

```
Success

↓

Value Available
```

and

```
Failure

↓

Error Available
```

If `.finally()` accepted parameters,

JavaScript would have to decide

Should it pass

- Success Value

OR

- Error

To avoid this confusion,

`.finally()` receives nothing.

---

# Does .finally() Return a Promise?

Yes.

Just like

- `.then()`
- `.catch()`

`.finally()` also returns a new Promise.

---

# Example

```javascript
Promise.resolve(100)

  .finally(() => {
    console.log("Done");
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
Done

100
```

Notice

The original value

```
100
```

continues through the chain.

`.finally()` does **not** change it.

---

# What if finally() Returns a Value?

Example

```javascript
Promise.resolve(10)

  .finally(() => {
    return 100;
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
10
```

Question

Where did

```
100
```

go?

Answer

It is ignored.

`.finally()` is meant only for cleanup.

Its returned value does not replace the Promise value.

---

# What if finally() Throws an Error?

Example

```javascript
Promise.resolve(10)

  .finally(() => {
    throw new Error("Oops");
  })

  .catch((err) => {
    console.log(err.message);
  });
```

Output

```
Oops
```

If `.finally()` throws an error,

the returned Promise becomes **Rejected**.

---

# Execution Flow

```
Promise Settled

↓

finally()

↓

Microtask Queue

↓

Event Loop

↓

Call Stack

↓

Execute Callback
```

Just like `.then()` and `.catch()`,

`.finally()` callbacks also execute through the **Microtask Queue**.

---

# When Should We Use finally()?

Common Use Cases

- Hide Loader
- Stop Spinner
- Close File
- Close Database Connection
- Remove Event Listener
- Cleanup Resources
- Reset Button State

---

# Important Rules

### Rule 1

`.finally()` executes for both success and failure.

---

### Rule 2

`.finally()` receives no arguments.

---

### Rule 3

`.finally()` returns a new Promise.

---

### Rule 4

Returning a value from `.finally()` does not change the chain's value.

---

### Rule 5

Throwing an error inside `.finally()` rejects the returned Promise.

---

# Interview Notes

### Q. When does `.finally()` execute?

After the Promise settles, whether it is fulfilled or rejected.

---

### Q. Does `.finally()` receive the resolved value?

No.

---

### Q. Does `.finally()` receive the rejected reason?

No.

---

### Q. What happens if `.finally()` returns a value?

The returned value is ignored.

The original Promise value continues.

---

### Q. What happens if `.finally()` throws an error?

The returned Promise becomes rejected.

---

# Common Mistakes

❌ `.finally()` receives the resolved value.

✔ Wrong.

It never receives any value.

---

❌ Returning a value from `.finally()` changes the next `.then()` value.

✔ Wrong.

The original value is preserved.

---

❌ `.finally()` runs only after `.then()`.

✔ Wrong.

It runs after the Promise settles, whether it succeeds or fails.

---

# Summary

- `.finally()` executes after a Promise settles.
- It runs for both fulfilled and rejected Promises.
- It is mainly used for cleanup tasks.
- It does not receive the resolved value or rejected reason.
- It returns a new Promise.
- Returning a value from `.finally()` does not affect the Promise chain.
- Throwing an error inside `.finally()` rejects the returned Promise.

# Promise Chaining

One of the biggest advantages of Promises is **Promise Chaining**.

Instead of nesting multiple callbacks inside each other, we can chain multiple asynchronous operations in a clean and readable way.

---

# What is Promise Chaining?

## Definition

Promise Chaining is the process of connecting multiple `.then()`, `.catch()`, and `.finally()` methods together, where each step depends on the result of the previous step.

---

## Normal Explanation

Suppose you want to perform these tasks.

```
Login

↓

Get User Details

↓

Get Orders

↓

Make Payment

↓

Send Email
```

Each task depends on the previous one.

Instead of writing nested callbacks,

Promises allow us to write

```javascript
login().then(getUser).then(getOrders).then(makePayment).then(sendEmail);
```

This is called **Promise Chaining**.

---

# Basic Example

```javascript
Promise.resolve(10)

  .then((value) => {
    return value * 2;
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
20
```

---

# How Does Chaining Work?

Consider

```javascript
Promise.resolve(10)

  .then((value) => {
    return value * 2;
  })

  .then((value) => {
    return value + 5;
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
25
```

Execution

```
Promise

↓

10

↓

return 20

↓

New Promise

↓

20

↓

return 25

↓

New Promise

↓

25

↓

console.log()
```

Each `.then()` receives the value returned by the previous `.then()`.

---

# Every .then() Creates a New Promise

This is the most important concept.

Consider

```javascript
const p = Promise.resolve(10);

const p2 = p.then((value) => {
  return value * 2;
});
```

Internally

```
Promise p

↓

.then()

↓

Create Promise p2

↓

Resolve p2

↓

Return p2
```

Every `.then()` returns a **brand new Promise**.

It never modifies the previous Promise.

---

# Returning a Normal Value

Example

```javascript
Promise.resolve(5)

  .then((value) => {
    return value * 10;
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
50
```

The returned value automatically becomes the resolved value of the next Promise.

---

# Returning Nothing

Example

```javascript
Promise.resolve(10)

  .then((value) => {
    console.log(value);
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
10
undefined
```

Why?

Because JavaScript automatically returns

```javascript
undefined;
```

if no return statement is written.

So the next Promise resolves with

```
undefined
```

---

# Returning Another Promise

Example

```javascript
Promise.resolve(10)

  .then((value) => {
    return Promise.resolve(value * 5);
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
50
```

---

# Internal Working

Suppose

```javascript
return Promise.resolve(50);
```

Internally

```
Current Promise

↓

Return another Promise

↓

Wait until it settles

↓

Receive Result

↓

Resolve Next Promise

↓

Next .then()
```

JavaScript automatically waits for the returned Promise.

This is why asynchronous operations can be chained.

---

# Chaining Asynchronous Operations

```javascript
fetchUser()
  .then((user) => {
    return fetchOrders(user.id);
  })

  .then((orders) => {
    return makePayment(orders);
  })

  .then((payment) => {
    console.log(payment);
  });
```

Each step waits for the previous Promise to complete.

---

# Error Propagation in Chaining

```javascript
Promise.resolve(10)

  .then((value) => {
    return value * 2;
  })

  .then(() => {
    throw new Error("Something went wrong");
  })

  .then(() => {
    console.log("Won't Execute");
  })

  .catch((err) => {
    console.log(err.message);
  });
```

Output

```
Something went wrong
```

---

# Why?

Flow

```
Promise

↓

.then()

↓

.then()

↓

Error

↓

Skip Remaining .then()

↓

.catch()
```

As soon as an error occurs,

JavaScript skips all remaining `.then()` blocks.

---

# Recovery After catch()

```javascript
Promise.resolve(10)

  .then((value) => {
    throw new Error("Oops");
  })

  .catch(() => {
    return 100;
  })

  .then((value) => {
    console.log(value);
  });
```

Output

```
100
```

The Promise chain continues because `.catch()` returned a value.

---

# Complete Flow

```
Promise

↓

.then()

↓

Return Value

↓

New Promise

↓

.then()

↓

Return Promise

↓

Wait

↓

Resolve

↓

.then()

↓

Error?

↓

.catch()

↓

.finally()
```

---

# Why Promise Chaining is Better than Callback Hell?

### Callback Hell

```javascript
login(function () {
  getUser(function () {
    getOrders(function () {
      makePayment(function () {
        sendEmail(function () {
          console.log("Done");
        });
      });
    });
  });
});
```

Problems

- Deep Nesting
- Hard to Read
- Difficult Error Handling
- Difficult Maintenance

---

### Promise Chaining

```javascript
login()
  .then(getUser)

  .then(getOrders)

  .then(makePayment)

  .then(sendEmail)

  .catch(handleError)

  .finally(cleanup);
```

Advantages

- Flat Structure
- Easy to Read
- Centralized Error Handling
- Better Maintainability

---

# Important Rules

### Rule 1

Every `.then()` returns a new Promise.

---

### Rule 2

Returning a normal value resolves the next Promise.

---

### Rule 3

Returning a Promise makes JavaScript wait until that Promise settles.

---

### Rule 4

Throwing an error rejects the next Promise.

---

### Rule 5

Errors automatically propagate to the nearest `.catch()`.

---

### Rule 6

`.finally()` executes regardless of success or failure.

---

# Interview Notes

### Q. What is Promise Chaining?

Connecting multiple Promise methods so that each step depends on the result of the previous step.

---

### Q. Does `.then()` modify the original Promise?

No.

It always creates and returns a new Promise.

---

### Q. What happens if we return a Promise from `.then()`?

JavaScript waits for that Promise to settle before executing the next `.then()`.

---

### Q. What happens if an error occurs in the middle of the chain?

All remaining `.then()` methods are skipped.

Control moves directly to `.catch()`.

---

### Q. Can the chain continue after `.catch()`?

Yes.

If `.catch()` returns a value, the chain becomes fulfilled again.

---

# Common Mistakes

❌ `.then()` modifies the original Promise.

✔ Wrong.

It always returns a new Promise.

---

❌ Returning a Promise immediately executes the next `.then()`.

✔ Wrong.

JavaScript waits until the returned Promise settles.

---

❌ Errors stop the entire chain permanently.

✔ Wrong.

`.catch()` can recover the chain by returning a value.

---

# Summary

- Promise Chaining connects multiple asynchronous operations.
- Every `.then()` returns a new Promise.
- Returning a value passes it to the next `.then()`.
- Returning a Promise makes JavaScript wait.
- Errors automatically propagate to the nearest `.catch()`.
- `.catch()` can recover the chain.
- `.finally()` executes regardless of the Promise's result.

# Promise APIs

JavaScript provides several built-in Promise methods that help us handle multiple Promises efficiently.

The most commonly used Promise APIs are:

- Promise.resolve()
- Promise.reject()
- Promise.all()
- Promise.allSettled()
- Promise.race()
- Promise.any()

---

# Promise.resolve()

## Definition

`Promise.resolve()` creates a Promise that is already fulfilled.

---

## Syntax

```javascript
Promise.resolve(value);
```

---

## Example

```javascript
const promise = Promise.resolve(100);

promise.then((value) => {
  console.log(value);
});
```

Output

```
100
```

---

## Equivalent Code

```javascript
new Promise((resolve) => {
  resolve(100);
});
```

Both are exactly the same.

---

# Promise.reject()

## Definition

`Promise.reject()` creates a Promise that is already rejected.

---

## Syntax

```javascript
Promise.reject(reason);
```

---

## Example

```javascript
Promise.reject("Network Error")

  .catch((err) => {
    console.log(err);
  });
```

Output

```
Network Error
```

---

# Promise.all()

## Definition

`Promise.all()` waits for **all Promises** to complete successfully.

If even one Promise fails,

the entire Promise is rejected immediately.

---

## Syntax

```javascript
Promise.all([promise1, promise2, promise3]);
```

---

## Example

```javascript
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])

  .then((result) => {
    console.log(result);
  });
```

Output

```
[10,20,30]
```

Notice

The results are returned in the same order as the array,

not in the order of completion.

---

# What if One Promise Rejects?

```javascript
const p1 = Promise.resolve(10);

const p2 = Promise.reject("Network Error");

const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])

  .catch((err) => {
    console.log(err);
  });
```

Output

```
Network Error
```

As soon as one Promise rejects,

the remaining results are ignored.

---

## Internal Flow

```
Promise1

↓

Success

Promise2

↓

Rejected

↓

Immediately Reject

↓

Promise.all() Ends
```

---

## When Should We Use Promise.all()?

Use it when **every Promise is required**.

Examples

- Load Dashboard
- Load User
- Load Orders
- Load Notifications

If even one request fails,

the page cannot be displayed properly.

---

# Promise.allSettled()

## Definition

`Promise.allSettled()` waits for **every Promise** to settle.

It doesn't matter whether they are fulfilled or rejected.

---

## Example

```javascript
const p1 = Promise.resolve(10);

const p2 = Promise.reject("Error");

const p3 = Promise.resolve(30);

Promise.allSettled([p1, p2, p3])

  .then((result) => {
    console.log(result);
  });
```

Output

```javascript
[
  { status: "fulfilled", value: 10 },

  { status: "rejected", reason: "Error" },

  { status: "fulfilled", value: 30 },
];
```

Every Promise is reported.

Nothing is ignored.

---

## When Should We Use Promise.allSettled()?

Use it when you want the result of **every Promise**,

even if some fail.

Examples

- Multiple API requests
- File uploads
- Analytics
- Reports

---

# Promise.race()

## Definition

`Promise.race()` returns the result of the **first settled Promise**.

Settled means

- Fulfilled
- Rejected

whichever happens first.

---

## Example

```javascript
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("First");
  }, 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Second");
  }, 3000);
});

Promise.race([p1, p2])

  .then((result) => {
    console.log(result);
  });
```

Output

```
First
```

---

## What if the First Promise Rejects?

```javascript
const p1 = Promise.reject("Error");

const p2 = Promise.resolve("Success");

Promise.race([p1, p2])

  .catch((err) => {
    console.log(err);
  });
```

Output

```
Error
```

Because rejection happened first.

---

## When Should We Use Promise.race()?

Examples

- Timeout
- Fastest Server
- CDN Selection

Whichever responds first wins.

---

# Promise.any()

## Definition

`Promise.any()` returns the **first fulfilled Promise**.

Rejected Promises are ignored.

---

## Example

```javascript
const p1 = Promise.reject("Error");

const p2 = Promise.resolve("Success");

const p3 = Promise.resolve("Hello");

Promise.any([p1, p2, p3])

  .then((result) => {
    console.log(result);
  });
```

Output

```
Success
```

Even though

```
p1
```

failed,

JavaScript ignored it.

---

## What if All Promises Reject?

```javascript
Promise.any([Promise.reject("A"), Promise.reject("B")])

  .catch((err) => {
    console.log(err);
  });
```

Output

```
AggregateError
```

Because no Promise was fulfilled.

---

## When Should We Use Promise.any()?

Use it when **any successful result is enough**.

Examples

- Multiple mirror servers
- Backup APIs
- Multiple CDNs

---

# Comparison Table

| API                  | Success Condition       | Failure Condition                     |
| -------------------- | ----------------------- | ------------------------------------- |
| Promise.resolve()    | Immediately Fulfilled   | Never                                 |
| Promise.reject()     | Never                   | Immediately Rejected                  |
| Promise.all()        | All Promises Fulfilled  | One Promise Rejects                   |
| Promise.allSettled() | Waits for All           | Never Rejects because of one failure  |
| Promise.race()       | First Settled Promise   | First Settled Promise can also reject |
| Promise.any()        | First Fulfilled Promise | All Promises Reject                   |

---

# Quick Revision

## Promise.all()

```
Need every result

↓

Use Promise.all()
```

---

## Promise.allSettled()

```
Need result of every Promise

↓

Use Promise.allSettled()
```

---

## Promise.race()

```
Need whoever finishes first

↓

Use Promise.race()
```

---

## Promise.any()

```
Need first successful result

↓

Use Promise.any()
```

---

# Interview Notes

### Q. Which Promise API fails immediately if one Promise rejects?

**Promise.all()**

---

### Q. Which Promise API waits for all Promises?

**Promise.allSettled()**

---

### Q. Which Promise API returns the first settled Promise?

**Promise.race()**

---

### Q. Which Promise API returns the first fulfilled Promise?

**Promise.any()**

---

### Q. What happens if every Promise rejects in Promise.any()?

An **AggregateError** is thrown.

---

# Common Mistakes

❌ Promise.all() waits for all Promises even if one fails.

✔ Wrong.

It rejects immediately after the first rejection.

---

❌ Promise.race() waits for the fastest successful Promise.

✔ Wrong.

It waits for the first settled Promise.

That can be fulfilled **or rejected**.

---

❌ Promise.any() returns the first completed Promise.

✔ Wrong.

It returns the first **fulfilled** Promise only.

---

# Summary

- `Promise.resolve()` creates a fulfilled Promise.
- `Promise.reject()` creates a rejected Promise.
- `Promise.all()` requires every Promise to succeed.
- `Promise.allSettled()` returns the result of every Promise.
- `Promise.race()` returns the first settled Promise.
- `Promise.any()` returns the first fulfilled Promise.
- Choose the Promise API based on your use case.

# Fetch API

Modern JavaScript uses the **Fetch API** to communicate with servers.

Before Fetch was introduced, developers mainly used **XMLHttpRequest (XHR)**.

Although XHR still works, Fetch is cleaner, easier to read and Promise-based.

---

# What is Fetch API?

## Definition

The Fetch API is a Browser API used to send HTTP requests and receive responses asynchronously.

Unlike XMLHttpRequest, Fetch is based on **Promises**.

---

## Syntax

```javascript
fetch(url);
```

Example

```javascript
fetch("https://api.github.com/users/octocat");
```

---

# What does fetch() return?

This is one of the most important interview questions.

Answer

**fetch() always returns a Promise.**

Example

```javascript
const result = fetch("https://api.github.com/users/octocat");

console.log(result);
```

Output

```
Promise { <pending> }
```

Notice

Fetch **does not return data immediately.**

It returns a Promise because the network request takes time.

---

# Why Does fetch() Return a Promise?

Suppose the server takes

```
3 seconds
```

to respond.

Can JavaScript wait for 3 seconds?

No.

JavaScript is single-threaded.

Instead,

```
fetch()

↓

Browser starts HTTP Request

↓

Immediately returns Promise

↓

JavaScript continues execution

↓

Response arrives later

↓

Promise gets fulfilled
```

---

# Internal Working of fetch()

Suppose

```javascript
fetch(url);
```

Internally

```
JavaScript

↓

fetch()

↓

Browser API

↓

HTTP Request Sent

↓

Server

↓

Response

↓

Promise Fulfilled

↓

.then()

↓

Microtask Queue

↓

Event Loop

↓

Call Stack
```

Notice

Unlike `setTimeout()`,

Fetch **does not use the Callback Queue.**

It works using **Promises**, so its callbacks go to the **Microtask Queue**.

---

# Example

```javascript
console.log("Start");

fetch("https://api.github.com/users/octocat").then(() => {
  console.log("Fetched");
});

console.log("End");
```

Output

```
Start

End

Fetched
```

---

# Why?

Execution

```
console.log("Start")

↓

Start

↓

fetch()

↓

Browser starts Request

↓

Promise Returned

↓

console.log("End")

↓

End

↓

Response Received

↓

Promise Fulfilled

↓

.then()

↓

Microtask Queue

↓

Call Stack

↓

Fetched
```

---

# Does fetch() Reject on HTTP Errors?

Another very common interview question.

Suppose

```
404 Not Found
```

Will fetch reject?

Answer

**No.**

Example

```javascript
fetch("/wrong-url").then((response) => {
  console.log(response.status);
});
```

Output

```
404
```

The Promise is still fulfilled.

---

## When Does fetch() Reject?

Fetch rejects only when there is a **network-level failure**.

Examples

- No Internet
- DNS Failure
- Request Blocked
- CORS Failure
- Connection Lost

Example

```javascript
fetch(url).catch((err) => {
  console.log(err);
});
```

---

# Response Object

When Fetch succeeds,

the Promise resolves with a **Response Object**.

Example

```javascript
fetch(url).then((response) => {
  console.log(response);
});
```

Output

```
Response { ... }
```

Notice

This is **not** the actual API data.

It is a Response Object.

---

# What is Response Object?

The Response Object contains information about the HTTP response.

Examples

- Status Code
- Headers
- URL
- Body
- ok
- statusText

Example

```javascript
fetch(url).then((response) => {
  console.log(response.status);

  console.log(response.ok);
});
```

Possible Output

```
200

true
```

---

# Important Point

Many beginners expect

```javascript
fetch(url).then((response) => {
  console.log(response);
});
```

to directly print

```javascript
{

"name":"Harshit"

}
```

Wrong.

The Response Object contains metadata.

The actual data is still inside its body.

To read it,

we use

```javascript
response.json();
```

---

# Important Points

- Fetch is a Browser API.
- Fetch returns a Promise.
- Fetch never blocks JavaScript.
- Successful fetch returns a Response Object.
- Response Object is **not** the actual data.
- Fetch rejects only on network failures.

---

# Interview Notes

### Q. What does fetch() return?

A Promise.

---

### Q. Does fetch() return API data directly?

No.

It returns a Promise that resolves to a Response Object.

---

### Q. Does fetch() reject on 404?

No.

404 is still considered a successful HTTP response.

The Promise resolves with a Response Object.

---

### Q. When does fetch() reject?

Only on network failures.

---

# Common Mistakes

❌ fetch() returns JSON directly.

✔ Wrong.

It returns a Promise.

---

❌ Response Object contains the final data.

✔ Wrong.

The Response Object contains metadata.

The actual data must be extracted separately.

---

❌ fetch() rejects on every HTTP error.

✔ Wrong.

It rejects only when the request itself cannot be completed.

---

# Summary

- Fetch is the modern way of making HTTP requests.
- Fetch returns a Promise.
- The Promise resolves with a Response Object.
- The Response Object contains metadata, not the actual data.
- Fetch rejects only on network-level failures.
- Promise callbacks from Fetch execute through the Microtask Queue.

# response.json()

After calling `fetch()`, we receive a **Response Object**, not the actual data.

To extract the data from the response body, we use

```javascript
response.json();
```

---

# What is response.json()?

## Definition

`response.json()` is a method of the Response Object that reads the response body, converts the JSON data into a JavaScript Object, and returns a **Promise**.

---

## Syntax

```javascript
response.json();
```

---

## Example

```javascript
fetch("https://api.github.com/users/octocat")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    console.log(data);
  });
```

Output

```javascript
{
    login: "octocat",
    id: 583231,
    followers: ...
}
```

Now we finally get the actual API data.

---

# Why Can't We Directly Use response?

Example

```javascript
fetch(url).then((response) => {
  console.log(response);
});
```

Output

```
Response { ... }
```

This is only the Response Object.

It contains

- Status
- Headers
- Body
- URL
- Other metadata

It does **not** directly contain the parsed JavaScript object.

---

# Why Does response.json() Return a Promise?

This is one of the most important interview questions.

Many beginners think

```javascript
response.json();
```

immediately returns a JavaScript Object.

❌ Wrong.

It returns a **Promise**.

---

## Why?

The response body has to be

```
Read

↓

Downloaded

↓

Converted from JSON

↓

Converted into JavaScript Object
```

All these operations take time.

Since JavaScript should not block,

`response.json()` also returns a Promise.

---

# Internal Working

```
fetch()

↓

Promise

↓

Response Object

↓

response.json()

↓

Read Response Body

↓

Parse JSON

↓

JavaScript Object

↓

Resolve Promise

↓

.then()

↓

Microtask Queue

↓

Call Stack
```

---

# Why Do We Write Two .then()?

Example

```javascript
fetch(url)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    console.log(data);
  });
```

Question

Why are there two `.then()` blocks?

Answer

Because two asynchronous operations are happening.

---

## First Promise

```javascript
fetch(url);
```

Returns

```
Promise<Response>
```

---

## Second Promise

```javascript
response.json();
```

Returns

```
Promise<Object>
```

Since both return Promises,

both require `.then()`.

---

# Flow

```
fetch()

↓

Promise

↓

Response Object

↓

response.json()

↓

Promise

↓

JavaScript Object

↓

then()

↓

Use Data
```

---

# Example

```javascript
fetch(url)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    console.log(data.name);
  });
```

Execution

```
Browser sends Request

↓

Server Responds

↓

Response Object

↓

Read Body

↓

Convert JSON

↓

JavaScript Object

↓

Print Name
```

---

# What Type of Data Does json() Return?

Suppose server sends

```json
{
  "name": "Harshit",
  "age": 21
}
```

After

```javascript
response.json();
```

we get

```javascript
{
    name:"Harshit",
    age:21
}
```

Notice

JSON String

↓

JavaScript Object

---

# Is response.json() Similar to JSON.parse()?

Conceptually,

Yes.

Both convert JSON into JavaScript Objects.

Difference

| JSON.parse()                              | response.json()                                 |
| ----------------------------------------- | ----------------------------------------------- |
| Converts an already available JSON String | Reads the response body first, then converts it |
| Synchronous                               | Asynchronous (returns a Promise)                |

---

# Common Mistake

Many beginners write

```javascript
fetch(url).then((response) => {
  const data = response.json();

  console.log(data);
});
```

Output

```
Promise { <pending> }
```

Why?

Because

```javascript
response.json();
```

returns a Promise,

not the actual object.

Correct way

```javascript
fetch(url)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    console.log(data);
  });
```

---

# Complete Flow

```
fetch()

↓

Promise

↓

Response Object

↓

response.json()

↓

Promise

↓

JavaScript Object

↓

.then()

↓

Actual Data
```

---

# Important Points

- `response.json()` belongs to the Response Object.
- It reads the response body.
- It converts JSON into a JavaScript Object.
- It returns a Promise.
- It must be handled using `.then()` or `await`.

---

# Interview Notes

### Q. What does `response.json()` return?

A Promise.

---

### Q. Why does `response.json()` return a Promise?

Because reading and parsing the response body is an asynchronous operation.

---

### Q. Does `response.json()` return the actual object immediately?

No.

It returns a Promise that resolves to the JavaScript Object.

---

### Q. Why are there two `.then()` blocks in Fetch?

Because

- `fetch()` returns a Promise.
- `response.json()` also returns a Promise.

---

# Common Mistakes

❌ `response.json()` returns an Object.

✔ Wrong.

It returns a Promise.

---

❌ One `.then()` is enough for Fetch.

✔ Wrong.

`fetch()` and `response.json()` both return Promises.

---

# Summary

- `fetch()` returns a Promise.
- That Promise resolves with a Response Object.
- `response.json()` reads the response body.
- It converts JSON into a JavaScript Object.
- `response.json()` also returns a Promise.
- The actual data becomes available only after that Promise is fulfilled.

# async Keyword

Before understanding `await`, we must first understand the `async` keyword.

The `await` keyword can only be used inside an `async` function.

---

# What is async?

## Definition

The `async` keyword is used before a function to make it an asynchronous function.

An `async` function **always returns a Promise**.

---

## Syntax

```javascript
async function getData() {}
```

Arrow Function

```javascript
const getData = async () => {};
```

---

# Important Rule

An `async` function always returns a Promise.

This is the most important rule.

Even if you return a normal value,

JavaScript automatically wraps it inside a Promise.

---

# Example 1

```javascript
async function getData() {
  return "Hello";
}

console.log(getData());
```

Output

```
Promise {<fulfilled>: "Hello"}
```

Notice

We returned

```javascript
"Hello";
```

But JavaScript returned

```
Promise
```

---

# Internal Working

```javascript
async function getData() {
  return "Hello";
}
```

Internally JavaScript treats it like

```javascript
function getData() {
  return Promise.resolve("Hello");
}
```

Both behave the same.

---

# Example 2

```javascript
async function getNumber() {
  return 100;
}

getNumber().then((value) => {
  console.log(value);
});
```

Output

```
100
```

Why?

Because

```javascript
return 100;
```

internally becomes

```javascript
return Promise.resolve(100);
```

---

# Returning an Object

```javascript
async function user() {
  return {
    name: "Harshit",
  };
}

user().then((data) => {
  console.log(data);
});
```

Output

```javascript
{
  name: "Harshit";
}
```

Again,

the returned object is automatically wrapped inside a Promise.

---

# Returning a Promise

Suppose

```javascript
async function getData() {
  return Promise.resolve(10);
}
```

Output

```
Promise {<fulfilled>:10}
```

Here,

JavaScript does **not** wrap the Promise again.

It simply returns the same Promise.

---

# Returning Nothing

```javascript
async function demo() {}

console.log(demo());
```

Output

```
Promise {<fulfilled>: undefined}
```

Because every JavaScript function without a return statement returns

```javascript
undefined;
```

The `async` function wraps it as

```javascript
Promise.resolve(undefined);
```

---

# Throwing an Error

```javascript
async function demo() {
  throw new Error("Something went wrong");
}

demo().catch((err) => {
  console.log(err.message);
});
```

Output

```
Something went wrong
```

---

## Internal Working

```javascript
throw new Error("Error");
```

is internally similar to

```javascript
return Promise.reject(new Error("Error"));
```

So,

throwing an error inside an async function returns a rejected Promise.

---

# async Function Flow

```
Call async Function

↓

Execute Function

↓

Return Value

↓

Promise.resolve(value)

↓

Promise Returned
```

If an error occurs

```
Call async Function

↓

Error Thrown

↓

Promise.reject(error)

↓

Rejected Promise
```

---

# Why Do We Need async?

Without async

```javascript
function getData() {
  return Promise.resolve(100);
}
```

With async

```javascript
async function getData() {
  return 100;
}
```

Both produce the same result.

The `async` keyword makes Promise-based code cleaner and easier to read.

---

# Important Rules

### Rule 1

Every async function returns a Promise.

---

### Rule 2

Returning a normal value automatically becomes

```javascript
Promise.resolve(value);
```

---

### Rule 3

Throwing an error automatically becomes

```javascript
Promise.reject(error);
```

---

### Rule 4

An async function can be used with

- `.then()`
- `.catch()`
- `await`

because it always returns a Promise.

---

# Interview Notes

### Q. What does an async function return?

An async function always returns a Promise.

---

### Q. What happens if an async function returns a normal value?

JavaScript automatically wraps it inside a fulfilled Promise.

---

### Q. What happens if an async function throws an error?

The returned Promise becomes rejected.

---

### Q. Is `return 10` and `return Promise.resolve(10)` inside an async function the same?

Yes.

Both result in a fulfilled Promise with the value `10`.

---

# Common Mistakes

❌ async functions return normal values.

✔ Wrong.

They always return Promises.

---

❌ Returning a string means the function returns a string.

✔ Wrong.

It returns a Promise containing that string.

---

❌ throw crashes the async function.

✔ Wrong.

It creates a rejected Promise.

---

# Summary

- `async` is used to create asynchronous functions.
- Every async function returns a Promise.
- Returning a normal value is automatically converted into `Promise.resolve(value)`.
- Throwing an error is automatically converted into `Promise.reject(error)`.
- Async functions make Promise-based code easier to write and read.

# await Keyword

The `await` keyword is used to wait for a Promise to settle.

It can only be used inside an `async` function.

---

# What is await?

## Definition

The `await` keyword pauses the execution of the current **async function** until the Promise is fulfilled or rejected.

---

## Syntax

```javascript
const result = await promise;
```

---

# Important Rule

`await` **does not pause JavaScript.**

It only pauses the current **async function**.

This is one of the most important interview concepts.

---

# Example

```javascript
async function getData() {
  const result = await Promise.resolve(100);

  console.log(result);
}

getData();

console.log("End");
```

Output

```
End

100
```

Notice

JavaScript did **not** wait.

Only the async function paused.

---

# Internal Working

Execution

```
Call async function

↓

Promise encountered

↓

await

↓

Pause current async function

↓

JavaScript continues executing remaining synchronous code

↓

Promise Fulfilled

↓

Resume async function

↓

Execute remaining code
```

---

# Example

```javascript
async function demo() {
  console.log("A");

  const value = await Promise.resolve(10);

  console.log(value);

  console.log("B");
}

demo();

console.log("C");
```

Output

```
A

C

10

B
```

---

# Dry Run

### Step 1

```javascript
demo();
```

Function starts executing.

Output

```
A
```

---

### Step 2

```javascript
await Promise.resolve(10);
```

Promise is encountered.

JavaScript pauses only this async function.

---

### Step 3

Execution returns to the global code.

```javascript
console.log("C");
```

Output

```
A

C
```

---

### Step 4

Promise gets fulfilled.

The remaining part of the async function is placed in the **Microtask Queue**.

---

### Step 5

Event Loop moves it to the Call Stack.

Output

```
10

B
```

---

# Internal Flow

```
async function

↓

await

↓

Pause async function

↓

Promise Fulfilled

↓

Remaining Code

↓

Microtask Queue

↓

Event Loop

↓

Call Stack

↓

Continue Execution
```

---

# Why Doesn't await Block JavaScript?

Suppose

```javascript
await fetch(url);
```

takes

```
5 seconds
```

If JavaScript waited,

the browser would freeze.

Instead,

JavaScript pauses only the current async function.

Everything else continues executing normally.

---

# Example

```javascript
async function getData() {
  console.log("Fetching...");

  await fetch(url);

  console.log("Done");
}

getData();

console.log("Application Running");
```

Output

```
Fetching...

Application Running

Done
```

The application never freezes.

---

# await Works Only with Promises

Correct

```javascript
await Promise.resolve(10);
```

---

What if we write

```javascript
await 10;
```

Surprisingly,

this is also valid.

Internally,

JavaScript converts it to

```javascript
await Promise.resolve(10);
```

So every value is treated as a resolved Promise.

---

# Multiple await Statements

```javascript
async function demo() {
  const a = await Promise.resolve(10);

  const b = await Promise.resolve(20);

  console.log(a + b);
}

demo();
```

Output

```
30
```

Execution

```
await A

↓

Resume

↓

await B

↓

Resume

↓

Print
```

Each `await` pauses the async function until its Promise settles.

---

# await with Fetch

```javascript
async function getUser() {
  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
}
```

Notice

There are two `await`s.

Why?

Because

```javascript
fetch();
```

returns a Promise.

and

```javascript
response.json();
```

also returns a Promise.

---

# await vs .then()

Using `.then()`

```javascript
fetch(url)
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    console.log(data);
  });
```

Using `await`

```javascript
const response = await fetch(url);

const data = await response.json();

console.log(data);
```

Both do the same work.

`async/await` is simply cleaner and easier to read.

---

# Important Rules

### Rule 1

`await` can only be used inside an async function.

---

### Rule 2

`await` pauses only the current async function.

---

### Rule 3

JavaScript continues executing other synchronous code.

---

### Rule 4

After the Promise settles,

the remaining code is scheduled in the **Microtask Queue**.

---

### Rule 5

`await` works with any value.

Non-Promise values are automatically wrapped using

```javascript
Promise.resolve(value);
```

---

# Interview Notes

### Q. Does await pause JavaScript?

No.

It pauses only the current async function.

---

### Q. Can await be used outside an async function?

Generally, no.

(It can be used at the top level only in JavaScript modules.)

---

### Q. Where does execution continue after await?

After the Promise settles,

the remaining part of the async function is scheduled in the Microtask Queue.

---

### Q. Why are two await statements used with Fetch?

Because

- `fetch()` returns a Promise.
- `response.json()` also returns a Promise.

---

# Common Mistakes

❌ await blocks the entire program.

✔ Wrong.

It only pauses the current async function.

---

❌ await returns immediately.

✔ Wrong.

It waits for the Promise to settle.

---

❌ await works only with Promises.

✔ Partially Correct.

It works with any value because JavaScript internally converts non-Promise values into resolved Promises.

---

# Summary

- `await` waits for a Promise to settle.
- It can only be used inside an async function.
- It pauses only the current async function.
- JavaScript continues executing other code.
- After the Promise settles, execution resumes through the Microtask Queue.
- `await` makes asynchronous code look synchronous without blocking JavaScript.


# try...catch with async/await

While working with `async/await`, Promises can still fail.

Examples

- Network Error
- API Failure
- Database Error
- Invalid Response

Instead of using `.catch()`, we generally use **try...catch** with `async/await`.

---

# Why Do We Need try...catch?

Consider

```javascript
async function getData(){

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

}
```

Question

What if

```
fetch()
```

fails?

Without error handling,

the Promise becomes rejected and an unhandled error occurs.

To safely handle such errors,

we use

```javascript
try...catch
```

---

# Syntax

```javascript
async function demo(){

    try{

        // Code that may fail

    }

    catch(error){

        // Handle Error

    }

}
```

---

# Example

```javascript
async function demo(){

    try{

        const result = await Promise.resolve(100);

        console.log(result);

    }

    catch(error){

        console.log(error);

    }

}

demo();
```

Output

```
100
```

Since no error occurred,

the `catch` block never executes.

---

# Example with Error

```javascript
async function demo(){

    try{

        throw new Error("Something went wrong");

    }

    catch(error){

        console.log(error.message);

    }

}

demo();
```

Output

```
Something went wrong
```

---

# Internal Working

```
try

↓

Execute Code

↓

Error?

↓

No

↓

Continue Execution

OR

↓

Yes

↓

Jump to catch

↓

Handle Error
```

---

# Example with Fetch

```javascript
async function getUser(){

    try{

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}
```

If

```
fetch()
```

fails,

execution immediately jumps to

```
catch
```

---

# What Happens After await?

Suppose

```javascript
const data = await fetch(url);
```

Internally

```
fetch()

↓

Promise

↓

Pending

↓

Fulfilled

↓

Continue Execution
```

If

```
Rejected

↓

Jump to catch
```

---

# try...catch Execution Flow

```
async Function

↓

try Block

↓

await Promise

↓

Promise Fulfilled

↓

Continue

OR

↓

Promise Rejected

↓

catch Block
```

---

# try...catch with Multiple await

```javascript
async function demo(){

    try{

        const a = await Promise.resolve(10);

        const b = await Promise.resolve(20);

        console.log(a+b);

    }

    catch(error){

        console.log(error);

    }

}
```

Output

```
30
```

---

# If Any await Fails

```javascript
async function demo(){

    try{

        const a = await Promise.resolve(10);

        const b = await Promise.reject("Error");

        console.log(a+b);

    }

    catch(error){

        console.log(error);

    }

}
```

Output

```
Error
```

Notice

Execution stops immediately after the rejected Promise.

The remaining code inside `try` is skipped.

---

# finally with async/await

Just like Promises,

`try...catch` also supports

```javascript
finally
```

Syntax

```javascript
async function demo(){

    try{

        console.log("Success");

    }

    catch(error){

        console.log(error);

    }

    finally{

        console.log("Cleanup");

    }

}
```

Output

```
Success

Cleanup
```

---

If an error occurs

```javascript
async function demo(){

    try{

        throw new Error("Oops");

    }

    catch(error){

        console.log(error.message);

    }

    finally{

        console.log("Cleanup");

    }

}
```

Output

```
Oops

Cleanup
```

`finally` always executes.

---

# Complete Fetch Example

```javascript
async function getUser(){

    try{

        const response = await fetch("https://api.github.com/users/octocat");

        const data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log("Request Failed");

        console.log(error);

    }

    finally{

        console.log("Request Completed");

    }

}

getUser();
```

---

# .catch() vs try...catch

Using `.catch()`

```javascript
fetch(url)

.then((response)=>{

    return response.json();

})

.then((data)=>{

    console.log(data);

})

.catch((error)=>{

    console.log(error);

});
```

Using `async/await`

```javascript
try{

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

}

catch(error){

    console.log(error);

}
```

Both handle errors.

With `async/await`, `try...catch` is cleaner and easier to read.

---

# Best Practices

✔ Always wrap `await` calls inside `try...catch`.

✔ Use `finally` for cleanup tasks.

✔ Handle errors at the appropriate level instead of ignoring them.

✔ Display meaningful error messages to users.

---

# Important Rules

### Rule 1

Rejected Promises automatically jump to the `catch` block.

---

### Rule 2

After an error,

the remaining code inside the `try` block is skipped.

---

### Rule 3

`finally` always executes.

---

### Rule 4

`try...catch` only catches errors inside its own scope.

---

# Interview Notes

### Q. Why do we use `try...catch` with async/await?

To handle rejected Promises and runtime errors.

---

### Q. What happens if an awaited Promise rejects?

Execution immediately jumps to the `catch` block.

---

### Q. Does `finally` execute even if an error occurs?

Yes.

It always executes.

---

### Q. Is `try...catch` mandatory with async/await?

No.

But it is highly recommended whenever a Promise may reject.

---

# Common Mistakes

❌ Ignoring rejected Promises.

✔ Always handle errors using `try...catch` or `.catch()`.

---

❌ Assuming code after a rejected `await` will continue executing.

✔ Wrong.

Execution immediately jumps to `catch`.

---

❌ Using `finally` for business logic.

✔ Wrong.

`finally` should be used only for cleanup tasks.

---

# Summary

- `try...catch` is the preferred way to handle errors with `async/await`.
- A rejected Promise automatically transfers control to the `catch` block.
- The remaining code inside `try` is skipped after an error.
- `finally` executes whether the operation succeeds or fails.
- `async/await` with `try...catch` makes asynchronous code cleaner, more readable and easier to maintain.


# Practice Questions (Output Based)

The following questions are designed to strengthen your understanding of

- Event Loop
- Callback Queue
- Microtask Queue
- Promises
- Fetch API
- async/await

Before checking the answer, always try to predict the output yourself.

---

## Question 1

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
},0);

console.log("C");
```

Output

```
A
C
B
```

Reason

- Synchronous code executes first.
- Timer callback goes to Callback Queue.
- Event Loop executes it after the Call Stack becomes empty.

---

## Question 2

```javascript
console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

console.log("C");
```

Output

```
A
C
B
```

Reason

Promise callbacks go to the Microtask Queue.

Microtasks execute after synchronous code finishes.

---

## Question 3

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
},0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output

```
A
D
C
B
```

Reason

Execution Order

```
Synchronous Code

↓

Microtask Queue

↓

Callback Queue
```

---

## Question 4

```javascript
new Promise((resolve)=>{

    console.log("A");

    resolve();

    console.log("B");

});

console.log("C");
```

Output

```
A
B
C
```

Reason

The Executor Function executes immediately.

`resolve()` changes the Promise state but does not stop execution.

---

## Question 5

```javascript
Promise.resolve(10)

.then((value)=>{

    console.log(value);

});
```

Output

```
10
```

---

## Question 6

```javascript
Promise.resolve(10)

.then((value)=>{

    return value*2;

})

.then((value)=>{

    console.log(value);

});
```

Output

```
20
```

---

## Question 7

```javascript
Promise.resolve(10)

.then((value)=>{

    console.log(value);

})

.then((value)=>{

    console.log(value);

});
```

Output

```
10
undefined
```

Reason

The first `.then()` doesn't return anything.

JavaScript automatically returns `undefined`.

---

## Question 8

```javascript
Promise.resolve()

.then(()=>{

    throw new Error("Oops");

})

.catch((err)=>{

    console.log(err.message);

});
```

Output

```
Oops
```

---

## Question 9

```javascript
Promise.reject("Error")

.catch(()=>{

    return 100;

})

.then((value)=>{

    console.log(value);

});
```

Output

```
100
```

Reason

Returning a value inside `.catch()` recovers the Promise chain.

---

## Question 10

```javascript
Promise.resolve(10)

.finally(()=>{

    return 100;

})

.then((value)=>{

    console.log(value);

});
```

Output

```
10
```

Reason

The return value of `.finally()` is ignored.

---

## Question 11

```javascript
async function demo(){

    return 100;

}

demo().then(console.log);
```

Output

```
100
```

Reason

An async function always returns a Promise.

---

## Question 12

```javascript
async function demo(){

    console.log("A");

    const value = await Promise.resolve(10);

    console.log(value);

}

demo();

console.log("B");
```

Output

```
A
B
10
```

Reason

`await` pauses only the async function.

JavaScript continues executing the remaining synchronous code.

---

## Question 13

```javascript
async function demo(){

    await Promise.resolve();

    console.log("A");

}

demo();

console.log("B");
```

Output

```
B
A
```

---

## Question 14

```javascript
console.log(1);

setTimeout(()=>{

    console.log(2);

},0);

Promise.resolve().then(()=>{

    console.log(3);

});

console.log(4);
```

Output

```
1
4
3
2
```

---

## Question 15

```javascript
console.log("Start");

fetch("https://api.github.com/users/octocat")

.then(()=>{

    console.log("Fetched");

});

console.log("End");
```

Output

```
Start
End
Fetched
```

Reason

Fetch returns immediately with a Promise.

The callback executes after the response arrives.

---

## Question 16

```javascript
Promise.all([

    Promise.resolve(10),

    Promise.resolve(20),

    Promise.resolve(30)

])

.then(console.log);
```

Output

```
[10,20,30]
```

---

## Question 17

```javascript
Promise.all([

    Promise.resolve(10),

    Promise.reject("Error"),

    Promise.resolve(30)

])

.catch(console.log);
```

Output

```
Error
```

---

## Question 18

```javascript
Promise.race([

    new Promise(resolve=>{

        setTimeout(()=>{

            resolve("A");

        },1000);

    }),

    new Promise(resolve=>{

        setTimeout(()=>{

            resolve("B");

        },2000);

    })

])

.then(console.log);
```

Output

```
A
```

---

## Question 19

```javascript
Promise.any([

    Promise.reject("Error"),

    Promise.resolve("Success"),

    Promise.resolve("Hello")

])

.then(console.log);
```

Output

```
Success
```

---

## Question 20

```javascript
Promise.allSettled([

    Promise.resolve(10),

    Promise.reject("Error")

])

.then(console.log);
```

Output

```javascript
[
  { status: "fulfilled", value: 10 },
  { status: "rejected", reason: "Error" }
]
```

---

# Quick Revision

## JavaScript Runtime

```
JavaScript

↓

Browser APIs

↓

Queues

↓

Event Loop

↓

Call Stack
```

---

## Queue Priority

```
Synchronous Code

↓

Microtask Queue

↓

Callback Queue
```

---

## Promise Lifecycle

```
Pending

↓

Fulfilled

OR

↓

Rejected
```

---

## Fetch Flow

```
fetch()

↓

Promise

↓

Response Object

↓

response.json()

↓

Promise

↓

JavaScript Object
```

---

## async/await Flow

```
async Function

↓

await

↓

Pause Function

↓

Promise Fulfilled

↓

Microtask Queue

↓

Resume Function
```

---

# Final Notes

- JavaScript is synchronous by default.
- Asynchronous behavior is achieved using the Browser Runtime.
- Browser APIs handle long-running operations.
- Promise callbacks are stored in the Microtask Queue.
- Timer callbacks are stored in the Callback Queue.
- The Event Loop gives priority to the Microtask Queue.
- `fetch()` returns a Promise.
- `response.json()` also returns a Promise.
- Every async function returns a Promise.
- `await` pauses only the current async function, not the entire JavaScript engine.