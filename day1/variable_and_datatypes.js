// Day 1: Variables and Data Types
// Tasks/Activities:

//Activity 1: Variable Declaration

    //. Task 1: Declare a variable using var , assign it a number, and log the value to the console.

    var num = 10
    console.log(num);


    //. Task 2: Declare a variable using let, assign it a string, and log the value to the console.

    let str = "Ram Ram ji"
    console.log(str);




//Activity 2: Constant Declaration

    //. Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

    const boolValue = true
    console.log(boolValue);




//Activity 3: Data Types

    //. Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeofoperator.

    let num2 = 1
    let str2 = 'JAYPRAKASH YADAV'
    let bool = false
    let obj = {
        name:"jay",
        age: 19,
        educator: false
    }
    let arr = ['jay', 2, true]

    console.log(typeof(num));
    console.log(typeof(str2));
    console.log(typeof(bool));
    console.log(typeof(obj));
    console.log(typeof(arr));



//Activity 4: Reassigning Variables

    //. Task 5: Declare a variable using 1et, assign it an initial value, reassign a new value, and log both values to the console.

    let num3 = 3
    num3 = 5 

    console.log(num3);
    



//Activity 5: Understanding const

    //. Task 6: Try reassigning a variable declared with const and observe the error.

    const initValue = 10
    initValue = 12

    console.log(initValue);  //// TypeError: Assignment to constant variable.






//Feature Request:

    //1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of eachvariable to the console.

    let number = 5
    let string = "namaste"
    let boolean = true
    let object = {name: 'Jayprakash', age: 19}
    let array = ['hi', 'hullu']
    

    let data = [
        {value: number, type: typeof number },
        {value: string, type: typeof string },
        {value: boolean, type: typeof boolean },
        {value: object, type: typeof object },
        {value: array, type: typeof array },
        
    ]
    
    console.table(data);



    //2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes toreassignment.

    let initialLet = "initial Let"
    // console.log(initialLet);    // OUTPUT: initial Let      (before)

    initialLet = "changed"
    console.log(initialLet);        // OUTPUT: changed          (after)
    


      
    const initialConst = "initial Const"  
    // console.log(initialConst);               // OUTPUT: initial Const     (before)

    initialConst = "changed"       
    console.log(initialConst);                  // OUTPUT: TypeError: Assignment to constant variable.




