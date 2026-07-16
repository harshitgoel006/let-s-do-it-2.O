// window
//   |
// document
//   |
//  HTML
//   |______>  head  ------->  title --->  textNode
//   |______>  body      |___>  meta  --->attribute
//              |
//              |
//              ------->  div 
//                         |-----> attribute
//                         |----->  h1   ---->  attribute
//                         |               |-->  textnode
//                         |-----> p       
//                            |----->  text node

document.getElementById("title")
<h1 id=​"title" class=​"test">​DOM learning​</h1>​
document.getElementById("title").id
'title'
document.getElementById("title").class
undefined
document.getElementById("title").className
'heading'
document.getElementById("title").getAttribute
ƒ getAttribute() { [native code] }
document.getElementById("title").getAttribute('id')
'title'
document.getElementById("title").getAttribute('class')
'heading'
document.getElementById("title").setAttribute('class','test')
undefined




console.log(document.getElementById("title"))
VM364:1 <h1 id=​"title" class=​"heading" style=​"background-color:​ green;​ padding:​ 15px;​ border-radius:​ 5px;​">​DOM learning​</h1>​

undefined


const title = document.getElementById("title")
undefined


title.style.backgroundColor = 'green'
'green'

title.style.padding = "15px"
'15px'

title.style.borderRadius = "5px"
'5px'




differnce between innerText   and text content


title.innerText
'DOM learning'
title.textContent
'DOM learning harshit'


innerHTML --->  title.innerHTML
'DOM learning <span style="display: none;">harshit</span>' 




 document.querySelectorAll('h2')
NodeList(4) [h2, h2, h2, h2]
document.querySelector('h1');
<h1 id=​"title" class=​"heading">​…​</h1>​"DOM learning "<span style=​"display:​ none;​">​harshit​</span>​</h1>​







document.querySelector('ul')
<ul>​…​</ul>​
const test = document.querySelector('ul')
undefined
test.querySelector('ul')
null
test.querySelector('li')
<li>​::marker​"one"</li>​








document.getElementsByClassName('list')
HTMLCollection(3) [li.list, li.list, three.list]0: li.list1: li.list2: three.listlength: 3[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
const temp = document.getElementsByClassName('list')
undefined
temp
HTMLCollection(3) [li.list, li.list, three.list]
temp.forEach(function(li){
    console.log(li)
})
VM2041:1 Uncaught TypeError: temp.forEach is not a function
    at <anonymous>:1:6
(anonymous) @ VM2041:1
temp
HTMLCollection(3) [li.list, li.list, three.list]
Array.from(temp)
(3) [li.list, li.list, three.list]







