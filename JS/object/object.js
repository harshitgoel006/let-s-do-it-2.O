 
 
 singleton object

const mySym = Symbol("mySymbol")  // symbol ek unique identifier hota hai jo ki kisi bhi object ke property ke liye use kiya ja sakta hai


object literal
const obj = {
    name:"harshit",
    age:20,
    location:"delhi",
    isStudent:true,
    "email":"harshit@example.com",
    "full name":"Harshit Goel",
    mySym: "harshit",   // symbol ko bhi hum object ke property ke roop mein use kar sakte hai  but filal ye symbol ki tarah use nhi hoga kyuki humne usko as a string define kiya hai isliye wo ek normal property ban jayega
    [mySym]: "harshit"  // is tarah se hum symbol ko as a property name ke roop mein use kar sakte hai isme humne square brackets ka use kiya hai aur usme symbol ko pass kiya hai jisse wo symbol ke value ko as a property name ke roop mein use karega
}

console.log(obj.name);  // 1st syntax hai ye 
console.log(obj["age"]); // 2nd syntax hai ye

dono mein antar ye hai ki 1st syntax mein hum dot operator ka use karte hai aur 2nd syntax mein hum square brackets ka use karte hai lekin 2nd wale mein hume property name ko string ke form mein dena padta hai.
ab jo full name property hai usko hum dot operator se access nhi kr skte hai kuki usme space aa gaya hai usko humne as a string define kiya hai isliye usko access karne ke liye hume square brackets ka use karna padega.
console.log(obj["full name"])
console.log(obj.mySym)  // symbol ko bhi hum dot operator se access kar sakte hai
console.log(typeof obj.mySym)  // symbol ka type bhi symbol hota hai
console.log(obj[mySym])  // symbol ko as a property name ke roop mein use karne ke baad usko access karne ke liye hume square brackets ka use karna padega aur usme symbol ko pass karna padega
console.log(typeof obj[mySym])  // is tarah se hum symbol ke value ko access kar sakte hai aur uska type bhi symbol hota hai
obj.email = "harshit@example.com"
Object.freeze(obj)  // isse hum object ko freeze kar dete hai jisse usme koi bhi property add, delete ya modify nahi kar sakte hai
obj.email = "newemail@example.com"  // ye change nahi hoga kyuki object freeze hai


object constructor
const obj2 = new Object()  // isme hum properties add kar sakte hai
obj2.name = "harshit"
console.log(obj2)



obj.greet = function(){
    console.log("Hello, my name is " + this.name+"my age is "+this.age)  // this keyword ka use karke hum object ke properties ko access kar sakte hai;
}

console.log(obj.greet());  // ye greet function ko call karega aur console mein "Hello, my name is harshit" print karega lekin ye return undefined karega kyuki greet function mein humne koi return statement nahi diya hai isliye wo default return value undefined dega
console.log(obj)  // isse hum object ke andar ki properties aur methods ko dekh sakte hai



const obj1 = new Object();
console.log(obj1)  // isse hum ek empty object create kar sakte hai aur usko console mein print kar sakte hai

const obj2  = {}
console.log(obj2)  // isse bhi hum ek empty object create kar sakte hai aur usko console mein print kar sakte hai
obj2.name = "harshit"
console.log(obj2)  // isse hum obj2 ke andar name property ko add kar sakte hai aur usko console mein print kar sakte hai

obj1 vs obj2  ke type of defining mein difference nahi hai dono hi ek empty object create karte hai aur dono ka type bhi object hota hai dono mein bas syntax ka difference hai obj1 mein hum new keyword ka use karte hai aur obj2 mein hum object literal syntax ka use karte hai jo ki curly braces ke andar properties ko define karta hai. dono tarike se hum objects create kar sakte hai aur dono tarike se hum objects ke properties ko access kar sakte hai.



const obj3 = {
    name:"harshit",
    age:20,
    location:"delhi",
    fullName:{
        firstName:"harshit",
        lastName:"goel"
    }
}

console.log(obj3.fullName.firstName)  // is tarah se hum nested object ke properties ko access kar sakte hai


const obj4 = {
    1:"one",
    2:"two",
    3:"three"
}

const obj5 = {
    4:"four",
    5:"five",
    6:"six"
}

console.log(Object.keys(obj4))  // is tarah se hum object ke keys ko access kar sakte hai isme obj4 ke keys 1,2,3 honge
console.log(Object.values(obj4))  // is tarah se hum object ke values ko access kar sakte hai isme obj4 ke values "one","two","three" honge
console.log(Object.entries(obj4))  // is tarah se hum object ke keys aur values dono ko access kar sakte hai isme obj4 ke entries [1,"one"],[2,"two"],[3,"three"] honge
console.log(Object.hasOwn(obj4,"1"))  // is tarah se hum check kar sakte hai ki obj4 ke andar "1" key exist karti hai ya nahi isme true return karega kyuki obj4 ke andar "1" key exist karti hai
console.log(Object.hasOwn(obj4,"4"))  // is tarah se hum check kar sakte hai ki obj4 ke andar "4" key exist karti hai ya nahi isme false return karega kyuki obj4 ke andar "4" key exist nahi karti hai






