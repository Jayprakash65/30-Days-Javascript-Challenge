// Day 5: Functions
// Tasks/Activities:

// Activity 1: Function Declaration

// . Task 1: Write a function to check if a number is even or odd and log the result to the console.

    let num = 42;
    function checkNum (num){
        if(num % 2 === 0){
            console.log("even");
        }else{
            console.log("odd");
        }
    }

   // console.log(checkNum(num));


// . Task 2: Write a function to calculate the square of a number and return the result.

function SqrNum(num){
    return num * num
}

console.log(SqrNum(8));




// Activity 2: Function Expression

// . Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maxNum (num1, num2){
    if (num1 > num2) {
        console.log(`${num1} is greater`);
    } else {
        console.log(`${num2} is greater`);
    }
    return;
}

maxNum(1, 5)




// . Task 4: Write a function expression to concatenate two strings and return the result.

    function contStr (str1, str2){
        return `${str1} ${str2}`
    }

    let str1 = 'hi'
    let str2 = 'jp'

    console.log(contStr(str1, str2));


// Activity 3: Arrow Functions

// . Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let addTwoNums = (num1, num2) => {
    return num1 + num2
}


// . Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

containCharacter = (str, char) => str.includes(char);

let str = 'jayprakash'
let char = 'z'
let result = containCharacter(str, char)

console.log(`Does the string "${str}" contain the character "${char}"? ${result}`);


// Activity 4: Function Parameters and Default Values

// . Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

let product = (a, b = 5) => a * b;


let result2 = product(2)

console.log(`product  is ${result2}`);   // product is 10



// . Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

let greeting = (name, age = 19) => (
    console.log(`welcome your name is ${name} and age is ${age}`)
)

greeting('jaypraksh')



// Activity 5: Higher-Order Functions

// . Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

let reapeatFunction = (fn, number) => {
    for (let i = 0; i < number; i++) {
        fn();
        
    }
}


const fn = () => console.log('hi');

reapeatFunction(fn, 3)

// . Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies  the second function to the result.

 function highOrder(fun1, fun2, value) {
    
    let result1  = fun1(value)
    let result2 = fun2(result1)
    
    return  result2;
 }


 let firstFun = (value) => (
     value + 2
)

let secFun = (result) => (
     result + 3
)

 let finalResult = highOrder(firstFun, secFun, 5)

 console.log(finalResult);   // 10


