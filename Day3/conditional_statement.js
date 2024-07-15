// // Tasks/Activities:
// // Activity 1: If-Else Statements

// // . Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

// let num = 0 ;

// if (num > 0) {
//     console.log("number is positive");
// } else {
//     console.log("number is nagative");
// }



// // . Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

// let age = 20;

// if (age >= 18) {
//     console.log('person is eligible to vote');
// }else{
//     console.log('person is not eligible to vote');

// }





// // Activity 2: Nested If-Else Statements

// // . Task 3: Write a program to find the largest of three numbers using nested if-else statements.

// let a = 10
// let b = 3
// let c = 1

// if (a > b && a > c) {
//     console.log(`the greater number is ${a}`);
// }
// else if (b>a && b>c) {
//     console.log(`the greater number is ${b}`);
// }
// else if(c>a && c>b) {
//     console.log(`the greater number is ${c}`);
// }




// // Activity 3: Switch Case

// // . Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.


// let dayNum = 6;

// switch (dayNum) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tueday");
//         break;
//     case 3:
//         console.log("wedday");
//         break;
//     case 4:
//         console.log("thrusday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;


//     default:
//         console.log("not valid day");
//         break;
// }




// // . Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.


// let score = 90;
// let grade ;

// switch (true) {
//     case (score >= 90):
//         grade = "A";
//         break;
//     case (score >= 80):
//         grade = 'B';
//         break;
//     case (score >= 70):
//         grade = "C";
//         break;
//     case (score >= 60):
//         grade = "D";
//         break;
//     case (score <= 59):
//         grade = "F";
//         break;
    

//     default:
//         break;
// }

// console.log(`The grade is ${grade}`);






// // Activity 4: Conditional (Ternary) Operator
// // . Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

// let number = 22;

// number % 2 === 0 ? console.log("even") : console.log('odd');




// Activity 5: Combining Conditions

// . Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;

if (year % 4 === 0) {
    console.log(`${year} is leap year`);
}
else if(year % 100 === 0) {
    console.log(`${year} is not aleap year`);
    
}
else if(year % 400 === 0) {
    console.log(`${year} is leap year`);
}
else {
    console.log(year + " is not a leap year.");
}