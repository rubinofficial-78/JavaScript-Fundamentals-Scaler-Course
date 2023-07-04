//every() is a higher order function which always returns the boolean value as the result
//It returns true, if evey element in the array should satisfies the condition

let arr = [123, 456, 789, -45678, 245678];
let result = arr.every(function(n){
    return n < 0;
});

console.log(result);