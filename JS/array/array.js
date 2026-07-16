js mein array resizeable hote hai mix of datatype bhi ho skta hai array ke andar array bhi ho skti hai

const myArr = [0,1,2,3,4,5];
const myHeros = ["shaktiman","naagraj"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);

array ke methods 

myArr.push(6);
console.log(myArr); // ye array ke end mein element add karta hai
myArr.pop();  // ye array ke end mein element remove karta hai
console.log(myArr);
myArr.unshift(-1);  // ye array ke starting mein element add karta hai
console.log(myArr);
myArr.shift();  // ye array ke starting mein element remove karta hai
console.log(myArr);

console.log(myArr.indexOf(4));  // 4
console.log(myArr.includes(10));  // false 

join(): aur janege iske bare mein 

const myArr3 = ["a","b","c"];
console.log(myArr3.join("-"));  // a-b-c

slice and splice :

const myArr4 = [1,2,3,4,5];
console.log(myArr4.slice(1,4));  // slice(start,end) end index ko include nahi karta hai
console.log(myArr4);  // original array mein koi change nahi hota hai

console.log( myArr4.splice(1,2));  // splice(start,count) count number of elements remove karta hai starting index se
console.log(myArr4);  // original array mein change hota hai splice ke wajah se

slice vs splice : slice original array ko change nahi karta hai jabki splice original array ko change karta hai. slice ek naya array return karta hai jabki splice removed elements ka array return karta hai.

const myArr = [1,2,3,4,5];
for loop
for(let i=0; i<myArr.length; i++){
    console.log(myArr[i]);
}
for of loop
for(let num of myArr){
    console.log(num);
}
for each loop
myArr.forEach(function(num){
    console.log(num);
});


const m1 = ["thor","loki"];
const m2 = ["ironman","captain america"];
const m3 = ["hulk","black widow"];



m1.push(m2);
console.log(m1); // ["thor","loki",["ironman","captain america"]]
console.log(m1[2][0]); // ironman -->  m1 ke 2nd index par m2 ka array hai uske 0th index par ironman hai

concat()

const m4 = m1.concat(m2);
console.log(m4);  // ["thor","loki","ironman","captain america"]  concat() method do ya usse zyada arrays ko combine karta hai aur ek naya array return karta hai. original arrays mein koi change nahi hota hai.






m1.push(...m2);
console.log(m1); // ["thor","loki","ironman","captain america"]  ... spread operator hai jo array ke elements ko individual elements mein convert karta hai.

normal vs spread operator : normal operator array ke elements ko as a single element treat karta hai jabki spread operator array ke elements ko individual elements mein convert karta hai.
 

flat method : ye method nested arrays ko flatten karta hai yani ki un nested arrays ke elements ko ek single array mein convert karta hai.

const nestedArr = [1,2,[3,4],[5,6,[7,8]]];
console.log(nestedArr.flat()); // [1,2,3,4,5,6,[7,8]]  flat() method by default 1 level tak nested arrays ko flatten karta hai.
console.log(nestedArr.flat(2)); // [1,2,3,4,5,6,7,8]  flat(depth) method depth parameter ke according nested arrays ko flatten karta hai. agar depth parameter nahi diya gaya hai to by default 1 level tak nested arrays ko flatten karta hai.


console.log(nestedArr.flat(Infinity)); // [1,2,3,4,5,6,7,8]  flat(Infinity) method nested arrays ko completely flatten karta hai yani ki jitne bhi levels of nesting hai un sab ko flatten karta hai.

console.log(Array.isArray("hello")); // false  Array.isArray() method check karta hai ki given value array hai ya nahi.
console.log(Array.isArray([1,2,3])); // true

console.log(Array.from("hello"));
Array.from() method ek array-like ya iterable object ko ek new array mein convert karta hai. is method ka use string, set, map, arguments object, etc. ko array mein convert karne ke liye kiya jata hai. is method ke andar ek callback function bhi diya ja sakta hai jo har element par apply hota hai aur uske result ko new array mein store karta hai.

