// 1.Create a function to print your name.

// function name1(nam)
// {
//     console.log("my name is",nam);
// };

// name1("prasanth");

// 2.Create a function to add two numbers.

// function sum(a,b)
// {
//     console.log("Add two numbers:",a+b);
// };

// sum(20,30);

// 3.Create a function to subtract two numbers.

// function sub(a,b)
// {
//     console.log("Subtract two numbers:",a-b);
// };

// sub(10,20);


// 4.Create a function to find the square of a number.

// function num(a)
// {
//     console.log("square of a number:",a**2);
// };
// num(20);

// 5.Create a function to check even or odd.

// function num(a)
// {
//     if(a%2==0)
//     {
//         console.log("Even number:",a);
//     }
//     else
//     {
//         console.log("Odd number:",a);
//     }
// };

// num(21);


// 6.Create a function to find the largest of two numbers.

// function lar(a,b)
// {
//     if(a>b)
//     {
//         console.log("First largest number:",a);
//     }
//     else
//     {
//         console.log("Second largest number:",b);
//     }
// };
// lar(100,20);

// 7.Create a function to calculate student average marks.

// function avg(a,b,c,d,e)
// {
//     val=((a+b+c+d+e)/5);
//     console.log("student average marks:",val);
// };
// avg(75,66,88,63,85);

// 8.Create a function to convert Celsius to Fahrenheit.

// function cel(a)
// {
//     fa=(a*(9/5)+32);
//     console.log("Convert Celsius to Fahrenheit:",fa+"°F")
// };

// cel(1);

// 9.Create a function to calculate factorial.

// function val(a)
// {
//     let sum=1;
//     let i;

//     for (i=1; i<=a; i++)
//     {
//         sum=sum*i;

//     };
//     console.log("factorial numbers:",sum);
// };
// val(5);

// 10.Create a function to check prime numbers.

// function pri(a)
// {
//     let value=1;
//     let i;

//     for(i=2; i<=a; i++)
//     {
//         if(a%i==0)
//         {
//             value=value+1;
//         }
//     };
    
//     if(value==2)
//     {
//         console.log("Prime number:",a);
//     }
//     else
//     {
//         console.log("not a prime number:",a);
//     }
//     console.log(value)
// };

// pri(2);

// 11.Create a function to reverse a string.

// function str(a)
// {
//     let res="";

//     for (let i=a.length - 1; i>=0; i--)
//     {
//         res=res+a[i];
//     };
//     console.log("Reverse a string:",res);
// };
// str("hello");


// 12.Create a function to check palindrome.

// function palindrome(str) {
//     let rev = str.split("").reverse().join("");

//     if (str === rev) {
//         console.log("Palindrome");
//     } else {
//         console.log("Not Palindrome");
//     }
// }

// palindrome("madam");


// 13.Create a function to calculate employee salary with bonus.
// function employeeSalary(salary, bonus) {
//     let total = salary + bonus;

//     console.log("Basic Salary =", salary);
//     console.log("Bonus =", bonus);
//     console.log("Total Salary =", total);
// }

// employeeSalary(25000, 5000);

// 14.Create a function with default parameters.

// function student(name = "Unknown", age = 18) {
//     console.log("Name =", name);
//     console.log("Age =", age);
// }

// student("Prasanth", 22);
// student();

// 15.Create a function using rest parameters to calculate total.
// function total(...numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//     }

//     console.log("Total =", sum);
// }

// total(10, 20, 30, 40);

// 16.Create a callback-based calculator.
// function calculator(a, b, callback) {
//     let result = callback(a, b);

//     console.log("Result =", result);
// }

// function add(x, y) {
//     return x + y;
// }

// calculator(10, 20, add);

// 17.Create a function that returns another function.
// function outer() {

//     function inner() {
//         console.log("This is inner function");
//     }

//     return inner;
// }

// let result = outer();

// result();

// 18.Create a recursive factorial function.
// function factorial(n) {

//     if (n === 1 || n === 0) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// console.log(factorial(5));

// 19.Generate Fibonacci numbers using recursion.

// function fibonacci(n) {

//     if (n <= 1) {
//         return n;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// for (let i = 0; i < 8; i++) {
//     console.log(fibonacci(i));
// }

// 20.Create a recursive function to calculate the sum of digits.
// function sumDigits(n) {

//     if (n === 0) {
//         return 0;
//     }

//     return (n % 10) + sumDigits(Math.floor(n / 10));
// }

// console.log(sumDigits(123));


// 21.Demonstrate global, function and block scope.
// let a = 100;

// function display() {

//     let b = 200;

//     if (true) {
//         let c = 300;

//         console.log("Global =", a);
//         console.log("Function =", b);
//         console.log("Block =", c);
//     }
// }

// display();


// 22.Demonstrate function declaration and function expression hoisting.
// display();

// function display() {
//     console.log("Function Declaration");
// }


// Function Expression:
// show();

// var show = function() {
//     console.log("Function Expression");
// };


// 23.Create an IIFE with parameters.
// (function(name, age) {

//     console.log("Name =", name);
//     console.log("Age =", age);

// })("Prasanth", 22);


// 24.Build a calculator using higher-order functions.
// function calculator(a, b, operation) {
//     return operation(a, b);
// }

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// console.log("Addition =", calculator(10, 5, add));
// console.log("Subtraction =", calculator(10, 5, sub));
// console.log("Multiplication =", calculator(10, 5, mul));
// console.log("Division =", calculator(10, 5, div));



// 25.Build a calculator using higher-order functions.
// function studentDetails(name, totalFee) {

//     console.log("Student Name =", name);
//     console.log("Total Fee =", totalFee);
// }

// function feePayment(totalFee, paidFee) {

//     let balance = totalFee - paidFee;

//     console.log("Paid Fee =", paidFee);
//     console.log("Remaining Fee =", balance);

//     return balance;
// }

// function paymentStatus(balance) {

//     if (balance === 0) {
//         console.log("Fee Status = Fully Paid");
//     } else {
//         console.log("Fee Status = Pending");
//     }
// }



// let name = "Prasanth";
// let totalFee = 50000;
// let paidFee = 30000;

// studentDetails(name, totalFee);

// let balance = feePayment(totalFee, paidFee);

// paymentStatus(balance);
