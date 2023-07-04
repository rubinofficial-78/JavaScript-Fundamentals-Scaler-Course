//Classes in JS is introduced in ES6
//Its basically acts like constructor function for creating the multiple objects
//Its is created using the "class" keyword

class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    welcome(){
        console.log(`Hai ${this.name}`);
    }
}

let person1 = new Person('Hari', 22);
let person2 = new Person('Akshay', 23);
let person3 = new Person('Rubin', 20);

console.log(person1);
console.log(person2);
console.log(person3);

person2.welcome();
