// node js hai kya ??
// node.js ek open source cross platform js runtime environment hai jo ki google ke v8 js engine pr based hai jo ki js ko browser ke bahar run karne allow krta hai 


// browser vs node --->

// browser aur node.js dono hi javascript ko run karte hain lekin dono ke use cases alag hain.
// browser me javascript ka use mainly client side scripting ke liye hota hai jaise ki web pages me dynamic content create karna, user interactions handle karna, etc. Browser me javascript ko run karne ke liye ek browser engine ki zarurat hoti hai jo ki HTML aur CSS ke sath integrate hota hai.

// node.js ka use mainly server side scripting ke liye hota hai. Iska matlab hai ki aap server pr javascript code run kar sakte hain, jaise ki web servers create karna, APIs develop karna, database operations perform karna, etc. Node.js asynchronous programming model ko support karta hai jo ki high performance aur scalability provide karta hai.

// Browser deta hai

// DOM
// BOM
// Web APIs

// Node.js deta hai
// File System
// HTTP Module
// path os streams bufferes events crypto 

// browser sirf ui dikhata hai node backend handle krta hai 




// Programming Language defines syntax and rules for writing code. Runtime Environment provides the resources and execution environment required to run that code.


// Node.js is a JavaScript Runtime Environment that allows JavaScript to run outside the browser. It is commonly used for server-side development.



// Node Runtime
// V8 Engine
// libuv
// Event Loop
// Built-in Modules
// fs
// http
// path
// os
// crypto
// events
// stream
// buffer
// process
// npm Ecosystem



// Problem Before Node.js
// Step 1

// JavaScript sirf browser ke andar chalti thi.

// Browser ka kaam tha

// UI
// DOM Manipulation
// Form Validation
// Animations
// Event Handling

// Bas.

// Step 2

// Browser kya nahi kar sakta tha?

// Database connect ❌
// File System access ❌
// HTTP Server banana ❌
// OS ke resources access ❌
// TCP Server ❌
// Background services ❌

// Ye sab browser security reasons ki wajah se intentionally allow nahi karta.

// Step 3

// Result?

// Agar ek complete web application banani hoti thi to:

// Frontend

// ➡ JavaScript

// Backend

// ➡ Java / PHP / Python / Ruby / .NET

// Matlab

// 2 Languages
// 2 Frameworks
// 2 Ecosystems
// 2 Teams (kai companies me)
// Step 4

// Ryan Dahl ka idea

// "JavaScript itni powerful language hai, to browser ke bahar kyun nahi chala sakte?"

// Usne Google ka V8 Engine liya aur uske around ek runtime banaya.

// Us runtime ka naam tha

// Node.js

// Result

// Ab JavaScript se hi

// Backend ✔
// APIs ✔
// Database ✔
// File System ✔
// Server 

// sab possible ho gaya.

// Ek hi language me Full Stack Development possible ho gaya.



// node se pehle kya issue aa raha tha ??

// jo traditional web development me hota tha wo ye tha ki frontend aur backend ke liye alag alag languages aur frameworks use karne padte the. Isse development process complex ho jati thi, aur teams ko coordinate karna mushkil ho jata tha.
// traditional servers thread execution model use karte the jisme har request ke liye ek naya thread create hota tha. Ye approach resource intensive hoti thi aur high traffic scenarios me performance issues create karti thi.

// node.js ka solution kya tha ??
// node.js ne asynchronous, non-blocking I/O model introduce kiya jo ki high performance aur scalability provide karta hai. Isme ek single thread event loop hota hai jo multiple requests ko efficiently handle karta hai bina naye threads create kiye. Isse resource utilization improve hota hai aur high traffic scenarios me better performance milti hai.

// node.js ke features kya hain ??
// 1. Asynchronous and Event Driven: Node.js asynchronous programming model ko support karta hai jisme I/O operations non-blocking hote hain. Iska matlab hai ki ek request ke complete hone ka wait nahi karna padta, aur dusre requests ko handle kiya ja sakta hai.

// what is node js best sutiued for ??

// node js best suited for building scalable network applications, real-time applications (like chat applications), RESTful APIs, microservices architecture, and server-side applications that require high performance and low latency. It is particularly effective for applications that handle a large number of simultaneous connections, such as online gaming platforms, streaming services, and collaborative tools.

// where should node not be first choice ??

// Node.js may not be the best choice for CPU-intensive applications, such as heavy computation tasks, image or video processing, and applications that require complex algorithms. In such cases, traditional multi-threaded environments or languages like Java, C++, or Python may be more suitable due to their ability to handle CPU-bound tasks more efficiently. Additionally, if the application requires a lot of synchronous processing or has strict real-time requirements, other technologies might be preferred.