console.log(Array.from({name: "Alice"})); // []  Array.from() method object ko array mein convert karne ki koshish karta hai lekin object ke andar length property nahi hoti hai isliye ye empty array return karta hai. agar object ke andar length property hoti to ye uske according array return karta.

const set = new Set([1,2,3]);
console.log(Array.from(set)); // [1,2,3]  Array.from() method set ko array mein convert karta hai. set ke andar unique values hoti hai isliye ye array mein bhi unique values return karta hai.

Array.of() method ek naya array create karta hai jisme given arguments as elements hote hai. is method ka use tab kiya jata hai jab hume ek naya array create karna hota hai jisme specific elements hote hai.

console.log(Array.of(1,2,3)); // [1,2,3]  Array.of() method given arguments ko as elements ke roop mein ek naya array return karta hai. is method ke andar ek single argument bhi diya ja sakta hai jo ki array ke length ko specify karta hai. agar single argument diya gaya hai to ye uske according array return karta hai jisme us length ke elements hote hai. agar single argument nahi diya gaya hai to ye given arguments ko as elements ke roop mein ek naya array return karta hai.

console.log(Array.of(5)); // [5]  Array.of() method given arguments ko as elements ke roop mein ek naya array return karta hai. is method ke andar ek single argument bhi diya ja sakta hai jo ki array ke length ko specify karta hai. agar single argument diya gaya hai to ye uske according array return karta hai jisme us length ke elements hote hai. agar single argument nahi diya gaya hai to ye given arguments ko as elements ke roop mein ek naya array return karta hai.






find() vs filter()


find() method array ke elements ko check karta hai aur pehla element return karta hai jo condition ko satisfy karta hai. agar koi element condition ko satisfy nahi karta hai to ye undefined return karta hai.



const myArr5 = [1,2,3,4,5];

console.log(myArr5.find(num => num>3));  // 4 

filter() method array ke elements ko check karta hai aur un sabhi elements ka ek naya array return karta hai jo condition ko satisfy karte hai. agar koi element condition ko satisfy nahi karta hai to ye empty array return karta hai.

console.log(myArr5.filter(num => num>3));  // [4,5]


some() vs every()

some() method array ke elements ko check karta hai aur true return karta hai agar koi bhi element condition ko satisfy karta hai. agar koi bhi element condition ko satisfy nahi karta hai to ye false return karta hai.

console.log(myArr5.some(num => num>3));  // true

every() method array ke elements ko check karta hai aur true return karta hai agar sabhi elements condition ko satisfy karte hai. agar koi ek bhi element esa hai jo condition ko satisfy nahi karta hai to ye false return karta hai.

console.log(myArr5.every(num => num>3));  // false


findIndex() ye method array ke elements ko check krta hai and jo pehla element condition ko satisfy krta hai uska index return krta hai aur agr koi element condition ko satisfy nahi krta hai to ye -1 return krta hai.

console.log(myArr5.findIndex(num => num>3));  // 3  


reverse() method array ke elements ko reverse order mein arrange karta hai. is method ke use se original array change ho jata hai.

console.log(myArr5.reverse());  // [5,4,3,2,1]  reverse() method array ke elements ko reverse order mein arrange karta hai. is method ke use se original array change ho jata hai.

console.log(myArr5);  // [5,4,3,2,1]  reverse() method array ke elements ko reverse order mein arrange karta hai. is method ke use se original array change ho jata hai.

sort() method array ke elements ko sort karta hai. is method ke use se original array change ho jata hai. by default ye method elements ko string ke roop mein sort karta hai.  

const myArr6 = [3,1,4,2,5];
console.log(myArr6.sort());  // [1,2,3,4,5]  sort() method array ke elements ko sort karta hai. is method ke use se original array change ho jata hai. by default ye method elements ko string ke roop mein sort karta hai. isliye ye numbers ko string ke roop mein sort karta hai aur isliye ye 1,2,3,4,5 ke order mein sort karta hai.


