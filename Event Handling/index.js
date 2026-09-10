// Section 1 - Event Handling Basics
// 1. Handle a Button Click
// Create a button and use addEventListener() to display a message when the button is clicked.
// Example:
// HTML:
// <button id="btn">Click Me</button>
// Output:
// Button Clicked!

let btn = document.querySelector("#btn")
btn.addEventListener("click", (e) => {
  console.log("Button Clicked!")
}
)


// 2. Change Text on Click
// Create a paragraph and a button. Use addEventListener() to change the paragraph text when the button
// is clicked.
// Example:
// Before:
// Welcome to my website!
// After clicking the button:
// Thanks for visiting!

let para = document.querySelector("#para")

btn.addEventListener("click", (e) => {
  para.textContent = "Thanks for visiting!"
}
)

// 3. Handle a Mouseover Event
// Create a heading and use addEventListener() with the mouseover event to change its text when the
// mouse moves over it.
// Example:
// Before:
// JavaScript
// After mouseover:
// Mouse is over the heading!

let head = document.querySelector("#h2")
head.addEventListener("mouseover", (e) => {
  head.textContent = "Mouse is over the heading!"
}
)


// Section 2 - Event Object
// 4. Display the Clicked Element
// Create a button and use the event object to identify the element that was clicked.
// Example:
// HTML:
// <button id="btn">Click Me</button>
// Output:
// BUTTON

btn.addEventListener("click", (e) => {
  console.log(e.target.tagName)
}
)

// 5. Display Mouse Coordinates
// Create a <div> and use a mousemove event to display the mouse coordinates using the event object's
// clientX and clientY properties.
// Example Output:
// X: 250
// Y: 180


const div = document.querySelector("#div");
div.addEventListener("mousemove", (e) => {
  console.log("X:",e.clientX, "Y:",e.clientY)
}
)


// 6. Get the Value of an Input Using the Event Object
// Create an input field and use the event object's target.value to display the entered value.
// Example:
// Input:
// JavaScript
// Output:
// You typed: JavaScript

let inp = document.querySelector("#inp")

inp.addEventListener("input", (e) => {
  console.log(e.target.value)
}
)

// Section 3 - Removing and Controlling Events
// 7. Remove an Event Listener
// Create a button and attach a click event using addEventListener(). Create a separate function and use
// removeEventListener() to stop the click event when required.
// Example:
// Before removing the listener:
// Button clicked!
// After removing the listener:
// Clicking the button should no longer display the message.

let btn2 = document.querySelector("#btn2");

function click(e) {
  console.log("mouse clicked!")
}
btn2.addEventListener("click", click)

btn2.removeEventListener("click", click)

// 8. Run an Event Only Once
// Create a button and use addEventListener() with the once option so that the event runs only the first
// time the button is clicked.
// Example:
// First click:
// Welcome!
// Second click:
// No message should be displayed.
let btn3 = document.querySelector("#btn3").addEventListener("click", (e) => {
  console.log("button is clicked..........")
}
  , { once: true })


// 9. Stop Event Propagation
// Create a parent <div> containing a button. Add click events to both parent and button. Use
// stopPropagation() so that clicking the button does not trigger the parent's click event.
// Example:
// Without stopPropagation():
// Button clicked
// Parent clicked
// With stopPropagation():
// Button clicked

let outer = document.querySelector("#outer")
let inner = document.querySelector("#inner")


outer.addEventListener("click", (e) => {
  console.log("Parent cliked");

}
)
inner.addEventListener("click", (e) => {
  console.log("Button cliked");
  e.stopPropagation()
}
)


// Section 4 - Bubbling, Capturing & Default Actions
// 10. Demonstrate Event Bubbling
// Create a parent <div> containing a child <button>. Add click events to both elements and observe the
// order in which the events execute when the button is clicked.
// Example:
// HTML Structure:
// <div id="parent">
//  <button id="child">Click Me</button>
// </div>
// Expected Output:
// Button clicked
// Parent clicked



let parent = document.querySelector("#parent2")
let child = document.querySelector("#child2")


parent.addEventListener("click", (e) => {
  console.log("Parent clicked!!");

}
)
child.addEventListener("click", (e) => {
  console.log("Button clicked!!!");

}
)


// 11. Demonstrate Event Capturing
// Create a parent <div> containing a button. Add click event listeners to both using the capturing phase
// and observe the order in which the events execute.
// Example:
// Expected Output:
// Parent clicked
// Button clicked

let parent3 = document.querySelector("#parent3")
let child3 = document.querySelector("#child3")


parent3.addEventListener("click", (e) => {
  console.log("Parent clicked!!");

},true
)
child3.addEventListener("click", (e) => {
  console.log("Button clicked!!!");

},true  
)




// Section 5 - Event Delegation
// 12. Handle Multiple Buttons Using Event Delegation
// Create multiple buttons inside a parent <div>. Add only one event listener to the parent and use event
// delegation to identify which button was clicked.
// Example:
// HTML:
// <div id="buttons">
//  <button>HTML</button>
//  <button>CSS</button>
//  <button>JavaScript</button>
// When JavaScript button is clicked:
// JavaScript button clicked

let buttons = document.querySelector("#buttons");

buttons.addEventListener("click",(e) => {
  e.target.value
  console.log( e.target.textContent ,"button clicked") ;
}
)


// 13. Handle a Dynamic List Using Event Delegation
// Create a list of items and add one event listener to the <ul>. Use event delegation to display the text of
// the clicked list item.
// Example:
// HTML:
//<ul id="skills">
//  <li>HTML</li>
 //<li>CSS</li>
 //<li>JavaScript</li>
//</ul>
// When CSS is clicked:
// You clicked: CSS

let skills = document.querySelector("#skills")
skills.addEventListener("click",(e) => {
  console.log("You clicked:",e.target.textContent)

}
)