// I/O operations in Node.js are non-blocking, which means that the server can handle multiple requests simultaneously without waiting for one request to complete before starting another. This is particularly beneficial for applications that require high concurrency and low latency, such as chat applications, real-time collaboration tools, and streaming services.

// for example -- file read, database queries, api call , network requests, etc. In these scenarios, Node.js can efficiently manage multiple I/O operations without blocking the execution of other tasks, leading to improved performance and responsiveness of the application.

// node cpu intesive ke liye suitable nahi hai kyunki Node.js single-threaded architecture use karta hai. Agar aapko CPU-intensive tasks perform karne hain, jaise ki complex calculations, image processing, ya video encoding, to ye tasks Node.js ke event loop ko block kar sakte hain, jisse application ki performance degrade ho sakti hai. Aise scenarios me multi-threaded environments ya languages jaise Java, C++, ya Python zyada suitable hote hain jo CPU-bound tasks ko efficiently handle kar sakte hain.





// Node.js ka architecture krte hai ab -----> 

// Architecture is the overall design that explains how different components interact with each other to perform a task.

// 1. Node.js is built on the V8 JavaScript engine, which compiles JavaScript code into machine code for fast execution.


// flow overview of Node.js architecture:

// component 1 -->  js code  -->  (written by developer) is executed by the V8 engine.
// component 2 -->  v8 engine -->  Parse JavaScript, Compile JavaScript, Execute JavaScript , Memory Management, Garbage Collection

// component 3 --> node api -->   (fs, http, path, os, crypto, events, stream, buffer, process) provides built-in modules and APIs for developers to interact with the underlying system resources.

// component 4 --> libuv  --> ( ye sare asynchronous I/O operations ko handle karta hai jaise ki file system access, network requests, timers, etc. Ye event loop ko manage karta hai aur non-blocking I/O operations ko enable karta hai.)
// component 5 --> OS  --> (ye underlying operating system ke resources ko manage karta hai jaise ki file system, network, process management, etc. Node.js libuv ke through OS ke sath interact karta hai.)

// component 6 --> event loop -->  (ye ek single-threaded loop hai jo continuously check karta hai ki koi I/O operation complete hua hai ya nahi. Agar koi operation complete hota hai to event loop uske corresponding callback function ko execute karta hai. Isse Node.js asynchronous aur non-blocking behavior achieve karta hai.)

// component 7 -->  worker pool --> (ye ek thread pool hai jo CPU-intensive tasks ko handle karta hai. Agar koi task event loop ko block kar sakta hai to usse worker pool me delegate kiya jata hai jisse event loop free rahe aur dusre requests ko handle kar sake.)


// JavaScript

// ↓

// V8

// ↓

// Node API

// ↓

// libuv

// ↓

// Operating System

// ↓

// Read File

// ↓

// libuv

// ↓

// Callback Queue

// ↓

// Event Loop

// ↓

// V8

// ↓

// Callback Execute



//             JavaScript Code
//                    │
//                    ▼
//                  V8 Engine
//          (Compile + Execute JS)
//                    │
//       ┌────────────┴────────────┐
//       │                         │
//       ▼                         ▼
// Normal JS                  Node APIs
// (console.log,              (fs, http,
// math, loops)               crypto...)
//       │                         │
//       ▼                         ▼
//  Execute Direct             libuv
//                                 │
//                                 ▼
//                          Operating System
//                                 │
//                                 ▼
//                        Async Work Complete
//                                 │
//                                 ▼
//                          Event Loop
//                                 │
//                                 ▼
//                          Call Stack
//                                 │
//                                 ▼
//                      V8 Executes Callback


// now v8 engine --> 

// V8 engine is an open-source JavaScript engine developed by Google. It is written in C++ and is used in Google Chrome and Node.js to execute JavaScript code.
// v8 ka kaam -->  

// JavaScript Parse karna
// Compile karna
// Execute karna
// Memory Management
// Garbage Collection



// v8 --> 
// JS

// ↓

// Parse

// ↓

// Ignition

// ↓

// Bytecode

// ↓

// TurboFan

// ↓

// Machine Code

// ↓

// Execute



// Ignition   --> 
// Bytecode generate karta hai.
// Jaldi code start kar deta hai.

// TurboFan  --> 
// Frequently running code detect karta hai.
// Usko optimize karke machine code bana deta hai.

// garbage Collection  -->  
// automatically memory ko manage karta hai. Agar koi object ya variable use me nahi hai to usko memory se remove kar deta hai. Isse memory leak aur performance issues avoid hote hain.




// libuv -->  
// libuv is a cross-platform C library that provides asynchronous I/O, an event loop, and a thread pool for Node.js.
// Simple language me libuv ek helper library hai jo Node.js ke saare asynchronous operations handle karti hai.

