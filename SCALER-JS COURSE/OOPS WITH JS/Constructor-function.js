//A construct function is basically used when you need to handle with large amount of data
//Its acts as template for creating the objects and methods

function createcar(_name, _company, _color){
    this.name = _name;
    this.company = _company;
    this.color = _color;

    //You can also create methods in the constructor function

    this.drive = function() {
        console.log(`I am driving the ${this.company} car and it's color is ${this.color}`);
    }
}

let car1 = new createcar("Creata", "Hundai", "White");

let car2 = new createcar("X4", "BMW", "Dark Blue");

console.log(car1);
console.log(car2);

car1.drive(); 

// console.log(car1.drive());