// Section 1 - Basic Array Operations
// 1. Create and Display an Array
// Create an array containing the names of five fruits and display the complete array

let arr = ["Mango", "Banana", "Apple", "Papaya", "Lemon"];

console.log(arr);

// 2. Add an Element Using push()
// Create the following array and use push() to add "JavaScript" at the end.
// Example:
// Input: ["HTML", "CSS"]
// Output: ["HTML", "CSS", "JavaScript"]

let arry1 = ["HTML", "CSS"];
arry1.push("JavaScript");
console.log(arry1);

// 3. Remove an Element Using pop()
// Remove the last element from the given array using pop().
// Example:
// Input: ["HTML", "CSS", "JavaScript"]
// Output: ["HTML", "CSS"]

arry1.pop();
console.log(arry1);

// 4. Remove the First Element Using shift()
// Remove the first element from the following array using shift().
// Example:
// Input: ["Red", "Blue", "Green"]
// Output: ["Blue", "Green"]

let arry2 = ["Red", "Blue", "Green"];
arry2.shift();
console.log(arry2);

// 5. Add an Element at the Beginning
// Use unshift() to add "HTML" at the beginning of the following array.
// Example:
// Input: ["CSS", "JavaScript"]
// Output: ["HTML", "CSS", "JavaScript"]
let arry3 = ["CSS", "JavaScript"];
arry3.unshift("HTML");
console.log(arry3);

// 6. Add Multiple Elements
// Create an array containing two programming languages and use push() to add two more languages to
// the array.
// Example:
// Input: ["HTML", "CSS"]
// After adding: "JavaScript" and "React"
// Output: ["HTML", "CSS", "JavaScript", "React"]

let arry4 = ["HTML", "CSS"];
arry4.push("JavaScript");
arry4.push("React");
console.log(arry4);

// Section 2 - splice() and slice()
// 7. Remove an Element Using splice()
// Remove "CSS" from the following array using splice().
// Example:
// Input: ["HTML", "CSS", "JavaScript", "React"]
// Output: ["HTML", "JavaScript", "React"]
let Input = ["HTML", "CSS", "JavaScript", "React"];
Input.splice(1, 1);
console.log(Input);

// 8. Add an Element Using splice()
// Use splice() to add "CSS" between "HTML" and "JavaScript".
// Example:
// Input: ["HTML", "JavaScript"]
// Output: ["HTML", "CSS", "JavaScript"]

let arry5 = ["HTML", "JavaScript"];
arry5.splice(1, 0, "CSS");
console.log(arry5);

// 9. Replace an Array Element
// Use splice() to replace "Java" with "JavaScript".
// Example:
// Input: ["HTML", "CSS", "Java"]
// Output: ["HTML", "CSS", "JavaScript"]

let arry6 = ["HTML", "CSS", "Java"];
arry6.splice(2, 1, "JavaScript");
console.log(arry6);

// 10. Extract Part of an Array
// Use slice() to create a new array containing "CSS", "JavaScript", and "React".
// Example:
// Input: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
// Output: ["CSS", "JavaScript", "React"]

let arry7 = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

let newarr = arry7.slice(1, 4);
console.log(newarr);

// 11. Create a Copy Using slice()
// Create an array of your choice and use slice() without any arguments to create a copy of that array.
let arry8 = ["HTML", "CSS", "Python", "React", "Flask"];
let newar8 = arry8.slice(0, arry8.length);
console.log(newar8);

// Section 3 - Searching in Arrays
// 12. Find the Index of an Element
// Use indexOf() to find the index of "JavaScript".
// Example:
// Input: ["HTML", "CSS", "JavaScript", "React"]
// Output: 2

let arry9 = ["HTML", "CSS", "JavaScript", "React"];

console.log(arry9.indexOf("JavaScript"));

//  13. Find an Element Using indexOf()
// Create an array of programming languages and use indexOf() to find the position of "React".

let arry10 = ["HTML", "CSS", "Python", "React", "Flask"];
console.log(arry10.indexOf("React"));

// 14. Find an Object Using find()
// Create an array of user objects containing name and age. Use find() to get the user whose name is
// "Rahul"
// Example:
// Input:
// [
//  { name: "Rahul", age: 20 },
//  { name: "Priya", age: 22 }
// ]

let Input2 = [
  { name: "Rahul", age: 20 },
  { name: "Priya", age: 22 },
];

let ans = Input2.find((elem) => {
  return elem.name === "Rahul";
});
console.log(ans);

// `15. Find an Index Using findIndex()
// Using an array of user objects, use findIndex() to find the index of the user whose name is "Priya".
// Example:
// [
//  { name: "Rahul", age: 20 },
//  { name: "Priya", age: 22 }
// ]`

let arrrry = [
  { name: "Rahul", age: 20 },
  { name: "Priya", age: 22 },
];

let anss = arrrry.findIndex((idx) => {
  return idx.name === "Priya";
});
console.log(anss);

// Section 4 - Other Array Methods

// 16. Flatten a Nested Array
// Use flat() to convert the nested array into a single-level array.
// Example:
// Input: [1, 2, [3, 4]]
// Output: [1, 2, 3, 4]

let nestarry = [1, 2, [3, 4]];
console.log(nestarry.flat(2));

// 17. Flatten a Multi-Level Array
// Use flat() with an appropriate depth to flatten the following array completely.
// Example:
// Input: [1, [2, [3, 4]]]
// Output: [1, 2, 3, 4]

let nestedarry = [1, [2, [3, 4]]];
console.log(nestedarry.flat(Infinity));

// 18. Display Every Element Using forEach()
// Create an array containing five colors and use forEach() to display every color

let colors = ["Red", "Blue", "Green ", "Pink", "Violet"];

colors.forEach((color) => {
  console.log(color);
});

// 19. Display Elements with Their Index
// Create an array of programming languages and use forEach() to display each element along with its
// index.
// Example Output:
// 0 HTML
// 1 CSS
// 2 JavaScript

let progaramings = ["HTML", "CSS", "JavaScript", "React", "Python", "Flask"];
progaramings.forEach((lang, index) => {
  console.log(index, lang);
});

// 20. Update an Array Using Multiple Methods
// Perform the following operations on an array:
// 1. Add "React" using push().
// 2. Remove the first element using shift().
// 3. Display the final array.
// Example:
// Input: ["HTML", "CSS", "JavaScript"]
// Final Output: ["CSS", "JavaScript", "React"]

let inputarry = ["HTML", "CSS", "JavaScript"];
inputarry.push("React");
inputarry.shift();
console.log(inputarry);
