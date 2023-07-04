//Encapsulation is the process of binding the methods and the properties inside the class
//and no letting them to access to the outside world

class Person{
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }


}

let person1 = new Person('Rubin', 21);
this.name = "Kumar"; //this cannot be done since the name property is encapsulated in the class
console.log(person1);