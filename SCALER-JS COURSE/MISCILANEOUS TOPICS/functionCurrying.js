//Function currying means the concept of invloving and transformin the function with multiple 
//arguments into a sequence of functions, each taking a single argument

// function sum(a, b){
//     return a+b;
// }
// console.log(sum(2,3));

//function currying

let sumCurried = function(a){
    return function(b){
        console.log(a+b);
    }
}

let ans = sumCurried(2);
ans(3);