// libuv ka kaam --> 
// Asynchronous I/O operations handle karna.
// file system access, network requests, timers, etc. ko manage karna.
// Event loop ko manage karna.
// Non-blocking I/O operations enable karna.
// event loop ke liye callback queue maintain karna.
// thread pool provide karna for CPU-intensive tasks.


// libuv ka architecture -->

// libuv

// ├── Event Loop

// ├── Thread Pool

// ├── Timers

// ├── Network I/O

// ├── File I/O

// └── OS Communication

// 1. Event Loop: libuv ka core component hai jo continuously check karta hai ki koi I/O operation complete hua hai ya nahi. Agar koi operation complete hota hai to event loop uske corresponding callback function ko execute karta hai.

// 2. Thread Pool: libuv ek thread pool provide karta hai jo CPU-intensive tasks ko handle karta hai. Agar koi task event loop ko block kar sakta hai to usse worker pool me delegate kiya jata hai jisse event loop free rahe aur dusre requests ko handle kar sake.  iska default size 4 threads ka hota hai lekin isse environment variable ke through change kiya ja sakta hai.

// 3. Timers: libuv timers ko manage karta hai jo setTimeout aur setInterval functions ke liye use hote hain. Ye timers event loop ke sath integrate hote hain aur specified time ke baad callback functions ko execute karte hain.

// 4. Network I/O: libuv network I/O operations ko handle karta hai jaise ki TCP, UDP, DNS resolution, etc. Ye non-blocking I/O operations ko enable karta hai jisse multiple network requests efficiently handle kiye ja sakte hain.

// 5. File I/O: libuv file system operations ko handle karta hai jaise ki reading, writing, opening, closing files, etc. Ye bhi non-blocking I/O operations ko enable karta hai jisse multiple file operations efficiently handle kiye ja sakte hain.

// 6. OS Communication: libuv operating system ke sath communicate karta hai jaise ki file system, network, process management, etc. Ye underlying OS ke resources ko manage karta hai aur Node.js ke liye ek abstraction layer provide karta hai.

// aur kuch bachta hai kya libuv mein ??
// libuv ke andar aur bhi kuch important components hote hain jo Node.js ke asynchronous behavior ko support karte hain. Ye components include karte hain:

// 1. Signal Handling: libuv signals ko handle karta hai jaise ki SIGINT, SIGTERM, etc. Ye signals process ke termination ya interruption ke liye use hote hain.
// 2. Child Process Management: libuv child processes ko manage karta hai jaise ki spawning new processes, inter-process communication (IPC), etc. Ye feature Node.js me child_process module ke liye use hota hai.
// 3. DNS Resolution: libuv DNS resolution ko handle karta hai jaise ki hostname ko IP address me convert karna. Ye feature Node.js me dns module ke liye use hota hai.
// 4. IPC (Inter-Process Communication): libuv inter-process communication ko support karta hai jaise ki pipes, sockets, etc. Ye feature Node.js me child_process aur cluster modules ke liye use hota hai.



// node.js ka event loop  -->

// Timers
//    ↓
// Pending Callbacks
//    ↓
// Idle / Prepare (Internal)
//    ↓
// Poll
//    ↓
// Check
//    ↓
// Close Callbacks 



// Timers -->  ye phase me setTimeout aur setInterval ke callbacks execute hote hain. Agar koi timer expire ho jata hai to uska callback function event loop ke call stack me push hota hai aur execute hota hai.

// Pending Callbacks -->  ye phase me I/O operations ke callbacks execute hote hain jo ki previous loop iteration me complete hue hote hain. Ye callbacks event loop ke call stack me push hote hain aur execute hote hain.

// Idle / Prepare (Internal) -->  ye phase me event loop internally prepare hota hai next phase ke liye. Isme koi user-defined callbacks execute nahi hote hain.

// Poll -->  ye phase me I/O events ke callbacks execute hote hain jo ki previous loop iteration me complete hue hote hain. Ye callbacks event loop ke call stack me push hote hain aur execute hote hain.

// Check -->  ye phase me setImmediate ke callbacks execute hote hain. Ye callbacks event loop ke call stack me push hota hai aur execute hota hai.

// Close Callbacks -->  ye phase me close events ke callbacks execute hote hain jo ki previous loop iteration me complete hue hote hain. Ye callbacks event loop ke call stack me push hote hain aur execute hote hain.



// Current JavaScript

// ↓

// process.nextTick() ⭐⭐⭐⭐⭐

// ↓

// Promise Microtasks (.then(), catch(), finally())

// ↓

// Event Loop Starts

// ↓

// Timers

// ↓

