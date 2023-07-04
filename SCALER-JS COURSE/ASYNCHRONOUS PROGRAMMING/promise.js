//Promise are basically having an commitment and executing it

//It has mainly 4 states
//          1. pending
//          2. fullfilled
//          3. rejected
//          4. setteled

//how to create promise

let myPromise = new Promise((resolve, reject) => {
    const a = 23;
    const b = 24;
    setTimeout(() => {
        if(a === b){
            resolve('They are equal');
        }else{
            reject('They are not equal');
        }
    }, 2000);
});

// console.log(myPromise);

//If promise is fullfilled
//To execute the promise you can use then and catch method

myPromise.then((result) => {
    console.log(result);
});

myPromise.catch((err) => {
    console.log(err);
});
