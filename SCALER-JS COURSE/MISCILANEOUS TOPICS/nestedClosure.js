function greet(){
    let name = 'Rubin';
    function greet1(){
        console.log('My name is '+name);
        let age = 20;
        function greet2(){
            console.log('My name is '+name+" and my age is "+age);
        }
        return greet2;
    }
    return greet1;
}

let g1 = greet();
let g2 = g1();
g2()

