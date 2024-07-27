let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log('async task is complete');
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    //console.log('promise consumed');
    
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('asyc task 2');
        resolve()
    })

})
.then(() => {
    console.log('async task 2 resolved');
})




async function allusers (){
    try {
       const respose = await fetch('https://api.github.com/users/Jayprakash65')
       const data = await respose.json()
       console.log(data.login);
    } catch (error) {
        console.log('E: error', error);
    }
}

allusers()