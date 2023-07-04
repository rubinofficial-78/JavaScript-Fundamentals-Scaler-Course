//Objects in javascript are unordered collection of key value pairs. Each key value pair is called as a property
//The keys are of String, but the values can be of any data type such as String, numbers, or even an array or a function


var person = {
    firstName : 'Rubin',
    secondName : 'Kumar',
    age : 21,
    ownsCar : false
};

//printing all the objects value from the objects
console.log(person);

//printing the particular value of the object using the methods
// 1. Dot method
// 2. Bracket method

console.log(person.age);

console.log(person['firstName']);

//Creating an another object with arrays, numbers, strings as a properties in it


console.log("The object 2");

var person2 = {
    name : 'pavithra',
    age : 20,
    friends : ['rubin','prasanna', 'rashika', 'ooviya'],
    address : {
        city : {
            place : 'coimbatore',
            pincode : 642203
        },
        state : 'TamilNadu',
        nationality : 'Indian'
    }
}

//printing the pincode of person2
console.log(person2.address.city.pincode);

//updating the person2's age
person2.age = 21;

//adding the property to the object person2

person2.ownsCar = true;

//deleting the particular property from the object
delete person2.friends;

//display all the properties from the object person2

console.log(person2);