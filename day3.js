// 1. Check whether a number is positive, negative or zero.

const { mark } = require("framer-motion/client");
const { matchPath } = require("react-router-dom");

// let number=20;

// if(number>0)
// {
//     console.log("this number is a positive number",number);
// }
// else if(number<0)
// {
//     console.log("this number is a negative number",number);
// }
// else
// {
//     console.log("this number is a zero number",number);
// }


// 2.Find the largest of two numbers.

// let value1=200;
// let value2=30;

// if(value1>value2)
// {
//     console.log("Value1 is a largest number",value1);
// }
// else
// {
//     console.log("value2 is a largest number",value2);
// }


//3. Find the largest of three numbers.

// let a=200;
// let b=300;
// let c=40;

// if(a>b && a>c)
// {
//     console.log("First value is a largest number",a);
// }
// else if(b>a && b>c)
// {
//     console.log("Second value is a largest number",b);
// }
// else if(c>a && c>b)
// {
//     console.log("Third value is a largest number");
// }
// else
// {
//     console.log("invaild numbers")
// }

// 4. Check whether a year is a leap year.

// let year=200;

// if(year%4==0)
// {
//     console.log("this a leap year");
// }
// else if(year%400==0)
// {
//     console.log("this a leap year");
// }
// else if(year%100==0)
// {
//     console.log("this a not leap year");
// }
// else
// {
//     console.log("this not leap year");
// }


// 5. Check whether a student passed or failed.

// let marks=40;

// if (marks>=50 && marks<100)
// {
//     console.log("This student passed",marks);
// }
// else if(marks>0 && marks<50)
// {
//     console.log("This student was failed");
// }
// else
// {
//     console.log("Invaild marks");
// }

// 6. Print numbers from 1 to 100.

// let num=100;
// let i;

// for (i=1; i<=num; i++)
// {
//     console.log("values=",i);
// };


// 7.Print even numbers from 1 to 50.

// let num=50;
// let i;

// for (i=1; i<=num; i++)
// {
//     if(i%2==0)
//     {
//         console.log("Even values=",i);
//     };
// };

// 8.Calculate the sum of numbers from 1 to 100.

// let num=100;
// let sum=0;
// let i;

// for (i=1; i<=num; i++)
// {
//     sum+=i;
// };
// console.log("sum of all number=",sum);


// 9.Print the multiplication table of any number.
// let num=2;
// let i;
// for (i=0; i<=20; i++)
// {
//     mult=num*i;
//     console.log("Multiplication tables:"+num,"*",i,"=",mult);
// };

// 10.Find the factorial of a number.

// let fact=5;
// let sum=1;
// let i;

// for (i=1; i<=fact; i++)
// {
//     sum=sum*i;
// };
// console.log(fact,"Factorial=",sum);

// 11.Reverse a number.
// let num=123;
// let temp=num;
// let sum=0;

// while(num>0)
// {
//     rem=num%10;
//     sum=sum*10+rem;
//     num=Math.floor(num/10);    
// };
// console.log(temp,"Reverse a number.",sum)

// 12.Count the digits in a number.
// let value1=String(123456);
// console.log(value1.length);

// 13.Find the sum of digits
// let value=12345;
// let sum=0;

// while(value>0)
// {
//     rem=value%10;
//     sum=sum+rem;
//     value=Math.floor(value/10);
// };
// console.log(sum);

// 14.Check whether a number is prime.

// let num=5;
// let sum=0;

// for (let i=1; i<=10; i++)
// {
//     if(num%i==0)
//     {
//         sum=sum+1;
//         console.log(sum)
//     };
// };

// if(sum<=2)
// {
//     console.log("prime number",num);
// }
// else
// {
//     console.log("not a prime number",num);
// }

// 15.Print all prime numbers between 1 and 100.

let num1=10;

for (let i=2; i<=num1; i++)
{
    let value=0;

    for(let j=1; j<=i; j++)
    {
        if(i%j == 0)
        {
            value=value+1;
            
        }
    };
    if(value == 2)
    {
        console.log(i);
    }
    
};

