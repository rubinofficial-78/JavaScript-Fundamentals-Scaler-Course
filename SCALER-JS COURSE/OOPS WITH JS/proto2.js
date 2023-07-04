function Person(_name, _age){
    this.name = _name;
    this.age = _age;
    
}
Person.prototype.getnameandAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`);
}

let person1 = new Person('Ryan', 45);
let person2 = new Person('Max', 34);

console.log(person1);
console.log(person2);


