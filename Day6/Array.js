// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access

// . Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let num = [1, 2, 3, 4, 5]
console.log(num);


// . Task 2: Access the first and last elements of the array and log them to the console.

let num2 = [1, 2, 3, 4, 5]

console.log(num2[0]);
console.log(num2[num2.length]);






// Activity 2: Array Methods (Basic)

// . Task 3: Use the push method to add a new number to the end of the array and log the updated array.

let num3 = [1, 2, 3, 4, 5]

num3.push(6)
console.log(num3);


// . Task 4: Use the pop method to remove the last element from the array and log the updated array.

let num4 = [1, 2, 3, 4, 5]

num4.push()
console.log(num4);


// . Task 5: Use the shift method to remove the first element from the array and log the updated array.

let num5 = [1, 2, 3, 4, 5]

num5.shift()
console.log(num5);


// . Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

let num6 = [5, 3, 2, 1]

num6.unshift(6)
console.log(num6);







// Activity 3: Array Methods (Intermediate)

// . Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let numArr = [1, 2, 3, 4, 5]

let doubleNum = numArr.map( (num) => {
    return num * 2
    
})

console.log(doubleNum);



// . Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let newArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let onlyEven = newArr2.filter( (num) => num % 2 === 0)

console.log(onlyEven);


// . Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let sumArr = [1, 2, 3, 4, 5]

sum = 0;
let result = sumArr.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 );

console.log(result);







// Activity 4: Array Iteration

// . Task 10: Use a for loop to iterate over the array and log each element to the console.

let myArr = [1, 10, 3, 4]

for (let i = 0; i < myArr.length; i++) {
    
    let element = myArr[i]
    console.log(element);
}



// . Task 11: Use the forEach method to iterate over the array and log each element to the console.

let codingLang = ['js', 'python', 'ruby', 'c++', 'c']

codingLang.forEach( (lang) => {
    console.log(lang);
})








// Activity 5: Multi-dimensional Arrays

// . Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let twod = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 6, 7]
]

console.log(twod);


// . Task 13: Access and log a specific element from the two-dimensional array.


console.log(twod[1][2]);