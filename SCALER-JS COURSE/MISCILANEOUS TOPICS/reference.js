let person1 = {
    name : 'Adam',
    age : 23
};

let person2 = person1;
person2.name = 'Steve';
console.log(person1);
console.log(person2);