// Pending Callbacks

// ↓

// Poll

// ↓

// Check

// ↓

// Close



// console.log("Start");

// setTimeout(() => console.log("Timer"), 0);

// setImmediate(() => console.log("Immediate"));

// Promise.resolve().then(() => console.log("Promise"));

// process.nextTick(() => console.log("Next Tick"));

// console.log("End");


// output:
// Start
// End
// Next Tick
// Promise
// Immediate
// Timer

// node.js ka execution priority kya hai ??
// Node.js me execution priority ka order kuch is tarah

// synchronous code > process.nextTick() > Promise Microtasks (.then(), catch(), finally()) > Event Loop Phases (Timers, Pending Callbacks, Poll, Check, Close)

// Iska matlab hai ki synchronous code sabse pehle execute hota hai, uske baad process.nextTick() ke callbacks execute hote hain, fir Promise microtasks ke callbacks execute hote hain, aur finally event loop ke different phases ke callbacks execute hote hain.




// Modules --> 

// A module is a reusable block of code that encapsulates related functionality. it can be imported and used in other parts of the application. Node.js has a built-in module system that allows developers to create and use modules easily.

// Node.js me modules ka use code ko organize karne aur reuse karne ke liye hota hai. Node.js me har file ek module hoti hai, aur aap apne code ko alag alag files me divide karke modules create kar sakte hain. Node.js me built-in modules bhi hote hain jaise ki fs, http, path, os, crypto, events, stream, buffer, process, etc. Aap apne custom modules bhi create kar sakte hain aur unhe require() function ke through import kar sakte hain.

// modules ke types kya hain ??

// 1. Built-in Modules: Ye modules Node.js ke saath hi aate hain aur aapko alag se install karne ki zarurat nahi hoti. Examples include fs, http, path, os, crypto, events, stream, buffer, process, etc.

// 2. Local Modules: Ye modules aap khud create karte hain aur apne project ke andar use karte hain. Aap inhe alag files me define kar sakte hain aur require() function ke through import kar sakte hain.

// 3. Third-party Modules: Ye modules Node.js ke liye third-party developers ke dwara create kiye gaye hote hain. Aap inhe npm (Node Package Manager) ke through install kar sakte hain aur apne project me use kar sakte hain. Examples include express, lodash, mongoose, etc.

// 4. ES6 Modules: Ye modules ECMAScript 2015 (ES6) standard ke part hain aur import/export syntax ka use karte hain. Node.js me ES6 modules ko use karne ke liye aapko apne package.json file me "type": "module" set karna hota hai. Examples include import { readFile } from 'fs'; export function myFunction() { ... }


// built-in modules ke examples kya hain ??
// 1. fs (File System): Ye module file system operations ke liye use hota hai jaise ki reading, writing, opening, closing files, etc.
// 2. http: Ye module HTTP server aur client create karne ke liye use hota hai.
// 3. path: Ye module file aur directory paths ko handle karne ke liye use hota hai.
// 4. os: Ye module operating system ke information aur resources ko access karne ke liye use hota hai.
// 5. crypto: Ye module cryptographic operations ke liye use hota hai jaise ki hashing, encryption, decryption, etc.

// local modules ke examples kya hain ??
// 1. Aap apne project ke andar ek file create kar sakte hain jaise ki math.js aur usme kuch functions define kar sakte hain. Fir aap us file ko require() function ke through import karke use kar sakte hain.
// 2. Aap apne project ke andar ek folder create kar sakte hain jaise ki utils aur usme multiple files create kar sakte hain jaise ki stringUtils.js, arrayUtils.js, etc. Fir aap un files ko require() function ke through import karke use kar sakte hain.

// third-party modules ke examples kya hain ??
// 1. Express: Ye ek popular web framework hai jo Node.js ke liye use hota hai. Iska use web applications aur APIs create karne ke liye hota hai.
// 2. Lodash: Ye ek utility library hai jo JavaScript me common tasks ko simplify karne ke liye use hoti hai jaise ki array manipulation, object manipulation, etc.
// 3. Mongoose: Ye ek ODM (Object Data Modeling) library hai jo MongoDB ke sath use hoti hai. Iska use MongoDB ke data ko manage karne ke liye hota hai.

// ES6 modules ke examples kya hain ??
// 1. Aap ek file create kar sakte hain jaise ki math.js aur usme kuch functions define kar sakte hain aur unhe export kar sakte hain. Fir aap us file ko import karke use kar sakte hain.
//    Example: 
// math.js
// export function add(a, b) {
//     return a + b;
// }



//  commonjs --> 
//  commonjs ek module system hai jo Node.js me use hota hai. Isme modules ko require() function ke through import kiya jata hai aur module.exports ke through export kiya jata hai. CommonJS synchronous loading ko support karta hai aur ye server-side development ke liye suitable hai.

