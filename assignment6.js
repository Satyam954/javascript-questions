// Section 1 – map() and Immutability

// 1. Convert Product Names to Uppercase
// Create an array of product names and use map() to create a new array where every product name is
// converted to uppercase.
// Example:
// Input:
// ["laptop", "mobile", "headphones"]
// Output:
// ["LAPTOP", "MOBILE", "HEADPHONES"]

let arry =  ["laptop", "mobile", "headphones"]

let newarry =arry.map((elem) => {
  return elem.toUpperCase()
}
)
console.log(newarry)

// 2. Add a Currency Symbol to Prices

// Create an array of product prices and use map() to create a new array where each price is displayed with
// a ₹ symbol.
// Example:
// Input:
// [100, 250, 500]
// Output:
// ["₹100", "₹250", "₹500"]

let arry1 = [100, 250, 500]

let newarry1= arry1.map((elem) => {
  return "₹"+elem
}
)
console.log(newarry1);

// 3. Extract User Names

// Create an array of user objects containing name and email. Use map() to create a new array containing
// only the names.
// Example:
// Input:
// [
//  { name: "Rahul", email: "rahul@example.com" },
//  { name: "Priya", email: "priya@example.com" }
// ]
// Output:
// ["Rahul", "Priya"]

let arry3 = [
 { name: "Rahul", email: "rahul@example.com" },
 { name: "Priya", email: "priya@example.com" }
]

let  newarry3= arry3.map((elem) => {
  return elem.name
}
)

console.log(newarry3);

// 4. Create Updated Product Prices

// Create an array of product prices. Use map() to create a new array where every price is increased by
// 10%. Keep the original array unchanged.
// Example:
// Input:
// [100, 200, 300]
// Output:
// Original: [100, 200, 300]
// New: [110, 220, 330]

let pricearry = [100, 200, 300]

let discountarry = pricearry.map((elem) => {
    
  return elem*1.1

}
)

console.log(discountarry);

// 5. Update Object Data Immutably

// Create an array of user objects with name and role. Use map() and the spread operator to create a new
// array where the role of every user is changed to "developer" without modifying the original array.
// Example:
// Input:
// [
//  { name: "Rahul", role: "student" },
//  { name: "Priya", role: "student" }
// ]
// Output:
// [
//  { name: "Rahul", role: "developer" },
//  { name: "Priya", role: "developer" }
// ]


let arry4 =  [
 { name: "Rahul", role: "student" },
 { name: "Priya", role: "student" }
]

let newarr4 = arry4.map((elem) => {
  return {...elem  ,role:"developer"}
}
)
console.log(newarr4);


// 6. Add a New Property Using map()

// Create an array of product objects containing name and price. Use map() to create a new array where
// each product also has an inStock property with the value true.
// Example:
// Input:
// [
//  { name: "Laptop", price: 50000 },
//  { name: "Mouse", price: 500 }
// ]
// Output:
// [
//  { name: "Laptop", price: 50000, inStock: true },
//  { name: "Mouse", price: 500, inStock: true }
// ]



let productarry =  [
 { name: "Laptop", price: 50000 },
 { name: "Mouse", price: 500 }
]

let newproductarry = productarry.map((elem) => {
  return  {...elem ,inStock:true}
}

)
console.log(newproductarry);

// Section 2 – map() vs forEach()


// 7. Display Technologies Using forEach()
// Create an array of frontend technologies and use forEach() to display every technology.
// Example:
// Input:
// ["HTML", "CSS", "JavaScript"]
// Output:
// HTML
// CSS
// JavaScript