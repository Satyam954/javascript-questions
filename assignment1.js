// Section 1 - Variables & Operators

// 1 Basic calculator

let a = 10;
let b = 2;

console.log(a + b); //additon
console.log(a - b); //substraction
console.log(a * b); //Multiplication
console.log(a / b); //Division
console.log(a % b); //Remainder

// 2. Swap Two Numbers

let p = 10;
let q = 20;
let r = null;
console.log(q, p);
p = q;
q = r;
r = p;
console.log(p, q);

// 3. Student Marks

let maths = 50;
let english = 60;
let hindi = 85;

console.log("totla marks =", maths + english + hindi);
console.log("average =", (maths + english + hindi) / 3);
console.log("percentage =", ((maths + english + hindi) * 100) / 300);

// 4. Shopping Bill

let Productprice = 560;
let Quantity = 5;

let totalbill = Productprice * Quantity;
let discount = totalbill * 0.1;
let newbill = totalbill - discount;
console.log("total bill=", totalbill);
console.log("discount=", discount);
console.log("newbill=", newbill);

// 5. Area Calculator

let len = 50;
let width = 30;
let area = len * width;
let perimeter = 2 * (len + width);

console.log("area=", area, "perimeter=", perimeter);

// Section 2 - Comparison & Logical Operators
//  6. Even or Odd

let num1 = 1050;

if (num1 % 2 == 0) {
  console.log(`this numebr ${num1} is even numebr`);
} else {
  console.log(`this numebr ${num1} is odd numebr`);
}

// 7. Positive, Negative or Zero
let no = -20;
if (no > 0) {
  console.log("positive");
} else if (no < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// 8. Greater of twoo Number
let nm1 = 1500;
let nm2 = 1500;

if (nm1 > nm2) {
  console.log(`number ${nm1} is greater `);
} else if (nm2 > nm1) {
  console.log(`number ${nm2} is greater `);
} else {
  console.log("both number  are equal");
}

// 9  greater of three number

let no1 = 100;
let no2 = 150;
let no3 = 20;

if (no1 > no2 && no1 > no3) {
  console.log(`number ${no1} is greater `);
} else if (no2 > no1 && no2 > no3) {
  console.log(`number ${no2} is greater `);
} else {
  console.log(`number ${no3} is greater `);
}

// 10. Voting Eligibility

let age = 15;
if (age >= 18) {
  console.log("congrats you are eligible for voting");
} else {
  console.log("you are not eligible");
}

// 11. Driving Eligibility

let Age = 18;
let haslicense = true;

if (Age >= 18 && haslicense) {
  console.log("congrats you are eligible for driving");
} else {
  console.log("you are not eligible");
}

// 12. Number Range

let number = 50;

if (number >= 10 && number <= 100) {
  console.log(`this number ${number} is between 10 and 100`);
} else {
  console.log("not in boundaries ");
}

// Section 3 - if, else-if & Nested Conditions

// 13. Student Grade

let percentage = 95;
if (percentage > 0 && percentage <= 100) {
  if (percentage >= 90 && percentage <= 100) {
    console.log("grade A");
  } else if (percentage >= 80 && percentage <= 89) {
    console.log("grade B");
  } else if (percentage >= 70 && percentage <= 79) {
    console.log("grade C");
  } else if (percentage >= 60 && percentage <= 69) {
    console.log("grade D");
  } else if (percentage >= 40 && percentage <= 59) {
    console.log("grade E");
  } else {
    console.log("grade E");
  }
} else {
  console.log("invalid percentage");
}

// 14. Student Result

let sub1 = 90;
let sub2 = 50;
let sub3 = 90;
let average = (sub1 + sub2 + sub3) / 3;
if (sub1 >= 40 && sub2 >= 40 && sub3 >= 60) {
  if (average >= 75) {
    console.log("Distinction");
  } else if (average >= 60) {
    console.log("First Division");
  } else if (average >= 50) {
    console.log("Second Division");
  } else {
    console.log("pass");
  }
} else {
  console.log("Fail");
}

// 15. Electricity Bill

// 16. Simple Login

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

// 17. Salary Bonus
let salary = 100;
let experience = 2;
let bonus = 0;
let newsalary = 0;

if (experience >= 10) {
  console.log(salary);
  bonus = salary * 0.2;
  console.log(bonus);
  newsalary = bonus + salary;
  console.log(newsalary);
} else if (experience >= 5) {
  console.log(salary);
  bonus = salary * 0.1;
  console.log(bonus);
  newsalary = bonus + salary;
  console.log(newsalary);
} else if (experience >= 2) {
  console.log(salary);
  bonus = salary * 0.05;
  console.log(bonus);
  newsalary = bonus + salary;
  console.log(newsalary);
} else {
  console.log("no bonus below 2 years experience", salary);
}

// .18. Age Category

let AGE = 59;
if (AGE < 0) {
  console.log("age not be negative");
} else if (AGE >= 0 && AGE <= 12) {
  console.log("child");
} else if (AGE >= 13 && AGE <= 19) {
  console.log("teenagers");
} else if (AGE >= 20 && AGE <= 59) {
  console.log("Adult");
} else {
  console.log(" Senior Citizen");
}

// Section 4 - switch-case

// 19. Day of the Wee

let day = 7;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
    break;
}

// 20. Simple Calculator

let firstn = 510;
let secondn = 10;

let operator = "%";

switch (operator) {
  case "+":
    console.log(firstn + secondn);
    break;
  case "-":
    console.log(firstn - secondn);
    break;
  case "*":
    console.log(firstn * secondn);
    break;
  case "/":
    if (secondn === 0) {
      console.log("0 is not divisible");
    } else {
      console.log(firstn / secondn);
    }
    break;

  case "%":
    if (secondn === 0) {
      console.log("0 is not divisible");
    } else {
      console.log(firstn % secondn);
    }
    break;

  default:
    console.log("select a valid operation");
    break;
}

// 21. Month Name

let MONnum = 10;

switch (MONnum) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("Octuber");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("Not a valid months number");
    break;
}

// 22. Menu-Based Calculator

let menu = 5;
let nb1 = 10;
let nb2 = 20;

switch (menu) {
  case 1:
    console.log(nb1 + nb2);
    break;
  case 2:
    console.log(nb1 - nb2);
    break;
  case 3:
    console.log(nb1 * nb2);
    break;
  case 4:
    console.log(nb1 / nb2);
    break;
  case 5:
    console.log(nb1 % nb2);
    break;

  default:
    console.log("Select the valid menu number");
    break;
}


// 23. Traffic Signal

let light = "green"

switch (light) {
  case "green":
    console.log("Go");
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "red":
    console.log("Stop");
    break;

  default:
    console.log("Invalid signal");
    break;
}

// Section 5 - Mixed Problems

