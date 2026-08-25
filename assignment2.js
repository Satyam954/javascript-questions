// Section 1 - Basic Loops
// 1. Print Numbers
// Write a program to print numbers from 1 to 10 using a for loop

for (let i = 1; i <= 10; i++) {
  // console.log(i)
}

// 2. Print Even Numbers
// Write a program to print all even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // console.log(i)
  }
}

// 3. Print Odd Numbers
// Write a program to print all odd numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    // console.log(i)
  }
}

// 4. Reverse Counting
// Write a program to print numbers from 10 to 1 using a loop.

for (let i = 10; i > 0; i--) {
  //   console.log(i)
}

// 5. Sum of Numbers
// Write a program to calculate the sum of numbers from 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
// console.log(sum)

// 6. Multiplication Table
// Take a number and print its multiplication table up to 10

let num = 15;
for (let i = 1; i <= 10; i++) {
  // console.log(num*i)
}

// Part B - while Loop
// 7. Basic while Loop

// Write a program to print numbers from 1 to 10 using a while loop
let i = 1;
while (i <= 10) {
  // console.log(i)
  i++;
}

// 8. Sum of Even Numbers
// Write a program to calculate the sum of all even numbers from 1 to 20

let summ = 0;
let j = 1;
while (j <= 20) {
  if (j % 2 === 0) {
    summ += j;
  }
  j++;
}
// console.log(summ)

// 9. Stop the Loop Using break
// Write a program using a while loop to print numbers from 1 onwards, but stop the loop when the
// number reaches 6 using the break statement.
// Expected Output: 1 2 3 4 5

let k = 0;
while (k <= 10) {
  if (k === 6) {
    break;
  }
  // console.log(k)
  k++;
}
// 10. Skip a Number
// Print numbers from 1 to 10, but skip the number 5 using the continue statement.

let l = 0;
while (l <= 10) {
  l++;
  if (l === 5) {
    continue;
  }

  // console.log(l)
}

// Section 2 - Functions
// 11. Function with a Parameter
// Create a function named greetUser(name) that takes a name as a parameter and displays a greeting
// message.
// Example:
// Input: Rahul
// Output: Hello, Rahul

function greetUser(name = "guest") {
  console.log(`Hello, ${name}`);
}

// greetUser("Rahul")

// 12. Add Two Numbers
// Create a function that takes two numbers as parameters and returns their sum

function add(num1, num2) {
  let result = num1 + num2;
  return result;
}
// console.log(add(5 ,6))

// 13. Even or Odd Function
// Create a function that takes a number and checks whether it is even or odd.

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("This is an even number");
  } else {
    console.log("This is an odd number");
  }
}

// checkEvenOdd(10)

// 14. Square of a Number
// Create a function that takes a number and returns its square.

function square(num) {
  return num * num;
}

// console.log(square(25))

// 15. Largest of Two Numbers
// Create a function that takes two numbers and returns the greater number.

function largestNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// console.log(largestNumber(10,50))

// 16. Calculate Total Price
// Create a function named calculateTotal(price, quantity) using a function declaration. The function
// should calculate and display the total price.
// Example:
// Input: price = 100, quantity = 3
// Output: Total Price: 300

function calculateTotal(price, quantity) {
  let total = price * quantity;
  return `Total Price: ${total}`;
};

// console.log(calculateTotal(100, 3));



// Section 3 - Functions with Loops
// 17. Print Numbers Using a Function
// Create a function printNumbers(n) that prints numbers from 1 to n using a loop.
// Example:
// Input: 5
// Output: 1 2 3 4 5

function printNumber(n) {
    for(let i=1 ;i<=n ;i++){
        console.log(i)
    }
}

// printNumber(5)

// 18. Multiplication Table Function
// Create a function printTable(num) that prints the multiplication table of the given number

function printTable(n) {
    for (let i = 1;  i<=10; i++) {
        // console.log(n*i)
        
    }
}
// printTable(50)

// 19. Sum from 1 to N
// Create a function sumNumbers(n) that calculates and returns the sum of numbers from 1 to n.
// Example:
// Input: 5
// Output: 15

function sumNumber(n) {
    let sum =0
    for(let i=1 ; i<=n ;i++){
        sum+=i
    }
    return sum;
}

// console.log(sumNumber(5))