isiliye numeric sort hum iss tarah se krte hai --



myArr.sort((a,b) => a-b);  // [1,2,3,4,5]  sort() method array ke elements ko sort karta hai.  agar hume numeric sort karna hai to hume compare function dena hota hai jisme hum a aur b ko compare karte hai aur return value ke according sort order decide hota hai. agar return value negative hoti hai to a b se pehle aata hai agar return value positive hoti hai to b a se pehle aata hai aur agar return value zero hoti hai to a aur b ka order change nahi hota hai. is tarah se hum numeric sort kar sakte hai.

return value negative --> a b se pehle aata hai
return value positive --> b a se pehle aata hai
return value zero --> a aur b ka order change nahi hota hai


myArr.sort((a,b) => b-a);  // [5,4,3,2,1]  sort() method array ke elements ko sort karta hai.  agar hume numeric sort karna hai to hume compare function dena hota hai jisme hum a aur b ko compare karte hai aur return value ke according sort order decide hota hai. agar return value negative hoti hai to a b se pehle aata hai agar return value positive hoti hai to b a se pehle aata hai aur agar return value zero hoti hai to a aur b ka order change nahi hota hai. is tarah se hum numeric sort kar sakte hai. agar hume descending order mein sort karna hai to hume compare function mein b-a return karna hota hai.


// Ascending order mein sort karne ke liye compare function mein a-b return karna hota hai


// Descending order mein sort karne ke liye compare function mein b-a return karna hota hai


destructing arrays : destructuring assignment syntax ka use karke hum array ke elements ko variables mein assign kar sakte hai. is syntax ke use se hum array ke elements ko easily access kar sakte hai aur unhe variables mein store kar sakte hai.

const myArr7 = [1,2,3];
const [a,b,c] = myArr7;  // destructuring assignment syntax ka use karke array ke elements ko variables mein assign karna. is syntax ke use se hum array ke elements ko easily access kar sakte hai aur unhe variables mein store kar sakte hai.

console.log(a);
console.log(b);
console.log(c);

const myArr8 = [1,2,3,4,5];
const [x,y,...rest] = myArr8;  // destructuring assignment syntax ka use karke array ke elements ko variables mein assign karna. is syntax ke use se hum array ke elements ko easily access kar sakte hai aur unhe variables mein store kar sakte hai. ... rest operator hai jo remaining elements ko ek array mein store karta hai. is tarah se hum array ke elements ko variables mein assign kar sakte hai aur remaining elements ko ek array mein store kar sakte hai.
console.log(x);
console.log(y);
console.log(rest);

const myArr9 = [1,2,3,4,5];
const [p,q,,r] = myArr9;  // result-- isme p=1, q=2, r=4  kyuki humne 3rd element ko skip kar diya hai isliye r ke paas 4 assign hoga. destructuring assignment syntax ka use karke array ke elements ko variables mein assign karna. is syntax ke use se hum array ke elements ko easily access kar sakte hai aur unhe variables mein store kar sakte hai. agar hum kisi element ko skip karna chahte hai to uske jagah comma laga dena hota hai. is tarah se hum array ke elements ko variables mein assign kar sakte hai aur kisi element ko skip bhi kar sakte hai.
console.log(p);
console.log(q);
console.log(r);


const myArr10 = [1,2,3,4,5];

const[a,b = 100] = myArr10;  // result-- a=1, b=2  kyuki humne b ke liye default value 100 di hai lekin array ke 2nd element par 2 assign hoga isliye b ke paas 2 assign hoga. destructuring assignment syntax ka use karke array ke elements ko variables mein assign karna. is syntax ke use se hum array ke elements ko easily access kar sakte hai aur unhe variables mein store kar sakte hai. agar hum kisi variable ke liye default value dena chahte hai to uske baad equal sign laga dena hota hai aur uske baad default value dena hota hai. is tarah se hum array ke elements ko variables mein assign kar sakte hai aur unke liye default value bhi de sakte hai.
console.log(a);
console.log(b);


