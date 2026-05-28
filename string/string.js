console.log("hello"+"world");

console.log("hello"+" "+"world");

const name = "harshit";
const repoCount = 50;


console.log(name+ repoCount+"value");  

hum doble quote use nhi karege hum backticks use karege 


console.log(`hello ${name.toUpperCase()} you have ${repoCount} repo`);  // String interpolation


const gameName = new String("pubg");

console.log(gameName);
console.log(gameName.toUpperCase());

console.log(gameName.length);

console.log(gameName[0]);   
console.log(gameName.charAt(0));  // same as above  (kis index pr kon sa character hai )

console.log(gameName.indexOf("g"));  // 3  // particular character ka index batata hai

console.log(gameName.__proto__);  // String.prototype

console.log(gameName.__proto__.__proto__);  // Object.prototype  iska mujhe bataiyo 

console.log(gameName.__proto__.__proto__.__proto__);  // null  ye wala nhi aaya smjh mein 


console.log(gameName.lastIndexOf("g"));  // 3  // particular character ka last index batata hai

console.log(gameName.slice(0,3));  // pub  // particular index se lekar dusre index tak ka string dega

console.log(gameName.slice(3));  // g  // particular index se lekar end tak ka string dega

console.log(gameName.slice(-3));  // pub  // particular index se lekar end tak ka string dega

console.log(gameName.replace("g","G"));  // pubG  // particular character ko replace karne ke liye use hota hai

console.log(gameName.replaceAll("g","G"));  // pubG  // particular character ko replace karne ke liye use hota hai

const newString = gameName.substring(0,2); // pu  // particular index se lekar dusre index tak ka string dega

slice ka concept ache se smjhna hai 

difference b/w slice and substring

1. slice me hum negative index use kar sakte hai lekin substring me nhi kar sakte hai

2. slice me agar start index end index se bada hai to empty string return karega lekin substring me start index end index se bada hai to usko swap kar dega

3. slice me agar end index nhi diya to end tak ka string dega lekin substring me agar end index nhi diya to empty string return karega

trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

const str = "   Hello World!   ";
const trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello World!"
console.log(str); // Output: "   Hello World!   " (original string remains unchanged)

trimStart() method removes whitespace from the beginning of a string and returns a new string, without modifying the original string.

const str = "   Hello World!   ";
const trimmedStartStr = str.trimStart();
console.log(trimmedStartStr);

trimEnd() method removes whitespace from the end of a string and returns a new string, without modifying the original string.

const str = "   Hello World!   ";
const trimmedEndStr = str.trimEnd();
console.log(trimmedEndStr); // Output: "   Hello World!" (whitespace removed from the end)
console.log(str); // Output: "   Hello World!   " (original string remains unchanged)

const url ="https://www.youtube.com/watch?v=abc123";

const newUrl = url.replace("?v=","/");  // https://www.youtube.com/watch/abc123
    
console.log(newUrl);

url.includes("youtube");  // true  // particular string ke andar koi string hai ya nhi ye batata hai

url.startsWith("https");  // true  // particular string ke start me koi string hai ya nhi ye batata hai
url.endsWith("abc123");  // true  // particular string ke end me koi string hai ya nhi ye batata hai

console.log(url.includes("youtube"));  // true
console.log(url.startsWith("https"));  // true
console.log(url.endsWith("abc123"));  // true

string ko array me convert karne ke liye split method use hota hai

const languages = "JavaScript,Python,Java,C++";

const langArray = languages.split(",");  // ["JavaScript", "Python", "Java", "C++"]

console.log(langArray);

const sentence = "Hello World! Welcome to JavaScript.";
const wordArray = sentence.split(" ");  // ["Hello", "World!", "Welcome", "to", "JavaScript."]

console.log(wordArray);

string ko character array me convert karne ke liye split method use hota hai

const str = "Hello";
const charArray = str.split("");  // ["H", "e", "l", "l", "o"]  
console.log(charArray);


