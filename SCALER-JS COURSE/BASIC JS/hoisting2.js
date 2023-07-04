//In this hoisting technique example we can store the function definition in a variable and we can call that variable(function) before it is called this results in the output as undefined since variable is printed before it is declared

greet();

var greet = function(){
    console.log('Hello');
}