// syntax 1
const obj6 = {obj4,obj5}
console.log(obj6)  // is tarah se hum ek object ke andar dusre object ko as a property ke roop mein use kar sakte hai isme obj4 aur obj5 dono hi obj6 ke properties ban jayenge jisme obj4 aur obj5 ke andar ki properties bhi aa jayengi


// syntax 2
const obj7 = Object.assign(obj4,obj5)  // is tarah se hum ek object ke andar dusre object ke properties ko copy kar sakte hai isme obj4 ke andar obj5 ke properties copy ho jayenge aur obj4 ke properties bhi waha pe aa jayenge
console.log(obj7)  // is tarah se hum ek object ke andar dusre object ke properties ko copy kar sakte hai isme obj4 ke andar obj5 ke properties copy ho jayenge aur obj4 ke properties bhi waha pe aa jayenge


//syntax 3

const obj8 = {...obj4,...obj5}  // is tarah se hum ek object ke andar dusre object ke properties ko spread operator ke through copy kar sakte hai isme obj4 ke andar obj5 ke properties copy ho jayenge aur obj4 ke properties bhi waha pe aa jayenge
console.log(obj8)  // is tarah se hum ek object ke andar dusre object ke properties ko spread operator ke through copy kar sakte hai isme obj4 ke andar obj5 ke properties copy ho jayenge aur obj4 ke properties bhi waha pe aa jayenge

//syntax 4

const obj9 = Object.assign({},obj4,obj5)  // is tarah se hum ek empty object ke andar dusre object ke properties ko spread operator ke through copy kar sakte hai isme obj4 ke andar obj5 ke properties copy ho jayenge aur obj4 ke properties bhi waha pe aa jayenge
console.log(obj9)  // is tarah se hum ek empty object ke andar dusre object ke properties ko spread operator ke through copy kar sakte hai isme obj4 ke andar obj5 ke properties copy ho jayenge aur obj4 ke properties bhi waha pe aa jayenge


difference between syntax 1,2,3,4

syntax 1 mein hum ek object ke andar dusre object ko as a property ke roop mein use karte hai jisme obj4 aur obj5 dono hi obj6 ke properties ban jayenge jisme obj4 aur obj5 ke andar ki properties bhi aa jayengi lekin syntax 2,3,4 mein hum ek object ke andar dusre object ke properties ko copy karte hai jisme obj4 ke andar obj5 ke properties copy ho jayenge aur obj4 ke properties bhi waha pe aa jayenge lekin syntax 2 mein hum Object.assign() method ka use karte hai aur syntax 3 mein hum spread operator ka use karte hai aur syntax 4 mein hum Object.assign() method ka use karte hai lekin usme pehle ek empty object pass karte hai jisse wo empty object ke andar obj4 aur obj5 ke properties copy ho jayenge aur us empty object ko hi return karega.


const user = [
    {
        name:"harshit",
        age:20,
        location:"delhi"
    },
    {   
        name:"rohit",
        age:22,
        location:"mumbai"
    },
    {
        name:"sachin",
        age:25,
        location:"kolkata"
    },
]

for(let i=0;i<user.length;i++){
    console.log(user[i].name)  // is tarah se hum array of objects ke andar ki properties ko access kar sakte hai isme user ek array hai jisme 3 objects hai aur hum for loop ke through un objects ke name property ko access kar rahe hai
}




// destructuring in objects

const course = {
    name:"javascript",
    duration:"3 months",
    instructor:"harshit",
    students:[
        {
            name:"rohit",
            age:22,
            location:"mumbai"
        },
        {  
            name:"sachin",
            age:25,
            location:"kolkata"
        },
    ],
    price:"1000",
}

const {instructor:inst} = course

console.log(inst)  // is tarah se hum object destructuring ke through object ke properties ko access kar sakte hai isme humne course object ke andar se instructor property ko destructure kiya hai jisse hum directly instructor variable ke through us property ko access kar sakte hai



delete  

const user = {
    name:"Harshit"
};

delete user.name;      

console.log(user.name);  //undefined

delete boolean value return krta hai agr particular property obj se delete kr de toh true -> successfully delete  otherwise false 


delete sirf obj ki properties ko delete krta hai normal variables ko nhi 

seal() -->  ye freeze ka chota bhai hai freeze mein hum obj ko freez krne ke baad hum na toh add kr skte na delete aur na hi current properties ko modify lekin seal hum current properties ko modify krne deta hai 



const user = {
   name:"Harshit"
};

Object.seal(user);

user.name = "Rohit";

console.log(user.name);  // Rohit



const course = {
    name:"javascript",
    duration:"3 months",
    instructor:"harshit",
    students:[
        {
            name:"rohit",
            age:22,
            location:"mumbai"
        },
        {  
            name:"sachin",
            age:25,
            location:"kolkata"
        },
    ],
    price:"1000",
}


for(let key in course){
    console.log(course.key);
}