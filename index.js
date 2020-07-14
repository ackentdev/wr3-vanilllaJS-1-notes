// DOM
// console.log('hello world')
// console.log(document)
// Accessing DOM Elements
const section = document.getElementById('awesome-section')
// console.log('section', section)

const li = document.getElementsByTagName('li')
// console.log('li', li)

const querySelectOne = document.querySelector('.div-one')
// console.log(querySelectOne)

const queryAll = document.querySelectorAll('.awesome-thing')
// console.log(queryAll)
// Node Properties
// innerText, innerHTML, className, classList, style, value
const awesome = document.getElementById('my-list')
// console.log('innerText', awesome.innerText)
// console.log('innerHTML', awesome.innerHTML)
// awesome.innerText = '<h1> Look ma! No hands </h1>'

const box = document.querySelector('#div-one')
// console.log("before assign", box.className)
box.className="div-one"
// console.log("after assign", box.className)

box.classList.add('hello-wr3')
box.classList.remove('hello-wr3')
// console.log(box.classList)



const input = document.getElementById('my-input');

let inputValue = '';

input.addEventListener('change', function(event){
    event.preventDefault();
    inputValue = event.target.value
    console.log(inputValue)
})

// console.log(input.value)
// Events and Event Handlers
function sayHello(event){
    event.stopPropagation()
    event.preventDefault()
    alert('hey, you clicked me!')
    const title = document.getElementById('title')
    title.style = "color: red"
}

function parentNodeFunc(){
    alert('you clicked me too!')
}

function addThing(event){
    event.stopPropagation();
    event.preventDefault();
    let item = document.createElement('li')
    item.innerText = input.value
    item.className = 'awesome-thing'
    let parent = document.querySelector('.awesome-thing').parentNode
    parent.appendChild(item)
    input.value = ''
}