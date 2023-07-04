let arr = ['Pavithra', 'ooviya', 'Rashika','Praveen', 'Prasanth','Prasanna','Naveen'];
//If we need to access the elements in the array we usually do it by using the index position

let val1 = arr[0];
let val2 = arr[1];

console.log(val1);
console.log(val2);

//In the above array we can do the destruction by below technique

let [a,b,c,d,e,f,g,h] = arr;

console.log(a);
console.log(d);
console.log(h);