//  example:
// // math.js
// function add(a, b) {
//     return a + b;
// }

// module.exports = { add };

// // app.js
// const math = require('./math');
// console.log(math.add(2, 3)); // Output: 5

// example:

// // counter.js 
// console.log("Module Loaded");

// let count = 0;

// count++;

// module.exports = count;

// // app.js
// const counter1 = require('./counter');
// const counter2 = require('./counter');
// console.log(counter1); // Output: 1
// console.log(counter2); 


// module loaded print hoga sirf ek baar kyunki node.js me modules ko cache kiya jata hai. Jab aap same module ko multiple times require karte hain to node.js usko cache se return karta hai aur module ke code ko dobara execute nahi karta. Isliye counter1 aur counter2 dono me same value 1 return hoti hai.


// ES Modules -->
// ES Modules (ECMAScript Modules) ek module system hai jo ECMAScript 2015 (ES6) standard ka part hai. Isme modules ko import/export syntax ke through use kiya jata hai. ES Modules asynchronous loading ko support karte hain aur ye client-side aur server-side development dono ke liye suitable hain.

// example -- 
// // math.js
// export function add(a, b) {
//     return a + b;
// }

// // app.js
// import { add } from './math.js';
// console.log(add(2, 3)); // Output: 5


// type of ES Modules import/export -->
// 1. Named Exports: Isme aap multiple functions, variables, ya classes ko export kar sakte hain aur unhe import karte waqt unke names ka use karte hain.
//    Example:
//    // math.js
//    export function add(a, b) {
//        return a + b;
//    }
//    export function subtract(a, b) {
//        return a - b;
//    }

//    // app.js
//    import { add, subtract } from './math.js';
//    console.log(add(2, 3)); // Output: 5
//    console.log(subtract(5, 2)); // Output: 3

// 2. Default Exports: Isme aap ek single function, variable, ya class ko export kar sakte hain aur import karte waqt uska name change kar sakte hain.
//    Example:
//    // math.js
//    export default function multiply(a, b) {
//        return a * b;
//    }
//    // app.js
//    import multiply from './math.js';
//    console.log(multiply(2, 3)); // Output: 6


//    commonjs vs es modules -->

// | CommonJS            | ES Modules        |
// | ------------------- | ----------------- |
// | require()           | import            |
// | module.exports      | export            |
// | Synchronous Loading | Static Analysis   |
// | Default Node        | Modern JavaScript |




// npm (Node Package Manager) -->

// npm (Node Package Manager) ek package manager hai jo Node.js ke liye use hota hai. Iska use third-party modules ko install, manage, aur share karne ke liye hota hai. npm ke through aap apne project me required dependencies ko easily add kar sakte hain aur unhe update kar sakte hain.

// npm ke features kya hain ??

// 1. Package Management: npm allows developers to easily install, update, and manage third-party packages and dependencies for their Node.js projects.

// 2. Version Control: npm provides version control for packages, allowing developers to specify which version of a package they want to use in their project.

// 3. Dependency Management: npm automatically handles the installation of dependencies for packages, ensuring that all required packages are installed and compatible with each other.

// 4. Scripts: npm allows developers to define custom scripts in the package.json file, which can be run using the npm run command.

// 5. Registry: npm has a public registry where developers can publish their own packages and share them with the community.

// npm commands kya hain ??

// 1. npm init: Ye command ek new Node.js project create karne ke liye use hoti hai aur package.json file generate karti hai.
// 2. npm install <package-name>: Ye command specified package ko install karne ke liye use hoti hai aur uske dependencies ko bhi install karti hai.
// 3. npm uninstall <package-name>: Ye command specified package ko uninstall karne ke liye use hoti hai aur uske dependencies ko bhi remove karti hai.
// 4. npm update <package-name>: Ye command specified package ko update karne ke liye use hoti hai aur uske dependencies ko bhi update karti hai.


// flow of npm install --> 

// for example npm install express -->
//  npm install express

// ↓

// npm Registry

// ↓

// Express Download

// ↓

// Dependencies Download

// ↓

// node_modules

// ↓

// package.json Update

// ↓

// package-lock.json Update

// npm registry kya hai ??
// npm registry ek public database hai jahan pe developers apne Node.js packages ko publish karte hain aur share karte hain. Ye registry npm ke liye central repository ka kaam karti hai jahan se developers packages ko search, install, aur manage kar sakte hain. npm registry me millions of packages available hain jo different functionalities provide karte hain.




// package.json file kya hai ??

