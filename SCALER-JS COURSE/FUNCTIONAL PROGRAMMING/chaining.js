//Chaining is the functionality in JavaScript where one method's output is passed
//to another method as input in a same line;

let arr = [-94, -34, 45, 6, 23, -77, 98, 234, -456];

let result = arr.filter((num) => {
    return arr[num] > 0;
}).reduce((acc, val) => {
    let updatedsum = acc + val;
    return updatedsum;
}, 0);

console.log(result);