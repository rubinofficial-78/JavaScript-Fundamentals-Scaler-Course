//Lexical scope - means the inner function will have the access to the outer functions scope too
//this is called as closure


function test(){
    let num = 12;
    function test1(){
        console.log(num);
    }
    return test1();
}

test();
// fun();