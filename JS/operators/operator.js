let a = 4;
let b = 4;

console.log(a+b); //49
console.log(a-b); //41
console.log(a*b);  //180
console.log(a/b); //11.25
console.log(a%b); //1
console.log(a**b); //4100625
console.log(a++); //45
console.log(++a); //47
console.log(a--); //47
console.log(--a); //46

a++  --> ye pehle use krta hai uske baad increment krt hai
++a  --> ye pehle increment krta hai uske baad use krta hai

a--  --> ye pehle use krta hai uske baad decrement krta hai
--a  --> ye pehle decrement krta hai uske baad use krta hai

a+=8;
console.log(a); //53
a-=8;
console.log(a); //45
a*=3;
console.log(a); //135
a/=3;
console.log(a); //45
a%=3;
console.log(a); //0
a**=3;
console.log(a); //0
b=3;
console.log(b); //3


let comp1 = 6;
let comp2 = 7;

console.log(comp1==comp2); //false
console.log(comp1!=comp2); //true
console.log(comp1>comp2); //false
console.log(comp1<comp2); //true
console.log(comp1>=comp2); //false
console.log(comp1<=comp2); //true   


== and === already done in datatype file

!= vs !== !=  --> ye sirf value ko compare krta hai
!== --> ye value ke sath sath datatype ko bhi compare krta hai


&&  logical and jb har dono ke condition true ho tabhi true return krta hai
||  logical or jb dono me se koi ek condition true ho tabhi true return krta hai
!   logical not ye operator true ko false aur false ko true me convert krta hai

&&  ---> ye basically return krta hai first falsy value ya phir last truthyvalue
||  ---> ye basically return krta hai first truthy value ya phir last falsy value





console.log(2 && 3 && 0 && 4);
console.log(2 || 3 || 0 || 4);


js unecessary expression execute nhi krta hai jesse && and || me agar pehla hi condition false ya true hai to wo aage ke conditions ko check nhi krta hai aur usi value ko return krta hai

