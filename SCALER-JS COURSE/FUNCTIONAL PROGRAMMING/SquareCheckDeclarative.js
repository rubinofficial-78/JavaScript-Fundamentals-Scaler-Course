//Program to check, whether the entered number's sqaure is even or not
//Declarative way of programming
//We dont go with the line by line implementation

function check(num){
    let val = num*num;
    if(val%2 == 0){
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}

check(41);