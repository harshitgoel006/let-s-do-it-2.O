js ka eexecution context iska matlab hai hune jo bhi fila banayi hai usko js run kesse karega and execute kesse karega

sabse pehle global ec banega 
usko refer kr diya jata hai this mein 


browser ka and js ka global ec hota hai alag alag hota hai 

browser mein this ki value window object aati hai 

1. global execution context
2. functional ec
3. eval execution context

step1 - memory creation phase 
step2 - execution phase 



let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}

let res = addNum(val1,val2)
let res2 = addNum(10,2)




step 1 -  global execution   this ke anadar allocate ho jayega

step 2 -  memory creation phase    (sare variables ko apne pass rakha jata hai )

val1 = undefined
val2 = undefined
addNum = definition
res = undefined
res2 = undefined

step 3 - execution phase 

val1 = 10
val2 = 5
addNum -->   ek aur executional context taiyar hota hai (new variable environment and execution thread)
|
|
|
________>    memroy pahse 
            val1 = undefined
            val2 = undefined
            total = undefined

________>    execution context 

            num1 = 10
            num2 = 5
            total = 15   isko return kr dete hai global execution context mein

            ek bar kaam ho jaye tab execution context delete bhi ho jata hai

-----
res = 15
res2 = ab dobara repaeat hoga 


new variable environment + thread 

memoru phase and execution context for 2nd call of addNum



__________________________________________________________________________________________________________________________________


callStack --> 





global exec

jese jese function ate rahege stack mein jayege jb execute ho jaye tb stack se pop ho jate hai



