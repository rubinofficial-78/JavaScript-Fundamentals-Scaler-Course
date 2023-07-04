let person1 = {
    name : "Rubin",
    age : 20,

    
}
 function printDetails(city){
    console.log(`Hai I am ${this.name} and I am ${this.age}`);
}
let person2 = {
    name : "Akshay",
    age : 22
}

printDetails.call(person2, "Coimbatore");
printDetails.apply(person1,['Hyderabad']);

const fun = printDetails.bind(person1, 'Hyderabad');
fun();


