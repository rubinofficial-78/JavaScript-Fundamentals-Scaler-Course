//The typeof keyword is used to find out the data type of the variable

let a = 23;
console.log(typeof a);

let b = 'Hello';
console.log(typeof b);

let myobj = {
    name : 'Rubin',
    class : 'IV year',
    age : 20
};
console.log(typeof myobj);

let arr = [1, 2, 3, 4];
console.log(typeof arr);              //You will get object as the result
//So we go to Array.isArray() method