what if agr humne array mein 1 element hai pr assign 2 ko kr rhe hai

const myArr11 = [1];
const [c,d = 100] = myArr11;  // result-- c=1, d=100  kyuki humne d ke liye default value 100 di hai lekin array ke 2nd element par koi value nahi hai isliye d ke paas default value 100 assign hoga. destructuring assignment syntax ka use karke array ke elements ko variables mein assign karna. is syntax ke use se hum array ke elements ko easily access kar sakte hai aur unhe variables mein store kar sakte hai. agar hum kisi variable ke liye default value dena chahte hai to uske baad equal sign laga dena hota hai aur uske baad default value dena hota hai. is tarah se hum array ke elements ko variables mein assign kar sakte hai aur unke liye default value bhi de sakte hai.
console.log(c);
console.log(d);



nhi agr mein usko defualt value nhi dunga to uska result kya hoga

const myArr12 = [1];
const [e,f] = myArr12; // result-- e=1, f=undefined  kyuki humne f ke liye default value nahi di hai aur array ke 2nd element par koi value nahi hai isliye f ke paas undefined assign hoga. destructuring assignment syntax ka use karke array ke elements ko variables mein assign karna. is syntax ke use se hum array ke elements ko easily access kar sakte hai aur unhe variables mein store kar sakte hai. agar hum kisi variable ke liye default value dena chahte hai to uske baad equal sign laga dena hota hai aur uske baad default value dena hota hai. is tarah se hum array ke elements ko variables mein assign kar sakte hai aur unke liye default value bhi de sakte hai.
console.log(e);
console.log(f);


ab at() method ke bare mein janege
at() method array ke elements ko access karne ke liye use hota hai. is method ke andar index pass kiya jata hai aur ye us index par element return karta hai. agar index negative hota hai to ye array ke end se count karta hai. agar index out of range hota hai to ye undefined return karta hai.

const myArr13 = [10,20,30,40,50];
console.log(myArr13.at(0));
console.log(myArr13.at(2));
console.log(myArr13.at(-1));  // 50  at() method array ke elements ko access karne ke liye use hota hai. is method ke andar index pass kiya jata hai aur ye us index par element return karta hai. agar index negative hota hai to ye array ke end se count karta hai. agar index out of range hota hai to ye undefined return karta hai.
console.log(myArr13.at(5));  // undefined  at() method array ke elements ko access karne ke liye use hota hai. is method ke andar index pass kiya jata hai aur ye us index par element return karta hai. agar index negative hota hai to ye array ke end se count karta hai. agar index out of range hota hai to ye undefined return karta hai.\



fill()

fill() method array ke elements ko specified value se fill karta hai. is method ke use se original array change ho jata hai. is method ke andar value, start index aur end index pass kiya jata hai. agar start index aur end index nahi diya gaya hai to ye poore array ko specified value se fill kar deta hai. agar start index diya gaya hai lekin end index nahi diya gaya hai to ye start index se lekar array ke end tak ke elements ko specified value se fill kar deta hai. agar start index aur end index dono diya gaya hai to ye start index se lekar end index tak ke elements ko specified value se fill kar deta hai.

const myArr14 = [1,2,3,4,5];
myArr14.fill(0);
console.log(myArr14);  // [0,0,0,0,0]  

console.log(myArr14.fill(1,2)); // [0,0,1,1,1]  

console.log(myArr14.fill(2,1,4));  // [0,2,2,2,1]
console.log(myArr14.fill(14));  // [14,14,14,14,14]  


syntax ---> array.fill(value, start, end);

isme start include hota hai and end exclude hota hai 
