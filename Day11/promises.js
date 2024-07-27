// Tasks/Activities:
// Activity 1: Understanding Promises

// . Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('New promise is created');
        
    }, 2000)
})



// . Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() .

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {

        let error = true;

        if (error = false) {
            resolve({name: 'jay', age: 19})
        }else{
            reject('ERROR: something went wrong!')
        }
        
        
    }, 2000)
})

promiseTwo
.then((user) => {
    console.log(user);
})
.catch((error) => {
    console.log(error);
})



// Activity 2: Chaining Promises

// . Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });


// Activity 3: Using Async/Await
// . Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

let promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'jay', age: 19})
        
    }, 2000)
})


async function allUsers (){
    
    let response = await promiseFour;
    console.log(response);

}

allUsers()




// . Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

let promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
    
        let error = false;
    
        if (error = false) {
            resolve({name: 'jay', age: 19})
        }else{
            reject('ERROR: something went wrong! [promise five]')
        }
            
            
    }, 1000)
})

async function getAllUser(){
    try {
        let response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

getAllUser()





// Activity 4: Fetching Data from an API

// // . Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://api.github.com/users/Jayprakash65')

.then((response) => response.json())
.then((data) => console.log(data))




// . Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

let data = fetch('https://api.github.com/users/Jayprakash65')

async function allData(){
    let response = await data
    console.log(response);
}

allData()



// Activity 5: Concurrent Promises

// . Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

let promise9 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise 9 resolved')
    }, 1000)
});

let promise10 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise 10 resolved')
    }, 2000)
});

let promise11 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise 11 resolved')
    }, 1000)
});


Promise.all([promise9, promise10, promise11])
.then((value) => console.log(value))




// . Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

let promise12 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise 12 resolved')
    }, 4000)
});

let promise13 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise 13 resolved')
    }, 2000)
});

let promise14 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise 14 resolved')
    }, 1000)
});


// Aasan shabdon mein, Promise.race() ka matlab hai "jo bhi promise pehle complete ho jaye, uska result le lo".

Promise.race([promise12, promise13, promise14])
.then((value) => console.log(value))