// package.json file ek metadata file hai jo Node.js project ke baare me information provide karti hai. Isme project ka name, version, description, author, license, dependencies, scripts, aur other configuration details hoti hain. Ye file npm ke liye important hai kyunki ye project ke dependencies aur scripts ko manage karne me help karti hai.

// package.json file ke fields kya hain ??

// 1. name: Ye field project ka name specify karti hai. Ye unique hona chahiye aur lowercase letters, numbers, aur hyphens ka use kar sakta hai.
// 2. version: Ye field project ka version specify karti hai. Ye semantic versioning (semver) format me hona chahiye, jaise ki "1.0.0".
// 3. description: Ye field project ka short description provide karti hai.
// 4. main: Ye field project ka entry point specify karti hai, jo ki default "index.js" hota hai.
// 5. scripts: Ye field custom scripts define karti hai jo npm run command ke through execute kiye ja sakte hain.
// 6. dependencies: Ye field project ke required dependencies specify karti hai jo npm install command ke through install kiye ja sakte hain.
// 7. devDependencies: Ye field project ke development dependencies specify karti hai jo sirf development ke liye required hote hain aur production me use nahi hote.
// 8. type: Ye field project ke module type ko specify karti hai, jaise ki "commonjs" ya "module" (ES Modules ke liye).



// package-lock.json file kya hai ??

// package-lock.json file ek automatically generated file hai jo npm ke dwara create hoti hai jab aap npm install command run karte hain. Ye file project ke dependencies ke exact versions ko lock karti hai, jisse ensure hota hai ki project ke different environments me same versions of dependencies use ho rahe hain. Isse dependency tree ka snapshot create hota hai aur future installations me consistent behavior ensure hota hai.

// package.json aur package-lock.json me difference kya hai ??

// | Feature                  | package.json                          | package-lock.json                     |
// | ------------------------ | ------------------------------------- | ------------------------------------- |
// | Purpose                  | Project metadata and dependencies     | Exact versions of installed packages  |
// | Creation                 | Manually created by developer         | Automatically generated by npm        |
// | Version Control          | Typically committed to version control| Typically committed to version control|
// | Dependency Management    | Lists required dependencies           | Locks exact versions of dependencies  |
// | Updates                  | Can be updated manually               | Updated automatically by npm          |

// node modules folder kya hai ??
// node_modules folder ek directory hai jo npm ke dwara create kiya jata hai. Isme project ke dependencies install hote hain. Ye folder project ke liye important hai kyunki ye project ke code ko run karne me help karti hai.

// for example hum install krte hai express toh sirf express hi install nhi hota uske sath sath uske dependencies bhi install hote hain jo express ke liye required hote hain. Ye dependencies node_modules folder me store hoti hain. Is folder ko version control me commit nahi karna chahiye kyunki ye automatically npm install command ke through generate ho jata hai.



// ab baat krte hai semantic versioning ke baare me -->
// Semantic Versioning (SemVer) ek versioning scheme hai jo software packages ke versions ko meaningful aur predictable banata hai. Isme version numbers ko three parts me divide kiya jata hai: MAJOR.MINOR.PATCH.

// - **MAJOR**: Breaking changes jo backward compatibility ko break karte hain. Jab aap major version increment karte hain, iska matlab hai ki aapne aise changes kiye hain jo existing users ke liye incompatible ho sakte hain.
// - **MINOR**: New features jo backward compatible hain. Jab aap minor version increment karte hain, iska matlab hai ki aapne naye features add kiye hain jo existing functionality ko break nahi karte.
// - **PATCH**: Bug fixes jo backward compatible hain. Jab aap patch version increment karte hain, iska matlab hai ki aapne existing functionality me bugs fix kiye hain bina kisi breaking change ke.

// For example, version 2.3.4 me:
// - 2 = MAJOR version
// - 3 = MINOR version
// - 4 = PATCH version

// ^ --> caret operator, used in package.json to specify a version range that allows updates to the minor and patch versions but not the major version.
// ~ --> tilde operator, used in package.json to specify a version range that allows updates to the patch version but not the minor or major versions.
// exact version --> used in package.json to specify an exact version of a package, ensuring that only that specific version is installed and no updates are allowed.
// * --> wildcard operator, used in package.json to specify that any version of a package is acceptable, allowing for maximum flexibility in updates.




// built-in modules suru krte hai --> 

// 1. process module -->  

// process module ek global object hai jo Node.js process ke information aur control ke liye use hota hai. Iska use current process ke environment, arguments, exit codes, signals, aur other process-related functionalities ko access karne ke liye hota hai.

// simple language mein jb node app.js run krte hai toh 
// OS ek proecess create krta hai node uss running process ki info hume process object ke through provide krta hai. Isme hume process ke environment variables, command line arguments, exit codes, signals, aur other process-related functionalities ko access karne ka option milta hai.

