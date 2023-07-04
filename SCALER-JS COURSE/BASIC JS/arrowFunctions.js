//Arrow functions are the special functions in java which is used to do the specific task

//It was introduced in the ES6(ECMA'S SCRIPT 6), the main difference seen from a normal function and an arrow function is we dont specify the function keyword in the arrow function instead we use the "fat arrow" => symbol in arrow function

//Lets see an example that demonstrates the normal function and arrow function

let test1 = function(){     //Normal function
    console.log('Hey!');
}

let test2 = function(a,b){  //Normal function
    console.log(a+b);
}

test1();
test2(3,4);

let test3 = () => {         //Arrow function
    console.log('Hello All!');
}

let test4 = a => {          //Arrow function
    console.log(a/2);
}

let test5 = (a,b) => {     //Arrow function
    console.log(a*b);
}

test3();
test4(4);
test5(5,8);


