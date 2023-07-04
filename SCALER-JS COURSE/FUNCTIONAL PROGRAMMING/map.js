//Map() is a higher order functions method where it will tarverse thorough the every element in the array and do the certain operations

const arr = [10, 20, 30, 40];

const squaredArray = arr.map(function(n){
    return n*n;
});

console.log(squaredArray);
