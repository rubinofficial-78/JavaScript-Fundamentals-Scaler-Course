//In this program we will see what are the problems that are with var keyword

//    1)The first problem is the var keyword is not blocked scope it is functional scope

//Blocked scope - you can able to access the variable only within that block only, but javascript's var keyword is not blocked scope
//If the variable is not blocked scoped then there will be some security issues
//Example

var a = 234;

if(a === 234){
    var b = 34;
    console.log(b);
}
console.log(b);

//The var keyword is not blockd scoped here we should not use the var(b) outside the block, which results in the some of the security isues
