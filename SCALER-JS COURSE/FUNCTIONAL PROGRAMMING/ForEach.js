//forEach() is a higher order function in js, where it will not return anything

const arr = [23, 34, 56, 78];
const squaredArray = arr.forEach(function(n){
    console.log(n*n);
});