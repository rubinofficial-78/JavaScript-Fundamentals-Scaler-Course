//Hoisting is a technique in javascript where you can use the variables and the functions before the definition itself

console.log(a);
calc(3,4);

var a = 'hello';

function calc(a,b){
    console.log(a*b);
}
