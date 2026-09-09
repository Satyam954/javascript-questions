// Section 1 - Selecting and Modifying Elements
// 1. Select an Element by ID
// Create a heading with an id of title and use getElementById() to select it and change its text.
// Example:
// HTML: <h1 id="title">Welcome</h1>
// Output: Hello JavaScript

let title = document.getElementById("title")
title.textContent="Hello JavaScript"

// 2. Select an Element Using querySelector()
// Create a paragraph with a class description and use querySelector() to select it and change its text
// content.
// Example:
// HTML: <p class="description">Old Text</p>
// Output: New Description

let desc = document.querySelector(".description")
desc.textContent="New Description "

// 3. Select Multiple Elements Using querySelectorAll()
// Create three <li> elements with the class item. Use querySelectorAll() to select all of them and change
// their text color using the style property.
// Example:
// HTML: <li class="item">HTML</li>
// <li class="item">CSS</li>
// <li class="item">JavaScript</li>
// Expected Result: All three list items should have the changed text color

let item = document.querySelectorAll(".item")
item.forEach((elem) => {
  elem.style.color="red"
}
)

// 4. Change Content Using textContent
// Create a paragraph containing some text and use textContent to replace its content with a new message.
// Example:
// Before: <p id="message">Old Message</p>
// After: Welcome to JavaScript!

let msg = document.querySelector("#message")
msg.textContent="Welcome to JavaScript!"


// 5. Add HTML Using innerHTML
// Create a <div> with an id of container and use innerHTML to add a heading and a paragraph inside it.
// Example:
// Expected HTML inside the container:
// <h2>My Website</h2>
// <p>Welcome to my website!</p>
let container = document.querySelector("#container");

container.innerHTML = `
  <h2>My Website</h2>
  <p>Welcome to my website!</p>
`;

// Section 2 - Attributes, Classes and Styles
// 6. Change an Attribute Using setAttribute()
// Create an image element and use setAttribute() to change its src and alt attributes.
// Example:
// HTML: <img id="profileImage" src="old.jpg" alt="Old Image">
// Expected Result: The image should have the new src and alt values.

let img = document.querySelector("#profileImage")
img.setAttribute("src" ,"new.jpg")
img.setAttribute("alt" ,"new.image")

// 7. Add and Remove Classes Using classList
// Create a button and use classList.add() to add a class to it. Then use classList.remove() to remove the
// class.
// Example:
// HTML: <button id="btn">Click Me</button>
// Expected Result: The button should have the class added and then removed using JavaScript.

let btn = document.querySelector("#btn")

btn.classList.add("btnclasss")
btn.classList.remove("btnclasss")

// 8. Modify Element Style
// Create a heading and use the style property to change its color, fontSize, and backgroundColor.
// Example:
// HTML: <h1 id="heading">JavaScript</h1>
// Expected Result: The heading should display with the new styles applied through JavaScript.

let head = document.querySelector("#head")
head.style.color = "blueviolet";
head.style.fontSize = "50px";
head.style.backgroundColor = "rgb(26, 13, 13)";



// 9. Read Data Using dataset
// Create a button with a custom data-id attribute and use the dataset property to read its value.
// Example:
// HTML: <button id="productBtn" data-id="101">View Product</button>
// Output: 101


let productBtn = document.querySelector("#productBtn");

console.log(productBtn.dataset.id);


// Section 3 - Creating and Adding Elements
// 10. Create an Element Using createElement()
// Create a new <p> element using createElement(), add some text to it using textContent, and display it
// on the webpage.
// Example:
// Expected Output: This paragraph was created using JavaScript.

let body = document.querySelector("body")
let p = document.createElement("p")
p.textContent="This paragraph was created using JavaScript."
body.appendChild(p)


// 11. Add an Element Using appendChild()
// Create a <ul> in HTML. Use JavaScript to create a new <li> element and add it to the list using
// appendChild().
// Example:
// HTML: <ul id="skills"></ul>
// Expected Output: HTML, CSS, JavaScript

let skills = document.querySelector("#skills")

let li1= document.createElement("li")
let li2= document.createElement("li")
let li3= document.createElement("li")
li1.textContent="HTML"
li2.textContent="CSS"
li3.textContent="JavaScript"
skills.appendChild(li1)
skills.appendChild(li2)
skills.appendChild(li3)


// 12. Add Elements Using append() and prepend()
// Create a list and use append() to add an item at the end and prepend() to add an item at the beginning.
// Example:
// Before: CSS, JavaScript
// After: Frontend, HTMl,CSS, JavaScript, React

let frontend= document.createElement("li")
let react= document.createElement("li")

frontend.textContent="Frontend"
react.textContent="react"
skills.prepend(frontend)
skills.append(react)

// 13. Insert an Element Using insertBefore()
// Create a list containing three items and use insertBefore() to insert a new item before the second item.
// Example:
// Before: HTML, JavaScript, React
// After: HTML, CSS, JavaScript, React


let insert = document.querySelector("#insert");
let js = document.querySelector("#js")
let css = document.createElement("li")
css.textContent="CSS"
insert.insertBefore(css,js)

// Section 4 - Removing and Cloning Elements
// 14. Remove an Element
// Create a list containing three items and remove one item using either removeChild() or remove().
// Example:
// Before: HTML, CSS, JavaScript
// After: HTML, JavaScript ,React

css.remove()

// 15. Clone an Element Using cloneNode()
// Create a button and use cloneNode() to create a copy of the button. Add the cloned button to the
// webpage.
// Example:
// HTML: <button id="btn">Click Me</button>
// Expected Result: [Click Me] [Click Me]

let clickme = document.querySelector("#clickme")
let cloneclikc = clickme.cloneNode(true)

body.appendChild(cloneclikc)