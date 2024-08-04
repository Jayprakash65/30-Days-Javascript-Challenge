// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch

// . Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

async function getAllUser(){
    try {
        let response = await fetch('url')
        let data = await response.json()
        console.log(data);
    } catch (error) {
        console.error('something is wrong ');
    }
}

getAllUser()





// . Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function devideNum (numarator, denominator){
    try {
        if (denominator === 0) {
            throw error
        }

        let result = numarator / denominator;
        return result
        
    } catch (error) {
        console.error('ERROR: denominator is zero' );
    }
}

console.log(devideNum(20, 0));




// // Activity 2: Finally Block

// // . Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

async function getAllUser(){
    try {
       let response = await fetch('https://api.github.com/users/Jayprakash65')

        let data = await response.json()
        return console.log(data.login);;
    } catch (error) {
        console.log(error);

    } finally{
        console.log('getAllUser function is excuted sucessfully');
    }
}

getAllUser()




// // Activity 3: Custom Error Objects

// . Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class customError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError'
    }
}


try {
    function doSomethingRisky() {
        // Simulate an error condition
        throw new customError('Something went wrong!!!!!');
    }
} catch (error) {
    if(error instanceof customError){
        console.error(`Custom Error: ${error.message}`)
    }
}

doSomethingRisky()


// . Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class validationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'validationError'
    }
}


function validationUserInput(input){
    if(typeof input !== 'string' || input.trim() === ''){
        throw  new validationError(" Input is string or empty")
    }
}

try {
    validationUserInput('')
    
} catch (error) {
    if (error instanceof validationError) {
        console.error(`ERROR: ${error.message}`)
    }
}

