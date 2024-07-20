// Day 8: ES6+ Features

// Tasks/Activities:
// Activity 1: Template Literals

// . Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = 'jaypraksh'
let age = 19

let person = `Hello, my name is ${name} and I am ${age} years old.`
console.log(person);

// . Task 2: Create a multi-line string using template literals and log it to the console.
let multiLineStr = `This is multiline string.
This is 2st line.
This is 3rd line.

`
console.log(multiLineStr);


// Activity 2: Destructuring

// . Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let numbers = [1, 2, 3 ,4];

let [a, b] = numbers;

console.log(a);
console.log(b);




// . Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: 'how to become coding expert',
    author: 'jaypraksh'
}

let {title, author} = book

console.log(title);
console.log(author);


// Activity 3: Spread and Rest Operators

// . Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to
// the console.

let existngArray = [1,2,3,4]
let addtionalArray = [5, 6, 7, 8, 9]

let newArray = [...existngArray, ...addtionalArray]
console.log(newArray);
 


// . Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

let sumAll = function(...numbers){
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));



// Activity 4: Default Parameters

// . Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of
// calling this function with and without the second parameter.

let multiply = function (num1, num2 = 2){
    return num1 * num2
}

console.log(multiply(4, 5));
console.log(multiply(5));



// Activity 5: Enhanced Object Literals

// . Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let name2 = 'jay';
const age2  = 19;

let person2 = {
    name2,
    age2
}


// . Task 9: Create an object with computed property names based on variables and log the object to the console.

// note: To use computed values for property names, you use square brackets and pass the expression.

// Variables to be used as property names
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

// Creating an object with computed property names
const person5 = {
  [propName1]: 'priya',
  [propName2]: 'Dey',
  [propName3]: 30
};

// Logging the object to the console
console.log(person5);

// Output:
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// }