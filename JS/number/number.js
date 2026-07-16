const score = 100;
console.log(score);

const balance = 100;
console.log(balance);


console.log(balance.toString());
console.log(typeof balance);

console.log(balance.toFixed(1));

const other = 123.456789;
console.log(other.toPrecision(4));

const hundred = 1000000;

console.log(hundred.toLocaleString("en-US"));  //ye wala use hota hai jab hume number ko apne local format me dikhana hota hai, jaise ki comma se alag karna ya decimal point ko alag karna. Isse hum apne users ke liye number ko zyada readable bana sakte hain.

const num1 = 0.1;
const num2 = 0.2;
const sum = num1 + num2;
console.log(sum);  // Output: 0.30000000000000004

To fix this issue, we can use the toFixed() method to round the result to a specific number of decimal places:
const fixedSum = sum.toFixed(2);   // ye ek string return karega, isliye hum ise number me convert karne ke liye parseFloat() ka use kar sakte hain.
console.log(fixedSum);  // Output: 0.30


console.log(Math.PI); // Math.PI is a property of the Math object in JavaScript that represents the mathematical constant π (pi). It is approximately equal to 3.14159 and is used in various mathematical calculations, especially those involving circles and trigonometry.
console.log(Math.E);  // Math.E is a property of the Math object in JavaScript that represents the mathematical constant e (Euler's number). It is approximately equal to 2.71828 and is used in various mathematical calculations, especially those involving exponential growth and logarithms.

console.log(Math.round(4.7));  // Output: 5
console.log(Math.round(4.3));  // Output: 4
console.log(Math.floor(4.7));  // Output: 4
console.log(Math.ceil(4.3)); // Output: 5

console.log(Math.abs(-5));  // Output: 5
console.log(Math.abs(5));   // Output: 5

console.log(Math.sqrt(16));  // Output: 4
console.log(Math.sqrt(25));  // Output: 5

console.log(Math.pow(2, 3));  // Output: 8
console.log(Math.pow(5, 2));  // Output: 25


console.log(Math.random());  // Output: A random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10);  // Output: A random number between 0 (inclusive) and 10 (exclusive)

console.log(Math.max(1, 5, 3));  // Output: 5
console.log(Math.min(1, 5, 3));  // Output: 1   

console.log((Math.random()*10)+1)

toFixed() vs toPrecision():

toFixed() method is used to format a number to a specified number of decimal places. It returns a string representation of the number with the specified number of decimal places. basically ye decimal places count krta hai 
toPrecision() method is used to format a number to a specified number of significant digits. It returns a string representation of the number with the specified number of significant digits.  and ye toatl significant digits count krta hai

console.log(0.1+0.2)  // 0.30000000000000004

iska kya issue hai vo ye hai -- computers binary format mein numbers store krte hain
toh 0.1 and 0.2 exact binary represnetation nahi rakhte hain, isliye jab hum inhe add karte hain toh result thoda sa inaccurate hota hai.
To fix this issue, we can use the toFixed() method to round the result to a specific number of decimal places:


console.log(Math.trunc(4.9)) //4   ye decimal wala part hata deta hai
console.log(Math.trunc(-4.9)) //-4  ye decimal wala part hata deta hai, chahe number positive ho ya negative


dice roll --- Math.floor(Math.random()*6)+1;


generaic formaula for generating random number between min and max (inclusive):
Math.floor(Math.random() * (max - min + 1)) + min;


console.log(1/10);  // Output: Infinity
console.log(-1/10); // Output: -Infinity

conversion of Number to parseInt() and parseFloat():

const numStr = "123.45";
const intNum = parseInt(numStr);
console.log(intNum);  // Output: 123

const floatNum = parseFloat(numStr);
console.log(floatNum);  // Output: 123.45


console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991