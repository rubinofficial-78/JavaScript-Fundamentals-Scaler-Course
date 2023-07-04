//Inhetitance is of two types namely
//                  1. Classical Inheritance
//                  2. Prototype Inheritance

//Inheritance means the methods and properties of basec class are used or accessed by the 
//derived class it's mainly for code reusablity

//In this example we will see how we can inherit the methods from base class to the derived class


//Base class
class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    welcome(){
        console.log(`Hello ${this.name}!`);
    }
}

//Derived class

//The super() keyword is used to access the properties of the base class from the derived class
class Teacher extends Person{
    constructor(_name, _age, _qualification){
        super(_name, _age);
        this.qualification = _qualification;
    }

    greet(){
        super.welcome();
    }
}

//Derived Class
class Student extends Person{
    constructor(_name, _age, _cgpa){
        super(_name, _age);
        this.cgpa = _cgpa;
    }
}

let person1 = new Person("Adam", 22);

let teacher1 = new Teacher("Amala", 34, "M.E.,");

let studen1 = new Student("Jack", 19, 8.9);

console.log(person1);
console.log(teacher1);
console.log(studen1);

teacher1.greet();