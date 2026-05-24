

let name = "harshit"
let age = 18
let isoggedin = false


number -- 2^53
BigInt
String
Boolean => true/false 
null => standalone value
undefined => iska matlab abhi value assign nhi hui hai

symbol => unique

object
console.log(typeof "hitesh");  //string
console.log(typeof null);  //object
console.log(typeof undefined);



let score  = "33abc"
let score = "33"
let score = null

console.log(typeof score);
console.log(typeof (score));

let value = Number(score)
console.log(typeof value);
console.log(value)


jb string ko number mein convert krte hai toh convert toh ho jata hai but agr kisi ne dala hai 33abc toh vo number mein cinvert tih ho jayega jb hum typof check krege toh vo number dega but agr usko number mein convert krege and then usko print karayege toh NaN aayega 

jb hum null ko convert karege number mein toh vo number mein convert ho jata hai but 0 print hota hai 

true - 1 
false - 0 

"33abc" - NaN (not a number )

let isLoggedIn = "harshit";
let boolean = Boolean(isLoggedIn)

console.log(boolean);

1 - true
"hitesh" - true
"" - false

33- "33" (typeof - string)



operations


let value = 3;
let negvalue = -value;
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);


let str1 = "h"
let str2 = " g"
let str3 = str1+str2

console.log(str3);

console.log("1"+2)
console.log(1+"2"+"2")
console.log(1+1+"2")
console.log("1"+2+2)
console.log(+"")


console.log("2">1);
console.log("02">1);


console.log(null>0);
console.log(null == 0);
console.log(null >= 0);

iska reason ye hai ki comparison and equality check dono different behave krte hai 
comparison convet krta hai null to a number which is equal to 0 isliye 3 console mein true aaya kuki usme >= hai and pehle wale mein false aaya 



strict check (===)

console.log("2" === 2);

console.log("24">"5");


const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1 === id2);

console.log(null == undefined);  //true
console.log(null === undefined); //false



primitive -- String, Number, Boolean, null, undefined, Symbol, BigInt


Refrence type (non primitive) -- 

Array, objects, functions,


primitive vs non primitive ---

primitive --

primitive data types mein actual value copy hoti hai matlab jesse 

let a = 10;
let b = a;

b = 20;

console.log(a);   //10 
console.log(b);   // 20

isme b 10 hone ke baad 20 hua yani sirf b vhange hua output aayega 10 20 

that means jo humari primitive value hai vo independent copies banati hai 

ab agr baat kre non primitive ki toh ve copy by refrence hote hai that means actual object copy nhi hota refrence copy hota hai unka 

let user1 = {
   name: "Harshit"
}
let user2 = user1;
user2.name = "Goel";

console.log(user1.name);  //goel 

basically kya hua object bana memory mein name:harshit ka user1 jo hai vo uss object ka add. hold krta hai ab uske baad vo same assign hua user2 ko yanisame refrence hold krta hai user2 ab dono user1 and 2 same object ko point kr rhe hai 
then actual object modify hua islilye output change hoke goel ho gaya user1 ke liye bhi


let x = 100;
let y = x;
y = 500;

console.log(x);  //100
console.log(y);  //500

let arr1 = [1,2,3];

let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);
dono array change ho jayegi kuki same usko point kar rhe hai 



array -> object 
function -> function
null -> object
object -> object 
NaN -> number (Not a number )
undefined -> undefined


object --- 
let user1 = {
   name: "Harshit"
};

let user2 = user1;

user2.name = "Goel";

console.log(user1.name);
console.log(user2.name);