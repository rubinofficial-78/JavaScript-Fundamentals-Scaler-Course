

//this - window object
console.log(this);

//object-> function - aqtual object
let myObj1 = {
    name : "Rubin",
    age : 20,
    fun1 : function(){
        console.log(this);
    }
}

myObj1.fun1();

//function - window object
let fun2 = function(){
    console.log(this);
}

fun2();

//object->function->function - window object
let myObj2 = {
    Company : "Eunimart",
    place : "Hyderabad",
    fun3 : function() {
        function fun4() {
            console.log(this);
        }
        fun4();
    }
}

myObj2.fun3();