// Operating System

//         │

//         ▼

// Node Process

//         │

//         ▼

// process Object

// process object kya provide karta hai ??

// process object current Node.js process ke bare me information provide karta hai. Isme hume process ke environment variables, command line arguments, exit codes, signals, aur other process-related functionalities ko access karne ka option milta hai.

// common properties of process object kya hain ??

// 1. process.pid --> Ye property current process ka unique process ID return karti hai. Iska use process ko identify karne ke liye hota hai. kuki har ek process ka ek unique ID hota hai jo OS ke dwara assign kiya jata hai.

// 2. process.platform --> Ye property current platform ko return karti hai. Iska use different platforms par code execute karne ke liye hota hai.for example agar aapko platform specific code likhna hai to aap process.platform ka use kar sakte hain. Ye property ek string return karti hai jaise ki 'win32', 'linux', 'darwin', etc.

// 3. process.version --> Ye property current Node.js version ko return karti hai. Iska use code me version specific features ko enable karne ke liye hota hai. Ye property ek string return karti hai jaise ki 'v14.17.0', 'v16.3.0', etc.
 
// 4. process.cwd() --> Ye property current working directory ko return karti hai. Iska use current directory ke bare me information get karne ke liye hota hai. 

// 5. process.exit() --> ye method current process ko terminate karne ke liye use hoti hai. Isme aap exit code specify kar sakte hain jo OS ko return hota hai. By default, exit code 0 hota hai jo successful termination ko indicate karta hai. Agar aapko error ya abnormal termination indicate karna hai to aap non-zero exit code specify kar sakte hain.

// 6. process.argv --> ye property command line arguments ko return karti hai. Isme ek array hota hai jisme first element me Node.js executable ka path hota hai, second element me script file ka path hota hai, aur baaki elements me user-defined arguments hote hain. Iska use command line arguments ko access karne ke liye hota hai.

// 7. process.env --> ye property environment variables ko return karti hai. Isme ek object hota hai jisme key-value pairs hote hain jo environment variables ko represent karte hain. Iska use environment variables ko access karne ke liye hota hai.

// 8. process.memoryUsage() --> ye method current process ke memory usage ko return karti hai. Isme ek object hota hai jisme different memory metrics hote hain jaise ki rss, heapTotal, heapUsed, external, etc. Iska use memory profiling aur optimization ke liye hota hai.



// path module -->

// path module ek built-in module hai jo file aur directory paths ko handle karne ke liye use hota hai. Iska use path manipulation, normalization, joining, resolving, aur other path-related functionalities ko perform karne ke liye hota hai.

// ye sirf path banata hai file read nhi karta 

// 1. path.resolve() --> absolute path return krta hai 
// ex --> console.log(path.resolve("uploads"));
// o/p --> C:\Projects\SmartCart\uploads

// 2. path.join() -->  suppose 
// const file = path.join("uploads","images","user.png");

// now in windows --> uploads\images\user.png
// now in linux --> uploads/images/user.png

// ye automatically ho jata hai isiliye hardcoded nhi likhte hai 

// 3. path.basename()  -->  sirf file ka naam 
// path.basename("/users/docs/file.txt");
// o/p --> file.txt 

// 4. path.dirname() -->  folder ka name 

// path.dirname("/users/docs/file.txt");
// o/p --> /users/docs

// 5. path.extname() --> extension return krta hai 

// path.extname("photo.jpg");
// o/p --> .jpg

// Validation me use hota hai.

// if(path.extname(file)===".jpg"){
//     // Upload
// }

// 6. path.parse() --> path ko object me tod deta hai 

// path.parse("/images/photo.png");
// o/p --> {
//  root: "/",
//  dir: "/images",
//  base: "photo.png",
//  name: "photo",
//  ext: ".png"
// }

// 7. path.format()  --> parse ka opposite hai ye object ka path bana deta hai 

// join-- relative path deta hai 
// resolve -- absolute path deta hai 



// fs (file system) module -->

// Express ke baad agar koi built-in module sabse zyada use hota hai to wo fs hai.

// The fs (File System) module is a built-in Node.js module that provides APIs to interact with the file system, such as creating, reading, updating, deleting, and managing files and directories.

// fs kya kya kar sakta hai --> 

// read file, write file, create file, delete file, rename file, create folder, delete folder, read folder basically hard disk se related sab kuch


// sync vs async APIs

// node mein almost har operation ke 2 version hote hai 

// ex --> fs.readFile() and fs.readFileSync()

// readFileSync() -->  synchronous api current thread ko block krta hai
// that means agr simple language mein bole toh kaam complete hone tk wait kro 


