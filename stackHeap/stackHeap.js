

humare paas 2 types ki memory hoti hai stack and heap 
stack memory is used for static memory allocation and heap memory is used for dynamic memory allocation

stack primitive data types ko store karta hai jaise ki number, string, boolean, null, undefined etc.
heap non-primitive data types ko store karta hai jaise ki objects, arrays, functions etc.



let myName = "harshit"; // stack memory me store hoga
let myAge = 25; // stack memory me store hoga

let anothername = myName; 

anothername bhi stack memory me store hoga, lekin usme myName ka reference hoga

myName = "rohit"; 

myName ka value change hoga, lekin anothername ka value change nahi hoga kyunki usme myName ka reference hai, uska value change nahi hoga



let myObjOne = {    // ye heap memory me store hoga
     name: "harshit",
     age: 25,
     city: "delhi"
}
let myObjTwo = myObjOne; // ye bhi heap memory me store hoga, lekin usme myObjOne ka reference hoga

myObjOne.name = "rohit"; 
 myObjOne ka value change hoga, and  myObjTwo ka value bhi  change  hoga kyunki usme myObjOne ka reference hai, dono ek hi object ko point kr rhe hai 

console.log(myObjOne); // { name: 'rohit', age: 25, city: 'delhi' }
console.log(myObjTwo); // { name: 'rohit', age: 25, city: 'delhi' }


let arr1 = [1, 2, 3]; // ye heap memory me store hoga
let arr2 = [1,2,3];

console.log(arr1 === arr2); // false, kyunki dono alag alag memory location pe store hai

let arr3 = arr1; // ye bhi heap memory me store hoga, lekin usme arr1 ka reference hoga
arr1.push(4); // arr1 ka value change hoga, and arr3 ka value bhi  change  hoga kyunki usme arr1 ka reference hai, dono ek hi array ko point kr rhe hai

console.log(arr1); // [ 1, 2, 3, 4 ]
console.log(arr3); // [ 1, 2, 3, 4 ]


shallow copy and deep copy ke baare me bhi baat karte hai

shallow copy me hum ek object ya array ka reference copy karte hai, lekin usme nested objects ya arrays ke references bhi copy hote hai, isliye agar hum nested objects ya arrays me changes karte hai to original object ya array me bhi changes hote hai

deep copy me hum ek object ya array ka reference copy karte hai, lekin usme nested objects ya arrays ke references nahi copy hote hai, isliye agar hum nested objects ya arrays me changes karte hai to original object ya array me changes nahi hote hai


garbage collection ke baare me bhi baat karte hai

garbage collection ek process hai jisme JavaScript engine automatically memory ko free karta hai jab koi object ya array ka reference nahi hota hai, isse memory leak se bachaya ja sakta hai
toh vo automatically memory ko free kar deta hai jab koi object ya array ka reference nahi hota hai, isse memory leak se bachaya ja sakta hai

let obj1 = { name: "harshit" }; // ye heap memory me store hoga
let obj2 = obj1; // ye bhi heap memory me store hoga, lekin usme obj1 ka reference hoga

obj1 = null; // obj1 ka reference null ho jayega, lekin obj2 ka reference abhi bhi obj1 ke original object ko point kr raha hai

console.log(obj1);
console.log(obj2)




shallow copy mein basically top level properties copy hoti hai but nested objects ka refrence same rehta hai 


syntax --- two type

spread operator 


let obj1 = {name:"harshit"}
let obj2 = {...obj1};


Object.assign() method

let obj1 = {name:"harshit"}
let obj2 = Object.assign({},obj1)



deep copy mein top level properties ke sath nested objects bhi copy hote hai, isliye agar hum nested objects me changes karte hai to original object me changes nahi hote hai

syntax ---

modern way ---

let obj1 = {name:"harshit", address:{city:"delhi"}}
let obj2 = structuredClone(obj1);

old way ---
let obj1 = {name:"harshit", address:{city:"delhi"}}
let obj2 = JSON.parse(JSON.stringify(obj1));

but purane wale ke kuch limitations hai jaise ki functions, undefined, symbol etc. ko copy nahi kar pata hai, isliye modern way use karna chahiye



ab merging ka concept dekhte hai
merging mein hum do ya do se zyada objects ko merge karte hai, isse hum ek naya object create kar sakte hai jisme dono objects ke properties hoti hai
syntax ---

spread operator
let obj1 = {name:"harshit"}
let obj2 = {age:25}
let mergedObj = {...obj1,...obj2};

Object.assign() method
let obj1 = {name:"harshit"}
let obj2 = {age:25}
let mergedObj = Object.assign({},obj1,obj2);


