//An Impure function is a function in JavaScript which violates the condition of the Pure function

var a = 12;

function addImPure(x){
    console.log(x+a);
    a++;
}

addImPure(11);
addImPure(11);
addImPure(11);
