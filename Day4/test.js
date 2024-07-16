// for loop
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
    
}

console.log(`sum = ${sum}`);



// while loop
let i = 1;
while (i <= 10) {
    console.log(`jp`);
    i++;
}


// do while loop
let b = 1;
do{
    console.log('jay');
    b++;
}while (b <= 10);


// for of loop (string and array )

let str = 'jayprakash'
for (const i of str) {
    console.log(i);
}



// for in loop

let student = {
    namee: 'bilu',
    course: 'bca',
    isSelected: true

}

for (const key in student) {
    console.log(key, student[key]);
}


// print all the even numbers from 0 to 100

let sum2  = 0;

for (let num = 0; num <= 100; num++) {
   if (num % 2 === 0) {
    console.log(num);
   }
    
}



let gameNum = 10;
let userNum = prompt('enter the guess no.: ')

while(userNum != gameNum ){
    userNum = prompt('you gues it wrong enter the again')
}

console.log('congts you guess the corrrect number');