// readFile() -->  asynchronous api version hai  ye current thread ko block nhi hone deta hai 

// fs.readFile(
//     "notes.txt",
//     "utf-8",     // --->   data ko binary se english mein krne ke liye
//     (err,data)=>{

//         if(err){

//             console.log(err);

//             return;

//         }

//         console.log(data);

//     }
// );

// flow Sync --> 

// JavaScript

// ↓

// V8

// ↓

// fs

// ↓

// OS

// ↓

// WAIT

// ↓

// Result

// ↓

// Next Line



// Async flow -->

// JavaScript

// ↓

// V8

// ↓

// fs

// ↓

// libuv

// ↓

// OS

// ↓

// Continue Execution

// ↓

// Result

// ↓

// Event Loop

// ↓

// Callback

// production mein readFile() use hota hai mostly yehi hota hai kuki server block nhi hota hai iss se





// writeFile()  --> 

// file create krni h suppose agr file nhi h then create agr h toh overwrite ok 

// fs.writeFile(
//     "user.txt",
//     "Hello Harshit",
//     (err)=>{
//         if(err){
//             console.log(err);
//             return;
//         }

//         console.log("File Created");
//     }
// );





// Real World Scenario

// Yahi missing tha.

// Main bataunga ki company me ye kahan use hota hai.

// Example:

// readFile()

// Real World

// config.json read karna
// HTML template read karna
// CSV import karna
// Logs read karna
// writeFile()

// Real World

// PDF invoice generate karna
// Report export karna
// User ke uploaded data ko save karna
// Backup file banana
// appendFile()

// Real World

// Login logs
// Error logs
// Audit logs
// Chat history
// Server request logs
// rename()

// Real World

// Suppose user ne profile photo upload ki.

// Uska naam aaya

// IMG_20250706.jpg

// Ab backend usko rename karega

// user_123_profile.jpg

// Taaki future me easily identify kar sake.

// Ya phir

// Report generate hui

// temp.pdf

// Email bhejne se pehle rename

// Invoice_1001.pdf
// unlink()

// Real World

// User ne profile photo delete kar di.

// Database se delete karna enough nahi hai.

// Disk se bhi file delete karni padegi.

// Uske liye

// fs.unlink()
// mkdir()

// Real World

// Naya user register hua.

// Automatically

// uploads/

// ↓

// Harshit/

// folder create.

// readdir()

// Real World

// Google Drive.

// Jab folder open karte ho.

// Backend kya karta hai?

// Us folder ke andar jitni files hain unki list read karta hai.

// Exactly

// fs.readdir()
// stat()

// Real World

// File upload se pehle check.

// Size kitni hai?
// File hai ya folder?
// Last modified kab hui?

// Ye sab

// fs.stat()



// now let's discuss about events --> 

// An event is an action or occurrence that the application can detect and respond to.

// node mein event kesse banate hai -->

// node already ek class deta hai EventEmitter iss se hum apne custom events bana sakte hai .
// ex --> 
// const EventEmitter = require("events");    // built in module hai node ka 
// const emitter = new EventEmitter();  // emitter hi hai jo events ko manage karega

// emitter.on()     //  kisi event ko sunna
// emitter.emit()   //  event ko fire karo 

// //  ___________________________________________ 

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("login", () => {

//     console.log("User Logged In");

// });

// emitter.emit("login");   //  login event fire kr do 




// emit("login")

// ↓

// EventEmitter

// ↓

// Search Listener

// ↓

// Listener Mila

// ↓

// Callback Execute


// once() --> emitter.once()  (iska matlab particular event ko ek hi baar sunna karo)

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.once("login", () => {

//     console.log("Welcome Email Sent");

// });

// emitter.emit("login");

// emitter.emit("login");

// emitter.emit("login");

// once("login")

// ↓

// Listener Register

// ↓

// emit("login")

// ↓

// Execute

// ↓

// Listener Remove ❌

// ↓

// emit("login")

// ↓

// Koi Listener Nahi

// ↓

// Nothing Happens



// | `on()`             | `once()`                                  |
// | ------------------ | ----------------------------------------- |
// | Har baar execute   | Sirf pehli baar execute                   |
// | Listener rehta hai | Listener automatically remove ho jata hai |


// now let's talk about buffer -->

// buffer is a global class in node.js used to store and manipulate raw binary data.

// buffer kaha kaha use hota hai --> 

// 1. file reading
// 2. file writing
// 3. image upload
// 4. video streaming
// 5. audio streaming
// 6. tcp sockets
// 7. http requests
// 8. http Response

// basically jahan binary data hai waha buffer use hota hai
// process ki tarah hi buffer bhi global hota hai 






const buffer = Buffer.from("harshit");

console.log(buffer); 