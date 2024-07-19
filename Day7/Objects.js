// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access

// . Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
    title: "sataya",
    author: 'jayprakash',
    year: 2024
}

// console.log(book);


// . Task 2: Access and log the title and author properties of the book object.

// console.log(`title = ${book.title}, author = ${book.author} `);




// Activity 2: Object Methods

// . Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.intro = function(){
    console.log(`title = ${this.title}, author = ${this.author} `);
}

// console.log(book.intro());


// . Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function(newYear){
    this.year  = newYear;
}

book.updateYear(2025)
// console.log(book);


// Activity 3: Nested Objects

// . Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the
// console.

let library = {
    name: "jay",
    books: [
        {
            title: "mystry of mars",
            author: "Jayprakash",
            year: 2029
        },
        {
            title: "coding with hitesh ",
            author: "Jayprakash",
            year: 2024
        }
    ]

}

// console.log(library);




// . Task 6: Access and log the name of the library and the titles of all the books in the library.

let nameofLib = library.name;
let titles = library.books.map((book) => book.title)

// console.log(`library name is ${nameofLib} and books tiles are ${titles}`);





// Activity 4: The this Keyword

// . Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this
// method.

book.getTitleandYear = function (){
    return `title: ${this.title}  and year: ${this.year}`
}

// console.log(book.getTitleandYear());




// Activity 5: Object Iteration

// . Task 8: Use a for ... in loop to iterate over the properties of the book object and log each property and its value.



// for (const key in book) {
//     console.log(`keys: ${key} and value: ${book[key]}`);
// }



// . Task 9: Use Object.keys and Object. values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));