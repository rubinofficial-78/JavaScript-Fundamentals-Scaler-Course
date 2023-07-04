//A higher order function is a type of function where we will return a function or in simpler words, we recieve a function in higer order function.

//Now let us see why we switch to higer order function

//Task:

//You are given an array, you need to find the sqaure of each elements of the array and store it in the another array!

let arr = [10, 2, 3, 4, 5];
let sqauaredArray = [];

for(let index = 0 ; index < arr.length ; index++){
    sqauaredArray.push(arr[index]*arr[index]);
}

console.log(sqauaredArray);

//Now we have the problem with the above code even though the implementation is correct because
//since functional programming conceot doesn't look on conditional/ looping statemnts, so we go to HIGHER ORDER FUNCTIONS

//The higher order functions we know so far are:

//map()
//forEach()
