let person1 = {
    name : 'Adam',
    age : 23,
    address : {
        city : 'Udumalpet',
        pincode : '642201'
    }
};

let person2 = JSON.parse(JSON.stringify(person1));

person2.name = 'Steve';
person2.address.city = 'Pollachi';

console.log(person1);
console.log(person2);