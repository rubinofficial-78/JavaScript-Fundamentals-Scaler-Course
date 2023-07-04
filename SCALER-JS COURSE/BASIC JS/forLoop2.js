//Print the squaare of each elements in the array using for loop

var arr = [12, 23, 34, 11, 19];

var a = [];

for(var i = 0 ; i < arr.length ; i++){
    a.push(arr[i]*arr[i]);
}
console.log("The square of each elements in the array are as follows");
console.log(a);