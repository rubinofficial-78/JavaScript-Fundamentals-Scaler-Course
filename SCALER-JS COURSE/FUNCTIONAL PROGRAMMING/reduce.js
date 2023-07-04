//reduce() is a method in javascript which will return a single value as the output

let nums = [1,2,3,4,10];

let result = nums.reduce((acc, value) => {
    let updatedSum = acc + value;
    return updatedSum;
}, 0);

console.log("The sum of values in the num array is "+result);