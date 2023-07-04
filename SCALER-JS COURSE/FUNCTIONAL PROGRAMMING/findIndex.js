//findIndex() is the method in the higher order function, which is used to find out the index of the first element of the array based on a condition

let arr = [123, 345, 567, -898, -900, 4568];

const firstIndex = arr.findIndex(function(n){
    return n < 0;
});

console.log(firstIndex);